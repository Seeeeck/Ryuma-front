<template>
  <div class="container">

    <vue-recaptcha
      ref="recaptcha"
      @verify="onVerify"
      sitekey="6Ld9VBQbAAAAADeagY_xkP-SuCqnzaeLyNdZvc0T"
      @expired="onExpired"
    ></vue-recaptcha>
    <el-button @click="handleGoogleLogin">Login with Google</el-button>

  </div>
</template>
<script>
import cookie from "js-cookie";

import { googleLogin } from "@/api/googleApi";
import vueRecaptcha from "vue-recaptcha";
export default {
  layout: "sign",
  data() {
    return {
      robot: true,
    };
  },
  head() {
    return {
      script: [
        {
          src: "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",
          async: true,
          defer: true,
        },
      ],
    };
  },
  methods: {
    submitLogin() {
      if (!this.user.robot) {
        this.$refs["userForm"].validate((valid) => {
          if (valid) {
            login(this.user)
              .then((response) => {
                if (response.data.success) {
                  //把token存在cookie中、也可以放在localStorage中
                  cookie.set("guli_token", response.data.data.token, {
                    expires: 1,
                    domain: "localhost",
                  });
                  //登录成功根据token获取用户信息
                  getLoginInfo().then((response) => {
                    //将用户信息记录cookie
                    cookie.set("guli_user", response.data.data.userInfo, {
                      expires: 1,
                      domain: "localhost",
                    });
                    //跳转页面
                    window.location.href = "/";
                  });
                }
              })
              .catch((error) => {
                this.$message({
                  type: "error",
                  message: error.data.message,
                });
              });
          }
        });
      } else {
        this.$message({
          type: "info",
          message: "Please check the captcha",
        });
      }
    },

    async handleGoogleLogin() {
      try {
        const googleUser = await this.$gAuth.signIn();
        // console.log(googleUser);
        // console.log("getId", googleUser.getId());
        // console.log("getBasicProfile", googleUser.getBasicProfile());
        console.log("getAuthResponse", googleUser.getAuthResponse());
        // console.log(
        //   "getAuthResponse",
        //   this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
        // );
        console.log(googleUser.getAuthResponse().id_token);
        if (!googleUser) {
          return null;
        }
        googleLogin(googleUser.getAuthResponse().id_token).then((res) => {
          console.log(res);
        });
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    onVerify(response) {
      if (response) {
        this.robot = false;
      }
    },
    onExpired() {
      this.robot = true;
    },
  },
  components: { vueRecaptcha },
};
</script>



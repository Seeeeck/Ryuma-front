<template>
  <div class="container">
    <!--20 新規登録　Googleアカウントで？メールで？-->
<br><br>
    <el-button type="primary" @click="handleGoogleLogin">Googleアカウントでサインイン</el-button>
<br><br>
    <el-button type="success"><nuxt-link to="/register/email" class="mail">メールアドレスで登録</nuxt-link></el-button>
  </div>
</template>
<script>
import cookie from "js-cookie";
import { getLoginInfo } from "@/api/userApi";
import { googleLogin } from "@/api/googleApi";
import vueRecaptcha from "vue-recaptcha";

export default {
  data () {
    return {
      name:'',
      password:'',
    }
  },
  head(){
    return {
      title: '新規登録'
      }
  },
  methods: {
        submitLogin() {
      if (!this.user.robot) {
        this.$refs["userForm"].validate((valid) => {
          if (valid) {
            login(this.user)
              .then((response) => {
                if (response.data.success) {
                  //tokenをcookieに入れる
                  cookie.set("ryus_token", response.data.data.token, {
                    expires: 1,
                    domain: "localhost",
                  });
                  //tokenでユーザ情報をGet
                  getLoginInfo().then((response) => {
                    //ユーザ情報をcookieに入れる
                    cookie.set("ryus_user", response.data.data.userInfo, {
                      expires: 1,
                      domain: "localhost",
                    });
                    //jump to homepage
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
        if (googleUser) {
          googleLogin(googleUser.getAuthResponse().id_token).then((response) => {
            cookie.set("ryus_token", response.data.token, {
              expires: 1,
              domain: "localhost",
            });
            //tokenでユーザ情報をGet
            getLoginInfo().then((response) => {
              //ユーザ情報をcookieに入れる
              cookie.set("ryus_user", response.data.userInfo, {
                expires: 1,
                domain: "localhost",
              });
              //jump to homepage
              window.location.href = "/";
            });
          });
        }
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
    fetchData() {
      let userStr = cookie.get("ryus_user");
      if (userStr) {
        this.loginInfo = JSON.parse(userStr);
      }
    },
    handleLogout() {
      cookie.remove("ryus_token");
      cookie.remove("ryus_user");
      window.location.href = "/";
    },
  components: { vueRecaptcha },
  },
  created() {
    
  },
}
</script>

<style scoped>

.mail{
  color: white;
  text-decoration:none;/*アンダーラインなし */
}
</style>
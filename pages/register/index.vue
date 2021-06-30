<template>
  <div class="register-container">
    20
    <el-card class="register-card" style="text-align: center;">
      <div class="registration-title">新規会員登録</div>
      <div class="btn-wrapper">
        <el-button type="success" style="margin-bottom: 20px; text-align: center;"><nuxt-link to="/register/email" class="login">メールアドレスで登録する</nuxt-link></el-button>
        <el-button @click="handleGoogleLogin" type="success" style="">Googleで登録する</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
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
    
  },
  created() {
    
  },
}
</script>

<style scoped>

  .register-card {
    max-width: 500px;
    margin: 0 auto;
  }

  .registration-title {
    font-size: 32px;
    text-align: center;
    font-weight: 800;
  }

  .login {
    color: white;
    text-decoration: none;
  }

  .btn-wrapper {
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 20px;
  }

</style>
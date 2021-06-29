<template>
  <div class="container">
    1　ホームページ
    <a href="/login">to login page</a>
    <div v-if="loginInfo">
    </div>
  </div>
</template>

<script>
import cookie from "js-cookie";
export default {
  data(){
    return{
      loginInfo: '',
    }
  },
  mounted(){
    this.fetchData();
  },
  methods: {
    fetchData() {
      let userStr = cookie.get("ryus_user");
      if (userStr) {
        this.loginInfo = JSON.parse(userStr);
      }
    },
  },
}
</script>

<style>
</style>

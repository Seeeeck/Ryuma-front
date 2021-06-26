<template>
  <div class="container">
    1　ホームページ
    <p>ここはホームページです！</p>
    {{loginInfo}}
    
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
  created(){
    this.fetchData();
  },
  head(){
    return {
      title: 'homeページ',
      }
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

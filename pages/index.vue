<template>
  <div class="container">
  <br>
    <el-button type="primary" icon="el-icon-search">Search</el-button>
      <br>
    <div style="text-align: center;">
    1　ホームページ
    <p>ここはホームページです！</p>
     <el-button :plain="true" @click="open">商品詳細</el-button>
    </div>
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
    open(){
      this.$message({
        showClose: true,
        message:'商品詳細を見るためにはログインしてください．'
      });
    }
  },
}

</script>

<style>
</style>

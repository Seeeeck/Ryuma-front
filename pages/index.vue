<template>
  <div class="container">
    <el-button @click="getUser2">ToGetUser2</el-button>
    <el-button @click="saveUser">saveUser</el-button>
    <el-button @click="deleteUser4">deleteUser4</el-button>
      {{user}}
      <hr>
      <a href="/test">To test page</a>
      <hr>
      <ul>
        <li v-for="user in userList" :key="user.id">
          name: {{user.name}}, id: {{user.id}}
        </li>
      </ul>
  </div>
</template>

<script>
import { listUser,getUser,saveUser,deleteUser } from "@/api/testApi"

export default {
  data(){
    return{
      userList: [],
      user: {},
    }
  },
  created(){
    this.fetchData();
  },
  methods: {
    fetchData(){
      listUser().then(response => {
        console.log(response)
        this.userList = response.data;
      }).catch(err => {
        console.log("a" + err);
      })
    },
    getUser2(){
      getUser(2).then(response => {
        console.log(response)
        this.user = response.data;
      }).catch(error => {
        console.log(error)
      })
    },
    saveUser(){
      saveUser({name: "aaaaaaa"}).then(response => {
        this.fetchData();
      })
    },
    deleteUser4(){
      deleteUser(4).then(response => {
        this.fetchData();
      })
    }
  },
}
</script>

<style>
</style>

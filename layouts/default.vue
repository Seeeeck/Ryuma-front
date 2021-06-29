<template>
  <div>
     <el-container>
    <el-header >Header</el-header>
    <el-main><Nuxt/></el-main>
    <el-footer>Footer</el-footer>
  </el-container>
  </div>
</template>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    position: absolute;
    left: 0;
    right: 0;
  }
  .el-header {
    top: 0;
  }
  .el-footer {
    bottom: 0;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    bottom: 60px;
  }
</style>

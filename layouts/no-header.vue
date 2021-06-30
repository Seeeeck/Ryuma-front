<template>
  <div>
     <nuxt />
     <el-button type="success"><nuxt-link to ="/" class="return-button">Topへ戻る．</nuxt-link></el-button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.return-button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    color: white;
    text-decoration:none;/*アンダーラインなし */
}
</style>
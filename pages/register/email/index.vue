<template>
  <div class="container">
    <p>メールアドレスで登録する．</p>
    <el-steps :active="1">
      <el-step title="Step 1" description="情報入力"></el-step>
      <el-step title="Step 2" description="認証"></el-step>
      <el-step title="Step 3" description="登録完了！"></el-step>
    </el-steps> 
    <p>ニックネーム</p>
    <input>
    
    <p>パスワード</p>
    <el-input placeholder="パスワードを入力してください" v-model="input" show-password></el-input>
    
    <p>メールアドレス</p>
    <input>
<br><br><br>
    <el-button type="primary">確認コードを送信</el-button>
<br><br><br>
      <el-steps :active="2">
        <el-step title="Step 1" description="情報入力"></el-step>
        <el-step title="Step 2" description="認証"></el-step>
        <el-step title="Step 3" description="登録完了！"></el-step>
    </el-steps>
<br>
      <p>
        確認コードを入力
      </p>
      <input>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  head(){
    return {
      title: 'メールでサインアップ'
      }
  },
  methods: {
    
  },
  created() {
    
  },
}
</script>
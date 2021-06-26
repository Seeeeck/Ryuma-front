<template>
  <div>
    <header >
      Ryuma!
        <el-button type="primary"><nuxt-link to="/login" class="login">　ログイン　</nuxt-link></el-button>
        <el-button type="primary"><nuxt-link to="/login" class="login">サインアップ</nuxt-link></el-button>
      
    </header>
    
    <nuxt />

    <footer>
      <ul class="footer-menu">
       <li>  <a href="http://localhost:3000/about_us" class="footer_link"> <span class="ryuma"> Ryuma! </span>について </a> ｜</li>
       <li>  <a href="http://localhost:3000/privacy" class="footer_link">プライバシーと利用規約 </a> ｜</li>
       <li>  <a href="http://localhost:3000/question" class="footer_link">お問い合わせ </a> ｜</li>
      </ul>
      <p>© SUNS</p>
    </footer>
  </div>
</template>

<style scoped>
footer {
  background-color: #174a5c;
  color: white;
  text-align: center;
  height: 100px;
  position: absolute;
  width: 100%;
  bottom: 0
}

ul.footer-menu li {
  display: inline;
}

header {
  background-color:rgb(199, 243, 243);
  color:green;
  text-align: left;
  
  font-size: 50px;
  
  font-family: 'Caveat', cursive;
}

.about_ryuma{
  color: aqua;
  font-size: 10px;
  text-align:left;
}

.terms{
  color: aqua;
  font-size: 10px;
  text-align: left;
  margin-right: 400px;
}

.footer_link{
  color:turquoise;
}

.ryuma{
 font-family: 'Caveat', cursive; 
}


.login{
  color: white;
  text-decoration:none;/*アンダーラインなし */
  
}

</style>

<!--marginは要素の周りにスペースを入れる．他の要素がどっかに飛んでいく．．危険，，6/25-->
<!--paddingは要素の中にスペースを入れる．-->

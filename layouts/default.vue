<template>
  <div>
    <header>
      Ryuma!
      <div class="login">
        <ui>
          <li> <el-button type="primary"><router-link to="/login">　ログイン　</router-link></el-button></li>
          <li> <el-button type="primary"><router-link to="/login">サインアップ</router-link></el-button></li>
        </ui>
      </div>
    </header>
    
    

    <footer>
      <ul class="footer-menu">
      <li>  <a href="http://localhost:3000/about_us"> <span class="ryuma"> Ryuma! </span>について </a> ｜</li>
      <li>  <a href="http://localhost:3000/privacy">プライバシーと利用規約 </a> ｜</li>
      <li>  <a href="http://localhost:3000/question">お問い合わせ </a> ｜</li>
      <p>© SUNS</p>
    </ul>

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
  height: 100px;
  font-size: 50px;
  margin-bottom: 20px;
  font-family: 'Caveat', cursive;
  position: relative;
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

a{
  color:turquoise;
}

.ryuma{
 font-family: 'Caveat', cursive; 
}

.login{
  color: white;
  text-decoration:none;/*アンダーラインなし */
  float: right;
}

li{
  list-style:none;/* 箇条書きの点なし*/
  padding:0px;
  margin: 0px;
  display: inline-block;
}

</style>

<!--marginは要素の周りにスペースを入れる．他の要素がどっかに飛んでいく．．危険，，6/25-->
<!--paddingは要素の中にスペースを入れる．-->


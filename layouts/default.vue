<template>
  <div>
    <header>Ryuma!</header>
    <Nuxt />
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
</style>

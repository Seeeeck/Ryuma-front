<template>
  <div class="container">
    <div id="message">{{message}}</div>
  </div>
</template>
<script>
import cookie from "js-cookie";
export default {
  data() {
    return {
      websocket: null,
      message: "",
    };
  },
  methods: {
    initWebSocket() {
      //判断当前浏览器是否支持WebSocket
      var token = "Bearer " + cookie.get('ryus_token');
      //如果支持WebSocket，发起WebSocket连接
      this.websocket = new WebSocket("ws://localhost:9002/chat/connect/"+this.$route.params.id+"/"+token);
      //连接发生错误的回调方法
      this.websocket.onerror = (error) => {
        console.log("error");
        console.log(error);
        this.message = "error";
      };

      //连接成功建立的回调方法
      this.websocket.onopen = (event) => {
        console.log("open");
        console.log(event);
        this.message = "open";
      };

      //接收到消息的回调方法
      this.websocket.onmessage = (event) => {
        console.log("message");
        console.log(event);
        this.message = event.data;
      };

      //连接关闭的回调方法
      this.websocket.onclose = (event) => {
        console.log("close");
        console.log(event);
        this.message = "close";
      };
    },
    closeWebSocket(){
      this.websocket.close();
    }
  },
  mounted() {
    this.initWebSocket();
  },
  destroyed() {
    this.closeWebSocket();
  },
};
</script>
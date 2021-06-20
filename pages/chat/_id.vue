<template>
  <div class="container">
    <div id="message">{{message}}</div>
  </div>
</template>
<script>
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
      
      //如果支持WebSocket，发起WebSocket连接
      this.websocket = new WebSocket("ws://localhost:9002/chat/connect/"+this.$route.params.id);
      //连接发生错误的回调方法
      this.websocket.onerror = () => {
        this.message = "error";
      };

      //连接成功建立的回调方法
      this.websocket.onopen = (event) => {
        console.log(event);
        this.message = "open";
      };

      //接收到消息的回调方法
      this.websocket.onmessage = (event) => {
        this.message = event.data;
      };

      //连接关闭的回调方法
      this.websocket.onclose = () => {
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
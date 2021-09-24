import Vue from 'vue';

export default {
  install() {
    let ws = new WebSocket(
      process.env.VUE_APP_API_URL.replace(/https/gi, 'wss') + /ws/,
    );

    Vue.prototype.$webSocketsConnect = () => {
      ws = new WebSocket(
        process.env.VUE_APP_API_URL.replace(/https/gi, 'wss') + /ws/,
      );

      ws.onerror = (error) => {
        console.error(error);
        ws.close();
      };
    };

    Vue.prototype.$webSocketsDisconnect = () => {
      ws.close();
    };

    Vue.prototype.$webSocketsSend = (data) => {
      ws.onopen = () => {
        ws.send(JSON.stringify(data));
      };
    };

    Vue.prototype.$webSocketMessage = (action) => {
      ws.onmessage = (event) => {
        action(JSON.parse(event.data).data);
      };
    };
  },
};

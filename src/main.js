import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)  // createApp = Root vue 생성
.use(router)    // use = vue가 사용하는 보조 기능 추가
.mount('#app')  // mount = DOM과 연결되는 코드 (mount가 없으면 화면과 연결되는 부분이 없기 때문에 화면이 안나옴)

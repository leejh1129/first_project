<template>
  <nav>
  <!-- http = 절대경로 http가 없으면 vue안에서만 돔
    http가없는 상대경로는 vue안에서만 돌기때문에 없는 경로이면 server에 도달하지 못해서 404가 뜨지않음-->
    <a href="http://www.naver.com">네이버</a> |
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- router방식으로 등록하는 방식 -->
    <router-link to="/dataBinding">DataBinding</router-link> |
    <!-- path가 길경우 name속성으로 불러오는 방법 -->
    <router-link v-bind:to="{ name : 'listBind' }">ListBinding</router-link> |
    <router-link :to="{ path : '/ifBinding' }">IfBinding</router-link> | <!-- v-bind = : 로 생략가능 -->
    <router-link to="/OnEvent">OnEvent</router-link> |
    <router-link to="/comWatch">ComputedWatch</router-link> |
  </nav>
  <h1>모든 페이지에 출력</h1>
  <router-view/>
  <hr>
  <hr>
  <DataBinding/><!-- 카멜 표기법-->
  <!--<data-binding></data-binding> 위 태그랑 같은 방식(케밥 표기법 - )-->
</template>

<script>
// 1) 자식 컴포넌트로 등록 => 특정 페이지의 조각을 구성
import DataBinding from './views/DataBinding.vue';

export default{
  components : {
    //"data-binding" : DataBinding 아래코드 실제 등록되는 형식
    DataBinding
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

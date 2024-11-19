<!-- views/IfBinding.vue -->
 <template>
  <div>
    <!-- if디렉티브 안에 관련없는 태그가 들어가면 조건문 깨짐 -->
    <input type="number" v-model="grade">
    <p v-if="grade >= 90">성적 : A</p>
    <p v-else-if="grade >= 80">성적 : B</p>
    <p v-else-if="grade >= 70">성적 : C</p>
    <p v-else>성적 : D</p>
    <hr>
    <input type="checkbox" v-model="chData">선택
    <input type="text" v-model="test" v-show="chData">
    <p v-show="chData">Hello, World</p>
  </div>
 </template>

 <script>
export default{
  data(){
    return{
      grade : 60,
      chData : false,
      test : 'ㅈㄴ잠오네'
    }
  }
}
</script>

<style>

</style>
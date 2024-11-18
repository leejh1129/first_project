<!-- view/OnEvent.vue -->
<template>
  <div>
    <!-- self 자기자신을 제외한 하위태그는 신경안씀 -->
    <form v-on:click.self="msg('form')">
      Form
      <!-- once 한번만 호출됨 -->
      <div @click.once="msg('div')">
        Div
        <!-- stop 버블링 막기 -->
        <p @click.stop="msg('p')">
          P
          <a @click.prevent="msg('a')"
            href="http://www.naver.com">네이버</a>
        </p>
      </div>
    </form>
    <hr>
    <button type="button"
      v-on:click="increaseCounter">Add 1</button>
    <input v-model.number="num"> <!-- Number(), parseInt() -->
    <button type="button"
      @click="setCount(num, $event)">Add {{ num }}</button> <!-- $ = vue가 제공하는 전역변수(숨겨진변수) -->
    <p>The Counter is : {{ counter }}</p>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        counter : 0,
        num : 7
      }
    },
    methods : {
      msg(tag){
        alert(`${tag}, 선택!`);
      },
      increaseCounter(event){
        console.log('increase', event);
        this.counter++;
      },
      setCount(value, event){
        console.log('setCount', event);
        this.counter += value;
      }
    }
  }
</script>

<style scoped>
  form, form *{
    margin : 10px;
    border : 1px solid skyblue;
  }
</style>


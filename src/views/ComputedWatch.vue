<template>
  <div>
    <input type="nember" v-model="price">원
    <br>
    <input type="number" v-model="count">개
    <p>과세 금액 : {{ amount }}</p>
    <p>부과세 10% : {{ tax }}</p>
    <p>결제 금액 : {{ total }}</p>
  </div>
</template>

<script>
/*
const computed = {
  data(){
    return {
      price : 0,
      count : 0
    }
  },
  computed : {
    amount(){
      return this.price * this.count;
    },
    tax(){
      return this.amount * 0.1;
    },
    total(){
      return this.amount + this.tax;
    }
  }
};
*/
const watch = {   //watch는 감시 해야 될 대상을 다 지정 해줘야함 
  data(){
    return {
      price : 0,
      count : 0,
      amount : '',
      tax : '',
      total : ''
    }
  },
  // watch = return이 없음
  watch : {
    price(){
      this.amount = this.price * this.count;
    },
    count(){
      this.amount = this.price * this.count;
    },
    amount(){
      this.tax = this.amount * 0.1;
      this.total = this.amount + this.tax;
    }
  }
};

export default watch;
</script>

<template>
  <div>
    <button v-on:click="addData">+</button>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <!-- 원래는 idx를 키로 사용하면 안됨 -->
        <tr v-for="(prod, idx) in products"
          v-bind:key="idx">
          <!-- key = 식별자역활  -->
          <td>{{ prod.product_name }}</td>
          <td>{{ prod.price }}</td>
          <td>{{ prod.category }}</td>
          <td>{{ prod.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
let data = [
  {
    product_name: "기계식키보드",
    price : 25000,
    category: "노트북/태블릿",
    delivery_price: 5000,
  },
  {
    product_name: "무선마우스",
    price : 12000,
    category: "노트북/태블릿",
    delivery_price: 5000,
  },
  {
    product_name: "아이패트",
    price : 725000,
    category: "노트북/태블릿",
    delivery_price: 5000,
  }
];

export default {
  data(){
    return {
      products : data,
    }
  },
  methods : {
    addData(event){
      console.log(event);
      let obj = {
        product_name : '무선충전기',
        price : 25000,
        category : '노트북/태블릿',
        delivery_price : 3000,
      }

      let index = this.products.length;
      this.products[index] = obj;
    }
  }
}
</script>

<style>

</style>
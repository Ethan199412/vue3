<template>
    <div class="person">
        <div>姓名：{{ name }}</div>
        <div>年龄：{{ age }}</div>
        <div @click="changeNum">{{ num }}</div>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
        <div @click="changeCarName">{{ car.name }}</div>
        <button @click="changeCarPrice">改变车价格</button>
        <div>{{ car.price }}</div>
    </div>
</template>

<script lang="ts">

import { reactive, ref } from 'vue'

const obj = {a:1}
Object.assign(obj, {})
console.log('[p1.1] obj', obj)
export default {
    name: 'Person',
    setup() {
        let num = ref(2)
        let car = ref({ name: '奔驰', price: 100 })
        function changeNum() {
            num.value = num.value + 1
        }
        function changeCarName(){
            console.log('[p1.0]')
            car.value = {name: '尼桑', price: 200}
        }
        function changeCarPrice(){
            let {price} = car.value
            console.log('[p1.1] price', price)
            price += 1
            car.value.price = price 

        }
        return {
            num,
            changeNum,
            changeCarName,
            changeCarPrice,
            car
        }
    },
    data() {
        return {
            name: '张三',
            age: 18,
            tel: '13700000001',
            numData: this.num
        }
    },
    methods: {
        changeName() {
            this.name = 'zhangsan'
        },
        showTel() {

        },
        changeAge() {
            this.age += 1
        }
    }
}
</script>

<style></style>
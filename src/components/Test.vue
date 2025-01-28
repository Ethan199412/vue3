<template>
    <div class="test">
        <div v-for="item in list" :key="item" :item="item" >{{ item }}</div>
        <button @click="changeList">click</button>
    </div>
</template>

<script lang="ts">

import { reactive, ref } from 'vue'

export default {
    name: 'Test',
    data() {
        return {
            list: [1,2,3]
        }
    },
    methods: {
        changeList() {
            this.list[0] = 111
            this.list = [...this.list]
        },
        showTel() {

        },
        changeAge() {
            
        }
    }
}
</script>

<style></style>
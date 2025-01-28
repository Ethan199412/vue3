<template>
    <div class="app">
        <h1>你好</h1>
        <!-- <Person/> -->
         <Test/>
    </div>
</template>

<script lang="ts">
import Person from './components/Person.vue'
import Test from './components/Test.vue';

export default {
    name: 'App',
    components: {Person, Test}
}
</script>

<style></style>
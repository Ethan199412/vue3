<template>
    <div class="app">
        <!-- <Person/> -->
         <!-- <TestPage/> -->
    </div>
</template>

<script lang="ts">
import Person from './components/Person.vue'
import Test from './components/Test.vue';
import TestPage from './components/TestPage.vue';
import TestPage2 from './components/TestPage2.vue';


export default {
    name: 'App',
    components: {Person, Test, TestPage, TestPage2}
}
</script>

<style>
    html{
        overflow: hidden;
    }
    body{
        margin: 0px;
    }
</style>
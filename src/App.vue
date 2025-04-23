<template>
    <div class="app">
        <!-- <Person/> -->
         <!-- <TestPage/> -->
          <VhtmlDemo/>
    </div>
</template>

<script lang="ts">
import Person from './components/Person.vue'
import Test from './components/Test.vue';
import TestPage from './components/TestPage.vue';
import WatchTestComponent from './components/WatchTestComponent.vue';
import VhtmlDemo from './components/VhtmlDemo.vue';


export default {
    name: 'App',
    components: { Test, TestPage, WatchTestComponent, VhtmlDemo}
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
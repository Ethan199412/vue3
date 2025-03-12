<template>
    <div class="app">
        <!-- <Person/> -->
         <!-- <TestPage/> -->
          <WatchTestComponent/>
    </div>
</template>

<script lang="ts">
import Person from './components/Person.vue'
import Test from './components/Test.vue';
import TestPage from './components/TestPage.vue';
import WatchTestComponent from './components/WatchTestComponent.vue';


export default {
    name: 'App',
    components: { Test, TestPage, WatchTestComponent}
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
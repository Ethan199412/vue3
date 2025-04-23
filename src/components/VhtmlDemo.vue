<template>
    <div class="v-html-demo">
        <div v-html="htmlContent"></div>
    </div>
</template>

<script lang="ts">

import { reactive, ref } from 'vue'

export default {
    name: 'Test',
    data() {
        return {
            htmlContent: `<div> \
                <span style="color: red;">红色文字</span> \
                <span style="color: green;">绿色文字</span>
            </div>`
        }
    }
}
</script>

<style></style>
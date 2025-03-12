<template>
    <div>
        <div>{{ user.age }}</div>
        <div>{{ user.name }}</div>
        <div>{{ user.score.math }}</div>
        <button @click="handleClick">减分</button>
        <button @click="handleUpdateAge">改年龄</button>
        <div>{{ x }}</div>
        <div>{{ y }}</div>
    </div>
</template>

<script lang="ts" setup>
import { useMouse } from '@/composables/useMouse';
import { ref, watch, watchEffect } from 'vue';

const { x, y } = useMouse()

const age = ref<number>(10)
const user = ref({
    name: '小明',
    age: 18,
    score: {
        math: 95
    }
})

watch(age, (newValue, oldValue) => {
    console.log('[p1.0] age', newValue, oldValue)
}, { immediate: true })

watch(() => user.value.score, (newValue, oldValue) => {
    console.log('[p1.2] user.value.score', { newValue, oldValue })
}, { deep: true })

watch(user, (newValue, oldValue) => {
    console.log('[p1.1] newValue', { newValue, oldValue })
}, {
    deep: true
})

// watchEffect 在组件第一次被加载时会被执行
watchEffect(() => {
    console.log('[p1.4]', user.value.score.math, user.value.age)
})

const handleClick = () => {
    // user.value.age += 1
    // user.value.name = '小刚'
    user.value.score.math -= 2
}

const handleUpdateAge = () => {
    user.value.age += 1
}

defineExpose({
    handleClick,
    age
})
</script>

<style></style>
<script setup>
const {data} = await useAsyncData('count', () => $fetch('/api/top3'))
</script>

<template>
    <div>
        <h1>Top 3</h1>

        <ol>
            <li v-for="todo in data.todos">{{ todo.title }}</li>
        </ol>
    </div>
</template>

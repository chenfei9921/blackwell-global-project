<template>
    <div>
        <BaseNavigation />
        <slot />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
    router.replace('/')
})
</script>

<style scoped>

</style>
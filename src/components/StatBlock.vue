<template>
    <div class="stat">
        <div class="stat-number">{{ number }}</div>
        <div class="stat-label">{{ label }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    number: Number,
    label: String
})
</script>

<style scoped>
.stat {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}

.stat-number {
    font-size: 1.5rem;
    color: var(--font-main);
    font-weight: 400;
}

.stat-label {
    color: var(--font-main2);
    font-size: 0.9rem;
}
</style>
<template>
    <RouterLink class="project" :to="'/projects/' + slug">
        <div class="project-head">
            <div class="title">{{ name }}</div>
            <div class="description">{{ description }}</div>
            <div class="tags">
                <div class="tag" v-for="(tag, index) in tags" :key="index">{{ tag }}</div>
            </div>
        </div>
        <div class="project-body">
            <a v-if="sourceUrl" :href="sourceUrl" class="source" @click.stop>Code source</a>
            <a v-if="demoUrl" :href="demoUrl" class="demo" @click.stop>Démo immersive</a>
        </div>   
    </RouterLink>     
</template>

<script setup>
const props = defineProps({
    name:String,
    description:String,
    tags:Array,
    state:String,
    sourceUrl:String,
    demoUrl:String,
    slug:String
})

import { RouterLink } from 'vue-router'
</script>

<style scoped>
.project {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    text-decoration: none;
    transition: border-color 0.15s ease;
}

.project:hover {
    border-color: var(--font-sub);
}

.project-head {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.title {
    font-size: 1.1rem;
    color: var(--font-main);
    font-weight: 700;
}

.description {
    color: var(--font-sub2);
    font-size: 0.85rem;
    line-height: 1.5;
}


.tag {
    display: inline-block;
    color: var(--font-sub);
    font-size: 0.75rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 2px 8px;
    margin-right: 0.4rem;
    margin-top: 0.4rem;
}

.project-body {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 0.5rem;
}

.project-body a {
    color: var(--font-main2);
    font-size: 0.8rem;
    text-decoration: none;
    border-bottom: 1px solid var(--border);
}

.project-body a:hover {
    color: var(--font-sub);
    border-bottom-color: var(--font-sub);
}
</style>
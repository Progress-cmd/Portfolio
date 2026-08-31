<template>
    <div v-if="project" class="project">
        <h1>{{ project.name }}</h1>
        <div class="meta">
            <div class="state" v-if="project.state">{{ project.state }}</div>

            <div class="badges" v-if="(project.languages && project.languages.length) || (project.tools && project.tools.length)">
                <span class="badge" v-for="(language, index) in project.languages" :key="'lang-' + index">{{ language }}</span>
                <span class="badge" v-for="(tool, index) in project.tools" :key="'tool-' + index">{{ tool }}</span>
            </div>

            <div class="links" v-if="project.sourceUrl || project.demoUrl">
                <a v-if="project.sourceUrl" :href="project.sourceUrl" class="link">Code source</a>
                <a v-if="project.demoUrl" :href="project.demoUrl" class="link">Démo</a>
            </div>
        </div>
        <section v-if="project.screenshots && project.screenshots.length > 0">
            <ScreeshotCarousel :screenshots="project.screenshots"></ScreeshotCarousel>
        </section>
        <section class="contexte">
            <h2>Contexte</h2>
            <div class="section-text" v-html="renderMd(project.contexte)"></div>
        </section>
        <section class="ceQueJaiConstruit">
            <h2>Ce que j'ai construit</h2>
            <div class="section-text" v-html="renderMd(project.ceQueJaiConstruit)"></div>
        </section>
        <section class="choixTechniques">
            <h2>Choix techniques</h2>
            <div class="section-text" v-html="renderMd(project.choixTechniques)"></div>
        </section>
        <section class="ceQueJaiAppris">
            <h2>Ce que j'ai appris</h2>
            <div class="section-text" v-html="renderMd(project.ceQueJaiAppris)"></div>
        </section>
        <section class="architecture" v-if="project.architecture">
            <h2>Architecture</h2>
            <div class="section-text" v-html="renderMd(project.architecture)"></div>
        </section>
        <section class="prochainesEvolutions" v-if="project.prochainesEvolutions">
            <h2>Prochaines évolutions</h2>
            <div class="section-text" v-html="renderMd(project.prochainesEvolutions)"></div>
        </section>
    </div>
    <div v-else>Projet introuvable</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { projects } from '@/data/projects';
import { marked } from 'marked'
import ScreeshotCarousel from '@/components/ScreenshotCarousel.vue'

const route = useRoute()
const project = projects.find(project => project.slug === route.params.slug)

function renderMd(text) { return marked(text) } 
</script>

<style scoped>
.project {
    font-size: small;
    padding: 75px 150px 100px 150px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

h1 {
    font-size: xx-large;
    color: var(--font-main);
    font-weight: 500;
    margin: 0;
}

.meta {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-top: -1.5rem;
}

.state {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--font-sub);
    border: 1px solid var(--font-sub);
    border-radius: 5px;
    padding: 3px 10px;
}

.badges {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.badge {
    color: var(--font-sub2);
    font-size: 0.75rem;
    border: 1px solid var(--border);
    border-radius: 5px;
    padding: 2px 8px;
}

.links {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-left: auto;
}

.links .link {
    color: var(--font-main2);
    font-size: 0.85rem;
    text-decoration: none;
    border-bottom: 1px solid var(--border);
}

.links .link:hover {
    color: var(--font-sub);
    border-bottom-color: var(--font-sub);
}

section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
}

section h2 {
    color: var(--font-sub);
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.03em;
}

.section-text {
    color: var(--font-sub2);
    line-height: 1.7;
    font-size: 0.95rem;
}

.section-text :deep(p) {
    margin: 0 0 1rem 0;
}

.section-text :deep(p:last-child) {
    margin-bottom: 0;
}

.section-text :deep(strong) {
    color: var(--font-main2);
    font-weight: 700;
}

.section-text :deep(em) {
    color: var(--font-sub);
    font-style: italic;
}

.section-text :deep(code) {
    font-family: 'IBM Plex Mono', monospace;
    background-color: var(--border);
    color: var(--font-sub);
    padding: 0.15em 0.4em;
    border-radius: 4px;
    font-size: 0.85em;
}

.section-text :deep(ul),
.section-text :deep(ol) {
    margin: 0 0 1rem 0;
    padding-left: 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.section-text :deep(li) {
    color: var(--font-sub2);
}

.section-text :deep(li)::marker {
    color: var(--font-sub);
}
</style>
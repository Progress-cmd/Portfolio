<template>
  <div id="body">
    <div class="body-head">
      <!-- Colonne gauche : texte -->
      <div class="body-head-left">
        <div id="sub">PORTFOLIO DE PROJETS</div>
        <div id="title">Neuf projets, du papier à la mise en production</div>
        <div id="description">Étudiant en informatique. Ce portfolio a pour objectif de vous montrer l'étendue des principaux projets que j'ai réalisé, aussi bien personnellement que professionnellement et individuellement que par équipe</div>
      </div>


      <!-- Colonne droite : statistiques -->
      <div class="body-head-right">
        <StatBlock v-for="(stat, index) in stats" :key="index" :number="stat.number" :label="stat.label"></StatBlock>
      </div>
    </div>
    <div class="body-body">
      <ProjectCard v-for="(project, index) in featuredProjects" :key="index" :name="project.name" :description="project.description" :tags="project.tags" :state="project.state" :sourceUrl="project.sourceUrl" :demoUrl="project.demoUrl" :slug="project.slug"></ProjectCard>
    </div>
    <RouterLink to="/projects" class="all-projects-link">Voir tous les projets →</RouterLink>
  </div>
</template>

<script setup>
import StatBlock from '@/components/StatBlock.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects.js'

const featuredProjects = projects.slice(0, 3)

const stats = [{ number: 7, label: 'projets livrés' }, { number: 3, label: 'usages réels' }, { number: 4, label: 'projets d\'apprentissages' }]
</script>

<style scoped>
#body {
  font-size: small;
  padding: 75px 150px 0 150px;
}

.body-head {
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* Colonne gauche plus grande */
  gap: 4rem;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--border);
}

.body-head-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#sub {
  color: var(--font-sub);
  text-transform: uppercase;
  font-size: 0.9rem;
}

#title {
  font-size: xx-large;
  color: var(--font-main);
  font-weight: 500;
}

#description {
  color: var(--font-sub2);
  line-height: 1.6;
  font-size: 0.95rem;
}

.body-head-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-end;
}

.body-body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 40px 0 30px 0;
}

.all-projects-link {
  display: inline-block;
  margin-bottom: 60px;
  color: var(--font-sub);
  text-decoration: none;
  font-size: 0.9rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 2px;
}

.all-projects-link:hover {
  border-bottom-color: var(--font-sub);
}
</style>
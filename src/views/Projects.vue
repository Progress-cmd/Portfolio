<template>
  <div id="body">
    <div class="page-head">
      <div id="sub">TOUS LES PROJETS</div>
      <div id="title">L'ensemble des projets, recensés</div>
      <div id="description">
        Les projets principaux sont mis en avant sur l'accueil. Cette page les liste tous,
        y compris les plus anciens ou les plus modestes. Une ligne cliquable mène à une page détaillée.
      </div>
    </div>

    <div class="table-wrap">
      <table class="projects-table">
        <thead>
          <tr>
            <th>Projet</th>
            <th>Type</th>
            <th>État</th>
            <th>Technologies</th>
            <th>Période</th>
            <th>Liens</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="project in projects"
            :key="project.slug"
            :class="{ clickable: hasDetail(project) }"
            @click="hasDetail(project) && goTo(project.slug)"
          >
            <td class="name-cell" data-label="Projet">
              <RouterLink v-if="hasDetail(project)" :to="'/projects/' + project.slug" @click.stop>
                {{ project.name }}
              </RouterLink>
              <span v-else>{{ project.name }}</span>
            </td>
            <td data-label="Type">{{ project.projectType || '—' }}</td>
            <td data-label="État">
              <span v-if="project.state" class="state">{{ project.state }}</span>
              <span v-else>—</span>
            </td>
            <td class="tags-cell" data-label="Technologies">
              <template v-if="project.tags && project.tags.length">
                <span class="tag" v-for="(tag, i) in project.tags" :key="i">{{ tag }}</span>
              </template>
              <span v-else>—</span>
            </td>
            <td data-label="Période">{{ project.periodLabel || '—' }}</td>
            <td class="links-cell" data-label="Liens">
              <a v-if="project.sourceUrl" :href="project.sourceUrl" @click.stop>Code</a>
              <a v-if="project.demoUrl" :href="project.demoUrl" @click.stop>Démo</a>
              <span v-if="!project.sourceUrl && !project.demoUrl">—</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { projects } from '../data/projects.js'

const router = useRouter()

const hasDetail = (project) => Boolean(project.contexte)
const goTo = (slug) => router.push('/projects/' + slug)
</script>

<style scoped>
#body {
  font-size: small;
  padding: 75px 150px 60px 150px;
}

.page-head {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--border);
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
  max-width: 720px;
}

.table-wrap {
  margin-top: 40px;
  overflow-x: auto;
}

.projects-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}

.projects-table th {
  text-align: left;
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: var(--font-main2);
  font-weight: 500;
  padding: 0 1rem 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
}

.projects-table td {
  padding: 0.9rem 1rem;
  border-bottom: 1px solid var(--border);
  color: var(--font-sub2);
  vertical-align: top;
}

.projects-table tr.clickable {
  cursor: pointer;
}

.projects-table tr.clickable:hover td {
  color: var(--font-main);
  background-color: var(--border);
}

.name-cell {
  color: var(--font-main);
  font-weight: 700;
  white-space: nowrap;
}

.name-cell a {
  color: var(--font-main);
  text-decoration: none;
}

.projects-table tr.clickable:hover .name-cell a {
  color: var(--font-sub);
}

.state {
  color: var(--font-sub);
  font-size: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 2px 8px;
  white-space: nowrap;
}

.tags-cell .tag {
  display: inline-block;
  color: var(--font-sub);
  font-size: 0.72rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 2px 8px;
  margin: 0 0.3rem 0.3rem 0;
  white-space: nowrap;
}

.links-cell a {
  color: var(--font-main2);
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  margin-right: 0.8rem;
}

.links-cell a:hover {
  color: var(--font-sub);
  border-bottom-color: var(--font-sub);
}

@media (max-width: 1024px) {
  #body {
    padding: 60px 60px 60px 60px;
  }
}

@media (max-width: 768px) {
  #body {
    padding: 40px 24px 40px 24px;
  }

  #title {
    font-size: x-large;
  }

  .table-wrap {
    overflow-x: visible;
  }

  .projects-table,
  .projects-table tbody,
  .projects-table tr,
  .projects-table td {
    display: block;
    width: 100%;
  }

  .projects-table thead {
    display: none;
  }

  .projects-table tr {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .projects-table tr.clickable:hover td {
    background-color: transparent;
  }

  .projects-table tr.clickable:active {
    border-color: var(--font-sub);
  }

  .projects-table td {
    padding: 0.35rem 0;
    border-bottom: none;
    display: flex;
    gap: 0.75rem;
    align-items: baseline;
  }

  .projects-table td::before {
    content: attr(data-label);
    flex-shrink: 0;
    width: 110px;
    text-transform: uppercase;
    font-size: 0.68rem;
    letter-spacing: 0.04em;
    color: var(--font-main2);
  }

  .projects-table td.tags-cell,
  .projects-table td.links-cell {
    flex-wrap: wrap;
  }

  .name-cell {
    white-space: normal;
    font-size: 1rem;
    padding-bottom: 0.6rem;
  }
}

@media (max-width: 480px) {
  #body {
    padding: 32px 16px 32px 16px;
  }

  .projects-table td {
    flex-direction: column;
    gap: 0.25rem;
  }

  .projects-table td::before {
    width: auto;
  }
}
</style>

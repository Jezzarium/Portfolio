<script lang="ts">
  import { fadeBlur } from './transitions/fadeBlur';
  import ProjectCard from './ProjectCard.svelte';
  import projects from './projects.json';
</script>

<div class="projects" in:fadeBlur>
  <h1>Projects</h1>
  <div class="grid">
    {#each projects as project (project.title)}
      <ProjectCard
        title={project.title}
        description={project.description}
        image={project.image}
        url={project.url}
      />
    {/each}
  </div>
</div>

<style>
  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    color: white;
    padding: 2rem;
    max-width: 1200px;
  }

  .projects h1 {
    font-size: 3rem;
    font-weight: 500;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .projects h1 {
      font-size: 2rem;
    }

    .grid {
      flex-direction: column;
      align-items: center;
    }
  }
</style>

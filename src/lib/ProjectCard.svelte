<script lang="ts">
  interface Props {
    title: string;
    description: string;
    image: string;
    url: string;
  }

  let { title, description, image, url }: Props = $props();
</script>

<a href={url} target="_blank" rel="noopener noreferrer" class="project-card">
  <div class="image-container">
    <img src={image} alt={title} />
  </div>
  <div class="content">
    <h2 class="title mainfont">{title}</h2>
    <p class="desc mainfont">{description}</p>
  </div>
</a>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    background-color: #1a1a1a;
    overflow: hidden;
    text-decoration: none;
    color: white;
    width: 320px;
    transition:
      transform 0.2s ease,
      background-color 0.2s ease;
  }

  .project-card:hover {
    background-color: #2a2a2a;
  }

  .image-container {
    width: 100%;
    height: 240px;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .title {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;
  }

  .desc {
    font-size: 0.95rem;
    line-height: 1.4;
    margin: 0;
    color: #ccc;
  }
</style>

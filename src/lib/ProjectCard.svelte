<script lang="ts">
  interface Props {
    title: string;
    description: string;
    image: string;
    url: string;
  }

  let { title, description, image, url }: Props = $props();
  let loaded = $state(false);
</script>

<a href={url} target="_blank" rel="noopener noreferrer" class="project-card">
  <div class="image-container">
    <img
      src={image}
      alt={title}
      onload={() => (loaded = true)}
      onerror={() => (loaded = true)}
    />
    <div class="spinner" class:spinner-hidden={loaded} aria-hidden={loaded}>
      <span class="spinner-ring"></span>
    </div>
  </div>
  <div class="content">
    <h2 class="title">{title}</h2>
    <p class="desc">{description}</p>
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
  }

  .project-card:hover {
    background-color: #2a2a2a;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .spinner {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1a1a1a;
    transition: opacity 0.3s ease;
  }

  .spinner-hidden {
    opacity: 0;
    pointer-events: none;
  }

  .spinner-ring {
    width: 3rem;
    height: 3rem;
    border: 3px solid rgba(141, 85, 237, 0.2);
    border-top-color: var(--color-highlight);
    border-radius: 50%;
    animation: spinner-rotate 0.8s linear infinite;
  }

  @keyframes spinner-rotate {
    to {
      transform: rotate(360deg);
    }
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

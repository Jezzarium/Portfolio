<script lang="ts">
  import { fadeBlur } from './transitions/fadeBlur';

  let pfpLoaded = $state(false);

  function getAge(): number {
    return new Date().getFullYear() - 2004;
  }
</script>

<div class="personal" in:fadeBlur>
  <div class="content">
    <div class="desc">
      <p>
        Hey there! My name is Justin, and I'm a {getAge()}-year-old software
        engineering student at Polytechnique Montreal. I'm not sure what to put
        here yet; I'll get back to it later.
      </p>
      <p>
        When I was younger, I always wondered how all the technology around us
        worked: Why does opening a port on my router let my friends join my
        Minecraft server? How on earth did people manage to jailbreak my iPod
        Touch and let me add gravity to the home-screen icons? I could never
        have answered these questions by myself back then, but after studying
        hard over the past few years, I can finally begin to understand those
        mysteries that have puzzled me for so long!
      </p>
    </div>
    <div class="pfp-wrapper">
      <img
        class="pfp"
        src="https://r2.jabourjailibilodeau.ca/pfp.png"
        alt="Portrait of Justin"
        onload={() => (pfpLoaded = true)}
        onerror={() => (pfpLoaded = true)}
      />
      <div
        class="spinner"
        class:spinner-hidden={pfpLoaded}
        aria-hidden={pfpLoaded}
      >
        <span class="spinner-ring"></span>
      </div>
    </div>
  </div>
</div>

<style>
  .personal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: white;
    max-width: 1800px;
  }

  .content {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'desc image';
    width: 80%;
  }

  @media (max-width: 700px) {
    .content {
      grid-template-areas: 'image' 'desc';
      grid-template-rows: auto 1fr;
      grid-template-columns: auto;
    }
  }

  .pfp-wrapper {
    grid-area: image;
    position: relative;
    width: min(40vw, 350px);
    aspect-ratio: 1;
    padding: 1rem;
  }

  .pfp {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .spinner {
    position: absolute;
    inset: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1a1a1a;
    border-radius: 50%;
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

  .desc {
    grid-area: desc;
    display: flex;
    flex-direction: column;
    text-align: justify;
    font-size: 1.3rem;
  }
</style>

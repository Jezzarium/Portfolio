<script lang="ts">
  import { fadeBlur } from './transitions/fadeBlur';

  function getAge() : number {
    return new Date().getFullYear() - 2004;
  }
</script>

<div class="personal" in:fadeBlur>
  <div class="content">
    <div class="desc">
      <p>
        Hey there! My name is Justin, and I'm a {getAge()}-year-old software engineering student at
        Polytechnique Montreal. I'm not sure what to put here yet; I'll get back to it later.
      </p>
      <p>
        When I was younger, I always wondered how all the technology around us worked:
        Why does opening a port on my router let my friends
        join my Minecraft server? How on earth did people manage to jailbreak
        my iPod Touch and let me add gravity to the home-screen icons?
        I could never have answered these questions by myself back then, but after
        studying hard over the past few years, I can finally begin to understand those
        mysteries that have puzzled me for so long!
      </p>
    </div>
    <img class="pfp"
      src="https://r2.jabourjailibilodeau.ca/pfp.png"
      alt="Portrait of Justin"
    />
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
    grid-template-areas: "desc image";
    width: 80%;
 }

  @media (max-width: 700px) {
    .content{
      grid-template-areas: "image" "desc";
      grid-template-rows: 1fr, 1fr;
      grid-template-columns: auto; 
    }
  }

  .pfp {
    grid-area: image;
    width: min(40vw, 350px);
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
    padding: 1rem;
  }

  .desc {
    grid-area: desc;
    display: flex;
    flex-direction: column;
    text-align: justify;
    font-size: 1.3rem;
 }
</style>

<script lang="ts">
  import { fadeBlur } from './transitions/fadeBlur';
</script>

<div class="academic" in:fadeBlur>
  <h1 class="mainfont">Academic</h1>
  
  <div class="grid-container">
    <section class="academic-section">
      <h2 class="mainfont">Academic Experience</h2>
      <ul>
        <li>B.Eng in Software Engineering - Polytechnique Montreal (2023-2027)</li>
        <li>DEC in Healt Science - Champlain College St-Lambert (2021-2023)</li>
      </ul>
    </section>

    <section class="work-section">
      <h2 class="mainfont">Work Experience</h2>
      <ul>
        <li>Security Analyst - Genetec (Summer 2025)</li>
      </ul>
    </section>
  </div>
</div>

<style>
  .academic {
    height: 100%;
    color: white;
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .academic h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  section h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>

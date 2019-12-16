<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`commanders.json`)
      .then(r => r.json())
      .then(commanders => {
        return { commanders };
      });
  }
</script>

<script>
  import { fade, slide } from "svelte/transition";

  export let commanders;
  let displaycommanders = commanders;
  let showFilters = false;
  let troopClasses = ["Infantry", "Cavalry", "Bowmen", "Spearmen"];
  let troopType = ["Tank", "DPS", "Support"];
  let acquisition = ["Free", "Pay"];

  const toggleFilters = () => {
    showFilters = !showFilters;
  };

  const showAllClasses = () => {
    troopClasses = ["Infantry", "Cavalry", "Bowmen", "Spearmen"];
    filterCommanders();
  };

  const clearAllClasses = () => {
    troopClasses = [];
    filterCommanders();
  };
  const showAllTypes = () => {
    troopType = ["Tank", "DPS", "Support"];
    filterCommanders();
  };

  const clearAllTypes = () => {
    troopType = [];
    filterCommanders();
  };
  const showAllAcquisitions = () => {
    acquisition = ["Free", "Pay"];
    filterCommanders();
  };

  const clearAllAcquisitions = () => {
    acquisition = [];
    filterCommanders();
  };

  function filterCommanders() {
    displaycommanders = commanders.filter(commander =>
      troopClasses.includes(commander.troop_type)
    );
    displaycommanders = displaycommanders.filter(commander =>
      acquisition.includes(commander.acquisition)
    );
    displaycommanders = displaycommanders.filter(commander =>
      troopType.includes(commander.type)
    );
  }
</script>

<style>
  .filters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
    grid-gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .commanders {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 1rem;
  }
  a {
    transition: 0.3s;
  }
  .commander {
    border-radius: 0.25rem;
    text-align: center;
    transition: 0.3s;
    margin: 0 auto;
    width: 227px;
    position: relative;
  }
  .commander:hover {
    background: #ddd;
  }
  .commander-link {
    text-decoration: none;
  }
  .commander h3 {
    position: absolute;
    bottom: 1.375rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    color: #fff;
    font-weight: 600;
    font-size: 0.875rem;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  .filter-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
  }
  .filter-group label {
    display: block;
  }
  .button-group {
    margin-top: 1rem;
  }
  .toggle {
    cursor: pointer;
    font-size: 1rem;
    color: #fff;
    padding: 0.125rem 0.5rem;
    border-radius: 0.25rem;
    background-color: #db3700;
    font-weight: 600;
  }

  .commander-image {
    object-fit: cover;
  }
</style>

<svelte:head>
  <title>Commanders</title>
</svelte:head>

<h1>Commanders</h1>
<h2>
  Filters
  <span class="toggle" on:click={toggleFilters}>
    {#if showFilters}Hide{:else}Show{/if}
  </span>
</h2>
{#if showFilters}
  <div class="filters" transition:slide>
    <div class="filter-group">
      <div>
        <h3>Troop Type</h3>
        <label for="infantry">
          <input
            name="infantry"
            id="infantry"
            type="checkbox"
            bind:group={troopClasses}
            on:change={filterCommanders}
            value="Infantry" />
          Infantry
        </label>
        <label for="cavalry">
          <input
            name="cavalry"
            id="cavalry"
            type="checkbox"
            bind:group={troopClasses}
            on:change={filterCommanders}
            value="Cavalry" />
          Cavalry
        </label>
        <label for="spearmen">
          <input
            name="spearmen"
            id="spearmen"
            type="checkbox"
            bind:group={troopClasses}
            on:change={filterCommanders}
            value="Spearmen" />
          Spearmen
        </label>
        <label for="bowmen">
          <input
            name="bowmen"
            id="bowmen"
            type="checkbox"
            bind:group={troopClasses}
            on:change={filterCommanders}
            value="Bowmen" />
          Bowmen
        </label>
      </div>
      <div class="button-group">
        <button on:click={showAllClasses}>Show all</button>
        <button on:click={clearAllClasses}>Clear all</button>
      </div>
    </div>
    <div class="filter-group">
      <div>
        <h3>Type</h3>
        <label for="tank">
          <input
            name="tank"
            id="tank"
            type="checkbox"
            bind:group={troopType}
            on:change={filterCommanders}
            value="Tank" />
          Tank
        </label>
        <label for="dps">
          <input
            name="dps"
            id="dps"
            type="checkbox"
            bind:group={troopType}
            on:change={filterCommanders}
            value="DPS" />
          DPS
        </label>
        <label for="support">
          <input
            name="support"
            id="support"
            type="checkbox"
            bind:group={troopType}
            on:change={filterCommanders}
            value="Support" />
          Support
        </label>
      </div>
      <div class="button-group">
        <button on:click={showAllTypes}>Show all</button>
        <button on:click={clearAllTypes}>Clear all</button>
      </div>
    </div>
    <div class="filter-group">
      <div>
        <h3>Acquisition</h3>
        <label for="free">
          <input
            name="free"
            id="free"
            type="checkbox"
            bind:group={acquisition}
            on:change={filterCommanders}
            value="Free" />
          Free to Play
        </label>
        <label for="pay">
          <input
            name="pay"
            id="pay"
            type="checkbox"
            bind:group={acquisition}
            on:change={filterCommanders}
            value="Pay" />
          Pay to Win
        </label>
      </div>
      <div class="button-group">
        <button on:click={showAllAcquisitions}>Show all</button>
        <button on:click={clearAllAcquisitions}>Clear all</button>
      </div>
    </div>
  </div>
{/if}
<div class="commanders">
  {#each displaycommanders as commander}
    <a
      rel="prefetch"
      href="commanders/{commander.slug}"
      class="commander-link"
      transition:fade={{ delay: 50, duration: 150 }}>
      <div class="commander">
        <h3>{commander.title}</h3>
        <img
          class="commander-image"
          src="/commanders/{commander.slug}.png"
          alt="Image of {commander.title} - {commander.troop_type} commander." />
      </div>
    </a>
  {/each}
</div>

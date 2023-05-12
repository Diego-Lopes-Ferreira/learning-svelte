<script>
  /** @type {string} */
  export var selectedId;

  const categories = [
    { id: "01", name: "test", color: "#f0f0f0" },
    { id: "02", name: "another", color: "#a0f043" },
    { id: "03", name: "diego", color: "#2322f0" },
    { id: "04", name: "foo", color: "#a12345" },
  ];

  let isOpen = false;
  function toggleModal() {
    isOpen = !isOpen;
  }
</script>

<button type="button" on:click={() => toggleModal()}>
  {categories.filter((cat) => cat.id == selectedId)}
</button>
<select bind:value={selectedId}>
  {#each categories as cat}
    <option value={cat.id}>
      <div style={`color: ${cat.color}`} />
      {cat.name}
    </option>
  {/each}
</select>

<style>
  div {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
  }
</style>

<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let tagId = data.tag.id == "" ? "" : data.tag.id;
  let name = data.tag.name == "" ? "" : data.tag.name;
  function handleSubmit() {
    console.log(`Sending: ${tagId} - ${name}|`);
  }
</script>

<main class="fill-screen-center">
  <form action="" class="screen-form">
    <h3>
      {data.isNew
        ? `Nova Tag: "${name}"`
        : `Editando Tag "${name}":`}
    </h3>
    <label for="name">Nome:</label>
    <input type="text" name="name" bind:value={name} />

    <button type="button" on:click={handleSubmit}>Submit</button>
  </form>
</main>

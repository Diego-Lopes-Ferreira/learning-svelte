<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let bankId = data.bank.id == "" ? "" : data.bank.id;
  let name = data.bank.name == "" ? "" : data.bank.name;
  function handleSubmit() {
    console.log(`Sending: ${bankId} - ${name}|`);
  }
</script>

<main class="fill-screen-center">
  <form action="" class="screen-form">
    <h3>
      {data.isNew
        ? `Novo Banco: "${name}"`
        : `Editando Banco "${name}":`}
    </h3>
    <label for="name">Nome:</label>
    <input type="text" name="name" bind:value={name} />

    <button type="button" on:click={handleSubmit}>Submit</button>
  </form>
</main>

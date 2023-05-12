<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let categoryId = data.category.id == "" ? "" : data.category.id;
  let name = data.category.name == "" ? "" : data.category.name;
  let color = data.category.color == "" ? "" : data.category.color;
  function handleSubmit() {
    console.log(`Sending: ${categoryId} - ${name} - ${color}`);
  }
</script>

<main class="fill-screen-center">
  <form action="" class="screen-form">
    <h3>{data.isNew ? `Nova Sub Categoria: "${name}"` : `Editando Sub Categoria "${name}":`}</h3>
    <label for="name">Nome:</label>
    <input type="text" name="name" bind:value={name} />

    <label for="color">Cor:</label>
    <input type="color" name="color" bind:value={color} />

    <button type="button" on:click={handleSubmit}>Submit</button>
  </form>
</main>

<!--
  [x] Get data as props
  [x] Select type: new one, edit
  [x] Fill data if needed or change title to new one
  [ ] Call backend on submit
 -->

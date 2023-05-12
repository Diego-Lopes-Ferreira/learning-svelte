<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let subCategoryId = data.subcategory.id == "" ? "" : data.subcategory.id;
  let name = data.subcategory.name == "" ? "" : data.subcategory.name;
  let color = data.subcategory.color == "" ? "" : data.subcategory.color;
  let categoryId = data.subcategory.id == "" ? "" : data.subcategory.categoryId;
  function handleSubmit() {
    console.log(
      `Sending: ${subCategoryId} - ${name} - ${color} - ${categoryId}|`
    );
  }
</script>

<main class="fill-screen-center">
  <form action="" class="screen-form">
    <h3>
      {data.isNew
        ? `Nova Subcategoria: "${name}"`
        : `Editando Subcategoria "${name}":`}
    </h3>
    <label for="name">Nome:</label>
    <input type="text" name="name" bind:value={name} />

    <label for="color">Cor:</label>
    <input type="color" name="color" bind:value={color} />
    <label for="category">Categoria:</label>
    <select name="category" id="category" bind:value={categoryId}>
      <option value="id1">teste 1</option>
      <option value="id2">teste 2</option>
    </select>

    <button type="button" on:click={handleSubmit}>Submit</button>
  </form>
</main>

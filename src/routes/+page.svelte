<main>
  <h1>Hello, world!</h1>
  <section>
    <h2>Links</h2>
    <a href="/forms/category/new">Nova Categoria</a>
    <a href="/forms/subcategory/new">Nova SubCategoria</a>
    <a href="/forms/bank/new">Novo banco</a>
    <a href="/forms/tag/new">Nova tag</a>
    <a href="/forms/expense/new">Adicionar gasto</a>
  </section>
</main>

<style>
  main {
    display: grid;
    align-content: start;
    justify-content: center;
    width: 100vw;
  }

  main * {
    width: 100%;
  }

  section {
    padding: 1rem 4rem;
    width: fit-content;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border: 1px solid black;
  }

  section > * + * {
    margin-top: 1rem;
  }
</style>

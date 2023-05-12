<script>
  import BankSelector from "../../../../components/BankSelector.svelte";
  import MoneyNumberInput from "../../../../components/MoneyNumberInput.svelte";
  import SelectTransactionType from "../../../../components/SelectTransactionType.svelte";
  import CategorySelector from "../../../../components/CategorySelector.svelte";
  /** @type {import('./$types').PageData} */
  export let data;

  /** @param {{ preventDefault: () => void; }} e */
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`\n\nSending:`);
    for (let item of Object.keys(data.expense)) {
      // @ts-ignore
      console.log(`> ${item} = "${data.expense[item]}"`);
    }
  }
</script>

<main class="fill-screen-center">
  <form action="none" class="screen-form">
    <h3>
      {data.isNew
        ? `Adiconar transação: "${data.expense.name}"`
        : `Editando transação "${data.expense.name}":`}
    </h3>

    <SelectTransactionType bind:val={data.expense.type} />
    <h2><!--  --></h2>
    <label for="name">Nome:</label>
    <input type="text" name="name" bind:value={data.expense.name} />

    <div class="two-columns">
      <label for="date">Data:</label>
      <input type="date" name="date" bind:value={data.expense.date} />

      <label for="value">Valor:</label>
      <MoneyNumberInput bind:num={data.expense.value} />
    </div>

    <h2>Dados da transação</h2>
    <div class="two-columns">
      <label for="transaction_type">Tipo de Transação:</label>
      <select
        name="transaction_type"
        bind:value={data.expense.transaction_type}
      >
        <option value="pix">PIX</option>
        <option value="credit">Crédito</option>
        <option value="debit">Débito</option>
        <option value="cash">Dinheiro</option>
        <option value="ted">TED</option>
      </select>

      <label for="date_credit">Vencimento:</label>
      <input
        type="date"
        name="date_credit"
        bind:value={data.expense.date_credit}
        disabled={data.expense.transaction_type != "credit"}
      />
    </div>

    <label for="bank">Banco:</label>
    <p>todo k "{data.expense.bankId}"</p>
    <BankSelector bind:selected={data.expense.bankId} />

    <h2>Organização</h2>
    <div class="two-columns">
      <label for="category">Categoria:</label>
      <div>
        <p>todo k "{data.expense.categoryId}"</p>
        <CategorySelector name="oi" color="#f00f00" callback={() => {}} />
      </div>

      <label for="subcategory">SubCategoria:</label>
      <p>todo k "{data.expense.subCategoryId}"</p>
    </div>

    <label for="tag">Tag:</label>
    <select name="tag" bind:value={data.expense.tagId}>
      <option value="outro Id">Tag 1</option>
      <option value="tagId">Tag 2</option>
    </select>

    <label for="desc">Descrição:</label>
    <textarea name="desc" bind:value={data.expense.desc} />

    <button type="button" on:click={handleSubmit}>Submit</button>
  </form>
</main>

<style>
  .two-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-auto-flow: column;
    gap: 0rem 1rem;
  }
</style>

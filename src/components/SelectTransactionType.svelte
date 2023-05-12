<script>
  /** @type {string}*/
  export let val;
  /** @param {string} a */
  function handle(a) {
    val = a;
  }
</script>

<div>
  <button
    type="button"
    class="income {val == 'income' ? 'selected' : ''}"
    on:click={() => handle("income")}
  >
    Entrada
  </button>

  <button
    type="button"
    class="expense {val == 'expense' ? 'selected' : ''}"
    on:click={() => handle("expense")}
  >
    Saída
  </button>
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  button.income {
    background-color: var(--color-green);
  }

  button.expense {
    background-color: var(--color-red);
  }
</style>

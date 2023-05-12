<script>
  /** @type {string | any} */
   export let selected;

  const banks = [
    { id: "01", name: "Nubank" },
    { id: "02", name: "Caixa" },
    { id: "03", name: "Carteira" },
    { id: "04", name: "Outros Bancos" },
    { id: "05", name: "Pra dar scroll" },
  ];

  /** @param {string} bankId */
  function handle(bankId) {
    selected = bankId;
  }
</script>

<div>
  {#each banks as bank}
    <button
      type="button"
      on:click={() => handle(bank.id)}
      class={selected == bank.id ? "selected" : ""}>{bank.name}</button
    >
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 1rem;
    padding: 1rem 0rem;
    /* box-shadow: inset 0px 0px 40px 0px rgba(0, 0, 0, 0.3); */
  }
  button {
    flex: 0 0 auto;
    border-radius: 1rem;
    background-color: var(--color-theme-1);
    color: var(--color-text-dark);
    margin: 0;
  }
</style>

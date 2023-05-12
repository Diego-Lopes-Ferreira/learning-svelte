<script>
  import { onMount } from "svelte";

  /** @type {String|Number}*/
  export let num;

  /** @param {Event & { currentTarget: EventTarget & HTMLInputElement; }} e*/
  function handle(e) {
    // @ts-ignore
    num = updateNumber(e.target.value);
  }

  /** @param {string} msg */
  function updateNumber(msg) {
    msg = msg.replaceAll(/[^0-9]/g, "");
    msg = msg.replace(/^0+/, "");
    for (let i = msg.length; i < 3; i++) {
      msg = "0" + msg;
    }
    let n = msg.slice(0, msg.length - 2);
    n += ",";
    n += msg.slice(msg.length - 2, msg.length);
    return n;
  }

  onMount(() => {
    console.log("here");
    num = updateNumber(num.toString());
  });
</script>

<input type="text" name="value" bind:value={num} on:input={handle} />

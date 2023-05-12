/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  let res = {
    isNew: params.slug == "new",
    bank: {
      id: "",
      name: "",
    }
  };
  if (params.slug != "new") {
    // call backend
    // throw error if ID doesnt exist
    res.bank.id = params.slug;
    res.bank.name = "Nome do banco";
  }
  return res;
}

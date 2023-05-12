/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  let res = {
    isNew: params.slug == "new",
    category: {
      id: "",
      name: "",
      color: "",
    }
  };
  if (params.slug != "new") {
    // call backend
    // throw error if ID doesnt exist
    res.category.id = params.slug;
    res.category.name = "Nome da Coisa";
    res.category.color = "#f0fa00";
  }
  return res;
}

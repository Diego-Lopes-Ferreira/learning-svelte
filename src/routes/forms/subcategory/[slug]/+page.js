/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  let res = {
    isNew: params.slug == "new",
    subcategory: {
      id: "",
      name: "",
      color: "",
      categoryId: "",
    }
  };
  if (params.slug != "new") {
    // call backend
    // throw error if ID doesnt exist
    res.subcategory.id = params.slug;
    res.subcategory.name = "Nome da Coisa";
    res.subcategory.color = "#f0fa00";
    res.subcategory.categoryId = "id2";
  }
  return res;
}

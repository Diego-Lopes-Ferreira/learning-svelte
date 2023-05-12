/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  let res = {
    isNew: params.slug == "new",
    tag: {
      id: "",
      name: "",
    }
  };
  if (params.slug != "new") {
    // call backend
    // throw error if ID doesnt exist
    res.tag.id = params.slug;
    res.tag.name = "Nome da tag";
  }
  return res;
}

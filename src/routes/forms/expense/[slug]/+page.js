/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  let res = {
    isNew: params.slug == "new",
    expense: {
      id: "",
      date: "",
      date_credit: "",
      type: "",
      transaction_type: "",
      value: 0,
      name: "",
      desc: "",
      categoryId: "",
      subCategoryId: "",
      bankId: "",
      tagId: "",
    }
  };
  if (params.slug != "new") {
    // call backend
    // throw error if ID doesnt exist
    res.expense.id = params.slug;
    res.expense.date = new Date().toISOString().slice(0, 10);
    res.expense.date_credit = new Date().toISOString().slice(0, 10);
    res.expense.type = "expense";
    res.expense.transaction_type = "debit";
    res.expense.value = 123.45;
    res.expense.name = "name";
    res.expense.desc = "desc";
    res.expense.categoryId = "categoryId";
    res.expense.subCategoryId = "subCategoryId";
    res.expense.bankId = "bankId";
    res.expense.tagId = "tagId";
  }
  return res;
}

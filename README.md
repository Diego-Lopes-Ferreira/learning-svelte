# Learning Svelte
> The objective of this project is to learn how svelte works. App has no backend currently.

# Development

## Data modeling
There are 5 data structures: "user", "transactions", "categories", "subcategories", "banks", "tags"

user:
- id
- name
- settings (text, json?)

transactions:
- id
- date
- date_edit
- date_credit → nullable
- type → income / expense
- type → cash, debit, credit, pix, ted, etc
- value
- name
- description
- category (id)
  - id, name, color
- subcategory (id)
  - id, category (id), name, color
- bank (id)
  - id, name
- tag (id)
  - id, name

## Elements
- [x]  CategoryForm (name, color)
- [x]  SubCategoryForm (name, color, category)
- [x]  BankForm (name)
- [x]  TagForm (name)
- [x]  ExpenseForm (date, date_credit, type, transaction, value, name, description, category, subcategory, bank, tag)
  1. date (start, end)
  1. date_credit (select?)
  1. type → income / expense
  1. type → cash, debit, credit, pix, ted, etc
  1. name and description
  1. category (id)
  1. subcategory (id)
  1. bank (id)
  1. tag (id)

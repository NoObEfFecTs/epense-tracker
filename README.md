# Vue 3 Expense Tracker

An expense tracker app built with Vue 3 and the composition API.

- Add and remove expenses/income
    - Category
    - Transaction date
    - Amount
    - Buyer
- Track balance history
- Track overview by category (bar chart)
- Save data to local storage / database
- [Vue Toastification](https://github.com/Maronato/vue-toastification) for notifications
- [Vue date picker](https://vue3datepicker.com/installation/) for selecting dates and time ranges
- [Chart JS](https://www.chartjs.org/docs/latest/) for charts
- `<script setup>` syntax (Vue 3.2+)

## Project Setup
### Install Dependencies in Backend and Frontend
```sh
npm install
```

### Run Backend with SQLite DB connection and expose APIs
```sh
npm run server
```

### Compile and Hot-Reload Frontend for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

#### License MIT

const getExpensesTotal = (expenses) => {
    return expenses.reduce((accumulator, { amount }) => accumulator + amount, 0)
}

export default getExpensesTotal
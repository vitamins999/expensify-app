import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

export const ExpenseSummary = ({ numberOfExpenses, totalExpenses }) => {
    const expenseWord = numberOfExpenses === 1 ? 'expense' : 'expenses'
    const formattedTotal = numeral(totalExpenses / 100).format('$0,0.00')
    return (
        <div>
            {numberOfExpenses !== 0 ?
                <h1>Viewing {numberOfExpenses} {expenseWord}, totalling {formattedTotal}.</h1> : ''
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        numberOfExpenses: visibleExpenses.length,
        totalExpenses: getExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)
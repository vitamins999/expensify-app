import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should correctly add up multiple expenses', () => {
    const total = getExpensesTotal(expenses)
    expect(total).toBe(114195)
})

test('should correctly add up one expense', () => {
    const expense = [expenses[0]]
    const total = getExpensesTotal(expense)
    expect(total).toBe(195)
})

test('should return 0 if no expense', () => {
    const expense = []
    const total = getExpensesTotal(expense)
    expect(total).toBe(0)
})
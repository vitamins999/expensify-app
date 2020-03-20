import { v4 as uuidv4 } from 'uuid'

// ADD EXPENSE
export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})
// Remove Expense

export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// Edit Expense

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
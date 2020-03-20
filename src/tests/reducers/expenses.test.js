import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {
        type: '@@INIT'
    })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '69',
            description: 'Cat food',
            note: '',
            amount: 500,
            createdAt: 0
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([
        ...expenses,
        {
            id: '69',
            description: 'Cat food',
            note: '',
            amount: 500,
            createdAt: 0
        }
    ])
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            description: 'Rent and water bill'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].description).toBe('Rent and water bill')
})

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '60',
        updates: {
            description: 'Kittens'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
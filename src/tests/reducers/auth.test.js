import authReducer from '../../reducers/auth'

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    }
    const state = authReducer(undefined, action)
    expect(state).toEqual({
        uid: 'abc123'
    })
})

test('should clear uid for logout', () => {
    const oldState = {
        uid: 'abc123'
    }
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer(oldState, action)
    expect(state).toEqual({})
})
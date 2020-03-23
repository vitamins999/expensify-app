import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test('should correctly render expenses summary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary numberOfExpenses={1} totalExpenses={123} />)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary numberOfExpenses={23} totalExpenses={987654321} />)
    expect(wrapper).toMatchSnapshot()
})
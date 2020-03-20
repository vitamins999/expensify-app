// Set Text Filter

export const setTextFilter = (filterText = '') => ({
    type: 'SET_TEXT_FILTER',
    filterText
})

// Set filter to Sort By Amount

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

// Set filter to Sort By Date

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// Set filter Start Date

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// Set filter End Date

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
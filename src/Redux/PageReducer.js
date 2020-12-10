const SearchValue = 'Search-Value'
const initialState = {
    messagesPeople: [
        { name: 'Oleg', id: 1 },
        { name: 'Lena', id: 2 },
        { name: 'Max', id: 3 },
    ],
    SearchForm: {
        value:'',
    }
}
const PageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SearchValue: {
            let stateCopy = {...state}
            stateCopy.value = action.value
            return stateCopy
        }
    }
    return state
}
export const SearchAction = (text) => {
    return {
        type:SearchValue,
        value: text
    }
}

export default PageReducer;
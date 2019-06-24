const initialState = {
    rate_pallet: null,
    rate_lines: null,
    rate_vip: null,
    rate_extraHour: null
};

function RateReducers(state = initialState, action) {
    switch (action.type) {
        case 'GET_RATES':
            return {
                rate_pallet:action.payload.rate_pallet,
                rate_lines: action.payload.rate_lines,
                rate_vip: action.payload.rate_vip,
                rate_extraHour: action.payload.rate_extraHour
            };
        case 'LOGOUT_RATES':
            return initialState;
        default:
            return state;
    }
}

export default RateReducers;
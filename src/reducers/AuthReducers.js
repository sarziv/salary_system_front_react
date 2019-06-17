const initialState = {
    access_token: null,
    token_type: null,
    expires_at: null
};

function AuthReducers(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                access_token: action.payload.access_token,
                token_type: action.payload.token_type,
                expires_at: action.payload.expires_at
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}

export default AuthReducers;
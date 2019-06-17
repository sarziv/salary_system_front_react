const initialState = {
    "access_token": null,
    "token_type": null,
    "expires_at": null
};

function AuthReducers(state = initialState , action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                access_token: state.access_token,
                token_type: state.token_type,
                expires_at: state.expires_at
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}
export default AuthReducers;

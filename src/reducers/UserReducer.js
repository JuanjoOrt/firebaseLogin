import type from '../parameters/UserParameters'

const _initialState = () => ({
    user: null
});

const _setData = (state, {user}) => ({...state, user});

export default (state = _initialState(), action) => {
    switch (action.type) {
        case type.USER_LOGGING:
            return _setData(state, action);
        default:
            return state;
    }
};
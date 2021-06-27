
const wishReducer = (state=[], action) => {
    console.log("in wishReducer action = ", action);
    if(action.type === 'ADD_WISH'){
        return [
            ...state, action.payload
        ]
    }
    return state;
}

export default wishReducer;
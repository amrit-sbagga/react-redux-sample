
const iState = {
    name : "Amrit",
    wishes : ['w1', 'w2']
}

const reducer = (state=iState, action) => {
    console.log("in reducer action = ", action);
    if(action.type === 'CHANGE_NAME'){
        return {
            ...state,
            name:action.payload
        }
    }
    return state;
}

export default reducer;
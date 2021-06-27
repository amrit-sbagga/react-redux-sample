
const nameReducer = (state='', action) => {
    console.log("in nameReducer action = ", action);
    if(action.type === 'CHANGE_NAME'){
        return action.payload;
        // {
        //     ...state,
        //     name:action.payload
        // }
    }
    return state;
}

export default nameReducer;
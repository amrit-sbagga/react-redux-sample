// export const anotherName = (name) => {
//     return {
//         type : 'CHANGE_NAME',
//         payload: name
//     }
// }

//asynchronous - fetch data then dispatch for thunk
// export const anotherName = () => {
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(resp => resp.json())
//         .then(res2 => {
//             dispatch({
//                 type : 'CHANGE_NAME',
//                 payload: res2[0].name
//             })
//         })
//     }
// }

//using async await
export const anotherName = () => {
    return async(dispatch) => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const res2 = await data.json()
        dispatch({
            type : 'CHANGE_NAME',
            payload: res2[0].name
        })
        
    }
}

export const addWishAction = (wish) => {
    return {
        type: 'ADD_WISH',
        payload : wish
    }
}
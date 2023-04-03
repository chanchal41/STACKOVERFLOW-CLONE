import * as api from '../api'

export const getAllUsers = () => async(dispatch) => {
    console.log("123")
    try{
        const {data} = await api.getAllUsers()
        dispatch({type: 'FETCH_USERS', payload:data})

    }catch(error) {
        console.log(error)
    }
}
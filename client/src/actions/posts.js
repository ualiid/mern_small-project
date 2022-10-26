import * as api from '../api'
import {FETCH_ALL,CREATE,UPDATE,LIKE,DELETE} from '../constants/actionTypes';
//actions
export const getPosts = () => async (dispatch) => {
try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
       console.log(error.message); 
    }
    
}
export const createPost=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.createPost(post); //distruct the response and get data
        dispatch({type:CREATE,payload:data})
    } catch (error) {
        console.log(error.message);
    }
}
export const updatePost=(id,post)=>async(dispatch)=>{
    try {
        const {data} = await api.updatePost(id,post)
        dispatch({type:UPDATE, payload:data})
    } catch (error) {
        console.log(error.message);
    }
}
export const deletePost=(id)=>async(dispatch)=>{
    try{
        await api.deletePost(id);
  dispatch({type:DELETE,payload:id});  
    }catch(error){
        console.log(error.message);
    }

}

// export const likePost = (id, post) => async (dispatch) => {
//     try {
//         const { data } = await api.likePost(id, post)
//         dispatch({ type: LIKE , payload: data })
//     } catch (error) {
//         console.log(error.message);
//     }
// }
export const likePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id, post)
        dispatch({ type: LIKE , payload: data })
        getPosts();
    } catch (error) {
        console.log(error.message);
    }
}
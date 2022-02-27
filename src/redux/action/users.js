import { ADD_USER,EDIT_USER } from "../type"


export const addUser=(data)=>{
 return ({type:ADD_USER,payload:data})
}


export const editUser=(data)=>{
    return ({type:EDIT_USER,payload:data})
}
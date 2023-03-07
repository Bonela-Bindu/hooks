import React ,{useEffect, useReducer}from 'react'
const initialState={
   
    loading:false,
    users:[],
    error:""
};
function userReducer(state,action){
    switch(action.type){
        case"FETCH-REQUEST":
        return{...state,loading:true};
        case"FETCH-SUCCESS":
        return{...state,loading:false,users:action.payload};
        case"FETCH-FAIL":
        return{...state,loading:false,error:action.payload};
    }
}


export default function Redux(){
    const [state,dispatch]=useReducer(userReducer,initialState);
    useEffect(()=>{
        dispatch({type:"FETCH_REQUEST"});
        fetch(" https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            dispatch({type:"FETCH_SUCCESS",payload:data})
        })
        .catch(error=>{
            dispatch({type:"FETCH_SUCCESS",error:"something went wrong"+error.toString()})
        })
    
},[]);

    return (
      <div>
        {state.users.map((user)=><p>{user.name}</p>)}
      </div>
    )
  }


import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {addUser} from '../../redux/action/users';
import './home.css'
import {Link} from 'react-router-dom';
import ReactLoading from 'react-loading';

const Home=()=>{
const [data,setData]=useState([]);
const [loading,setLoading]=useState(true);
const dispatch=useDispatch();
const userState=useSelector(state=>state.user);


// Recupération des datas au chargement

useEffect(()=>{
    if(!userState.users?.length){
        fetch('https://randomuser.me/api/?results=20')
        .then(res=>res.json())
        .then(res=>dispatch(addUser(res.results)))
        .catch(err=>console.log(err))
    }else{
       setData(userState.users);
       setLoading(false);
    }
   
},[userState.users,dispatch])
console.log(userState)
return(
    <div className='container'>
        <p className='title'>20 Random users</p>

        {/* Chargement */}

        {loading? 
          <div className="loading-wrapper">
        <ReactLoading type={'spokes'}  height={50} width={50} />
        </div>
        :null} 

        {data?.map((element,index)=>{
            return(
                <div key={index} className='row'>
                    <img src={element.picture?.thumbnail} alt="" />
                    <span>{element.name.title} {element.name.first} {element.name.last}</span>
                    <span>{element.email}</span>
                   <Link to={`/edit/${index}`}><button>edit</button></Link>
                </div>
            )
        })}

    </div>
)
}

export default Home;
import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'


const ShowBook = () => {

  const[book,setBook]=useState([]);
  const[load,setLoad]=useState(false)
  const {id} = useParams();
 
  useEffect(()=>{
    setLoad(true)
    axios.get(`http://localhost:3002/book/${id}`).then(res=>{
      setBook(res.data);
      setLoad(false);
    }).catch((error)=>{
      console.log(error.message);
      setLoad(false)
    })
  },[])

  return (
    <div className='p-4'>
     <BackButton/>
     <h1 className='text-3xl my-4'>Show Book</h1>
     {load ? (
        <Spinner/>
        ):(
    
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
      <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Id :</span>
          <span>{id}</span>
      </div>
      <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Title :</span>
          <span>{book.Title}</span>
      </div>
      <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Published :</span>
          <span>{book.Published}</span>
      </div> 
      </div>
      
     )}
    
    </div>
  )
}

export default ShowBook

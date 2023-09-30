import React,{useState} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';
const DeleteBook = () => {

  const[load,setLoad]=useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  const handleDelete = ()=>{
    setLoad(true)
      axios.delete(`http://localhost:3002/book/${id}`)
      .then(()=>{
        setLoad(false)
        navigate('/');
      }).catch((error)=>{
        setLoad(false)
        alert("An Error occurred check console")
        console.log(error.message);
      })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {load ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
      <h3 className='text-2xl'>Are You Sure You Want to Delete This Book</h3>
      <button 
      className='p-4 bg-red-600 text-white m-8 w-full'
      onClick={handleDelete}
      >
      Delete
      </button>
      </div>
    </div>
  )
}

export default DeleteBook

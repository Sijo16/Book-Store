import React,{useEffect, useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const EditBook = () => {
  const[Title,setTilte]=useState('');
  const[Published,setPublished]=useState('')
  const[load,setLoad]=useState(false);
  
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    setLoad(true)
    axios.get(`http://localhost:3002/book/${id}`).then((res)=>{
    setTilte(res.data.Title)
    setPublished(res.data.Published)
    setLoad(false)
    }).catch((error)=>{
      setLoad(false)
       alert('An Error occurred check console')
       console.log(error.message);
    })
  },[])

  const handleEdit = () =>{
    const data = {
      Title,
      Published
    };
    setLoad(true);
    axios.put(`http://localhost:3002/book/${id}`,data).then(()=>{
      setLoad(false);
      navigate('/');
    }).catch((error)=>{
      setLoad(false);
      alert("An error occurred check console log");
      console.log(error.message);
    })
  };

  return (
  
       <div className='p-4'>
     <BackButton/>
     <h1 className='text-3xl my-4'>Edit Book</h1>
     {load ? <Spinner/> : ' ' }
     <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Title</label>
        <input
          type='text'
          value={Title}
          onChange={(e)=>setTilte(e.target.value)}
          className='border-2 border-gray-500 px-4 py-4 w-full'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Published</label>
        <input
          type='text'
          value={Published}
          onChange={(e)=>setPublished(e.target.value)}
          className='border-2 border-gray-500 px-4 py-4 w-full'
        />
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleEdit} >Save</button>
    </div>
    </div>

  )
}

export default EditBook

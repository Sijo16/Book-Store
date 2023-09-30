import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBook from './pages/CreateBooks.jsx'
import EditBook from './pages/EditBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import ShowBook from './pages/ShowBook.jsx'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/book/create' element={<CreateBook/>}/>
      <Route path='/book/edit/:id' element={<EditBook/>}/>
      <Route path='/book/delete/:id' element={<DeleteBook/>}/>
      <Route path='/book/details/:id' element={<ShowBook/>}/>
    </Routes>
  )
}

export default App

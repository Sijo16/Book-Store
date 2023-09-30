import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const[books,setBook] = useState([]);
  const[load,setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
   axios.get('http://localhost:3002/book')
    .then((res) => {
        setBook(res.data.data);
        console.log(res.data.data);
        setLoad(false);
      }).catch((error) => {
        setLoad(false);
        console.log(error.message);
      });
  }, []);

  return (
   
   <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xyl my-8">Book List</h1>
        <Link to="/book/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link> 
      </div>
      {load ? (
        <Spinner />
      ) : (
        <table className="w-full border-seperate border-spacing">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md">Published</th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
             { books.map((book, index) => {
              return <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.Title}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.Published}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/book/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/book/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/book/delete/${book._id}`}>
                      <AiOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;

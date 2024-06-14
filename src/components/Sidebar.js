import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Details from "./Details";
const { useState, useEffect } = require("react");

const Sidebar = () => {
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {

        fetchData();
       }, [])
    
     const fetchData = async () => {
          const res = await fetch('https://reqres.in/api/users?page=1');
          const data = await res.json();
          console.log(data);
          setData(data);
          setUsers(data?.data);
    
     }
    
    return (
      <>
      <button onClick={() => setIsOpen(!isOpen)}>===</button>
      <div className={` bg-black text-white fixed inset-y-0 left-0 tranform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`} aria-label="Sidebar">

        <div className="flex items-center justify-between">
            <button onClick={() => setIsOpen(!isOpen)}>X</button>
       </div>  
      
      <nav className="mt-4">
        <ul>
        {users.map((item) => (
        <li key={item.id} className="mb-2">
        <Link to={`/details/${item.first_name}`}>{item.first_name}</Link></li>  
        ))}
        </ul>
        
        </nav>
      </div> 
      
</>
    )};


export default Sidebar;    
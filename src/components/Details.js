import { useParams } from 'react-router-dom';
import mainImage from '../assets/group_1171275446.png';
import reactImage from '../assets/rectangle_6.png';
import deleteIcon from '../assets/delete.svg';
const { useEffect, useState } = require("react")
const Details =  () => {
   const { name } = useParams()    
   const [data, setData] = useState([]);
   const [products, setProducts] = useState([]);
   useEffect(() => {

    fetchData();
   }, [])

 const fetchData = async () => {
      const res = await fetch('https://reqres.in/api/users?page=1');
      const data = await res.json();
      console.log(data);
      setData(data);
      setProducts(data?.data);

 }
    return (
        <div className="bg-black text-white">
          <h3 className='pr-12'>Link - {name}</h3>
          <div className='p-8 pl-11 m-2 align-middle items-center'>
          <img className='align-middle' src={mainImage} alt='product'/>
          </div> 
         <div className="p-4 flex">
            <h4>Keywords</h4>
         </div> 

            <div className="p-4 flex float-start gap-3">
            <button className='rounded-3xl  bg-white text-black p-3'>PP</button>
            <button className='rounded-3xl bg-white text-black p-2 '>Price please</button>
            <button className='rounded-3xl bg-white text-black p-2 '>Price of this</button>
            </div>
          <div className='p-4 flex'>
           <button className='rounded-3xl bg-yellow-400 text-black p-2 m-3'>Add Custom Keywords+</button> 
            </div>
 
          <div className='flex p-4'>  
          <h3>Tagged products </h3>
          </div>     
          <div className="p-2  flex flex-row">
          <div className="p-2 w-1/3 flex flex-row">
           <img src={reactImage} alt="prod-img"/>
          </div>
            <div className="flex flex-col pl-2 pt-2 items-start gap-2 text-[10px]">
            <p className='text-gray-400'>H&M</p>
            <p className='text-xs'>Off-White Poncho Cream White</p>
            <p className='text-gray-400'>Sold by: Nykaa fashion</p>
            <h1> ₹2400  <span className='text-gray-400'> ₹2999 <span className='text-red-400'>(40% off)</span></span> </h1>
            <div className='flex flex-row gap-4'>
            <button className='rounded-md bg-yellow-400 text-[5px] text-black pr-2 pl-2'>Estimated cost for 1 is <span className='font-bold'>₹2400</span></button>
            <button className='gap-1 rounded-md flex float-right  bg-white text-[10px] font-bold text-black p-2'><img className='mt-[1px] w-3  items-center justify-center h-3' src={deleteIcon} alt='delete'/>Remove</button>
            </div>
            </div>
          </div> 
          <div className="p-2  flex flex-row">
          <div className="p-2 w-1/3 flex flex-row">
           <img src={reactImage} alt="prod-img"/>
          </div>
            <div className="flex flex-col pl-2 pt-2 items-start gap-2 text-[10px]">
            <p className='text-gray-400'>H&M</p>
            <p className='text-xs'>Off-White Poncho Cream White</p>
            <p className='text-gray-400'>Sold by: Nykaa fashion</p>
            <h1> ₹2400  <span className='text-gray-400'> ₹2999 <span className='text-red-400'>(40% off)</span></span> </h1>
            <div className='flex flex-row gap-4'>
            <button className='rounded-md bg-yellow-400 text-[5px] text-black pr-2 pl-2'>Estimated cost for 1 is <span className='font-bold'>₹2400</span></button>
            <button className='gap-1 rounded-md flex float-right  bg-white text-[10px] font-bold text-black p-2'><img className='mt-[1px] w-3  items-center justify-center h-3' src={deleteIcon} alt='delete'/>Remove</button>
            </div>
            </div>
            
          </div> 
          <div className='items-center'>
            <limk className='text-yellow-500 text-[10px]'> + Tag more Products</limk>
          </div>

          <div className='items-center'>
            <button className='rounded-md bg-white text-black mt-8 p-2 mb-4 w-40'>connet to Link-Lo</button>
          </div>
        </div>
    )
}

export default Details;
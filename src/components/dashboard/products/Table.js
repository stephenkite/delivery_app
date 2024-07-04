import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useProduct } from "../../../store";
import { useNavigate } from "react-router-dom";

function Table({ items }) {
  console.log(items);
  
  const navigate = useNavigate();

  const setProduct = useProduct((state) => state.setProduct)

  const deleteHandler = (item)=>{
    if (window.confirm("Are you sure you want to delete this product?") == true) {
      console.log(item)
    } else {
    }
  }

  const editHandler = (item)=>{
    setProduct(item)
    navigate(`/dashboard/edit/${item._id}`)
  }
  return (
    <div className="w-full mt-10">
      <div className=" text-lg font-semibold pl-6 py-2"> items Table</div>
      <table className=" w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th>No.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Restaurant Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}.</td>
              <td className="flex justify-center"> <img src= {item.image[0]} alt="" className="h-10 w-10 rounded-full "/></td>
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.restaurantName}</td>
              <td className="text-center">ksh. {item.price}</td>
              <td className="flex justify-center ">
                <div className="flex items-center gap-x-2">
                  <div className="p-1 hover:bg-gray-400 rounded-full cursor-pointer " onClick={()=>editHandler(item)}>
                    <MdEdit className=" text-gray-800" />
                  </div>
                  <div className="p-1 hover:bg-gray-400 rounded-full cursor-pointer " onClick={()=>deleteHandler(item)}>
                    <MdDelete className="text-red-500" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  );
}

export default Table;

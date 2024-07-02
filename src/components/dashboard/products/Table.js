import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
function Table({ items }) {
  console.log(items);
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
          {items.map((items, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}.</td>
              <td className="flex justify-center"> <img src= {items.image[0]} alt="" className="h-10 w-10 rounded-full "/></td>
              <td className="text-center">{items.name}</td>
              <td className="text-center">{items.restaurantName}</td>
              <td className="text-center">ksh. {items.price}</td>
              <td className="flex justify-center ">
                <div className="flex items-center gap-x-2">
                  <div className="p-1 hover:bg-gray-400 rounded-full cursor-pointer ">
                    <MdEdit className=" text-gray-800" />
                  </div>
                  <div className="p-1 hover:bg-gray-400 rounded-full cursor-pointer ">
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

import React, { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import { IoIosSettings } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Table from "../../components/dashboard/products/Table";
import { getItems } from "../../apis";
import { useStore } from "../../store";


export default function Products() {
  const [loading, setLoading] = useState(false);
  const [items , setItems] = useState([{
    "_id": "63ff3aff033fe8a4e0989503",
    "name": "matoke",
    "categoryId": "63ff3ae4033fe8a4e0989500",
    "price": 200,
    "image": [
        "https://healthiersteps.com/wp-content/uploads/2022/04/matoke-overlay.jpg"
    ],
    "vendor": "63fcd00ef30a045b75a7a27f",
    "restaurantName": "Educhiks",
    "description": "Served with beef stew",
    "rating": [],
    "status": true,
    "createdAt": "2023-03-01T11:46:07.272Z",
    "updatedAt": "2023-03-01T11:46:07.272Z",
    "__v": 0,
    "addOns": []
        },

{
  "_id": "640050fc033fe8a4e0989508",
  "name": "githeri",
  "categoryId": "63ff3ae4033fe8a4e0989500",
  "price": 180,
  "image": [
      "https://healthiersteps.com/wp-content/uploads/2022/04/matoke-overlay.jpg"
  ],
  "vendor": "63fcd00ef30a045b75a7a27f",
  "restaurantName": "Educhiks",
  "description": "With potatos",
  "rating": [],
  "status": true,
  "createdAt": "2023-03-02T07:32:12.927Z",
  "updatedAt": "2023-03-02T07:37:11.748Z",
  "__v": 0,
  "addOns": []
        },
{
  "_id": "646f2d61403492a4b0691c27",
  "name": "pizza",
  "categoryId": "63ff3ae4033fe8a4e0989500",
  "price": 1000,
  "image": [
      "https://images-gmi-pmc.edge-generalmills.com/c8cbc66e-8f56-4fcd-ae39-582c7d15668f.jpg"
  ],
  "vendor": "63fcd00ef30a045b75a7a27f",
  "restaurantName": "Educhiks",
  "description": "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
  "rating": [],
  "status": true,
  "createdAt": "2023-05-25T09:41:53.009Z",
  "updatedAt": "2023-06-08T09:13:23.966Z",
  "__v": 0,
  "addOns": [
      {
          "_id": "648191591572bc13375aaa1b",
          "name": "Extra Cheese",
          "price": 55,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZu1-FOSOM8byFPIVln22czfCfp0wXDhlF3nYCIDocNA_kR2DxM9cGAU9DTniUsYJOPI&usqp=CAU",
          "description": "Add extra cheese to your dish for a richer flavor.",
          "createdAt": "2023-06-08T08:29:13.799Z",
          "updatedAt": "2023-06-08T10:07:03.662Z",
          "__v": 0
      }
    ]
        },]);

const updateProducts = useStore((state) => state.updateProducts)
const products = useStore((state) => state.products)
  
useEffect(()=>{
     updateProducts(50);

   

  },[items]);


  // useEffect(() => {
    
  //     fetchData();
    
  // }, []);



  const fetchData = async () => {
    setLoading(true);

    const data =  await getItems();
    

 
    setLoading(false);
    setItems(data);
  };
  return (
    <Dashboard>
      <div className="bg-gray-100 h-screen w-full">
        <div className="mx-2 py-5 text-lg font-bold">Dashboard V2</div>

        <div className="flex space-x-10 mx-2 ">
          <div className={products>5?"border flex bg-white items-center gap-x-4 flex-grow rounded-md shadow-md": "border flex bg-red-500 text-white items-center gap-x-4 flex-grow rounded-md shadow-md"}>
            <div className="p-2 bg-[#15A1BC] text-white rounded-tl-md rounded-bl-md">
              <IoIosSettings className="text-2xl" />
            </div>
            <div className="text-center">Settings</div>
          </div>
          <div className="border flex bg-white items-center gap-x-4 flex-grow rounded-md shadow-md">
            <div className="p-2 bg-[#15A1BC] text-white rounded-tl-md rounded-bl-md">
              <AiFillLike className="text-2xl" />
            </div>
            <div className="text-center">Like Us</div>
          </div>
          <div className="border flex bg-white items-center gap-x-4 flex-grow rounded-md shadow-md">
            <div className="p-2 bg-[#15A1BC] text-white rounded-tl-md rounded-bl-md">
              <FaShoppingCart className="text-2xl" />
            </div>
            <div className="text-center">Show With Us</div>
          </div>
        </div>
        <Table items={items} loading={loading} />
      </div>
    </Dashboard>
  );
}

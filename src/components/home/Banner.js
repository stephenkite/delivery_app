import { useEffect, useState } from "react";

function Banner() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await data.json();
    console.log(jsonData);
    setLoading(false);
    setUsers(jsonData);
  };

  return (
    <div className=" ">
      {loading&& <div className="">Loading ...</div>}
      {!loading&& 
      users.map((user,index)=> <div className="" key= {index}>

        {user.email}
      </div>)}
      
    </div>
  );
}

export default Banner;

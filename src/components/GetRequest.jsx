import axios from "axios";
import { useEffect, useState } from "react";

function GetRequest() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      console.table(res.data)
      setData(res.data)
    })
    .catch(err => console.log(err))
  }, [])
  return ( 
    <>
      <h3>Simple Get Request</h3>
      <ul>
        {data.map(item => 
          <li key={item.id}>
            {item.title}
          </li>
          )}
      </ul>
    </>
   );
}

export default GetRequest;
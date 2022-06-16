import axios from "axios";
import { useState, useEffect } from "react";

function FetchOnlyOnePost() {

  const [postNumber, setPostNumber] = useState("1")
  const [data, setData] = useState("")

  useEffect(() => {
    // use TEMPLATE STRING to change url 
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
    .then(res => {
      console.table(res.data)
      setData(res.data)                
    })
    .catch(err => console.log(err))
  }, 
  // useState value in DEPENDENCY ARRAY
  [postNumber])

  function handler(e) {
    setPostNumber(e.target.value)
  }

  return ( 
    <>
      <h3>FetchOnlyOnePost</h3>
      <input type="text" value={postNumber} onChange={handler} placeholder="post you want to display"/> <br/>
      {postNumber}<b>th post:</b> {data.title}
    </>
   );
}

export default FetchOnlyOnePost
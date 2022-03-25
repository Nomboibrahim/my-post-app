
import axios from 'axios';
import { useState, useEffect } from 'react';


 function App() {
   const[post, setPosts]=useState([]);

   useEffect(()=>{
     (async ()=>{
       let response =await axios({ 
         method: "Get", 
         url:'https://jsonplaceholder.typicode.com/posts'
         
       }) 
       setPosts(response.data);
     })();
   }
   )
  return (
    <div className='app'>
    <h1>prfile Maker</h1>
    <div className='list'>
    {post.map((post)=>(
      <div key={post.id} className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p></div>

    ))}
    </div>

    </div>
  )
}

export default App
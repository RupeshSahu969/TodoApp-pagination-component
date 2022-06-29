
import React ,{useState,useEffect}from 'react'

const Todo= () => {

const [data,setData] =useState([]);

const [page,setPage]=useState(1)

const [loading,setLoding]= useState(false)

const getTodos=async (p=1) => {
    
    try{
        let data = await fetch
        (
            `https://jsonplaceholder.typicode.com/posts?_page=${p}&_limit=10`
        )
        data=await data.json();
        console.log(data)
        setData(data)
    }catch(err){
        console.log(err)
    }
}


useEffect(() => {
    getTodos(page)

}, [page])





  return (

    <div style={{marginTop:"40px",marginBottom:"50px"}}>
      <h1>Todos</h1>  
       <button onClick={() => setPage(page=>page-1)}  disabled={page==1} >Prev</button>

     <span style={{padding: "1rem"}}   >{page}</span>

       <button onClick={() => setPage(page=>page+1)} >Next</button>
       
       <div>
        {loading && <h3>Loading</h3>}
        
       </div>
       
        <div style={{width:"30%", margin: "auto",
      border:"1px solid black", padding:"40px" ,marginTop:"50px",
      fontSize:"20px", 
      boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"
      
      }}>
            {
                data.map(todo=>
                    <div key={todo.id} 
                    style={{display:"flex",gap:"1rem",margin:"0.5rem"}}>
                      <div>{todo.id}</div>
                      <div>{todo.title}</div>
                      {/* <div>{todo.status ?"Done" :"Not Done"}</div> */}
                        
                        </div>
                        )
            }
        </div>
        </div>
  )
}

export default Todo
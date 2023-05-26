import { useState } from "react"
import axios from "axios"

const Update=()=>{
    const [data,setData] = useState({
        name:'',
        count:''
    })
   const updateDD = async()=>{
        await axios.post(`http://localhost:5000/up/${id}`,data).then(()=>{
            window.location.reload(false)
            console.log(data)
        })
   }
    return(
        <>
            <form>
                <label>Name</label>
                <input type="text" value={data.name} onChange={(event)=>{
                    setData({...data,name:event.target.value})
                }}/>
                <label>Count</label>
                <input type="text" value={data.count} onChange={(event)=>{
                    setData({...data,count:event.target.value})
                }}/>    
                <button onClick={updateDD}>UPDATE</button>                   
            </form  >
        </>
    )
}
export default Update
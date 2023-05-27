import { useState } from "react"
import axios from "axios"

const CreateD=()=>{
    const [data,setData] = useState({
        name:'',
        count:''
    })
   const createDD = async()=>{
        await axios.post("http://localhost:5000/bingChilling",data).then(()=>{
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
                <button onClick={createDD}>BIG</button>                                    
            </form  >
        </>
    )
}
export default CreateD
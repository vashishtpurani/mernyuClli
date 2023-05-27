import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Update=()=>{
    const navigate = useNavigate()
    const Name = sessionStorage.getItem("name")
    const Count = sessionStorage.getItem("count")
    const [data,setData] = useState({
        name:'',
        count:''
    })

    const updateDD = async(event)=>{
        const id = sessionStorage.getItem("id")
        event.preventDefault()

        await axios.post(`http://localhost:5000/up/${id}`,data).then((a)=>{
            sessionStorage.removeItem("name")
            sessionStorage.removeItem("count")
            if(a.status==200){
                navigate("/nav")
            }
            console.log(a)
        })
        console.log("LOOAADEDDE")
        localStorage.setItem("updt","UPDATED BETCHHH")
    }

    useEffect(()=>{
        if(!Name&&!Count){
            alert("NO VALUE SELECTED")
            navigate("/nav")
        }
        hehe()
    },[])
    
    const hehe = ()=>{
        if(localStorage.getItem("updt")=="UPDATED BETCHHH"){
           navigate("/nav") 
        }
        if(Name!=""&&!localStorage.getItem("updt")){
            setData({name:Name,count:Count})
        }
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
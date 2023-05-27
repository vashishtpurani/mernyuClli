import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const NavBar = ()=>{
    const navigate = useNavigate()
    const [dataa,setData] = useState([])
    useEffect(()=>{
        const rex = async()=>{
            await axios.get("http://localhost:5000/admin").then((res)=>{
                setData(res.data)
                // console.log(res)
            })
        }
        // console.log(data)
        rex()
    },[])
    const deleteD = async(id)=>{
      await axios.post(`http://localhost:5000/del/${id}`).then(()=>{
        window.location.reload(false);
      })
    }
    const UpD =(id,name,count)=>{
        
        // sessionStorage.removeItem("id")
        // sessionStorage.removeItem("name")
        // sessionStorage.removeItem("count")

        sessionStorage. setItem("id",id)
        sessionStorage.setItem("name",name)
        sessionStorage.setItem("count",count)
        localStorage.removeItem("updt")        
        navigate("/up")
    }
    console.log(dataa)
    return(
        <div>
        <table border={2}>
          {dataa.map((val, key) => (
            <tr
              key={key}
            >
                <td>{val._id}</td>
                <td>{val.name}</td>
                <td>{val.count}</td>
                <td><button onClick={()=>{deleteD(val._id)}}>DELETE</button></td>
                <td><button onClick={()=>{UpD(val._id,val.name,val.count)}}>UPDATE</button></td>
            </tr>    
          ))}
        </table>  
        </div>
    )
}
export default NavBar
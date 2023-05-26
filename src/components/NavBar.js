import { useEffect, useState } from "react"
import axios from "axios"

const NavBar = ()=>{
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
            </tr>    
          ))}
        </table>  
        </div>
    )
}
export default NavBar
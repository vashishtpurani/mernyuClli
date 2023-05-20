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
    console.log(dataa)
    return(
        <div>
        <table>
          {dataa.map((val, key) => (
            <tr
              key={key}
            >
                <td>{val.name}</td>
                <td>{val.count}</td>
            </tr>    
          ))}
        </table>  
        </div>
    )
}
export default NavBar
import axios from "axios"
import { useState } from "react"

function Upload2()
{
    const[pid,setId]=useState()
    const[pname,setName]=useState()
    const[pprice,setPrice]=useState()
    const[pdesc,setDesc]=useState()
    const[pcat,setCat]=useState()
    const[pimage,setImage]=useState()

    function submitForm(e)
    {
        e.preventDefault()
        const url="http://localhost:4000/"
        const formData=new FormData()
        formData.append("pid",parseInt(pid))
        formData.append("pname",pname)
        formData.append("pprice",parseInt(pprice))
        formData.append("pdesc",pdesc)
        formData.append("pcat",pcat)
        formData.append("pimage",pimage)
        axios.post(url,formData).then((result)=>{
            console.log(result.data)
            alert("Data Save sucessfully")
        })

        
    }
    return(
        <div>
            <br></br>
         <form>
         <input type="number" placeholder="Product Id" onChange={(e)=>setId(e.target.value)}/><br></br>
        <input type="text" placeholder="Product Name" onChange={(e)=>setName(e.target.value)}/><br></br>
        <input type="number" placeholder="Product Price" onChange={(e)=>setPrice(e.target.value)}/><br></br>
        <input type="text" placeholder="Product Description" onChange={(e)=>setDesc(e.target.value)}/><br></br>
        <select onChange={(e)=>setCat(e.target.value)}>
        <option>select</option>   
        <option>Electronic</option>
        <option>MenCloths</option>
        <option>MenShoes</option>
        <option>WomenCloths</option>
        </select>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])}/><br></br>
        <button onClick={submitForm}>Submit</button> <br></br>
         </form>
    </div>
    )
}
export default Upload2
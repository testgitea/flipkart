import { useState } from "react"

function Login()
{
    const[uname,setName]=useState()
    const[uemail,setEmail]=useState()
    const[upass,setPassword]=useState()
    function SubmitForm(e)
    {
        e.preventDefault()
        const url=("")
        console.log(uname,uemail,upass)
        
    }
    return(
        <div>
            <form>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input><br></br>
                <input type="email" placeholder="Enter E-mail" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
                <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
                <button onClick={SubmitForm}>Submit</button>
            </form>
        </div>
    )
}
export default Login
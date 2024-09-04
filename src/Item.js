import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

function Item()
{
   const uselocation=useLocation()
   const mydata=uselocation.state
   const [apidata,getData]=useState([])

    useEffect(()=>
        {
            fetch("http://localhost:4000/"+mydata).then((result)=>{
             //   console.log(result)
                result.json().then((data)=>{
                   console.log(data)
                    getData(data[0])
                })
            })
        },[])


    return(
        <div>
          <br></br>
          
        <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={apidata.pimage}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard> 
           
        </div>
    )
}
export default Item

// {
//     console.log(mydata)
// }
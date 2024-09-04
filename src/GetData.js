// const { useEffect } = require("react")
import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function GetData()
{
    const [apidata,getData]=useState([])
    const usenavigate=useNavigate()
    const handleClick=(pid)=>{
     // const data={name:data}
      usenavigate("/item",{state:pid})
    }
    useEffect(()=>
    {
        fetch("http://localhost:4000/").then((result)=>{
            //console.log(result)
            result.json().then((data)=>{
                console.log(data)
                getData(data)
            })
        })
    },[])
    return(
       <div>
        {/* <br></br> */}
         <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
          apidata.map((item)=>
            <MDBCol>
              
          <MDBCard>
            
            <center>
            
            <MDBCardImage
              src={item.pimage}
              alt='...'
              position='top'
              style={{width:"250px",height:"200px"}}
            />
            </center>
            <center>
            <MDBCardBody>
              
            
              {/* <MDBCardTitle>Card title</MDBCardTitle> */}
              
              <MDBCardText>
                
               <MDBCardTitle>{item.pname}</MDBCardTitle>
               <MDBCardTitle style={{color:"red"}}>Rs.{item.pprice}</MDBCardTitle>
               <MDBCardTitle>{item.pcat}</MDBCardTitle>
               
              </MDBCardText>
              {item.pdesc}
              <MDBCardText>
                <MDBBtn onClick={()=>handleClick(item.pid)}>View Details</MDBBtn>
              </MDBCardText>

              </MDBCardBody>
            </center>
            
          </MDBCard>
        </MDBCol>
          )
        }
        </MDBRow>
       </div>
    )
}
export default GetData
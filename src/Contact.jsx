import React ,{useState} from 'react';

const Contact = () =>
{

    const[data,setData]= useState({
        
fullname:"",
mobile:"",
email:"",
msg:"",


    })

    const formSubmit = (e) =>
    {
        e.preventDefault();
        alert(
            `my name is ${data.fullname}.
             my mobile number is ${data.mobile}.
             my email address is ${data.email}.
             message ${data.msg}`
            
            
            
            );

    };

    const InputEvent = (event) =>
    {
        const{name,value} = event.target;

        setData((preVal)=>{

            return{
                ...preVal,
                [name]:value,
            }

        })

    }


    return(

        <>

<div className="my-5">
            <h1 className="text-center"> Contact us</h1>
        </div>


        <div className="container contact_div">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">

                   <form onSubmit={formSubmit}> 
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" name="mobile" value={data.mobile} onChange={InputEvent} placeholder="Enter Your Mobile Number" />
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter Your Email Address" />
  </div>


  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
  </div>

  <br></br>

<div className="col-12">
  <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>


  

  
</form>
        
    </div>
          </div>
             </div>

        </>
    )
}

export default Contact;
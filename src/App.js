import React, { useState } from 'react';
import './App.css';
import { Form } from 'react-bootstrap';
function App() {
  const [fname, setFname] = useState('');
  const [show, setShow] = useState('');

  const [lname, setLname] = useState('');
  const [showlname, setShowlname] = useState('');

  const [mail, setMail] = useState('');
  const [showmail, setShowmail] = useState('');

  const [dob, setDob] = useState('');
  const [showdob, setShowdob] = useState('');

  const [number, setNumber] = useState('');
  const [showNumber, setShowNumber] = useState('');

  const [password, setPassword] = useState('');
  const [showpassword, setShowpassword] = useState('');


  const onSubmits = (event) => {
    event.preventDefault();
    setShow(fname);
    setShowlname(lname);
    setShowmail(mail);
    setShowdob(dob);
    setShowNumber(number);
    setShowpassword(password);
  }
 

  const firstName = (event) => { setFname(event.target.value); }
  const lastName = (event) => { setLname(event.target.value); }
  const Email = (event) => { setMail(event.target.value); }
  const Dateofbirth = (event) => { setDob(event.target.value); }
  const PhoneNumber = (event) => { setNumber(event.target.value); }
  const mainPassword = (event) => { setPassword(event.target.value); }
  return (
    <>
      <div>
        <h1 className='text-center fw-light my-5'>Simple Form With React Js</h1>
      </div>
      <div className=''>
        <Form className='p-4' onSubmit={onSubmits}>
          {/* FIRST NAME */}
          <input placeholder='First name' value={fname} onChange={firstName} className='form-control ' id='fname' style={{ float: 'left' }} required />
          {/* LAST NAME  */}
          <input placeholder='Last name' value={lname} onChange={lastName} className='form-control ms-1' id='lname' style={{ float: 'right' }} required /><br /><br /><br />
          {/* EMAIL  */}
          <input placeholder='Email Address' value={mail} onChange={Email} className='form-control' type={'email'} required /><br />
          {/* DATE OF BIRTH  */}
          <label className='text-light fw-semibold ms-2'>Date of Birth:</label>
          <input placeholder='Date of Birth' value={dob} onChange={Dateofbirth} className='form-control ' type={'date'} required /><br />
          {/* Gender  */}
          <label className=' ms-2 text-light fw-semibold ' htmlFor='gender'>Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;

          <input type={'radio'} name='gender' className='form-check-input' required />&nbsp;<label className=' ms-2 text-light '>Male</label>&nbsp;&nbsp;

          <input type={'radio'} name='gender' className='form-check-input' required />&nbsp;<label className=' ms-2 text-light'>Female</label>&nbsp;&nbsp;

          <input type={'radio'} name='gender' className='form-check-input' required />&nbsp;<label className=' ms-2 text-light '>Other</label>
          <br /><br />
          {/* PHONE NUMBER  */}
          <input placeholder='Phone Number' value={number} onChange={PhoneNumber} className='form-control' type={'number'} required /><br />
          {/* PASSWORD  */}
          <input placeholder='Password' value={password} onChange={mainPassword} className='form-control ' type={'password'} required /><br />

          <button className='btn btn-warning w-100 p-2' type='submit'> Save </button>
        </Form>
      </div>


      {/* THIS WILL SHOW THE RESULT ON WINDOW */}

      <div className='text-center my-5 text-bg-dark text-light p-3'>
        <h1>Here the result will be shown:</h1>
        <h1>{show}&nbsp;{showlname}</h1>
        <h3>{showmail}</h3>
        <h3>{showdob}</h3>
        <h3>{showNumber}</h3>
        <h3>{showpassword}</h3>
      </div>
      
    </>
  )
}
export default App;
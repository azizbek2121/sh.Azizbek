import React, { useEffect, useState } from 'react'
import './FirstLogin.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link } from 'react-router-dom';
import axios from 'axios';
const FirstLogin = ({setAzizbek}) => {
  const [name, setName] = useState([])

  const fetchbox = async () =>{
    const res = await axios.get('Full Name')
    const data = await res.data 
    console.log(data);
    setName(data)
  }

    useEffect(() => {
      fetchbox()
    },[])

  return (
    <div>
    <Form className='allInOne'>



      <Form.Group className="mb-3 first" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='username'  onChange={(e) => setAzizbek(e.target.value) } required  type="text" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

     
      <Button className='buttn' variant="primary" type="submit">
       <Link className='submit' to='/'> Submit</Link>
      </Button>
    </Form>
    
    </div>
  )
}

export default FirstLogin
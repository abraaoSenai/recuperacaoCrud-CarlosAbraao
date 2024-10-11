import React from 'react'


// CSS
import styles from './index.module.css'

// USESTATE
import  { useState } from 'react';

// NAVIGATE
import {useNavigate} from "react-router-dom"

// ALERT
import Alert from 'react-bootstrap/Alert';



// COMPONENTES

// IMPORTS BOOTSTRAP {
import Button from 'react-bootstrap/Button';


// NAVBAR BOOTSTRAP IMPORTS
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const Login = () => {
  const [nomeUsuario, setNomeUsuario] = useState("")
  const [alertaClass, setAlertaClass] = useState("mb-3 d-none")
  const [alertaMensagem, setAlertaMensagem] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault()
  }

  return (
    <>
      <Container
      className={styles.mainContainer}>

        <Alert
        key="danger"
        variant="danger"
        className={alertaClass}
        
        >
          {alertaMensagem}
        </Alert>

        <form 
        
        onSubmit={handleSubmit}>




{/* Nome do produto */}
          <FloatingLabel
            controlId="nomeUsuarioInput"
            label="Usuário"
            className="mb-3"
            
          >
            <Form.Control
             type="text" 
             placeholder="name@example.com" 
             value={nomeUsuario}
              onChange={(e)=>{
                  setNomeUsuario(e.target.value)


                  console.log(nomeUsuario)
              }} 

              />
          </FloatingLabel>

        </form>
        </Container>
    </>
  )
}

export default Login
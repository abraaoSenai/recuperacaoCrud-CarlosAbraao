import React from 'react'



// CSS
import styles from './index.module.css'

// USESTATE
import  { useState } from 'react';

// NAVIGATE

// ALERT
import Alert from 'react-bootstrap/Alert';

// NAVBAR
import MainNavBar from '../../components/MainNavBar/index'


// COMPONENTES

// IMPORTS BOOTSTRAP {
import Button from 'react-bootstrap/Button';


// NAVBAR BOOTSTRAP IMPORTS
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';




// }

const CadastroProdutos = () => {
  const [nomeProduto, setNomeProduto] = useState("")
  const [tipoProduto, setTipoProduto] = useState("")
  const [precoProduto, setPrecoProduto] = useState("")

  // URL
  const [url] = useState("http://localhost:4000/produtos")
  
  // ALERTA
  const [alertaClass, setAlertaClass] = useState('mb-3 d-none')
  const [alertaMensagem, setAlertaMensagem] = useState('')
  
  //  FUNÇÂO SUBMIT
  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    if(!nomeProduto == "" ){

      if(!tipoProduto == ""){
        if(!precoProduto == ""){
          

          const produto = {nomeProduto, tipoProduto, precoProduto}
          const res = await fetch(url, {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(produto)

          })
          alert("Produto cadastrado com sucesso")
          
          setNomeProduto("")
          setTipoProduto("")
          setPrecoProduto("")
        }
        else{
          setAlertaClass("mb-3")
          setAlertaMensagem("O preço do produto não pode ser vazio!")
        }
      }
      else{
        setAlertaClass("mb-3")
        setAlertaMensagem("A categirua do produto não pode ser vazia!")
      }
      
  }
  else{

      setAlertaClass("mb-3")
      setAlertaMensagem("O nome do produto não pode ser vazio!")
  }
    
    

}

  
  return (
      <>
      <MainNavBar/>
    
      <Container
      className={styles.mainContainer}>
        


        <Alert
        key="danger"
        variant="danger"
        className={alertaClass}
        
        >
          {alertaMensagem}
        </Alert>

        <h1>Cadastro de Produtos</h1>

        <form 
        
        onSubmit={handleSubmit}>




{/* Nome do produto */}
          <FloatingLabel
            controlId="nomeProdutoInput"
            label="Nome do produto"
            className="mb-3"
            
          >
            <Form.Control
             type="text" 
             placeholder="name@example.com" 
             value={nomeProduto}
              onChange={(e)=>{
                  setNomeProduto(e.target.value)


                  console.log(nomeProduto)
              }} 

              />
          </FloatingLabel>

            
{/* Tipo do produto */}
          <FloatingLabel
            controlId="tipoProdutoInput"
            label="Tipo do produto"
            className="mb-3"
          >
            <Form.Control 
            type="text"
            placeholder="name@example.com" 
            value={tipoProduto}
              onChange={(e)=>{
                  setTipoProduto(e.target.value)


                  console.log(tipoProduto)
              }} 
            />
          </FloatingLabel>
          
{/* Preço do produto */}
          <FloatingLabel
            controlId="precoProdutoInput"
            label="Preço do produto"
            className="mb-3"
          >
            <Form.Control 
            type="number" 
            placeholder="name@example.com" 
            value={precoProduto}
              onChange={(e)=>{
                  setPrecoProduto(e.target.value)


                  console.log(precoProduto)
              }} />
          </FloatingLabel>

          
{/* BOTÂO CADASTRAR */}

          <Button 
          variant="secondary"
          type="submit"
          className={styles.cadastrarBtn}
          
          >Cadastrar</Button>
          
          

        </form>
        
      </Container>


        
      </>
    
    
    
  )
}

export default CadastroProdutos
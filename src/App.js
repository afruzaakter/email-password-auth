
import './App.css';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
// import  {Form , Button} from 'react-bootstrap';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const auth = getAuth(app)

function App() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] =useState('')
  const [password,setPassword] = useState('')
 
  const [error,setError] = useState('')

  const handleEmailBlur = event => {
    // console.log(even.target.value);
    setEmail(event.target.value);
  }


  const handlePasswordBlur = event => {
    // console.log(e.target.value);
    setPassword(event.target.value);
  }


  const handleFormSubmit = event => {
    // console.log('form submitted', email,password);
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) { 
      event.stopPropagation();
      return;
    }

    if (!/(?=.*?[#?!@$%^&*-])/.test(password)){
      setError('Password Should contain at least one special character')
      return;
    }

    setValidated(true);
    setError('');
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setEmail('');
      setPassword('');
      // verifyEmail();
    })
    .catch(error => {
      console.log(error);
      setError(error.message)
    })
  
    event.preventDefault()
  }
  return (
    <div >
     <div className='w-50 m-auto mt-5 bg-primary p-3 rounded-3 '>
       <h2 className='text-center'>Please Register!!!</h2>
     <Form noValidate validated={validated}  onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='text-light'>Email address</Form.Label>
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />

          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>

          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='text-light'>Password</Form.Label>
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
        </Form.Group>
        
        <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
          <p className='text-danger'>{error}</p>
        <Button variant="success" type="submit">
          Register
        </Button>
        
      </Form>
     </div>
    </div>
  );
}

export default App;

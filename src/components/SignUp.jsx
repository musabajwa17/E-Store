import { useState } from 'react'
import { Header } from './Header'
import "./index.css"
import { useMutation } from '@tanstack/react-query';
import signup from '../services/SignUpApi';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();
    const [name , setName] = useState("");
    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("");
    const [userImage, setUserImage] = useState("");
    const {mutate} = useMutation({
        mutationFn: signup
    })
    function handleSignUp(e){
        e.preventDefault();
        mutate({name, password, email, userImage})
        setName("");
        setPassword("");
        setEmail("");
        setUserImage("");
        navigate("/login")
    }
  return (
    <div className='action1'>
      <Header />
      <div className='action2'>
      <h3 style={{color: 'white'}}>SignUp Form</h3>
      <form>
        <div className='action3'>
           <input value={name} type='text' placeholder='Enter Name' style={{padding: 3}} onChange={(e)=> setName(e.target.value)}/>
        </div>   
        <div className='action3'>
           <input value={email} type='text' placeholder='Enter Email' style={{padding: 3}} onChange={(e)=> setEmail(e.target.value)}/>
        </div>         
        <div className='action3'>
            <input value={password} type='password' placeholder='Enter password' style={{padding: 3}} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className='action3'>
            <input value={userImage} type='file'  style={{padding: 3}} onChange={(e)=> setUserImage(e.target.value)}/>
        </div>
        <div className='signup'>
            <button onClick={handleSignUp}>SignUp</button>
        </div>
        </form>
      </div>
    </div>
  )
}
export default SignUp

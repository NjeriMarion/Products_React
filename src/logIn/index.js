import React ,{useState} from 'react';
import './style.css'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('')
    console.log({username})

    const [password, setPassword] = useState('')
    console.log({password})

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const data = {
            username:username,
            password:password
        }
        try{
            const response = await fetch('https://dummyjson.com/auth/login',{
                method:'POST',
                headers :{
                    'content-Type' : 'application/json'
                },
                body:JSON.stringify(data)
            })
            const result = await response.json();
            console.log({result});
        }
        catch(error){
            console.log(error.message)
        }
    }
    return(
        <div >
            <form className='form' onSubmit={handleSubmit}>
                <h1>LogIn</h1>
                <input placeholder='Enter user name' type='text'
                onChange={(e)=>{setUsername(e.target.value)}}
                />
                <br/>
                <br/>
                <input placeholder='Enter password' type='password'
                onChange={(a) =>{setPassword(a.target.value)}}/>
                <br/>
                <br/>
                <Link to={`/product`}>
                <button type='submit' className ='login'>Login</button>
                    </Link>
            </form>
        </div>
    )
}

export default Login
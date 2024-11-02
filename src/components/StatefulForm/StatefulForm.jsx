import { useState } from "react";


const StatefulForm = () => {

    const [name,setName]=useState('Rojoni')
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const [error,setError]=useState('')

    const handleSubmit=e=>{
       e.preventDefault()
        if(password.length<6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('')
            console.log(name,email,password);
        }
       

    }


    const handleName=e=>{
        // console.log(e.target.value )
        setName(e.target.value)

    }


    const handleEmailChange=e=>{
        // console.log(e.target.value);
        setEmail(e.target.value)
    }


    const handlePasswordChange=e=>{
        // console.log(e.target.value );
        setPassword(e.target.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input
                onChange={handleName} value={name}
                type="text" name="name" placeholder="name"/>
                <br></br>
                <input 
                onChange={handleEmailChange}
                 type="email" name="email" id="" placeholder="email" />
                <br />
                <input
                onChange={handlePasswordChange}
                type="password" name="password" placeholder="password" required />
                <br></br>
                <input type="submit" value="Submit" />
            </form>

            {

                error&&<p>{error}</p>
            }
        </div>
    );
};

export default StatefulForm;
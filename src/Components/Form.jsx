import React, {useState} from 'react'

const Form = () => {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")


    const handleuser = (e)=>{
        const getUser= e.target.value 
        setUser(getUser)
    }

    const handleemail = (e)=>{
        const getEmail= e.target.value 
        setEmail(getEmail)
    }


    const handleSubmit=(e)=>{
        e.preventDefault()


        console.log(`get username ${user} ${email}`)
    }
  return (
    <>
    <form onSubmit={handleSubmit} >
    <label>User</label>
    <input type="text" placeholder='enter something' onChange={(e)=>handleuser(e)} />
    <label>email</label>
    <input type="text" placeholder='enter something' onChange={(e)=>handleemail(e)} />
    <button>Click</button>
    </form>
    </>
  )
}

export default Form
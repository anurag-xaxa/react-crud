import React, {useState} from "react";

export default function Login() {
    const [params, setParams] = useState({})


const handleChange = (e) => {
    const {name, value} = e.target;

    setParams(prev=> {
        return {
            ...prev, [name]:value
        }
    })
}


function handleSubmit() {
    console.log(params)
}

return(
    <div className="card">
        <div className="form">
            <div className="title">
                <p>Login</p>
            </div>
            <div className="space"></div>
            <div>
                <label>Email : </label>
                <input type="email" name="email" value={params.email} onChange={handleChange}/>
            </div>
            <div>
                <label>Password : </label>
                <input type="password" name="password" value={params.password} onChange={handleChange}/>
            </div>
            <div>
                <button onClick={handleSubmit}>Login</button>
            </div>

        </div>

    </div>
)
}
import React from "react";
import EntryForm from "./EntryForm"
function Login(){
    return (<div className="flex flex-col items-center justify-center h-screen" >
        <img src={require('./Logo.png')} className="w-40" alt="login from" />
        <EntryForm />
    </div>)
}

export default Login;
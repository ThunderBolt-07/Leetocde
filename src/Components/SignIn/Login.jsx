import React from "react";
import EntryForm from "./EntryForm"
function Login(){
    return (<div className="flex flex-col items-center" >
        <img src={require('./Logo.png')} className="w-40" />
        <EntryForm />
    </div>)
}

export default Login;
import React from "react";

function EntryForm(){
    return (<div className="w-full max-w-xs ">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="http://localhost:4000/LogIn" method="post" >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        
      </div>
      <div className="flex items-center justify-between">
        <button value="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-3  rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>

        
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/resetPassword">
          Forgot Password?
        </a>
      </div>
    </form>
    <p className="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
    </p>
  </div>)
}

export default EntryForm;
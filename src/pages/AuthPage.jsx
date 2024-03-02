import React from "react";

function AuthPage(){
    return  <div className="section">
                <h1 className="error">Uh oh!</h1>
                <div className="page">"Oops! It seems like you don't have the necessary authority to edit this content.</div>
                <a className="back-home" href="/">Home is where the heart is.</a>
            </div>
}

export default AuthPage;
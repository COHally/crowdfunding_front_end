import React from "react";

function AuthPage(){
    return  <div class="section">
                <h1 class="error">Uh oh!</h1>
                <div class="page">"Oops! It seems like you don't have the necessary authority to edit this content.</div>
                <a class="back-home" href="/">Home is where the heart is.</a>
            </div>
}

export default AuthPage;
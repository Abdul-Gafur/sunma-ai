import React from "react";
import Main from "./main";

export default function Navbar(){
    return(
        
        <nav>
            <div className="main-nav">
                <h3>Sunma<span id="ai">AI</span></h3>
                <div className="nav-items">
                    <a>Features</a>
                    <a>Pricing</a>
                    <a>FAQ</a>
                    <a>AI of The Day</a>
                    <a>Affiliates</a>
                    <a><button id="btn">Create ChatGPT Bot</button></a>
                </div>
                
            </div>
        </nav>
    )
}
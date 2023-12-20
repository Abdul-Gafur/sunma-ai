import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';

export default function Main(){
    return(
        <div>
        <main className="main-div">
            <div className="hero-text">
                <h1>Custom AI Chatbot trained on your data</h1>
                <p>Create an AI chatbot powered by ChatGPT trained on your data and embed it on your website.</p>
                <a><button>Try ChatGPT Bot</button></a>
            </div>
            <div className="hero-image">
                <img src="../hero-image.webp"></img>
                <div className="hero-video">

                </div>
            </div>
        </main>
        <div className="features-main">
            <div className="features-div">
            <h2>Key Features</h2>
            <h5>This chatbot bot trained to answer questions about EmbedAI.
                Ask a question to get started.</h5>
                </div>
            <section className="section-div">
            <div className="card">
                <div className="card-title"><FontAwesomeIcon style={{height:'40px', padding:'8px'}} icon={faGear} /></div>
                <div className="card-body"><h4>AI Chatbot powered by ChatGPT</h4></div>
                <div className="card-footer">Train on files, websites and even on YouTube with ChatGPT</div>
            </div>
            <div className="card">
                <div className="card-title"><FontAwesomeIcon style={{height:'40px', padding:'8px'}} icon={faMicrochip} /></div>
                <div className="card-body"><h4>Customize look and feel</h4></div>
                <div className="card-footer">Use custom logos, colours and styling of your AI chatbot</div>
            </div>
            <div className="card">
                <div className="card-title"><FontAwesomeIcon style={{height:'40px', padding:'8px'}} icon={faTerminal} /></div>
                <div className="card-body"><h4>Share your AI chatbot</h4></div>
                <div className="card-footer">Share chatbot as chat bubble, embed code or a link</div>
            </div>
            <div className="card">
                <div className="card-title"><FontAwesomeIcon style={{height:'40px', padding:'8px'}} icon={faBug} /></div>
                <div className="card-body"><h4>A Multilingual chatbot</h4></div>
                <div className="card-footer">EmbedAI supports queries and responses in 100+ languages</div>
            </div>
            </section>
        </div>
        </div>
    )
}
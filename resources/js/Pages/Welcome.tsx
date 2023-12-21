import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Github, Linkedin, Twitter, X } from "lucide-react";
import { Button } from "@/Components/ui/button";
import Modal from "@/Components/modal";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const [demoModalShown, setDemoModalShown] = useState(false);
    return (
        <>
            <Head title="Welcome" />
            {/* <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-square bg-center bg-white dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"> */}
                <nav>
                    <div className="main-nav">
                        <h3>Sunma<span id="ai">AI</span></h3>
                        <div className="nav-items">
                            <a>Features</a>
                            <a>Pricing</a>
                            <a>FAQ</a>
                            <a>AI of The Day</a>
                            <a>Affiliates</a>
                            <a href="/login"><button id="btn">Create ChatGPT Bot</button></a>
                        </div>

                    </div>
                </nav>

                <div>
                    <main className="main-div">
                        <div className="hero-text">
                            <h1>Custom AI Chatbot trained on your data</h1>
                            <p>Create an AI chatbot powered by ChatGPT trained on your data and embed it on your website.</p>
                            <a href="/login"><button>Try ChatGPT Bot</button></a>
                        </div>
                        <div className="hero-image">
                            <img src="/hero-image.webp"></img>
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
                                <div className="card-title"><FontAwesomeIcon style={{ height: '40px', padding: '8px' }} icon={faGear} /></div>
                                <div className="card-body"><h4>AI Chatbot powered by ChatGPT</h4></div>
                                <div className="card-footer">Train on files, websites and even on YouTube with ChatGPT</div>
                            </div>
                            <div className="card">
                                <div className="card-title"><FontAwesomeIcon style={{ height: '40px', padding: '8px' }} icon={faMicrochip} /></div>
                                <div className="card-body"><h4>Customize look and feel</h4></div>
                                <div className="card-footer">Use custom logos, colours and styling of your AI chatbot</div>
                            </div>
                            <div className="card">
                                <div className="card-title"><FontAwesomeIcon style={{ height: '40px', padding: '8px' }} icon={faTerminal} /></div>
                                <div className="card-body"><h4>Share your AI chatbot</h4></div>
                                <div className="card-footer">Share chatbot as chat bubble, embed code or a link</div>
                            </div>
                            <div className="card">
                                <div className="card-title"><FontAwesomeIcon style={{ height: '40px', padding: '8px' }} icon={faBug} /></div>
                                <div className="card-body"><h4>A Multilingual chatbot</h4></div>
                                <div className="card-footer">EmbedAI supports queries and responses in 100+ languages</div>
                            </div>
                        </section>
                    </div>
                </div>

            {/* </div> */}

            <footer className="bg-white">
                <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
                            <a
                                href="https://github.com/"
                                className="w-6 h-6 transition fill-black hover:text-blue-500"
                            >
                                <span className="sr-only">github</span>
                                <Github
                                    className="w-5 h-5 md hydrated"
                                    aria-label="logo github"
                                />
                            </a>
                            <a
                                href="https://twitter.com/"
                                className="w-6 h-6 transition fill-black hover:text-blue-500"
                            >
                                <span className="sr-only">twitter</span>
                                <Twitter
                                    className="w-5 h-5 md hydrated"
                                    aria-label="logo twitter"
                                />
                            </a>
                            <a
                                href="https://linkedin.com/"
                                className="w-6 h-6 transition fill-black hover:text-blue-500"
                            >
                                <span className="sr-only">Linkedin</span>
                                <Linkedin
                                    className="w-5 h-5 md hydrated"
                                    role="img"
                                    aria-label="logo linkedin"
                                />
                            </a>
                        </span>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-base text-center text-gray-400">
                            <span className="mx-auto mt-2 text-sm text-gray-500">
                                Copyright © 2023
                                <a
                                    href="https://google.com"
                                    className="mx-2 text-blue-500 hover:underline"
                                    rel="noopener noreferrer"
                                >
                                    @SunmaAi
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
            </footer>

            <Modal
                show={demoModalShown}
                onClose={() => setDemoModalShown(false)}
            >
                <div className="flex justify-between px-4 pt-2">
                    <h3 className="font-bold">Demo</h3>
                    <button onClick={() => setDemoModalShown(false)}>
                        <X size={18} />
                    </button>
                </div>
                <iframe
                    width="650"
                    height="400"
                    className="mx-auto rounded-md my-3"
                    src="https://www.youtube.com/embed/2AR02P5-RQk?si=QfX2QzGGt3_ZZHW-"
                    title="Demo PDFPINTAR"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </Modal>
        </>
    );
}


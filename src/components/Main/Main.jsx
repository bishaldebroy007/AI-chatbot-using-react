import React from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini Clone</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Roy.</span></p>
                    <p>How Can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest me Beautiful places for trips.</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code.</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities our work retreat.</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept of Promises in React.</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here...' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini Clone may display inaccurate info, including about people, so doube-check the inforfation.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Main

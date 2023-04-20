import "./AboutContentStyles.css"
import {Link} from "react-router-dom";
import React from 'react'

export default function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a react front-end developer. I create
                responsive secure websites for my clients.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="img" alt="true" />
                </div>

                <div className="img-stack bottom">
                    <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

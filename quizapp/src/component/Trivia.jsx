import React from 'react'
import "../css/trivia.css"
const Trivia = () => {
    return (
        <div className = "trivia">
            <div className="question">what is your name </div>
            <div className="answers">
                <div className="answer wrong">Jaspreet</div>
                <div className="answer">I</div>
                <div className="answer">Me</div>
                <div className="answer">Myself</div>
            </div>
        </div>
    )
}

export default Trivia

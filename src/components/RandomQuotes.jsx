import React from "react";
import { Container } from "react-bootstrap"

const RandomQuote = () => {

    return (
        <Container>
            <div className="quote-container">
                <div className="quote-line"></div>
                <br />
                <div className="bottom">∫
                    <div className="author"></div>
                    <div className="share"></div>
                </div>
            </div>
        </Container>
    )
}

export default RandomQuote; 
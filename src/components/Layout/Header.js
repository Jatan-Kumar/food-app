import React from 'react'

import styled from 'styled-components'
import meal from '../../images/meals.jpeg'
import CartButton from '../Layout/CartButton'

const Container = styled.div`
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 5rem;
        background-color: #8a2b06;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        z-index: 10;
    }

    .main-image {
        width: 100%;
        height: 25rem;
        z-index: 0;
        overflow: hidden;
    }

    .main-image img {
        width: 110%;
        height: 100%;
        object-fit: cover;
        transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
    }
`

const Header = props => {
    return (
        <Container>
            <header className="header">
                <h1>Buy Food</h1>
                <CartButton/>
            </header>
            <div className="main-image">
                <img src={meal} alt="meal pic" className="main-image"/>
            </div>
        </Container>
    )
}

export default Header;
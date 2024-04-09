import React from 'react';
import styled from 'styled-components';
import Information from './Information';
import Squares from './Squares';
import RestartButton from './RestartButton';
import SwitchMode from './SwitchMode';


const TicTacToeGame = styled.div`
    {
        border: 1px solid black;
        padding: 4px;
    }

    display: flex;
    justify-content: center;
    background-color: #EEEEEE;
    padding: 20px;
    min-height: 100vh;
    box-sizing: border-box;

    .container {
        display: flex;
        flex-direction: column;
        & > *:not(:first-of-type) {
            margin-top: 4px;
    }
}

`;

const TicTacToe = () => {
    return (
        <TicTacToeGame className='background'>
            <div className="container">
                <information />
                <squares />
                <div className="actions">
                    <RestartButton />
                    <SwitchMode />
                </div>
            </div>
        </TicTacToeGame>
    );
};

export default TicTacToe;
import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

import './styles.css';

interface ILength {
    title: string;
    length: number;
    arrowUpHandler: VoidFunction;
    arrowDownHandler: VoidFunction;
}

const Session: React.FC<ILength> = ({ title, length, arrowUpHandler, arrowDownHandler }) => {
    
    return (
        <div className="length-container">
            <button className="arrow-key" onClick={arrowUpHandler}>
                <FiArrowUp />
            </button>
            <div className="length-data">
                <h3>{title}</h3>
                <div>{length} min</div>
            </div>
            <button className="arrow-key" onClick={arrowDownHandler}>
                <FiArrowDown />
            </button>
        </div>

    );
}

export default Session;
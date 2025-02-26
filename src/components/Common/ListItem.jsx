import React from "react";
import "../../styles/ListItem.css";

const ListItem = ({ rank, name, score }) => {
    return (
        <div className="list-item">
            <div className="list-content">
                <div className="list-left">
                    <span className={`rank rank-${rank}`}>{rank}위</span>
                    <span className="name">{name}</span>
                </div>
                <span className="score">{score}</span>
            </div>
        </div>
    );
};

export default ListItem;

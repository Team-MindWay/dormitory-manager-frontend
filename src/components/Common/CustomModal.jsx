import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../../styles/PenaltyFormModal.css";

const CustomModal = ({ title, data, onClose }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="penalty-modal-overlay" onClick={onClose}>
            <div className="penalty-modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="penalty-modal-header">
                    <h2 className="penalty-modal-title">{title}</h2>
                    <button className="penalty-close-btn" onClick={onClose}>×</button>
                </div>
                <div className="penalty-search-bar">
                    <input
                        type="text"
                        placeholder="방 호수, 이름, 학년 등을 검색해보세요"
                        className="penalty-search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="penalty-search-btn">
                        <FaSearch />
                    </button>
                </div>

                <div className="penalty-list-header">
                    <span className="penalty-header-room">호수</span>
                    <span className="penalty-header-name">이름</span>
                    <span className="penalty-header-score">점수</span>
                </div>

                <ul className="penalty-list">
                    {data.map((item, index) => (
                        <li key={index} className="penalty-item">
                            <div className="penalty-info">
                                <span className="penalty-room">{item.room}</span>
                                <span className="penalty-name">{item.name}</span>
                            </div>
                            <div className="penalty-score-wrapper">
                                <span className="penalty-score">{item.score}</span>
                                <span className="text2">점</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CustomModal;

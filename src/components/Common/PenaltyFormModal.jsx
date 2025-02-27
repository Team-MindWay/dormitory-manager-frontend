import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../../styles/PenaltyFormModal.css";

const penaltyData = [
    { room: "518호", name: "김재관", score: "7" },
    { room: "518호", name: "김재관", score: "7" },
    { room: "518호", name: "김재관", score: "7" },
    { room: "518호", name: "김재관", score: "7" },
];

const PenaltyFormModal = ({ onClose }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="penalty-modal-overlay" onClick={onClose}>
            <div className="penalty-modal-box" onClick={(e) => e.stopPropagation()}>
                {/* 내부 요소 감싸는 div 추가 */}
                <div className="penalty-modal-content">
                    {/* 모달 헤더 */}
                    <div className="penalty-modal-header">
                        <h2 className="penalty-modal-title">벌점 주기</h2>
                        <button className="penalty-close-btn" onClick={onClose}>×</button>
                    </div>

                    {/* 검색창 */}
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

                    {/* 벌점 리스트 */}
                    <ul className="penalty-list">
                        {penaltyData.map((penalty, index) => (
                            <li key={index} className="penalty-item">
                                <div className="penalty-info">
                                    <span className="penalty-room">{penalty.room}</span>
                                    <span className="penalty-name">{penalty.name}</span>
                                </div>
                                <span className="penalty-score">{penalty.score}점</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PenaltyFormModal;

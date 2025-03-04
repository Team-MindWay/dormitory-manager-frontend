import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useStudents } from "../../context/StudentContext";
import "../../styles/PenaltyFormModal.css";
import noResultImg from "../../assets/images/noresult.png"; // ✅ 이미지 import

const StudentSelectModal = ({ title, onClose, onSelect }) => {
    const { students } = useStudents(); // ✅ 학생 데이터를 Context API에서 가져오기
    const [searchTerm, setSearchTerm] = useState("");

    // ✅ 검색어에 따라 데이터 필터링 (실시간 검색 & 버튼 검색 함께 적용)
    const filteredData = students.filter(
        (item) =>
            item.room.toString().includes(searchTerm.toLowerCase()) || // ✅ 숫자형 room을 문자열로 변환
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // ✅ 버튼 클릭 시 현재 검색어 그대로 유지하면서 필터링 (재검색 기능)
    const handleSearch = () => {
        setSearchTerm((prev) => prev); // 값은 그대로 두고, 필터링 재적용
    };

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
                    <button className="penalty-search-btn" onClick={handleSearch}>
                        <FaSearch />
                    </button>
                </div>

                <div className="penalty-list-header">
                    <span className="penalty-header-room">호수</span>
                    <span className="penalty-header-name">이름</span>
                    <span className="penalty-header-score">점수</span>
                </div>

                {filteredData.length > 0 ? (
                    <ul className="penalty-list">
                        {filteredData.map((item, index) => (
                            <li key={index} className="penalty-item" onClick={() => onSelect(item)}> {/* 학생 선택 기능 추가 */}
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
                ) : (
                    <div className="penalty-no-result">
                        <img src={noResultImg} alt="검색 결과 없음" className="no-result-icon" />
                        <p className="no-result-text">없는 이름이에요!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentSelectModal;

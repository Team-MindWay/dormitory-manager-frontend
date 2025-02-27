// 벌점 주기, 학생 수정 버튼
import React from "react";
import "../../styles/ActionButtons.css";
import { FaClipboardList } from "react-icons/fa"; // 벌점 아이콘
import { FaUserEdit } from "react-icons/fa"; // 학생 수정 아이콘

const ActionButtons = () => {
    return (
        <div className="action-buttons">
            <button className="action-button">
                <FaClipboardList className="button-icon" />
                <span className="button-text">벌점 주기</span>
            </button>
            <button className="action-button">
                <FaUserEdit className="button-icon" />
                <span className="button-text">학생 수정</span>
            </button>
        </div>
    );
};

export default ActionButtons;

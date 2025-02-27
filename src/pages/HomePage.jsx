import React from "react";
import Header from "../components/Home/Header"; // ✅ 추가된 Header 컴포넌트
import RankingList from "../components/Home/RankingList";
import NoticeBoard from "../components/Home/NoticeBoard";
import ActionButtons from "../components/Home/ActionButtons";
import "../styles/HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page">
            {/* ✅ 상단 섹션: 현재 시간 & 버튼들 */}
            <div className="top-section">
                <Header /> {/* ✅ Header로 현재 시간과 사용자 정보 표시 */}
                <ActionButtons />
            </div>

            {/* ✅ 랭킹 & 공지사항을 가로로 정렬 */}
            <div className="content-section">
                <RankingList />
                <NoticeBoard />
            </div>
        </div>
    );
};

export default HomePage;

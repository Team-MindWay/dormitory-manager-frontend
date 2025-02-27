import React from "react";
import Header from "../components/Home/Header";
import RankingList from "../components/Home/RankingList";
import NoticeBoard from "../components/Home/NoticeBoard";
import ActionButtons from "../components/Home/ActionButtons";
import "../styles/HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="top-section">
                <Header />
                <ActionButtons />
            </div>
            <div className="content-section">
                <RankingList />
                <NoticeBoard />
            </div>
        </div>
    );
};

export default HomePage;

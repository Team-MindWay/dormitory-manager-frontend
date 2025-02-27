import React from "react";
import RankingList from "../components/Home/RankingList";
import NoticeBoard from "../components/Home/NoticeBoard";
import "../styles/HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page">
            <RankingList />
            <NoticeBoard />

        </div>
    );
};

export default HomePage;

import React from "react";
import RankingList from "./RankingList";
import "../../styles/RankingListContainer.css"; // 스타일 적용

const RankingListContainer = () => {
    return (
        <div className="ranking-list-container">
            <RankingList />
        </div>
    );
};

export default RankingListContainer;

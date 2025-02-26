import React from "react";
import ListItem from "../Common/ListItem";
import "../../styles/RankingList.css"; // 스타일 추가

const rankingData = [
    { rank: 1, name: "김재관", score: "7회" },
    { rank: 2, name: "김재관", score: "7회" },
    { rank: 3, name: "김재관", score: "7회" },
    { rank: 4, name: "김재관", score: "7회" },
];

const RankingList = () => {
    return (
        <div className="ranking-list">
            <h2>주간 랭킹</h2>
            <div className="ranking-header">
                <div>순위</div>
                <div>이름</div>
                <div>점수</div>
            </div>
            {rankingData.map((user, index) => (
                <ListItem key={index} rank={user.rank} name={user.name} score={user.score} />
            ))}
        </div>
    );
};

export default RankingList;

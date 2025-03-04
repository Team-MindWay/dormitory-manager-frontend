import React from "react";
import ListItem from "../Common/ListItem";
import { useStudents } from "../../context/StudentContext";
import "../../styles/RankingList.css";

const RankingList = () => {
    const { students } = useStudents(); //학생 데이터 불러오기

    // 점수를 기준으로 정렬된 랭킹 데이터 생성
    const sortedRanking = [...students].sort((a, b) => b.score - a.score);

    return (
        <div className="ranking-list">
            <h2>주간 랭킹</h2>
            <div className="ranking-header">
                <div>순위</div>
                <div>이름</div>
                <div>점수</div>
            </div>
            {sortedRanking.map((user, index) => (
                <ListItem key={user.id} rank={index + 1} name={user.name} score={`${user.score}회`} />
            ))}
        </div>
    );
};

export default RankingList;

import React, { createContext, useState, useContext } from "react";

// 1️⃣ Context 생성
const StudentContext = createContext();

// 2️⃣ Provider 설정 (전역 학생 데이터 관리)
export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([
        { id: 1, name: "김재관", room: "518호", score: 10, role: "일반 학생" },
        { id: 2, name: "이준호", room: "512호", score: 5, role: "기숙사 운영진" },
        { id: 3, name: "박민수", room: "505호", score: 8, role: "일반 학생" },
        { id: 4, name: "최유진", room: "530호", score: 6, role: "기숙사 운영진" },
    ]);

    // 학생 정보 업데이트 함수
    const updateStudent = (updatedStudent) => {
        setStudents((prevStudents) =>
            prevStudents.map((student) =>
                student.id === updatedStudent.id ? updatedStudent : student
            )
        );
    };

    return (
        <StudentContext.Provider value={{ students, updateStudent }}>
            {children}
        </StudentContext.Provider>
    );
};

// 3️⃣ useContext Hook을 사용하여 데이터 가져오기 쉽게 만들기
export const useStudents = () => useContext(StudentContext);

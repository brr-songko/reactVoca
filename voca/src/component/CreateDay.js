import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateDay() {
    const [days, setDays] = useState([]);
    const navigate = useNavigate();

    function addDay() {
            fetch(`http://localhost:3001/days`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day: days.length + 1
                }),
            }).then(res => {
                if(res.ok){
                    alert("생성이 완료되었습니다.");
                    navigate(`/`);
                }
            });
    }

    useEffect(() => {
        fetch("http://localhost:3001/days")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setDays(data);
        })
    }, []);

    return (
        <div>
            <h3>현재 점수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    );
}
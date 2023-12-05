"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import Payment from "./payment";
import Ticket from "./Ticket";

type VisitorType = {
    id: string;
    name: string;
    age: number;
    gender: string;
};

export default function Visitor() {
    const [visitorList, setVisitorList] = useState<VisitorType[]>();
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | "">(""); // 나이는 숫자 또는 빈 문자열
    const [gender, setGender] = useState<string>("male");

    const router = useRouter();

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value === "" ? "" : Number(event.target.value));
    };

    const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
    };

    const handleSubmit = useCallback(async () => {
        const visitorData = { name, age, gender };

        console.log("yeah");

        try {
            const response = await fetch("http://localhost:8002/visitor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(visitorData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // 서버로부터의 응답 처리
            const data = await response.json();
            console.log(data);
            router.refresh();
        } catch (error) {
            console.error("Submit failed:", error);
        }
    }, [name, age, gender, router]);

    async function handleDelete(id: string) {
        console.log("a124354y");
        try {
            const response = await fetch(`http://localhost:8002/visitor/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // 서버로부터의 응답 처리
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Submit failed:", error);
        } finally {
            router.refresh();
        }
    }

    useEffect(() => {
        async function fetchVisitorList() {
            const response = await fetch("http://localhost:8002/visitor");
            const visitorList = await response.json();
            setVisitorList(visitorList);
        }
        fetchVisitorList();
    }, [handleSubmit]);

    return (
        <div>
            <div className="mt-12">
                <h1 className="font-normal text-5xl">방문객 등록하기</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mt-4">
                        <input className="bg-gray-200" placeholder="이름" value={name} onChange={handleNameChange} />
                    </div>
                    <div className="mt-4">
                        <input type="number" className="bg-gray-200" placeholder="나이" value={age} onChange={handleAgeChange} />
                    </div>
                    <div className="mt-4">
                        <label>
                            <input type="radio" value="male" checked={gender === "male"} onChange={handleGenderChange} />
                            남성
                        </label>
                        <label>
                            <input type="radio" value="female" checked={gender === "female"} onChange={handleGenderChange} />
                            여성
                        </label>
                    </div>
                    <div className="mt-4">
                        <button type="submit" onClick={handleSubmit}>
                            전송
                        </button>
                    </div>
                </form>
            </div>
            <div className="mt-12 bg-slate-50">
                <h1 className="font-normal text-5xl">방문객 정보 조회/관리 (티켓 결제)</h1>
                {visitorList
                    ? visitorList.map((visitor: VisitorType, index: number) => {
                          return (
                              <div key={index} className="w-64 mt-4 border-t">
                                  <div className="flex gap-2">
                                      <div className="w-16">
                                          <p>{visitor.name}</p>
                                      </div>
                                      <div className="w-16">
                                          <p className="w-16">{visitor.age}세</p>
                                      </div>
                                      <div className="w-16">
                                          <p>{visitor.gender === "male" ? "남성" : "여성"}</p>
                                      </div>
                                      <div>
                                          <button onClick={() => handleDelete(visitor.id)}>삭제</button>
                                      </div>
                                  </div>
                                  <div className="bg-gray-200">
                                      <Payment userId={visitor.id} />
                                  </div>
                              </div>
                          );
                      })
                    : null}
            </div>
            <Ticket />
        </div>
    );
}

"use client";
import { useEffect, useState } from "react";

type EntryType = {
    payment_id: string;
    name: string;
    age: number;
    gender: "male" | "female";
    ticket_number: string;
    entry_time: Date | null;
    exit_time: Date | null;
    exit_status: Boolean | null;
};

export default function Ticket() {
    const [entryList, setEntryList] = useState<EntryType[]>();
    useEffect(() => {
        async function set() {
            const response = await fetch("http://localhost:8002/entry");
            const result = await response.json();
            console.log(result);
            setEntryList(result);
        }
        set();
    }, []);
    return (
        <div className="mt-12">
            <h1 className="font-normal text-5xl">티켓 관리</h1>
            <div>
                <div>
                    {entryList?.map((entry, index) => {
                        return (
                            <div key={index}>
                                <div className="flex gap-4">
                                    <p>{entry.name}</p>
                                    <p>{entry.age}세</p>
                                    <p>{entry.gender === "male" ? "남성" : "여성"}</p>
                                    <p>현재 {entry.exit_status ? "퇴장" : "입장"}한 상태입니다</p>
                                    <p>
                                        {entry.exit_status ? "퇴장" : "입장"} 시각 : {entry.entry_time && !entry.exit_time ? new Date(entry.entry_time).toLocaleString() : new Date(entry.exit_time).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

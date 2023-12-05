"use client";

import React, { ChangeEvent, useState } from "react";

export default function Payment({ userId }: { userId: string }) {
    const [cardNumber1, setCardNumber1] = useState<string>("");
    const [cardNumber2, setCardNumber2] = useState<string>("");
    const [cardNumber3, setCardNumber3] = useState<string>("");
    const [cardNumber4, setCardNumber4] = useState<string>("");
    const [customerType, setCustomerType] = useState<string>("student");

    const handleCardNumberChange = (part: number, event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        // 숫자만 입력받고, 최대 4자리까지 제한
        if (value.match(/^\d{0,4}$/)) {
            switch (part) {
                case 1:
                    setCardNumber1(value);
                    break;
                case 2:
                    setCardNumber2(value);
                    break;
                case 3:
                    setCardNumber3(value);
                    break;
                case 4:
                    setCardNumber4(value);
                    break;
                default:
                    break;
            }
        }
    };

    const handleCustomerTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCustomerType(event.target.value);
    };

    const handleSubmit = async () => {
        const fullCardNumber = `${cardNumber1}-${cardNumber2}-${cardNumber3}-${cardNumber4}`;
        console.log("Card Number:", fullCardNumber);
        await fetch("http://localhost:8002/ticket", {
            method: "POST",
            body: JSON.stringify({
                type: customerType,
                visitorId: userId,
                cardNumber: fullCardNumber,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    return (
        <div>
            <div className="flex gap-4">
                <input className="w-12 bg-blue-300" value={cardNumber1} onChange={(e) => handleCardNumberChange(1, e)} />
                <input className="w-12 bg-blue-300" value={cardNumber2} onChange={(e) => handleCardNumberChange(2, e)} />
                <input className="w-12 bg-blue-300" value={cardNumber3} onChange={(e) => handleCardNumberChange(3, e)} />
                <input className="w-12 bg-blue-300" value={cardNumber4} onChange={(e) => handleCardNumberChange(4, e)} />
            </div>
            <div>
                <label>
                    <input type="radio" value="student" checked={customerType === "student"} onChange={handleCustomerTypeChange} />
                    학생
                </label>
                <label>
                    <input type="radio" value="elder" checked={customerType === "elder"} onChange={handleCustomerTypeChange} />
                    노인
                </label>
            </div>
            <button onClick={handleSubmit}>티켓 구매</button>
        </div>
    );
}

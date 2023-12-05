import { randomUUID } from "crypto";
import knex from "../db/knex";

export const createPayment = async (visitorId: string, cardNumber: string, ticketSerialNumber: string) => {
    const data = {
        id: randomUUID(),
        visitor_id: visitorId,
        card_number: cardNumber,
        ticket_serial_number: ticketSerialNumber,
    };
    console.log(visitorId);
    return await knex.transaction(async (trx) => {
        const paymentId = await trx("payment").insert(data).returning("id");
        return paymentId;
    });
};

export const getPayment = async (paymentId: string) => {
    return knex("payment").where({ id: paymentId }).first();
};

export const updatePayment = async (paymentId: string, paymentData: any) => {
    return knex("payment").where({ id: paymentId }).update(paymentData);
};

export const deletePayment = async (paymentId: string) => {
    return knex("payment").where({ id: paymentId }).del();
};

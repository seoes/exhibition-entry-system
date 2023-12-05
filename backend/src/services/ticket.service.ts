import { randomUUID } from "crypto";
import knex from "../db/knex";
import * as U from "../utils";

export const createTicketType = async (type: string, price: number) => {
    return knex("ticket_type").insert({ type, price });
};

export const getTicketType = async (type: string) => {
    return knex("ticket_type").where({ type }).first();
};

export const createTicket = async (entryId: string, type: string) => {
    const data = {
        serial_number: U.generateSerialNumber(),
        entry_id: entryId,
        type,
    };
    await knex("ticket").insert(data).returning("*");
    return data.serial_number;
};

export const getTicket = async (serialNumber: string) => {
    return knex("ticket").where({ serial_number: serialNumber }).first();
};

export const updateTicket = async (serialNumber: string, ticketData: any) => {
    return knex("ticket").where({ serial_number: serialNumber }).update(ticketData);
};

export const deleteTicket = async (serialNumber: string) => {
    return knex("ticket").where({ serial_number: serialNumber }).del();
};

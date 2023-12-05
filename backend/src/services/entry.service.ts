import { randomUUID } from "crypto";
import knex from "../db/knex";

export const createEntry = async () => {
    const data = {
        id: randomUUID(),
        exit_status: false,
        entry_time: new Date(),
    };
    await knex("entry").insert(data);
    return data.id;
};

export const getEntry = async (id: string) => {
    return knex("entry").where({ id }).join("ticket", "entry.id", "=", "ticket.entry_id").select("entry.*", "ticket.serial_number", "ticket.type").first();
};

export const getAllEntry = async () => {
    return knex("payment").join("visitor", "payment.visitor_id", "=", "visitor.id").join("ticket", "payment.ticket_serial_number", "=", "ticket.serial_number").join("entry", "ticket.entry_id", "=", "entry.id").select("payment.id as payment_id", "visitor.name", "visitor.age", "visitor.gender", "ticket.serial_number as ticket_number", "entry.entry_time", "entry.exit_time", "entry.exit_status");
};

export const updateEntry = async (id: string, entryTime: Date, exitStatus: boolean, exitTime: Date) => {
    return knex("entry").where({ id }).update({
        entry_time: entryTime,
        exit_status: exitStatus,
        exit_time: exitTime,
    });
};

export const deleteEntry = async (id: string) => {
    return knex("entry").where({ id }).del();
};

export const visitorEnter = async (id: string) => {
    return knex("entry").update({ id, entry_time: new Date() });
};

export const visitorExit = async (id: string) => {
    return knex("entry").update({ id, exit_status: true, exit_time: new Date() });
};

import { randomUUID } from "crypto";
import knex from "../db/knex";

export const createEntry = async () => {
    const data = {
        id: randomUUID(),
        exitStatus: false,
    };
    await knex("entry").insert(data);
    return data.id;
};

export const getEntry = async (id: string) => {
    return knex("entry").where({ id }).join("ticket", "ticket_serial_number", "ticket.serial_number").first();
};

export const getAllEntry = async () => {
    return knex("entry").join("ticket", "entry.ticket_serial_number", "ticket.serial_number");
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

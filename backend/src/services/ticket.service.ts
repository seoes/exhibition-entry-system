import knex from "../db/knex";

export const createTicketType = async (typeData: any) => {
    return knex("ticket_type").insert(typeData);
};

export const getTicketType = async (type: string) => {
    return knex("ticket_type").where({ type }).first();
};

export const createTicket = async (ticketData: any) => {
    return knex("ticket").insert(ticketData);
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

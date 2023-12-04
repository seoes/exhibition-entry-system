import knex from "../db/knex";

export const createEntry = async (id: string) => {
    return knex("entry").insert({ id });
};

export const getEntry = async (id: string) => {
    return knex("entry").where({ id }).first();
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

export const updateExitStatus = async (id: string, exitStatus: boolean) => {
    return knex("entry").where({ id }).update({
        exit_status: exitStatus,
        exit_time: knex.fn.now(),
    });
};

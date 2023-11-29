import knex from "../db/knex";

export const createEntry = async (entryData: any) => {
    return knex("entry").insert(entryData);
};

export const getEntry = async (entryId: string) => {
    return knex("entry").where({ id: entryId }).first();
};

export const updateEntry = async (entryId: string, entryData: any) => {
    return knex("entry").where({ id: entryId }).update(entryData);
};

export const deleteEntry = async (entryId: string) => {
    return knex("entry").where({ id: entryId }).del();
};

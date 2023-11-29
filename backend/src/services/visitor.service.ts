import knex from "../db/knex";

export const createVisitor = async (visitorData: any) => {
    return knex("visitor").insert(visitorData);
};

export const getVisitor = async (visitorId: string) => {
    return knex("visitor").where({ id: visitorId }).first();
};

export const updateVisitor = async (visitorId: string, visitorData: any) => {
    return knex("visitor").where({ id: visitorId }).update(visitorData);
};

export const deleteVisitor = async (visitorId: string) => {
    return knex("visitor").where({ id: visitorId }).del();
};

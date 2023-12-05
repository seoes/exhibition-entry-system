import { randomUUID } from "crypto";
import knex from "../db/knex";

export const createVisitor = async (name: string, age: number, gender: string) => {
    const id = randomUUID();
    return knex("visitor").insert({ id, name, age, gender });
};

export const getAllVisitor = async () => {
    return knex("visitor");
};

export const getVisitor = async (id: string) => {
    return knex("visitor").where({ id }).first();
};

export const updateVisitor = async (id: string, name?: string, age?: number, gender?: string) => {
    let data = {};
    if (name) data = { ...data, name };
    if (age) data = { ...data, age };
    if (gender) data = { ...data, gender };
    console.log(data);
    return await knex("visitor").where({ id }).update(data);
};

export const deleteVisitor = async (id: string) => {
    return await knex("visitor").where({ id }).del();
};

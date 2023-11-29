import knex from "../db/knex";

export const createPayment = async (paymentData: any) => {
    return await knex.transaction(async (trx) => {
        const paymentId = await trx("payment").insert(paymentData).returning("id");
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

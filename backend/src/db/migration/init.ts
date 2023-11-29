import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    // 방문객 테이블 생성
    await knex.schema.createTable("visitor", (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
        table.string("name").notNullable();
        table.integer("age");
        table.enu("gender", ["male", "female"]);
    });

    // 티켓 테이블 생성
    await knex.schema.createTable("payment", (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
        table.uuid("visitor_id").references("id").inTable("visitor");
        table.string("ticket_serial_number").references("serial_number").inTable("ticket");
        table.dateTime("created_at").defaultTo(knex.fn.now());
        table.string("card_number");
    });

    // 출입 기록 테이블 생성
    await knex.schema.createTable("entry", (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
        table.dateTime("entry_time");
        table.boolean("exit_status");
        table.dateTime("exit_time");
    });

    await knex.schema.createTable("ticket_type", (table) => {
        table.string("type").primary();
        table.integer("price");
    });

    // 결제 테이블 생성
    await knex.schema.createTable("ticket", (table) => {
        table.string("serial_number").primary();
        table.uuid("entry_id").references("id").inTable("entry");
        table.string("type").references("type").inTable("ticket_type");
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("ticket");
    await knex.schema.dropTableIfExists("ticket_type");
    await knex.schema.dropTableIfExists("entry");
    await knex.schema.dropTableIfExists("payment");
    await knex.schema.dropTableIfExists("visitor");
}

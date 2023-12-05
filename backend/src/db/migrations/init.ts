import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    // 방문객 테이블 생성
    await knex.schema.createTableIfNotExists("visitor", (table) => {
        table.uuid("id").primary();
        table.string("name").notNullable();
        table.integer("age");
        table.enu("gender", ["male", "female"]);
    });

    // 출입 기록 테이블 생성
    await knex.schema.createTableIfNotExists("entry", (table) => {
        table.uuid("id").primary();
        table.dateTime("entry_time");
        table.boolean("exit_status");
        table.dateTime("exit_time");
    });

    // 티켓 타입 테이블 생성
    await knex.schema.createTableIfNotExists("ticket_type", (table) => {
        table.string("type").primary();
        table.integer("price");
    });

    // 티켓 테이블 생성
    await knex.schema.createTableIfNotExists("ticket", (table) => {
        table.string("serial_number").primary();
        table.uuid("entry_id").references("id").inTable("entry");
        table.string("type").references("type").inTable("ticket_type");
    });

    // 결제 테이블 생성
    await knex.schema.createTableIfNotExists("payment", (table) => {
        table.uuid("id").primary();
        table.uuid("visitor_id").references("id").inTable("visitor");
        table.string("ticket_serial_number").references("serial_number").inTable("ticket");
        table.dateTime("created_at").defaultTo(knex.fn.now());
        table.string("card_number");
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("ticket");
    await knex.schema.dropTableIfExists("ticket_type");
    await knex.schema.dropTableIfExists("entry");
    await knex.schema.dropTableIfExists("payment");
    await knex.schema.dropTableIfExists("visitor");
}

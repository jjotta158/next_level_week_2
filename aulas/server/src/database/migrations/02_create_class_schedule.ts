import knex from 'knex'
export async function up(knex: knex) {
  return knex.schema.createTable("class_schedules", (table) => {
    table.increments("id").primary();
    table.string("subject").notNullable();
    table.decimal("cost").notNullable();
    table.integer("week_day").notNullable();
    table.integer("from").notNullable();
    table.integer("to").notNullable();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: knex) {
  return knex.schema.dropTable("class_schedules");
}

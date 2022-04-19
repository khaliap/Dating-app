/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("user_id");
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("city");
    table.string("state");
    table.string("smoking_preference");
    table.string("pronouns");
    table.string("looking_for");
    table.integer("age");
    table.text("bio");
    table.string("profile_pic");
    table.string("ethnicity");
    table.string("religion");
    table.boolean("children");
    table.boolean("pets");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

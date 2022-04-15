/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('interest',(table)=>{
        table.increments('interest_id')
        table.boolean('sports')
        table.boolean('shopping')
        table.boolean('dancing')
        table.boolean('traveling')
        table.boolean('vegan')
        table.boolean('pets')
        table.boolean('kids')
       
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('interest')
};
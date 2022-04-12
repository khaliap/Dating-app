/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Intrest',(table)=>{
        table.integer('intrest_id').increments
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
    return knex.schema.dropTable('Intrest')
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Users',(table)=>{
        table.integer('user_id').increments
        table.integer('location_id').increments
        table.integer('intrest_id').increments
         table.string('first_name').notNullable
         table.string('pronouns')
         table.integer('age').notNullable
         table.string('bio')
         table.string('profile_pic')
         table.string('religion')

    })
    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Users')
  
};

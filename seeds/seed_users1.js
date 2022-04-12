/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('login').del()
  await knex('login').insert([
    {email: 'khaliaParris@gmail.com', password: 'khaliaP'},
    {email: 'janMorales@gmail.com', password: 'janM'},
    {email: 'elijahAgyemang@gmail.com', password: 'eliahA'},
    {email: 'jasonPadilla@gmail.com', password: 'jasonP'}
  ]);
};

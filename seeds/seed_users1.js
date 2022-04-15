/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('login').del()
  await knex('login').insert([
    {email: 'khaliaParris@gmail.com', password: 'khaliaP', name: 'khalia Parris'},
    {email: 'janMorales@gmail.com', password: 'janM', name: 'Jan Morales'},
    {email: 'elijahAgyemang@gmail.com', password: 'eliahA', name: 'Elijah Agye'},
    {email: 'jasonPadilla@gmail.com', password: 'jasonP', name: 'Jason Padilla'}
  ]);
};

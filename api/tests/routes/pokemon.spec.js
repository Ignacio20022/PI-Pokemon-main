/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const request = require('supertest');

const agent = session(app);
const pokemon = {
  id: 1,
  name: 'Pikachu',
};

describe('Pokemon routes', function() {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', function() {
      it('should get 200', (done) => {
      agent.get('/pokemons')
      .expect(200)
      }
    ).timeout(10000)
  });
});
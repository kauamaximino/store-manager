const sinon = require('sinon')
const { expect } = require('chai')

const connection = require('../../../models/connection')
const models = require('../../../models')

describe('Testa a função getAll da camada models', () => {

  const mockDB = [
    [
    { id: 1, name: "Martelo de Thor" },
    { id: 2, name: "Traje de encolhimento" },
    { id: 3, name: "Escudo do Capitão América" },
  ]
]

  before(async () => {
    sinon.stub(connection, 'execute').resolves(mockDB)
  })

  after(() => {
    connection.execute.restore()
  })

  it('MODELS - Retorna todos os produtos quando acessar a rota GET /products', async () => {
    const response = await models.getAllProducts()
    expect(response).to.be.equal(mockDB)
  })

})

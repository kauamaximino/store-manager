const sinon = require("sinon");
const { expect } = require("chai");

const connection = require("../../../models/connection");
const services = require("../../../services");

describe("Testa a função getAll da camada models", () => {
  const mockDB = [
  [
    { id: 1, name: "Martelo de Thor" },
    { id: 2, name: "Traje de encolhimento" },
    { id: 3, name: "Escudo do Capitão América" },
  ]
];

  before(async () => {
    sinon.stub(connection, "execute").resolves(mockDB);
  });

  after(() => {
    connection.execute.restore();
  });

  it("SERVICES - GET/products, retorna um array com todos os produtos", async () => {
    const response = await services.getAllProducts();
    expect(response).to.be.a("array");
  });

  it("SERVICES - GET/products, retorna um array com objetos dentro",async () => {
    const response = await services.getAllProducts();
    expect(response[0]).to.be.a("object");
    }
  );
});

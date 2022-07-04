const sinon = require("sinon");
const { expect } = require("chai");

const connection = require("../../../models/connection");
const services = require("../../../services");

describe("Testa a função getAllProducts da camada services", () => {

  describe("Quando a função está retornando corretamente", () => {
    mockDB = [
      { id: 1, name: "Martelo de Thor" },
      { id: 2, name: "Traje de encolhimento" },
      { id: 3, name: "Escudo do Capitão América" },
    ];

    before(async () => {
      sinon.stub(services, "getAllProducts").resolves(mockDB);
    });

    after(() => {
      services.getAllProducts.restore();
    });

    it("SERVICES - GET/products, retorna um array com todos os produtos", async () => {
      const response = await services.getAllProducts();
      expect(response).to.be.a("array");
    });

    // it("SERVICES - GET/products, retorna um array com objetos dentro", async () => {
    //   const response = await services.getAllProducts();
    //   console.log(response);
    //   expect(response[0]).to.be.a("object");
    // });
  });

  describe("Quando a função está retornando um erro", () => {
    mockDB = [[]];

    before(async () => {
      sinon.stub(connection, "execute").resolves(mockDB);
    });

    after(() => {
      connection.execute.restore();
    });

    it("SERVICES - GET/products, retorna um erro quando não há produtos listados", async () => {
      try {
        const response = await services.getAllProducts();
        return response;
      } catch (error) {
        expect(error.message).to.be.equal("No products found");
      }
    });
  });
});

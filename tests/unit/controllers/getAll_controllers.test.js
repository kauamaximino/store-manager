const sinon = require("sinon");
const { expect } = require("chai");

const services = require("../../../services");
const controllers = require("../../../controllers");

describe("Testa a função getAllProducts da camada controlllers", () => {
  const response = {};
  const request = {};

  const mockDB = [
    { id: 1, name: "Martelo de Thor" },
    { id: 2, name: "Traje de encolhimento" },
    { id: 3, name: "Escudo do Capitão América" },
  ];

  describe("Quando a função está funcionando corretamente", () => {
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(services, "getAllProducts").resolves(mockDB);
    });

    after(() => {
      services.getAllProducts.restore();
    });

    it("CONTROLLERS - Retorna status 200 e os produtos listados", async () => {
      await controllers.getAllProducts(request, response);
      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(mockDB)).to.be.true;
    });
  });

  describe("Quando a função está com funcionamento incorreto", () => {
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(services, "getAllProducts").throws();
    });

    after(() => {
      services.getAllProducts.restore();
    });

    it("CONTROLLERS - Retorna status 404", async () => {
      await controllers.getAllProducts(request, response);
      expect(response.status.calledWith(404)).to.be.true;
    });
  });
});

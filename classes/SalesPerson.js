const { Employee } = require("./Employee");

class SalesPerson extends Employee{
    #totalSales
    constructor(name, position, salary, clients = []){
        super(name, position, salary);
        this.clients = clients;
        this.#totalSales = 0;
    }
    getSalesNumber(){
        return this.#totalSales;
    }
    makeSale(amount){
        this.#totalSales += amount
    }
}

module.exports = {
    SalesPerson,
}
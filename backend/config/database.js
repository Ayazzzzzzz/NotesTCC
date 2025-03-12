import { Sequelize } from "sequelize";

const db = new Sequelize("tugas_ptcc1", "root", "palupi99", {
    host:"34.59.118.252",
    dialect:"mysql"
})

export default db;


const Sequelize = require("sequelize");
const sequelize = new Sequelize("imenikWT", "root", "", {
   host: "localhost",
   dialect: "mysql",
   logging:false
});
const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.imenik=sequelize.import(__dirname+'/imenik.js');
//db.imenik=require(__dirname, '/imenik.js');
db.adresar=sequelize.import(__dirname+'/adresar.js');
//db.adresar=require(__dirname, '/adresar.js');


db.adresar.belongsTo(db.imenik,{foreignKey:'idKontakt'});
db.adresar.belongsTo(db.imenik,{foreignKey:'idPoznanik'});

module.exports = db;
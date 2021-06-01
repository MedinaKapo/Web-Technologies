const Sequelize=require("sequelize");

module.exports=function(sequelize,DataTypes){
    const Adresar=sequelize.define("Adresar",{

        idKontakt: {
            type: Sequelize.INTEGER
         },
         idPoznanik: {
            type: Sequelize.INTEGER
         }
      }, {
         timestamps: false,
         freezeTableName: true
      });
         return Adresar;
      }
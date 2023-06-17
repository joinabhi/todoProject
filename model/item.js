const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const ToDo=sequelize.define('item',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:Sequelize.STRING,
    description:{
        type:Sequelize.STRING,
        allowNull:false
    }
   
});
module.exports=ToDo;
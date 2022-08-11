module.exports = (sequelize, dataTypes) => {
    let alias = "orderly_turn";
       let cols= {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: dataTypes.INTEGER,
                allowNull: false
            },
            code: {
                type: dataTypes.STRING,
                allowNull: false
            },
            box: {
                type: dataTypes.TEXT(),
                allowNull: false,
                isEmail: true
            },
            created_at:{
                type: dataTypes.DATE
            },
            updated_at:{
                type: dataTypes.DATE
            },
            deleted_at:{
                type: dataTypes.DATE
            }

        }
        let config ={
            tableName : "orderly_turn",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at", 
        }
    let orderly_turn = sequelize.define (alias,cols,config);
    return orderly_turn;
}

module.exports = (sequelize, dataTypes) => {
        let alias = "users";
       let cols = {
            id: {
                type:dataTypes.INTERGER,
                primaryKey: true,
                autoIncrement:true
            },
            name: {
                type: dataTypes.STRING,
        
            },
            email: {
                type: dataTypes.TEXT(),
                isEmail: true,
            },
            password: {
                type: dataTypes.TEXT(),
        
            },
            created_at:{
                type: dataTypes.DATE
            },
            updated_at:{
                type: dataTypes.DATE
            }

        }
        let config ={
            tableName : "users",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at", 
        }
    let users = sequelize.define (alias,cols.config);
    return users;
}

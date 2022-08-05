module.exports = (sequelize, dataTypes) => {
    const users = sequelize.define("users",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: dataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(25),
                allowNull: false
            },
            email: {
                type: DataTypes.TEXT(),
                allowNull: false,
                isEmail: true
            },
            password: {
                type: DataTypes.TEXT(),
                allowNull: false
            },
            created_at:{
                type: DataTypes.DATE
            },
            updated_at:{
                type: DataTypes.DATE
            }

        },
        {
            tableName : "users",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at", 
        }
    );
    return users;
}

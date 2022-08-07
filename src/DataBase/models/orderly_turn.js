module.exports = (sequelize, dataTypes) => {
    const orderly_turn = sequelize.define("orderly_turn",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: dataTypes.INTEGER,
                allowNull: false
            },
            code: {
                type: DataTypes.STRING(4),
                allowNull: false
            },
            box: {
                type: DataTypes.TEXT(),
                allowNull: false,
                isEmail: true
            },
            created_at:{
                type: DataTypes.DATE
            },
            updated_at:{
                type: DataTypes.DATE
            },
            deleted_at:{
                type: DataTypes.DATE
            },

        },
        {
            tableName : "orderly_turn",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at", 
        }
    );
    return orderly_turn;
}

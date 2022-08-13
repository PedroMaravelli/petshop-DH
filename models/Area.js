

module.exports = (sequelize, DataTypes) => {
    const area = sequelize.define('Area', {
        tipo: DataTypes.STRING,
    },
    {
        tableName: 'areas',
        timestamps: false
    })
    return area
}
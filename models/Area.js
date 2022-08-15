

module.exports = (sequelize, DataTypes) => {
    const area = sequelize.define('Area', {
        tipo: DataTypes.STRING,
    },
    {
        tableName: 'areas',
        timestamps: false
    })
    area.associate = (models) => {
        area.hasMany(models.Curso, {
            foreignKey: 'area_id',
            
        })
    }
    return area
}
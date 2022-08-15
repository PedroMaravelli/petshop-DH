module.exports = (sequelize, DataTypes) => {
    const curso = sequelize.define('Curso', {
        nome: DataTypes.STRING,
        area_id: DataTypes.STRING
    },
    {
        tableName: 'cursos',
        timestamps: false
    })

    curso.associate = (models) =>{
        curso.belongsTo(models.Area, {
            foreignKey: 'area_id'
        })
    }
    return curso
}
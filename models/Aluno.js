module.exports = (sequelize, DataTypes) => {
    const aluno = sequelize.define('Aluno', {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING
    },
    {
        tableName: 'alunos',
        timestamps: false
    })
    return aluno
}
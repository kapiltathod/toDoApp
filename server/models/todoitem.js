module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false
    },

    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },

    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {})

  TodoItem.associate = function (models) {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE'
    })

    TodoItem.hasMany(models.Comment, {
      foreignKey: 'todoItemId'
    })
  }
  return TodoItem
}

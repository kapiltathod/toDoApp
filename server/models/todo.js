module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {});


  Todo.associate = function(models) {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
    });

    Todo.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return Todo;
};
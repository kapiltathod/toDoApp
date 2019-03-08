module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
     id: {
      type: DataTypes.INTEGER,
      allowNull: false,
     },

     comment: {
      type: DataTypes.INTEGER,
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
   },{});


  Comment.associate = function(models) {
    Comment.belongsTo(models.TodoItem, {
      foreignKey: 'todoItemId',
      onDelete: 'CASCADE',
    });

    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Comment;
};
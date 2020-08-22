module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      secure_password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };
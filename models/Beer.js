module.exports = function (sequelize, Sequelize) {
  let Beer = sequelize.define("Beer", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false
    },
    abv: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false,
      validation: {
        isDecimal: true,
        isNumeric: true
      }
    },
    price: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false,
      validation: {
        isDecimal: true,
        isNumeric: true
      }
    },
    style: {
      type: Sequelize.STRING,
      allowNull: false
    },
    glass: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tapped_date: Sequelize.DATE,
    up_next: {
      type: Sequelize.BOOLEAN,
      default: false
    }
  });

  return Beer;
}
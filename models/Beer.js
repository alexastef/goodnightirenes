module.exports = function (sequelize, DataTypes) {
  const Beers = sequelize.define("Beers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validation: {
        isDecimal: true,
        isNumeric: true
      }
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validation: {
        isDecimal: true,
        isNumeric: true
      }
    },
    style: {
      type: DataTypes.STRING,
      allowNull: false
    },
    glass: {
      type: DataTypes.STRING,
      allowNull: false
    },
    up_next: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, {
    timestamps: true,
    createdAt: false,
    updatedAt: "tapped_date"
  });

  return Beers;
}
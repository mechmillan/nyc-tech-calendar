const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/calender", {
  logging: false
});

const Event = db.define(
  "event",
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    start: {
      type: Sequelize.DATE,
      allowNull: false
    },
    end: {
      type: Sequelize.DATE,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM("open", "closed")
    }
  },
  {}
);

module.exports = {
  Event
};

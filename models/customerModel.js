import Sequelize from 'sequelize'
import db from '../config/db.js'

const Customer = db.define('customer', {
    // id: {
    //     type: Sequelize.INTEGER, allowNull: false, primaryKey: true
    // },
    firstName: {
        type: Sequelize.STRING, allowNull: false
    },
    lastName: {
        type: Sequelize.STRING, allowNull: false
    },
    address: {
        type: Sequelize.STRING, allowNull: false
    },
    postcode: {
        type: Sequelize.STRING, allowNull: false
    },
    mobile: {
        type: Sequelize.NUMBER, allowNull: false
    },


},
);


(async () => {
    await db.sync()
})();

export default Customer
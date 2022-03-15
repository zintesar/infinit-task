import Sequelize from 'sequelize'
import bcrypt from 'bcryptjs'
import db from '../config/db.js'

const User = db.define('user', {
    // id: {
    //     type: Sequelize.INTEGER, allowNull: false, primaryKey: true
    // },
    userName: {
        type: Sequelize.STRING, allowNull: false
    },
    password: {
        type: Sequelize.STRING, allowNull: false
    },
    firstName: {
        type: Sequelize.STRING, allowNull: false
    },
    lastName: {
        type: Sequelize.STRING, allowNull: false
    },
},
    {
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            }
        },
        instanceMethods: {
            matchPassword: (password) => {
                return bcrypt.compareSync(password, this.password);
            }
        }
    }
);

User.prototype.matchPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


(async () => {
    await db.sync()
})();

export default User
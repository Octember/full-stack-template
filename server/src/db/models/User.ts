
import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'


interface UserAttributes {
    id: number;
    firstName: string;
    lastName: string;
}
export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOutput extends Required<UserAttributes> { }


class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number
    public firstName!: string
    public lastName!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  })
  
  export default User;
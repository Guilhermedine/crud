import { sequelize } from '../../config/database';
import { Model, DataTypes } from 'sequelize';



class User extends Model {
  id;
  password_hash;
  name;
  avatar;
  cpf;
}
User.init({
  id: {
    type: DataTypes.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV1,
  },
  cpf: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password_hash: {
    type: DataTypes.STRING,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  biography: {
    type: DataTypes.STRING,
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
  deleted_at: {
    type: DataTypes.DATE,
  },
}, {
  tableName: "users",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  deletedAt: "deleted_at",
  sequelize: sequelize
});




export { User }


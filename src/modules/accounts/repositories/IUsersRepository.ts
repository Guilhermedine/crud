import { User } from "../../../database/models/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO"


interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>
  list(): Promise<User[]>;
  findById(id: string): Promise<User>
  validateCPF(cpf: string)
}

export { IUsersRepository }
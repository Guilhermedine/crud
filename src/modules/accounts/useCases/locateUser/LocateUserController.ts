import { Response, Request } from "express"
import { container } from "tsyringe";
import { LocateUserUseCase } from "./LocateUserUseCase";


class LocateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const locateUserUseCase = container.resolve(LocateUserUseCase);
    const account = await locateUserUseCase.execute({ id });

    return res.json(account)
  }
}


export { LocateUserController }
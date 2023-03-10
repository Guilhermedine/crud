import { Request, Response } from "express"
import { SellCarUseCase } from "./SellCarUseCase"
import { container } from "tsyringe"




class SellCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { solded_by, status, sale_value } = req.body;

    const sellCarUseCase = container.resolve(SellCarUseCase);
    const carSelled = await sellCarUseCase.execute(id, {
      solded_by,
      status,
      sale_value
    })

    return res.json({ message: carSelled }).status(201)
  }
}

export { SellCarController }

import { Router, Request, Response } from "express";
import * as usersService from '../services/userService'
import { CreateUserDTO } from '../services/userService';


const usersRouter = Router();

usersRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await usersService.getById(id)

    if (result instanceof Error) {
        return res.status(500).send({ error: result.message })
    }
    return res.status(200).send(result)


})
usersRouter.put('/:id', () => {
    // update ingredient
})
usersRouter.delete('/:id', () => {
    // delete ingredient
})
usersRouter.post('/', (async (req: Request, res: Response) => {

    const payload: CreateUserDTO = req.body
    const result = await usersService.create(payload)

    if (result instanceof Error) {
        return res.status(500).send({ error: result.message })
    }
    return res.status(200).send(result)
}))

export { usersRouter }
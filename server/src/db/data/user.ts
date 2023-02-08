
import { Op } from 'sequelize'
import { User } from '../models'
import { UserOutput, UserInput } from '../models/User'

export const create = async (payload: UserInput): Promise<UserOutput | Error> => {
    try {
    console.log("Creating user w body", payload)

        const ingredient = await User.create(payload)
        return ingredient;
    } catch (error) {
        console.error("Failed to create user", error)
        return new Error("Failed to create user");
    }
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    const ingredient = await User.findByPk(id)
    if (!ingredient) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updatedIngredient = await (ingredient as User).update(payload)
    return updatedIngredient
}

export const getById = async (id: number): Promise<UserOutput | Error> => {
    const ingredient = await User.findByPk(id)
    if (!ingredient) {
        // @todo throw custom error
        return new Error('user not found')
    }
    return ingredient
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedIngredientCount = await User.destroy({
        where: { id }
    })
    return !!deletedIngredientCount
}

export type UserFilters = {
    isDeleted?: boolean;
    includeDeleted?: boolean;
}

export const getAll = async (filters?: UserFilters): Promise<UserOutput[]> => {
    return User.findAll({
        where: {
            ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
    })
}
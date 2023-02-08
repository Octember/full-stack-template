import * as dataLayer from '../../db/data/user'
import {UserInput, UserOutput} from '../../db/models/User'
import {UserFilters} from '../../db/data/user';

export type CreateUserDTO = {
    firstName: string;
    lastName: string;
}

export const create = (payload: CreateUserDTO): Promise<UserOutput | Error> => {
    return dataLayer.create(payload)
}
export const update = (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    return dataLayer.update(id, payload)
}
export const getById = (id: number): Promise<UserOutput | Error> => {
    return dataLayer.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return dataLayer.deleteById(id)
}
export const getAll = (filters: UserFilters): Promise<UserOutput[]> => {
    return dataLayer.getAll(filters)
}
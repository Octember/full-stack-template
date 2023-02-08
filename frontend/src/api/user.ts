import {ApiBaseUrl} from './config';


export async function getUser(id: number) {
    const response = await fetch(ApiBaseUrl + `/users/${id}`)
    
    return response.json();
}
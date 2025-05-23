import axios from "axios";
import { getCookie } from "./cookie";

export function useService(endpoint) {
    const url = import.meta.env.VITE_API_URL + `/${endpoint}`;
    const token = getCookie('accessToken');

    const config = {
        Authrization: token ?? ''
    }

    return {
        post: (body) => {
            return axios.post(url, body, {
                headers: {
                    ...config
                }
            });
        },
        find: () => {
            return axios.get(url + '?$sort[createdAt]=-1', {
                headers: {
                    ...config
                }
            });
        }
    };
}
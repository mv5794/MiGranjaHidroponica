//LINK: // https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16

import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {StatusCodes} from "http-status-codes";
import {useRouter} from "vue-router";
import tokenService from "@/services/storageService/token.services";

abstract class ApiService {
    _baseUrl: string;
    _fullBaseApiURL: string;
    router: any;

    constructor(config: { baseUrl: string }) {
        this.router = useRouter();
        this._baseUrl = config.baseUrl;
        //TODO: set this with .env variables
        this._fullBaseApiURL = process.env.VUE_APP_BASE_URL_API+this._baseUrl;
        //TODO:
        //this.setHeader();
    }

    setHeader() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${tokenService.getToken()}`
    }

    removeHeader() {
        axios.defaults.headers.common = {}
    }

    async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
        return axios.get(this._fullBaseApiURL + url, config)
            .then((response: AxiosResponse) => {
                return response
            })
            .catch((error: AxiosError) => {
                if (error.response?.status == StatusCodes.UNAUTHORIZED) {
                    tokenService.removeToken();
                    this.router.push("/login")
                }
                return Promise.reject(error.response)
                // return error.response
            })
    }


    async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
        return axios.post(this._fullBaseApiURL + url, data, config)
            .then((response: AxiosResponse) => {
                return response
            })
            .catch((error: AxiosError) => {
                if (error.response?.status == StatusCodes.UNAUTHORIZED) {
                    tokenService.removeToken();
                    this.router.push("/login")
                }
                return Promise.reject(error.response)
                // return error.response
            })
    }

    async patch(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
        return axios.patch(this._fullBaseApiURL + url, data, config)
            .then((response: AxiosResponse) => {
                return response
            })
            .catch((error: AxiosError) => {
                if (error.response?.status == StatusCodes.UNAUTHORIZED) {
                    tokenService.removeToken();
                    this.router.push("/login")
                }
                return Promise.reject(error.response)
            })

    }
}
export default ApiService

import ApiService from "@/services/apiService";
import {ILoginForm, IResLogin, IResProfile} from "@/services/interfaces/IAuth";
import {StatusCodes} from "http-status-codes";

export default class AuthService extends ApiService {
    constructor() {
        //TODO: i guess endpint is gonna be 'auth'
        super({baseUrl: '/auth'});
    }

    async doLogin(p_payload: ILoginForm): Promise<IResLogin | null> {
        const m_data: ILoginForm = p_payload;
        const rs = await this.post('/login', m_data)
        if (rs.status == StatusCodes.CREATED)
            return (rs).data;
        else
            return null;
    }

    async getProfile(): Promise<IResProfile> {
        return (await this.get('/profile')).data
    }
}

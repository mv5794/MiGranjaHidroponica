import {IProfile} from "@/models/user/IUser";
import AuthService from "@/services/auth.services";
import tokenService from "@/services/storageService/token.services";
import {ILoginForm, IResLogin} from "@/services/interfaces/IAuth";

export class User {
    private _m_name: string | null = null;
    private _m_password: string | null = null;
    private _m_profile: IProfile | null = null;

    m_apiService = new AuthService();


    get m_name(): string | null {
        return this._m_name;
    }

    set m_name(value: string | null) {
        this._m_name = value;
    }

    get m_password(): string | null {
        return this._m_password;
    }

    set m_password(value: string | null) {
        this._m_password = value;
    }

    get m_profile(): IProfile | null {
        return this._m_profile;
    }

    set m_profile(value: IProfile | null) {
        this._m_profile = value;
    }

    public getAccessToken(): string | null{
        return tokenService.getToken();
    }


    getIsAuthenticated(): boolean{
        return tokenService.getToken() != null && tokenService.getToken() !== "";
    }

    async doLogin(p_loginForm: ILoginForm): Promise<boolean> {
        const rsLogin: IResLogin | null = await this.m_apiService.doLogin({
            email: p_loginForm.email,
            password: p_loginForm.password,
        })
        if (rsLogin !== null){
            this.m_password = null;
            tokenService.saveToken(rsLogin.access_token)
            // this.m_tokenService.saveRefreshToken(rsLogin.access_token)
            this.m_apiService.setHeader()
            // ApiService.setHeader(rsLogin.access_token)
            return true
        }

        return false
    }

    async logout(): Promise<void> {
        tokenService.removeToken()
    }
}

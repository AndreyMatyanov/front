import http from "../http-common"
import IUser from "../interfaces/IUser";
import IService from "../interfaces/IService";
import IRegData from "../interfaces/IRegData";


class SiteDataService {
    getAllUsers() {
        return http.get<Array<IUser>>("/users/")
    }

    getAllServices() {
        return http.get<Array<IService>>("/service/")
    }

    createReg(data: IRegData) {
        return http.post<IRegData>("/appointments/", data)
    }
}

export default new SiteDataService();
import axios from "axios";
import Config from "./Config";
// import reactLocalStorage from 'reactjs-localstorage'
// import Config from './Config.js'

class AuthHandler {
    static login(username, password, callback) {
        axios.post(Config.loginUrl, { username: username, password: password })
            .then((response) => {
                if (response.status === 200) {
                    window.localStorage.setItem('token', response.data['token'])
                    callback({ error: false, message: "Login Successful" })
                }
            })
            .catch((error) => {
                callback({ error: true, message: "Login Fail" })
            })
    }

    static loggedIn() {
        if (window.localStorage.getItem("token")) {
            return true;
        }
        else {
            return false;
        }
    }

    static getLoginToken() {
        return localStorage.getItem("token")
    }

    static logoutUser() {
        window.localStorage.removeItem("token")
    }
    static checkTokenExpiry() {
        var token = this.getLoginToken()
        var expire = true
        var jwt = JSON.parse(atob(token.split(".")[1]))
        if (jwt.exp && Number.isFinite(jwt.exp)){
            expire = jwt.exp * 1000.00005;
            console.log("expire", expire)
        } else {
            expire = false;
        }
        if (!expire) {
            return false;
        }
        return Date.now() > expire;
    }
}
export default AuthHandler
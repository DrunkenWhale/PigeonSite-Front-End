import axios from "axios";
axios.defaults.baseURL = url;

export default {};

export var url = "http://localhost:5000/api"

//   /auth/login
export function login(mailbox, password) {
    const form = new FormData();
    form.append("mailbox", mailbox);
    form.append("password", password);
    return axios.post("/auth/login", form, {
        timeout: 3000,
        responseType: "json",
    });
}

//   /auth/register
export function register(mailbox, user_name, password) {
    const form = new FormData();
    form.append("mailbox", mailbox);
    form.append("username", user_name);
    form.append("password", password);
    return axios.post("/auth/register", form, {
        timeout: 3000,
        responseType: "json",
    });
}

export function getFileList() {
    var tokenString = window.localStorage.getItem("token");
    return axios({
        method: "get",
        baseURL: url,
        url: "/file/list",
        headers: {
            token: tokenString,

        },
        config: {

            timeout: 3000,
            responseType: "json",
        }
    });
}
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

//   /file/list
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

//   /file/download
export function download(filename) {
    var tokenString = window.localStorage.getItem("token")
    axios({
        method: "get",
        baseURL: url,
        url: "/file/download?file_name=" + filename,
        headers: {
            token: tokenString
        },
        responseType: 'blob',
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
    });
    return null
}
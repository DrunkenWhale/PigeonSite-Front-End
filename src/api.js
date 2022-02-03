import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api";

export default {}

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
    form.append("username", user_name)
    form.append("password", password)
    return axios.post("/auth/register", form, {
        timeout: 3000,
        responseType: "json",
    });
}
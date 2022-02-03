import axios from "axios";
// import { ElMessage } from "element-plus";
axios.defaults.baseURL = "http://localhost:5000/api";

//   /auth/login
export default function login(mailbox, password) {
    const form = new FormData();
    form.append("mailbox", mailbox);
    form.append("password", password);
    return axios.post("/auth/login", form, {
        timeout: 7000,
        responseType: "json",
    });

}
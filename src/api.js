import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export default function login(mailbox, password) {
    const form = new FormData();
    form.append("mailbox", mailbox);
    form.append("password", password);
    axios
        .post("/auth/login", form, {
            timeout: 7000,
            responseType: "json",
        })
        .then((res) => {
            window.localStorage.setItem("token", res.data.token);
        })
        .catch((err) => {
            const errorCode = err.response.status
            if (errorCode === 700) {
                console.log("password wrong")
            } else if (errorCode === 702) {
                console.log("illegal param")
            }
        });
}
import axios from "axios";
import { ElMessage } from "element-plus";
axios.defaults.baseURL = url;

export default {};

export var url = "http://localhost:5000/api";

//   /auth/login
export function login(mailbox, password) {
    const form = new FormData();
    form.append("mailbox", mailbox);
    form.append("password", password);
    return axios.post(url + "/auth/login", form, {
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
    return axios.post(url + "/auth/register", form, {
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
        },
    });
}

//   /file/download
export function download(filename) {
    var tokenString = window.localStorage.getItem("token");
    axios({
        method: "get",
        baseURL: url,
        url: "/file/download?file_name=" + filename,
        headers: {
            token: tokenString,
        },
        responseType: "blob",
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
    });
    return null;
}

//   /file/delete
export function delete_(filename) {
    var tokenString = window.localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file_name", filename);
    axios({
        method: "delete",
        baseURL: url,
        url: "/file/delete",
        data: formData,
        headers: {
            token: tokenString,
        },
        responseType: "json",
    }).then(() => {
        ElMessage("Delete File Succeed");
    });
    return null;
}

// GET  /sex/

export function downloadPicByName(picName) {
    var tokenString = window.localStorage.getItem("token");
    return axios({
            method: "get",
            baseURL: url,
            url: "/sex/?pic=" + picName,
            headers: {
                token: tokenString,
            },
            responseType: "json",
        })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", picName);
            document.body.appendChild(link);
            link.click();
        })
        .catch(() => {
            ElMessage("下载失败！ 检查网络或重新登陆！");
        });
}

// POST /sex/

export function getArtifactPicList() {
    return getArtifactPicListImpl(null);
}

export function getArtifactRandomPic() {
    return getArtifactPicListImpl(114514);
}

function getArtifactPicListImpl(random) {
    var tokenString = window.localStorage.getItem("token");
    var formData = new FormData();
    if (random != null) {
        formData.append("random", true);
    }
    return axios({
        method: "post",
        baseURL: url,
        url: "/sex/",
        data: formData,
        headers: {
            token: tokenString,
        },
        responseType: "json",
    });
}
// url path
export function getSpecialPicURLByName(picName) {
    return url + "/sex/?pic=" + picName;
}

// PUT /sex/

export function expendArtifactPicRepository() {
    var tokenString = window.localStorage.getItem("token");
    axios({
        method: "put",
        baseURL: url,
        url: "/sex/",
        headers: {
            token: tokenString,
        },
        timeout: "300000",
        responseType: "json",
    });
    return null;
}
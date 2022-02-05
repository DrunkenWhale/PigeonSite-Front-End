<template>
  <el-card shadow="hover" body-style="background-color:rgb(87, 197, 102,0.9)">
    <div id="mr-round">
      <el-input
        placeholder="Mailbox"
        size="large"
        v-model="mailbox_input"
      ></el-input>
    </div>
    <div id="mr-round">
      <el-input
        placeholder="Username"
        size="large"
        v-model="username_input"
      ></el-input>
    </div>
    <div id="mr-round">
      <el-input
        placeholder="Password"
        size="large"
        v-model="password_input"
        show-password
      ></el-input>
    </div>
    <div id="mr-round" style="margin-left: 80%;" >
      <el-button @click="regist" size="large" type="primary" color="rgba(20, 143, 180, 0.589)" plain> Submit </el-button>
    </div>
  </el-card>
</template>

<script>
    import {
        register
    } from '../api.js'
    import {
        ElMessage
    } from 'element-plus'

    export default {
        name: "Register",
        data() {
            return {
                mailbox_input: "",
                username_input: "",
                password_input: "",
            };
        },
        methods: {
            regist: function() {
                var result = register(this.mailbox_input, this.username_input, this.password_input);
                result.then((res) => {
                    window.localStorage.setItem("token", res.data.token);
                    ElMessage("Register Succeed!");
                    this.$router.push("/login");
                })
                result.catch((err) => {
                    const errorCode = err.response.status;
                    if (errorCode === 701) {
                        ElMessage("User Exist");
                    } else if (errorCode === 702) {
                        ElMessage("Illegal Input");
                    } else {
                        ElMessage("Unknown Error, Please check out network");
                    }
                });
                this.mailbox_input = "";
            }
        }
    };
</script>


<style>
    #mr-round {
        margin-top: 37px;
        margin-bottom: 37px;
        margin-left: 10%;
        margin-right: 10%;
    }
</style>
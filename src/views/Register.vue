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
      <el-button size="large" type="primary" color="rgba(20, 143, 180, 0.589)" plain> Submit </el-button>
    </div>
  </el-card>
</template>
<script>
    export default {
        name: "Register",
        data() {
            return {
                mailbox_input: "",
                username_input: "",
                password_input: "",
            };
        },
    };
</script>
>

<style>
    #mr-round {
        margin-top: 37px;
        margin-bottom: 37px;
        margin-left: 10%;
        margin-right: 10%;
    }
</style>
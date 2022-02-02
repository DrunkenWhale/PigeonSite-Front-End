<template>
  <el-card
    shadow="hover"
    body-style="background-color:rgba(56, 194, 160, 0.801)"
  >
    <div id="mr-round">
      <el-input
        placeholder="Mailbox"
        size="large"
        v-model="mailbox_input"
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
    <div id="mr-round" style="margin-left: 80%">
      <el-button size="large" text="black" type="success" @click="login" plain>
        Login
      </el-button>
    </div>
  </el-card>
</template>

<script>
    import login from '../api.js'
    export default {
        name: "Login",
        data() {
            return {
                mailbox_input: "",
                password_input: "",
            };
        },
        methods: {
            login: function() {
                login(this.mailbox_input, this.password_input);
                this.password_input = ""
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
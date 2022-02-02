<template>
  <el-card>
    <div id="mr-round">
      <el-input placeholder="Mailbox" size="large" v-model="mailbox_input"></el-input>
    </div>
    <div id="mr-round">
        <el-input placeholder="Username" size="large" v-model="username_input"></el-input>
      </div>
      <div id="mr-round">
        <el-input placeholder="Password" size="large" v-model="password_input"></el-input>
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
                password_input: ""
            }
        },
    }
</script>>

<style>
    #mr-round {
        margin-top: 17px;
        margin-bottom: 17px;
        margin-left: 10%;
        margin-right: 10%;
    }
</style>
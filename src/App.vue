<template>
  <el-container>
    <el-aside>
      <el-scrollbar>
        <el-menu
          active-text-color="#ffd04b"
          background-color="rgb(37, 149, 194)"
          text-color="#fff"
        >
          <el-sub-menu index="1">
            <template #title> Auth </template>
<el-menu-item index="1-1" @click="login">Login</el-menu-item>
<el-menu-item index="1-2" @click="register">Register</el-menu-item>
</el-sub-menu>
<el-sub-menu index="2">
    <template #title>NetDisk</template>
    <el-menu-item index="2-1" @click="upload">Upload</el-menu-item>
    <el-menu-item index="2-2" @click="download">Download</el-menu-item>
</el-sub-menu>
<el-sub-menu>
    <template #title>Artifact</template>
    <el-menu-item index="3-1" @click="artifact">Pic</el-menu-item>
</el-sub-menu>
</el-menu>
</el-scrollbar>
</el-aside>
<el-container>

    <el-main>
        <router-view />
        <!-- main -->
    </el-main>
</el-container>
</el-container>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: "App",
        components: {
            //  HelloWorld
        },
        methods: {
            login: function login() {
                this.$router.push("/login");
            },
            register: function register() {
                this.$router.push("/register");
            },
            upload: function upload() {
                this.$router.push("/upload");
            },
            download: function download() {
                this.$router.push("/download");
            },
            artifact: function artifact() {
                this.$router.push("/artifact")
            }
        },
    };
</script>

<style></style>
<template>
  <el-container>
    <el-aside>
      <el-scrollbar>
        <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff">
          <el-sub-menu index="1">
            <template #title> Auth </template>
            <el-menu-item index="1-1">Login</el-menu-item>
            <el-menu-item index="1-2">Register</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>NetDisk</template>
            <el-menu-item index="2-1">Upload</el-menu-item>
            <el-menu-item index="2-2">Download</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-main> </el-main>
  </el-container>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    //  HelloWorld
  },
};
</script>

<style></style>

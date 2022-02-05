<template>
  
    <el-scrollbar height="87vh" style="overflow-x: hidden;"><el-card>
      <el-row :gutter="37">
        <div v-for="file in file_list" :key="file">
          <FileFrame :fileName="file" :fileSize="12875451" />
        </div>
      </el-row>  </el-card>
    </el-scrollbar>

</template>

<script>
    import FileFrame from "../components/FileFrame.vue";

    export default {
        name: "Download",
        components: {
            FileFrame,
        },
        data() {
            return {
                file_list: [
                    "test.scala",
                    "test.scala",
                    "test.scala",
                    "test.scala",
                    "test.scala",
                    "test.scala",
                    "test.scala",
                    "test.scala",
                    "tessaddasasdt.scala",
                    "test.scala",
                    "test.scala"
                ],
            };
        },
        methods: {},
    };
</script>

<style>

</style>
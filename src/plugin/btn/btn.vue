<template>
    <div class="red">
        color {{val || '无'}}
    </div>
    <div>
        <el-button>确定</el-button>
        <el-button type="primary">主要按钮</el-button>
    </div>
</template>

<script>
  export default {
    name: "MyBtn",
    props: ['val'],
    data() {
      return {}
    }
  }
</script>

<style scoped>
.red{
    color: red;
}
</style>
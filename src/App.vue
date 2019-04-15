<template>
    <div class="red">
        color {{val || '无'}}
    </div>
</template>

<script>
  export default {
    name: "app",
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
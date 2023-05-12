<script>
export default {};
</script>
<template>
  <div id="VUEpage">
    <h1>VUE</h1>
  </div>
</template>
<style lang="scss" scoped>
#VUEpage {
  width: 100%;
  height: 500px;
  background-color: #5f83a0;
  text-align: center;
}
#VUEpage::before {
  position: relative;
  display: inline-block;
  content: "";
  width: 0;
  height: 100%;
  vertical-align: middle;
}
h1 {
  position: relative;
  display: inline-block;
  color: #fff;
  vertical-align: middle;
}
</style>
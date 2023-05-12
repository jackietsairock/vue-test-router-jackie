<script>
export default {};
</script>
<template>
  <div id="RWDpage">
    <h1>RWD</h1>
  </div>
</template>
<style lang="scss" scoped>
#RWDpage {
  width: 100%;
  height: 500px;
  background-color: #5f9da0;
  text-align: center;
}
#RWDpage::before {
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
<template>
  <div id="h5-wrapper" >
    <keep-alive :include="['Layout']">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}
</style>
<style lang="scss" scoped>
</style>

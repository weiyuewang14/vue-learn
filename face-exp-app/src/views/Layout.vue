<template>
<div class="h5-wrapper">
  <div class="content">
    <router-view></router-view>
  </div>
  <nav class="tab-bar">
    <router-link to="/article">面经</router-link>
    <router-link to="/collocation">收藏</router-link>
    <router-link to="/like">喜欢</router-link>
    <router-link to="/user">我的</router-link>
  </nav>
</div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style lang="scss" scoped>
.h5-wrapper{
  .content{
    padding-bottom: 40px;
  }
  .tab-bar{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    border-top:solid 1px #cccccc;
    background-color: #f8f5f5;
    a{
      //display: block;
      flex: 1;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      color: #333;
    }
    .router-link-active{
      color: #f5a64a;
    }
  }
}


</style>

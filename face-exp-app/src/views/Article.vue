<template>
  <div class="h5-wrapper">
    <div class="article"
         v-for="(item, index) in articleList" :key="item.id"
         @click="$router.push(`/detail/${item.id}`)"
    >
      <div class="top">
        <div class="icon">
          <img :src="item.creatorAvatar" alt="头像">
        </div>
        <div class="top-content">
          <div class="title"> {{ item.stem }}</div>
          <div class="user-time">
            {{ item.creatorName }} | {{ item.createdAt }}
          </div>
        </div>
      </div>
      <div class="content">
        {{ item.content }}
      </div>
      <div class="bottom">
        点赞 {{ item.likeCount }} | 浏览 {{ item.views }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Article",
  data() {
    return {
      articleList: []
    };
  },
  async created() {
    const res = await axios.get("https://mock.boxuegu.com/mock/3083/articles");
    if (res.status === 200) {
      this.articleList = res.data.result.rows;
    } else {
      console.log(res.data.message);
    }
    /*axios.get("/api/articleList").then(res => {
      if (res.data.code === 200) {
        this.articleList = res.data.articleList;
      }
    });*/
  }
};
</script>

<style lang="scss" scoped>
.h5-wrapper {
  background-color: #f5f5f5;

  .article {
    padding: 12px;
    margin: 10px;
    border-radius: 5px;
    background-color: #fff;

    .top {
      display: flex;
      height: 60px;

      .icon {
        width: 30px;
        height: 30px;
        //background: url('../assets/image/book.png') no-repeat;
        //background-size: cover;
        margin-right: 16px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .top-content {
        .title {
          font-size: 17px;
          font-weight: bold;
          overflow: hidden; //多出的隐藏
          text-overflow: ellipsis; //多出部分用...代替
          display: -webkit-box; //定义为盒子模型显示
          -webkit-line-clamp: 1; //用来限制在一个块元素显示的文本的行数
          -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
        }

        .user-time {
          margin: 3px 0;
          font-size: 14px;
          color: #8b8a8a;
        }

      }
    }

    .content {
      font-size: 17px;
      overflow: hidden; //多出的隐藏
      text-overflow: ellipsis; //多出部分用...代替
      display: -webkit-box; //定义为盒子模型显示
      -webkit-line-clamp: 2; //用来限制在一个块元素显示的文本的行数
      -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
      margin-bottom: 6px;
    }

    .bottom {
      margin: 3px 0;
      font-size: 14px;
      color: #8b8a8a;
    }
  }

}
</style>

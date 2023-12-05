<template>
  <div class="h5-wrapper" v-if="articleDetail.id">
    <nav class="nav">
      <span class="back" @click="$router.back()">&lt;</span>
      <span class="page-title">面经详情</span>
    </nav>
    <div class="detail">
      <div class="top">
        <p class="title">{{ articleDetail.stem }}</p>
        <div class="time-view-like">
          {{ articleDetail.createdAt }} | {{ articleDetail.views }} 浏览量 | {{ articleDetail.likeCount }} 点赞数
        </div>
        <div class="user">
          <img
              :src="articleDetail.creatorAvatar"
              alt="头像">
          <span>{{ articleDetail.creatorName }}</span>
        </div>
      </div>
      <main class="content">
        {{ articleDetail.content }}
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleDetail",
  data() {
    return {
      articleDetail: {}
    };
  },
  async created() {
    const id = this.$route.params.id;
    this.articleDetail = {};
    await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${id}`).then(res => {
      if (res.status === 200) {
        this.articleDetail = res.data.result;
      }
    }).catch(error => {
      console.log(error);
    });
  }
};
</script>

<style lang="scss" scoped>
.h5-wrapper {
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  .nav {
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    //margin-bottom: 14px;
    border-bottom: 1px solid #cccccc;
    text-align: center;

    .back {
      float: left;
    }

    .page-title {
      font-weight: bold;
    }
  }

  .detail {
    flex: 1;
    overflow-y: scroll;
    margin-top: 10px;

    .top {
      .title {
        font-size: 20px;
      }

      .time-view-like {
        margin: 3px 0;
        font-size: 14px;
        color: #8b8a8a;
      }

      .user {
        display: flex;
        height: 30px;
        line-height: 30px;
        margin: 5px 0;

        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>

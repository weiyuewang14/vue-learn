// 引用 Mock
const Mock = require("mockjs");

export const userData = Mock.mock("/api/articleList", "get", {
  // 属性 list 的值是一个数组，随机生成 1 到 10 个元素
  "articleList|1-10": [
    {
      "id": "@id",
      "title": "@ctitle(4,8)",
      "userName": "@cname",
      "date": "@date(yyyy-MM-dd)",
      "content": "@cword(10,80)",
      "likeNum": "@integer(0, 1000)",
      "viewNum": "@integer(0, 1000)",
    }
  ],
  code: 200,
  message: "面经数据",
});

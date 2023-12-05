import axios from "axios";

export default {
  get(url, config){
    axios.get(url,config).then(res => {
      if (res.code === 200) {
        this.articleList = res.articleList;
      }
    }).catch(error => {
      console.log(error);
    });
  }
};


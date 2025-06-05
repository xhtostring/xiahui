"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      newsList: [],
      // 存储资讯列表数据
      page: 1,
      // 当前页码
      pageSize: 10,
      // 每页加载数量
      loading: false,
      // 是否正在加载中
      finished: false
      // 是否已加载全部数据
    };
  },
  onLoad() {
    this.loadNewsList();
  },
  // uni-app 的触底事件
  onReachBottom() {
    this.loadMore();
  },
  methods: {
    // 导航到指定页面
    goToPage(url) {
      common_vendor.index.navigateTo({
        url
      });
      console.log("导航到页面:", url);
    },
    // 导航到操作指引页面
    goToOperationGuide() {
      common_vendor.index.navigateTo({
        url: "/pages/operationGuide/operationGuide"
        // 替换为你实际的操作指引页面路径
      });
      console.log("导航到操作指引页面");
    },
    loadNewsList() {
      if (this.loading || this.finished) {
        return;
      }
      this.loading = true;
      console.log("加载第", this.page, "页数据...");
      setTimeout(() => {
        const startIndex = (this.page - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        const newData = this.generateMockNews(startIndex, endIndex);
        if (newData.length < this.pageSize) {
          this.finished = true;
        }
        this.newsList = this.newsList.concat(newData);
        this.page++;
        this.loading = false;
        console.log("数据加载完成，当前列表长度：", this.newsList.length);
      }, 1500);
    },
    loadMore() {
      this.loadNewsList();
    },
    generateMockNews(startIndex, endIndex) {
      const newsData = [];
      const totalNews = 35;
      const predefinedTitles = [
        "远离明火！夏季驱蚊灭蚊喷雾千万要注意",
        "消防试验演示 揭示卡式炉使用关键风险点",
        "高温天气里哪些物品不能放置在车内",
        "使用蚊香要知道的消防安全知识",
        "电瓶车充电安全需警惕，这些事项要注意",
        "如何正确使用灭火器？种类和方法全解析",
        "高层住宅火灾逃生指南，关键时刻能救命",
        "消防安全知识进校园，提高学生自救能力",
        "春季防火需警惕，农村火灾易发季",
        "加油站防火安全规范，保障生命财产安全"
      ];
      for (let i = startIndex; i < endIndex && i < totalNews; i++) {
        newsData.push({
          id: i + 1,
          // 资讯ID
          // 从预设标题数组中，根据索引或者随机选择一个标题
          // 这里使用取模运算让标题循环出现
          title: predefinedTitles[i % predefinedTitles.length],
          cover: `/static/images/cover_${i % 10 + 1}.png`,
          source: `来源: 新闻机构 ${Math.floor(i / 10) + 1}`,
          date: `2023-0 ${Math.floor(i / 7) + 1}-${i % 28 + 1}`
        });
      }
      return newsData;
    },
    goToNewsDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/newsDetail/newsDetail?id=${id}`
      });
      console.log("点击了资讯，ID:", id);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o(($event) => $options.goToPage("/pages/weibaoService/weibaoService")),
    b: common_vendor.o(($event) => $options.goToPage("/pages/weibaoLaoban/weibaoLaoban")),
    c: common_vendor.o(($event) => $options.goToPage("/pages/xiaofangGuanli/xiaofangGuanli")),
    d: common_vendor.o(($event) => $options.goToPage("/pages/zhihuiJiating/zhihuiJiating")),
    e: common_vendor.o(($event) => $options.goToPage("/pages/jichengshang/jichengshang")),
    f: common_vendor.o(($event) => $options.goToPage("/pages/anzhuang/anzhuang")),
    g: common_vendor.o(($event) => $options.goToPage("/pages/diaoshi/diaoshi")),
    h: common_vendor.o(($event) => $options.goToPage("/pages/yunwei/yunwei")),
    i: common_vendor.o((...args) => $options.goToOperationGuide && $options.goToOperationGuide(...args)),
    j: common_vendor.f($data.newsList, (item, index, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.source),
        d: common_vendor.t(item.date),
        e: item.id,
        f: common_vendor.o(($event) => $options.goToNewsDetail(item.id), item.id)
      };
    }),
    k: $data.loading
  }, $data.loading ? {} : {}, {
    l: $data.finished
  }, $data.finished ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/download1/HBuilderX_uniapp/FireSafe_uniapp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

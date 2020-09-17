const app = getApp()
import config from '../../config';

Page({
  data: {
    value: '',
    recommend: [],
    carousel: [],
    hotWorks: []
  },

  onChange(e) {
    // this.setData({
    //   value: e.detail
    // });
  },

  onSearch() {
    if (this.data.value) {
      wx.showToast({
        title: '搜索99：' + this.data.value,
        icon: 'none'
      });
    }
  },

  tagCarousel: function (e) {
    console.log(e.target.url);
  },

  onLoad: function () {
    let that = this;
    wx.request({
      url: config.home.home,
      success: function (res) {
        that.setData({
          recommend: res.data.data.recommend,
          carousel: res.data.data.carousel
        });
      }
    })

    wx.request({
      url: config.home.hot,
      success: function (res) {
        that.setData({
          hotWorks: res.data.data
        });
      }
    })

  },

  navigateToSpecials: function (event) {
    let item = event.currentTarget.dataset.item;
    wx.switchTab({
      url: '/pages/specials/index',
      success: function (res) {
        console.log('成功')
      },
      fail: function (res) {
        console.log('失败')
      }
    })

  },

  navigateToSearch: function (event) {
    wx.navigateTo({
      url: '/pages/search/index',
    })
  },

  navigateToClassify: function (event) {
    let item = event.currentTarget.dataset.item;
    wx.navigateTo({
      url: '/pages/classify/index',
    })
  }

})

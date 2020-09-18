const app = getApp()
import config from '../../config';
import Page from '../page';

Page({
  data: {
    value: '',
    recommend: [],
    carousel: [],
    hotWorks: []
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


})

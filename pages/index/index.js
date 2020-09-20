const app = getApp()
import config from '../../config';
import Page from '../page';

Page({
  data: {
    page: 1,
    showNextPageLoading: false,
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

  onLoad: function (options) {
    this.init();
  },

  nextPage: function(){
    if (this.data.morePage){
      this.setData({
        page: this.data.page+1
      })
    }
    this.initHotWorks();
  },

  initHome: function(){
    let that = this;
    that.setData({
      showNextPageLoading:true
    });
    wx.request({
      url: config.api.home.home,
      success: function (res) {
        if (res.data.code !== 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          });
          return ;
        }
        that.setData({
          recommend: res.data.data.recommend,
          carousel: res.data.data.carousel
        });
      },
      fail: function (e) {
        wx.showToast({
          title: e.toString(),
          icon: 'none'
        });
        console.log(e)
      },
      complete: function (e) {
        that.setData({
          showNextPageLoading:false
        });
      }
    });
  },

  initHotWorks: function(){
    let that = this;
    wx.request({
      url: config.api.home.hot + "?page=" + this.data.page,
      success: function (res) {
        if (res.data.code !== 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          });
          return ;
        }
        that.setData({
          hotWorks: res.data.data
        });

      },
      fail: function (e) {
        wx.showToast({
          title: e.toString(),
          icon: 'none'
        });
        console.log(e)
      },
      complete: function (e) {
      }
    })
  },

  init: function () {
      this.initHome();
      this.initHotWorks();
  },
});

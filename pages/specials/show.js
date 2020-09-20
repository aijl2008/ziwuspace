const app = getApp()
import config from '../../config';
import Page from '../page';

Page({
  data: {
    initing: true,
    page: 1,
    showTheEnd: false,
    showLoading: false, 
    parameters: {},
    special: {},
    works: {}
  },

  onLoad: function (options) {
    let that = this;
    wx.request({
      url: config.api.specials.show + "1",
      success: function (res) {
        if (res.data.code !== 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          });
          return ;
        }
        that.setData({
          special: res.data.data
        });
      },
      fail: function (e) {
        wx.showToast({
          title: e.toString(),
          icon: 'none'
        });
      },
      complete: function (e) {
        console.log(e)
      }
    });
    this.init();
  },

  nextPage: function () {
    if (this.data.works.morePage) {
      this.setData({
        page: this.data.page + 1
      });
      this.init();
    }
    else{
      this.setData({
        showTheEnd: true
      });
    }
  },

  init: function () {
    let that = this;
    wx.request({
      url: config.api.works.index + "?page=" + this.data.page,
      success: function (res) {
        that.setData({
          works: res.data.data
        });
      },
      fail: function (e) {
        wx.showToast({
          title: e.toString(),
          icon: 'none'
        });
      },
      complete: function (e) {
        that.setData({
          showLoading: false,
          initing: false
        });
      }
    });
  },
})
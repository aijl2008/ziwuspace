const app = getApp();
import config from '../../config';
import Page from '../page';

Page({

  data: {
    initing: true,
    page: 1,
    showTheEnd: false,
    showLoading: false, 
    parameters: {},
    classify: []
  },

  onLoad: function (options) {
    this.init();
  },

  init: function () {
    let that = this;
    wx.request({
      url: config.api.classify,
      success: function (res) {
        if (res.data.code !== 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          });
          return ;
        }
        that.setData({
          classify: res.data.data
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

});
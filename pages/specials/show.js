const app = getApp()
import config from '../../config';
import Page from '../page';

Page({
  data: {
    special: {},
    works: {}
  },

  onLoad: function (options) {
    let that = this;
    wx.request({
      url: config.specials.show + "1",
      success: function (res) {
        that.setData({
          special: res.data.data
        });
      },
      error: function () {
      }
    });

    wx.request({
      url: config.special_works,
      success: function (res) {
        that.setData({
          works: res.data.data
        });
      },
      error: function () {
      }

    });
  },
})
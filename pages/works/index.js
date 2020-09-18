const app = getApp()
import config from '../../config';
import Page from '../page';

Page({
  data: {
    works:{}
  },

  onLoad: function (options) {
    console.log(options);
    let that = this;
    wx.request({
      url: config.works.index,
      success: function (res) {
        that.setData({
          works: res.data.data
        });
      }
    })
  },
})
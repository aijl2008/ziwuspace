const app = getApp()
import config from '../../config';
import Page from '../page';

Page({
  data: {
    item:{}
  },
  onLoad: function (options) {
    console.log(options);
    let that = this;
    wx.request({
      url: config.works.show+"1",
      success: function (res) {
        that.setData({
          item: res.data
        });
      }
    })
  },

})
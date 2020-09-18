const app = getApp()
import config from '../../config';
import Page from '../page';

Page({
  data: {
    tabs4: [1, 2, 3, 4],
    specials: []
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },

  onLoad: function (options) {
    let that = this;
    wx.request({
      url: config.specials.index,
      success: function (res) {
        that.setData({
          specials: res.data.data
        });
      },
      fail: function (e) {
        console.log(e)
      },
      complete: function (e) {
        console.log(e)
      }
    });

  },

})
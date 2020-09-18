const app = getApp()
import config from '../../config';
import Page from '../page';

Page({

  data: {

    classify: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: config.classify,
      success: function (res) {
        that.setData({
          classify: res.data.data
        });
      }
    })
  },

})
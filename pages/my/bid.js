const app = getApp()
import config from '../../config';
import Page from '../page';

Page({

  data: {

  },

  onLoad: function (options) {
    try {
      let token = wx.getStorageSync('token')
      if (value) {
        // Do something with return value
      }
    } catch (e) {
      // Do something when catch error
    }
    try {
      wx.setStorageSync('key', 'value')
    } catch (e) { }
  },
})
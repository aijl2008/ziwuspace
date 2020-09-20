const app = getApp()
import config from '../../config';
import Page from '../page';

Page({
  data: {
    phone: "13001810691",
    userInfo: {},
    hasUserInfo: false,
  },

  onLoad: function () {
    wx.setStorageSync('token', "8buyguygrtr45467gfjfrjggfrttrjji");
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },

  getUserInfo: function (e) {
    console.log(e, wx.getStorageSync('token'));
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  makePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phone,
    })
  }
})

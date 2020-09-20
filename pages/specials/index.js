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
    tab: 1,
    specials: []
  },

  onTabChanged(event) {
    this.setData({
      parameters: {
        status: event.currentTarget.dataset.tab
      },
      tab: event.currentTarget.dataset.tab,
      // initing: true
    });
    this.init();
  },

  onLoad: function (options) {
    this.init();
  },

  nextPage: function () {
    console.log(this.data.page, this.data.specials.morePage);
    if (this.data.specials.morePage) {
      console.log('aaaaaa');
      this.setData({
        page: this.data.page + 1
      });
      this.init();
    }
    else{
      this.setData({
        showTheEnd: true
      });
      console.log('bbbbbbb');
    }
  },

  init: function () {
    let that = this;
    wx.request({
      url: config.api.specials.index + '?page=' + this.data.page,
      method: 'POST',
      data: this.data.parameters,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success: function (res) {
        if (res.data.code !== 0) {
          wx.showToast({
            title: res.data.msg || "接口错误",
            icon: 'none'
          });
          return;
        }
        that.setData({
          specials: res.data.data
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
          initing: false, 
          showLoading: false
        });
      }
    });

  },

});
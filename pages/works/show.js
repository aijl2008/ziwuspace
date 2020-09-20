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
    item: {}
  },
  tabsChanged: function (event) {
    console.log(event.currentTarget.dataset);
    this.setData({
      tab: event.currentTarget.dataset.tab
    });
  },
  onLoad: function (options) {
    this.init();
  },

  init: function(){
    let that = this;
    wx.request({
      url: config.api.works.show + "1",
      success: function (res) {
        if (res.data.code !== 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          });
          return ;
        }
        that.setData({
          item: res.data.data
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
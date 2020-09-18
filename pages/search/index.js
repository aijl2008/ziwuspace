const app = getApp()
import config from '../../config';
import Page from '../page';

Page({
  data: {
    tab: 'special',
    value: '',
    specials: [],
    works: []
  },

  tabsChanged: function (event) {
    console.log(event.currentTarget.dataset);
    this.setData({
      tab: event.currentTarget.dataset.tab
    });
  },

  onSearch: function (e) {
    let that = this;

    wx.request({
      url: config.specials.index + "?keywords=" + e.detail,
      success: function (res) {
        that.setData({
          specials: res.data.data
        });
      }
    });

    wx.request({
      url: config.works.index + "?keywords=" + e.detail,
      success: function (res) {
        that.setData({
          works: res.data.data
        });
      }
    });
  },

})
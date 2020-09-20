const app = getApp()
import config from '../../config';
import Page from '../page';

Page({
  data: {
    initing: true,
    showTheEnd: false,
    showLoading: false,
    parameters: {},
    tab: '1',
    keywords: '',
    specials: {
      result: false,
      page: 1,
    },
    works: {
      result: false,
      page: 1,
    }
  },

  onTabChanged: function (event) {
    this.setData({
      tab: event.currentTarget.dataset.tab
    });
    this.init();
  },

  onInput: function (e) {
    this.setData({
      keywords: e.detail.value
    })
  },

  onSearch: function (e) {
    this.init();
  },

  nextPage: function () {
    if (this.data.tab == 1 && this.data.specials.morePage) {
      this.setData({
        specials: {
          page: this.data.specials.page + 1
        }
      });
      this.init();
    }
    if (this.data.tab == 2 && this.data.works.morePage) {
      this.setData({
        works: {
          page: this.data.works.page + 1
        }
      });
      this.init();
    }
  },

  init: function () {
    let that = this;
    console.log(this.data.tab)
    if (this.data.tab == 1) {
      wx.request({
        url: config.api.specials.index + "?keywords=" + this.data.keywords + "&page=" + (this.data.specials.page || 0),
        success: function (res) {
          if (res.data.code !== 0) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            });
            return;
          }
          that.setData({
            specials: {
              morePage: res.data.data.morePage,
              list: res.data.data.list,
              result: that.data.specials.result,
              page: that.data.specials.page,
            }
          });
        },
        fail: function (e) {
          wx.showToast({
            title: e.toString(),
            icon: 'none'
          });
        },
        complete: function (e) {
          that.setData({
            initing: false,
            showLoading: false
          });
        }
      });
    }
    if (this.data.tab == 2) {
      wx.request({
        url: config.api.works.index + "?keywords=" + this.data.keywords + "&page=" + (this.data.works.page || 0),
        success: function (res) {
          if (res.data.code !== 0) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            });
            return;
          }
          that.setData({
            works: {
              morePage: res.data.data.morePage,
              list: res.data.data.list,
              result: that.data.works.result,
              page: that.data.works.page,
            }
          });
        },
        fail: function (e) {
          wx.showToast({
            title: e.toString(),
            icon: 'none'
          });
        },
        complete: function (e) {
          that.setData({
            initing: false,
            showLoading: false
          });
        }
      });
    }
  }

});
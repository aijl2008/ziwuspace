const app = getApp()
import config from '../../config';
import Page from '../page';

Array.prototype.replace = function (newValue, index) {
  this[index] = newValue;
  return this;
}

Page({
  data: {
    tab: 1,
    status: [
      { id: 1, name: "拍卖中" }, { id: 2, name: "已结束" }
    ],
    dropdown: null,
    tabs: [
      "分类", "状态", "排序"
    ],
    initing: true,
    page: 1,
    showTheEnd: false,
    showLoading: false,
    parameters: {},
    works: {}
  },

  nextPage: function () {
    console.log(this.data.page, this.data.works.morePage);
    if (this.data.works.morePage) {
      this.setData({
        page: this.data.page + 1
      });
      this.init();
    }
    else {
      this.setData({
        showTheEnd: true
      });
    }
  },

  changeStatus: function (e) {
    let parameters = this.data.parameters;
    parameters["status"] = e.currentTarget.dataset.item.id;
    this.setData({
      parameters,
      tabs: this.data.tabs.replace(e.currentTarget.dataset.item.name, 1),
      dropdown: null
    });
    this.init();
  },

  changeClassify: function (e) {
    let parameters = this.data.parameters;
    parameters["classify"] = e.currentTarget.dataset.item.id;
    this.setData({
      parameters,
      tabs: this.data.tabs.replace(e.currentTarget.dataset.item.name, 0),
      dropdown: null
    });
    this.init();
  },



  onTabChanged: function (event) {
    this.setData({
      tab: event.currentTarget.dataset.tab,
      dropdown: event.currentTarget.dataset.tab
    });
  },

  onLoad: function (options) {
    this.init();
  },

  init: function () {
    let that = this;
    that.setData({
      showLoading: true
    });
    wx.request({
      url: config.api.works.index + "?page=" + this.data.page,
      data: this.data.parameters,
      success: function (res) {
        if (res.data.code !== 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          });
          return;
        }
        that.setData({
          works: res.data.data
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
          showLoading: false,
          initing: false
        });
      }
    })
  },
});
import config from '../../config';
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

  onLoad: function () {

  },

  onReady: function () {

  },


  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
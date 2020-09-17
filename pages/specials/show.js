import config from '../../config';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    special: {},
    works: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: config.specials.show + "1",
      success: function (res) {
        that.setData({
          special: res.data.data
        });
      },
      error: function () {
      }
    });

    wx.request({
      url: config.special_works,
      success: function (res) {
        that.setData({
          works: res.data.data
        });
      },
      error: function () {
      }

    });


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
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
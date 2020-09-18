export default function (options = {}) {
  return Page({
    onReady: function () {
      console.log('onReady');
    },

    onShow: function () {
      console.log('onShow');
    },

    onHide: function () {
      console.log('onHide');
    },

    onUnload: function () {
      console.log('onUnload');
    },

    onPullDownRefresh: function () {
      console.log('onPullDownRefresh');
    },

    onReachBottom: function () {
      console.log('onReachBottom');
    },

    navigateToSpecials: function (event) {
      let item = event.currentTarget.dataset.item;
      wx.switchTab({
        url: '/pages/specials/index',
        success: function (res) {
          console.log('成功')
        },
        fail: function (res) {
          console.log('失败')
        }
      })

    },
    navigateToDeposit: function (event) {
      wx.navigateTo({
        url: '/pages/my/deposit',
      })
    },

    navigateToOrder: function (event) {
      wx.navigateTo({
        url: '/pages/my/order',
      })
    },

    navigateToBid: function (event) {
      wx.navigateTo({
        url: '/pages/my/bid',
      })
    },


    navigateToWorks: function (event) {
      let item = event.currentTarget.dataset.item;
      wx.navigateTo({
        url: '/pages/works/index?code=' + item.code,
      })
    },

    navigateToSearch: function (event) {
      wx.navigateTo({
        url: '/pages/search/index',
      })
    },

    navigateToClassify: function (event) {
      let item = event.currentTarget.dataset.item;
      wx.navigateTo({
        url: '/pages/classify/index',
      })
    },

    openWebView: function (event) {
      wx.navigateTo({
        url: '/pages/chrome/index?url=' + encodeURIComponent(event.currentTarget.dataset.url)
      })
    },

    onShareAppMessage() {
      return {
        title: '演示'
      };
    },
    ...options
  });
}
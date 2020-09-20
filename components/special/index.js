import config from '../../config';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: null
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateToSpecial: function (event) {
      let item = event.currentTarget.dataset.item;
      wx.navigateTo({
        url: '/pages/specials/show?id=' + item,
        success: function (res) {
        },
        fail: function (res) {
          wx.showToast({
            title: res.errMsg,
            image: "/images/fail.png"
          })
        }
      })
    },

    navigateToOrgan: function (event) {
      let item = event.currentTarget.dataset.item;
      wx.switchTab({
        url: config.api.specials.show + item,
        success: function (res) {
        },
        fail: function (res) {
          wx.showToast({
            title: res.errMsg,
            image: "/images/fail.png"
          })
        }
      })
    },
  }
})

// components/ajl-special/index.js
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

  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    show: function (event) {
      let item = event.currentTarget.dataset.item;
      wx.navigateTo({
        url: "/pages/specials/show?id="+item.id
      })
    },

    organ: function (event) {
      let item = event.currentTarget.dataset.organ;
      wx.navigateTo({
        url: item.url
      })
    }
  }
})

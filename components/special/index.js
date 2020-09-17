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

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    show: function (event) {
      let item = event.currentTarget.dataset.item;
      console.log(item);
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

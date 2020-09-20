Component({
  properties: {
    item: {
      type: Object
    }
  },

  methods: {
    navigateToWorks: function (event) {
      let item = event.currentTarget.dataset.item;
      wx.navigateTo({
        url: '/pages/works/show?code=' + item.id,
        success: function (res) {
          console.log(res);
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

Component({
  properties: {
    list: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        // console.log(newVal, oldVal);
        this._init(newVal);
      }
    },
    widthKeyName: {
      type: String,
      value: "cover_picture_width"
    },
    HeightKeyName: {
      type: String,
      value: "cover_picture_height"
    }
  },

  data: {
    leftList: [],
    rightList: [],
    leftHeight: 0,
    rightHeight: 0,
    colmunWidth: 345
  },

  methods: {
    onPullDownRefresh: function () {
      wx.showNavigationBarLoading();
      this.setData({
        pageSrc: source
      }, () => {
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      });
    },

    onReachBottom: function () {
      let _pageNo = this.data.pageNo + 1;
      this.setData({
        pageNo: _pageNo,
        pageSrc: this.data.pageSrc
      });
    },

    _init: function (list) {
      let that = this;
      let allData = list;
      let colmunWidth = that.data.colmunWidth;
      let leftHeight = that.data.leftHeight;
      let rightHeight = that.data.rightHeight;
      let leftData = [];
      let rightData = [];
      for (let i = 0; i < allData.length; i++) {
        let currentItemHeight = parseInt(Math.round(allData[i].cover_picture_height * colmunWidth / allData[i].cover_picture_width));
        allData[i].imageHeight = currentItemHeight + "rpx";
        if (leftHeight == rightHeight || leftHeight < rightHeight) {
          leftData.push(allData[i]);
          leftHeight += currentItemHeight;
        } else {
          rightData.push(allData[i]);
          rightHeight += currentItemHeight;
        }
      }

      that.setData({
        leftHeight: leftHeight,
        rightHeight: rightHeight,
        leftList: leftData,
        rightList: rightData
      })
    }
  }
})

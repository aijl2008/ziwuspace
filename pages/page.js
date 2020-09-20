import config from "../config";

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

    onRefresh: function () {
      console.log('onRefresh');
    },

    onPullDownRefresh: function () {
      if (typeof (this.init) == 'function') {
        this.setData({
          initing: true
        });
        if (this.data.page) {
          this.setData({
            page: 1
          });
        }
        this.init();
      }
      console.log('onPullDownRefresh');
    },

    onReachBottom: function () {
      if (typeof (this.nextPage) == "function") {
        this.nextPage();
      }
      console.log('onReachBottom');
    },

    navigateToSpecials: function (event) {
      let item = event.currentTarget.dataset.item;
      wx.switchTab({
        url: '/pages/specials/index',
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

    navigateToSpecial: function (event) {
      let item = event.currentTarget.dataset.item;
      wx.switchTab({
        url: config.api.specials.show + item,
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

    navigateToDeposit: function (event) {
      wx.navigateTo({
        url: '/pages/my/deposit',
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

    navigateToOrder: function (event) {
      wx.navigateTo({
        url: '/pages/my/order',
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

    navigateToBid: function (event) {
      wx.navigateTo({
        url: '/pages/my/bid',
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


    navigateToWorks: function (event) {
      let item = event.currentTarget.dataset.item;
      wx.navigateTo({
        url: '/pages/works/show?id=' + item.id,
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

    navigateToWorksList: function (event) {
      let item = event.currentTarget.dataset.item;
      wx.navigateTo({
        url: '/pages/works/index?code=' + item.code,
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

    navigateToSearch: function (event) {
      wx.navigateTo({
        url: '/pages/search/index',
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

    navigateToClassify: function (event) {
      let item = event.currentTarget.dataset.item;
      wx.navigateTo({
        url: '/pages/classify/index',
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

    navigateToPayDeposit: function (event) {
      wx.navigateTo({
        url: '/pages/my/pay-deposit',
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

    navigateToReturnDeposit: function (event) {
      wx.navigateTo({
        url: '/pages/my/return-deposit',
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

    openWebView: function (event) {
      wx.navigateTo({
        url: '/pages/chrome/index?url=' + encodeURIComponent(event.currentTarget.dataset.url),
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

    makePhoneCall: function (e) {
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.phone,
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

    onShareAppMessage() {
      return {
        title: '演示'
      };
    },
    ...options
  });
}
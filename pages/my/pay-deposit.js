const app = getApp()
import config from '../../config';
import Page from '../page';

Page({
  data: {
    config:{},
  },
  onLoad: function (options) {
    this.setData({
      config
    });
  },
});
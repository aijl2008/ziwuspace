const app = getApp()
import config from '../../config';
import Page from '../page';

Page({
    data: {
        url: ''
    },
    onLoad: function (options) {
        this.setData({
            url: decodeURIComponent(options.url)
        });
    }
})
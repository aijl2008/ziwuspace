Component({
  properties: {
    src: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    },
    error: {
      type: String,
      value: ''
    },
    lazyload: {
      type: Boolean,
      value: false
    },
    radius:{
      type:String,
      value:'0%'
    },
    mode:{
       type:String,
       value:'widthFix'
    }
  },

  data: {
    loadFinish: false
  },

  methods: {
    _loadSuccess: function(e) {
      this.setData({
        loadFinish: true
      });
      this.triggerEvent('success', e);
    },
    _loadFail: function(e) {
      this.setData({
        loadFinish: true,
        src: this.data.error
      });
      this.triggerEvent('fail', e);
    }
  }
})
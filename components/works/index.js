Component({
  properties: {
    detail:{
      type: Object
    }
  },
  data: {
  },
  methods: {
    _init: function(){
      console.log("init");
    },
    show: function(event){
      let item = event.currentTarget.dataset.item;
      wx.navigateTo({
        url: '/pages/works/index?id='+item.auction_id,
      })
    }
  }
})

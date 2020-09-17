Component({
  properties: {
    list: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        // console.log("observer",newVal, oldVal);
      }
    }
  },
  methods: {

  }
})

var util = require("../../../utils/util.js")
Page({
  data: {
    titleShow: true,
    detailInfo: false,
    data: [],
    outArr: [],
    inArr: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.idName);
    var idName = options.idName;
    this.dataShow();
    if (idName == "totalOut") {
      this.setData({
        titleShow: true,
        data: this.data.outArr
      })
    } else {
      this.setData({
        titleShow: false,
        data: this.data.inArr
      })
    };
    if (this.data.data.length == 0) {
      this.setData({
        detailInfo: true
      })
    } else {
      this.setData({
        detailInfo: false
      })
    }

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    util.setListStatus; //list列表删除按钮close
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  dataShow: function () { //待提取公共js
    var value = wx.getStorageSync('key'); //用不了异步
    var outArr = [], inArr = [];
    for (var i = 0; i < value.length; i++) {
      if (value[i].radioGroup == "-") {
        outArr.push(value[i]);
      } else {
        inArr.push(value[i]);
      }
    }
    this.setData({
      outArr: outArr,
      inArr: inArr
    })

  },


  onTouchStart: util.touchStart, //手指触摸开始
  onTouchMove: util.touchMove, // 手指触摸滑动
  onTouchEnd: util.touchEnd, //手指触摸结束
  onDeleteTap: util.deleteData, //删除数据

})
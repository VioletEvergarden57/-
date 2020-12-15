var util = require("../../utils/util.js")
Page({
  data: {
    detailInfo: true,
    data: "",
    totalMoney: 0,
    outMoney: 0,
    outNumber: 0,
    inMoney: 0,
    inNumber: 0,
    detailOut: 'out',
    detailIn: 'in',
    startX: 0,
    moveX: 0,
    endX: 0,
    slideX: 0,


  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onEditTap: function () {
    wx.navigateTo({
      url: 'edit/edit'
    })
  },
  onDetailTap: function (ev) {

    var idName = ev.currentTarget.id;
    wx.navigateTo({
      url: 'detail/detail?idName=' + idName
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    this.dataShow();
    this.count();
    util.setListStatus; //list列表删除按钮close
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  dataShow: function () {
    var value = wx.getStorageSync('key'); //用不了异步
    if (value == "") {
      this.setData({
        detailInfo: true
      })
    } else {
      this.setData({
        detailInfo: false,
        data: value
      })
    }
  },
  count: function () {
    console.log("开始计算")
    console.log(this.data)
    var totalMoney = 0, outMoney = 0, outNumber = 0, inMoney = 0, inNumber = 0;
    var data = this.data.data;
    for (var i = 0; i < data.length; i++) {
      if (data[i].radioGroup == "-") {
        outNumber++;
        outMoney += parseFloat(data[i].inputMoney);
      } else {
        inNumber++;
        inMoney += parseFloat(data[i].inputMoney);
      }
    }

    totalMoney = inMoney - outMoney;
    inMoney = inMoney.toFixed(1);
    outMoney = outMoney.toFixed(1);
    totalMoney = totalMoney.toFixed(1)
    this.setData({
      totalMoney: totalMoney,
      outMoney: outMoney,
      outNumber: outNumber,
      inMoney: inMoney,
      inNumber: inNumber
    })
    console.log(inNumber)
    
      




    
  }, onTouchStart: util.touchStart, //手指触摸开始
  onTouchMove: util.touchMove, // 手指触摸滑动
  onTouchEnd: util.touchEnd, //手指触摸结束
  onDeleteTap: util.deleteData, //删除数据
})
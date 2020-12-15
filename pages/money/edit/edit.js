// pages/post/edit/edit.js
Page({
  data: {
    items: [
      { name: '-', value: '支出', checked: 'true' },
      { name: '+', value: '收入' },

    ],
    date: "",
    moneyOut: true,
    moneyIN: "",
    requiredPeople: "",
    requiredMoney: "",
    requiredInfo: ""
  },

  radioChange: function (e) { //单选按钮渲染
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    if (e.detail.value == "-") {
      var moneyOut = true, moneyIN = false;
    } else {
      var moneyOut = false, moneyIN = true;
    };
    this.setData({
      moneyOut: moneyOut,
      moneyIN: moneyIN
    })
  },
  bindDateChange: function (e) { //日期选择
    this.setData({
      date: e.detail.value
    })
  },

  formSubmit: function (e) {  //数据保存
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var formData = e.detail.value;  
    formData.inputMoney=parseFloat(formData.inputMoney).toFixed(1);
    if (formData.inputPeople == false) {
      this.setData({
        requiredPeople: "请输入类型"
      })
    } else {
      this.setData({
        requiredPeople: ""
      })
    }
    if (formData.inputMoney == false) {
      this.setData({
        requiredMoney: "请输入金额"
      })
    } else {
      this.setData({
        requiredMoney: ""
      })
    }
    var strlen = this.strlen(formData.inputInfo);
    if (formData.inputInfo == false) {
      this.setData({
        requiredInfo: "请输入备注"
      })
    } else if (strlen > 50) {
      this.setData({
        requiredInfo: "提示：最多只能输入25个汉字或50个字母"
      })

    } else {
      this.setData({
        requiredInfo: ""
      })
    }


    if (!(formData.inputPeople == false || formData.inputMoney == false || formData.inputInfo == false)) {  //缓存
      console.log("执行缓存");
      formData.date = this.data.date;

      var storageData = [];

      var value = wx.getStorageSync('key'); //用不了异步
      if (value == "") {
        wx.setStorageSync("key", [])
        storageData.push(formData);
      } else {
        value.splice(0,0,formData);
        storageData = value;
      }
      wx.setStorageSync("key", storageData)
      console.log(storageData)

      wx.navigateBack({
        delta: 1
      })

    }

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  strlen: function (str) { //获取字符串长度
    var len = 0;
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      //单字节加1 
      if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
        len++;
      }
      else {
        len += 2;
      }
    }
    return len;
  }
})
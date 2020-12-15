//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
      { "xqj": 1, "skjc": 3, "skcd": 2, "kcmc": "思想道德修养与法律基础@N319" },
      { "xqj": 1, "skjc": 6, "skcd": 2, "kcmc": "综合英语(A)@N302" },
      { "xqj": 1, "skjc": 8, "skcd": 2, "kcmc": "大学生心理健康@学活301" },
      { "xqj": 2, "skjc": 1, "skcd": 3, "kcmc": "数学分析（上）@N201" },
      { "xqj": 2, "skjc": 6, "skcd": 2, "kcmc": "线性代数@N201" },
      { "xqj": 3, "skjc": 1, "skcd": 2, "kcmc": "C/C++程序设计与编程方法@S119" },
      { "xqj": 3, "skjc": 3, "skcd": 2, "kcmc": "英语听说@N406" },
      { "xqj": 4, "skjc": 1, "skcd": 3, "kcmc": "线性代数@N201" },
      { "xqj": 4, "skjc": 6, "skcd": 3, "kcmc": "数学分析@N110" },
      { "xqj": 5, "skjc": 3, "skcd": 2, "kcmc": "信息与通信工程专业导论@N403" },
      { "xqj": 5, "skjc": 6, "skcd": 2, "kcmc": "C++实验课@S509" },
      { "xqj": 5, "skjc": 8, "skcd": 2, "kcmc": "思想道德修养与法律基础@N309" }, 
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
// pages/user/UserInfo.js
// pages/user/UserInfo.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    tables: [
      ['序号', '开始时间', '内容', '结束时间', ''],
      ['1', '', '', '', ''],
      ['2', '', '', '', ''],
      ['3', '', '', '', ''],
      ['4', '', '', '', ''],
      ['5', '', '', '', ''],
      ['6', '', '', '', ''],
      ['', '', '', '', ''],
    ],
  },

  onLoad:  function(e) {
    var id = e.id;
    if (id) {
      getData(id, this);
    } else {
      this.setData({
        id: Date.now()
      })
    }
  }
    
})

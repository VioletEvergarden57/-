function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function touchStart(e) { //手指触摸开始
  var listId = e.currentTarget.dataset.listid;

  var startX = e.changedTouches[0].clientX;
  this.setData({
    startX: startX
  })
}


function touchMove(e) { // 手指触摸滑动
  // console.log(e)
  var listId = e.currentTarget.dataset.listid;

  var moveX = e.changedTouches[0].clientX;
  var midData = this.data.data;

  var slideX = this.data.startX - moveX
  console.log(midData[listId]["status"])
  if (midData[listId]["status"] == "close" || midData[listId]["status"] == undefined) {//关闭
    if (slideX < 0) {
      slideX = 0
    } else if (slideX > 70) {
      slideX = 70
    }
    midData[listId]["slideX"] = slideX + "px";
  } else {//打开
    if (slideX <= -70 || slideX > 0) {
      slideX = 0
      midData[listId]["slideX"] = "70px";
    } else {
      midData[listId]["slideX"] = 70 + slideX + "px";
    }

  }

  this.setData({
    data: midData
  })

}


function touchEnd(e) { //手指触摸结束
    console.log(e.changedTouches[0].clientX)
    var listId = e.currentTarget.dataset.listid;
   
    var endX = e.changedTouches[0].clientX;
    var midData = this.data.data;
    
    var slideX = this.data.startX - endX;
    console.log(midData[listId]["status"])
    if (midData[listId]["status"] == "close" || midData[listId]["status"] == undefined) {//关闭
      if (slideX < 35) {
        slideX = 0
        midData[listId]["status"] = "close";
      } else if (slideX >= 35) {
        slideX = 70
        midData[listId]["status"] = "open";
      }



     
    } else {//打开
      if (slideX < -35) {
        slideX = 0
        midData[listId]["status"] = "close";
      } else if (slideX >= -35) {
        slideX = 70
        midData[listId]["status"] = "open";
      }

      var midData = this.data.data;

      
    }
    midData[listId]["slideX"] = slideX + "px";
      this.setData({
        data: midData
      })
  }

  function deleteData(e){//删除数据并缓存
    var midData = this.data.data;
    var deleteId =  e.currentTarget.dataset.deleteid;
    console.log(deleteId+"kk")
    midData.splice(deleteId,1)
    wx.setStorageSync("key", midData)
    this.setData({
      data:midData
    })
  }
  function setListStatus(){ //list列表删除按钮close
     var midData = this.data.data
    for (var value of midData) {
      value["status"] == undefined ? value["status"] = "close" : value["status"] = "close"
    }
    this.setData({
      data: midData
    })
  }

module.exports = {
  formatTime: formatTime,
  touchStart: touchStart,
  touchMove: touchMove,
  touchEnd:touchEnd,
  deleteData:deleteData,
  setListStatus:setListStatus
}

//main.js

//获取应用实例
const app = getApp()

Page({
  data:{
    radioCheckVal:0,
    class:[
      {}
    ]
  },

  //图片点击事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

 //年级单选点击事件处理函数
  radioCheckedChange:function(e){
    this.setData({
      radioCheckVal:e.detail.value
    })
  },
})


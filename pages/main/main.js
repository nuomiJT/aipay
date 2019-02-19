//main.js

//获取应用实例
const app = getApp()

Page({
  data:{
    class:[
      {}
    ]
  },

  //图片点击事件处理函数测试
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})


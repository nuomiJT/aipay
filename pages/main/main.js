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
  bindImageTo: function (e) {
    console.log('bindImageTo', e)
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

 //年级单选点击事件处理函数
  radioCheckedChange:function(e){
    console.log('radioCheckedChange',e)
    this.setData({
      radioCheckVal:e.detail.value
    })
  },

  //季节班级点击跳转事件处理函数
  bindToClass:function(e){
    console.log('bindToClass',e)
    wx.navigateTo({
      url: '../class/class',
    })
  }

})
//class.js

Page({
  data:{
    classTitle:'Ai口语集训营二年级寒假班'
  },

  //发起拼团/立即报名
  toDetailClass:function(e){
    console.log('toDetailClass', e)
    wx.navigateTo({
      url: '../detailclass/detailclass'
    })
  }
})
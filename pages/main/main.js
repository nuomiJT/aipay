//main.js

const util = require('../../utils/util.js')

//获取应用实例
const app = getApp()

Page({
  data:{
    radioCheckVal:0,  //年级 0:默认全部年级
    radioChecktTit:1, //1:集训营，2:预备营
    classList:[
    ]
  },

  //生命周期函数--监听页面加载
  onLoad: function (options) {
    const _this = this;
    wx.request({
      url: util.url+'gateway/live/live/app/student/spokenpage/showTrainHomePageInSpoken',
      header: {
        'content-type': 'application/json'
      },
      success(res){
        if(res.statusCode===200){
          _this.setData({
            classList:res.data.data.list
          })
        }
      }
    })
  },

  //生命周期函数--监听页面初次渲染完成
  onReady: function () {

  },

  //图片点击事件处理函数
  bindImageTo: function (e) {
    console.log('bindImageTo', e)
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //集训营预备营单选事件处理函数
  radioCheckedTitleChange: function(e){
    console.log('radioCheckedTitleChange', e)
    const _this = this;
    this.setData({
      radioChecktTit: e.detail.value
    })
    //根据radioChecktTit来发送请求获取数据(2:预备营,1:集训营)
    if (this.data.radioChecktTit === '2'){
      //预备营
      wx.request({
        url: util.url +'gateway/live/live/app/student/spokenpage/showPrepareHomePageSpoken',
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          if (res.statusCode === 200) {
            _this.setData({
              classList: res.data.data.list
            })
          }
        }
      })
    }else{
      //集训营
      const grade = this.data.radioCheckVal
      //默认没有选中年级的时候切换集训营和预备营
      if(grade === 0){
        wx.request({
          url: util.url + 'gateway/live/live/app/student/spokenpage/showTrainHomePageInSpoken',
          header: {
            'content-type': 'application/json'
          },
          success(res) {
            if (res.statusCode === 200) {
              _this.setData({
                classList: res.data.data.list
              })
            }
          }
        })
      }
      //选中年级后切换集训营和预备营，切换后还显示对应年级列表
      wx.request({
        url: util.url + 'gateway/live/live/app/student/spokenpage/showTrainHomePageInSpoken',
        header: {
          'content-type': 'application/json'
        },
        data:{
          grade:grade
        },
        success(res) {
          if (res.statusCode === 200) {
            _this.setData({
              classList: res.data.data.list
            })
          }
        }
      })

    }
  },

 //年级单选点击事件处理函数
  radioCheckedChange: function(e){
    console.log('radioCheckedChange', e)
    const _this = this
    const grade = e.detail.value
    let url = ''
    this.data.radioChecktTit == 1 ? url = util.url + 'gateway/live/live/app/student/spokenpage/showTrainHomePageInSpoken' : null 
    console.log(url)
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json'
      },
      data:{
        grade: grade
      },
      success(res) {
        if (res.statusCode === 200) {
          _this.setData({
            classList: res.data.data.list
          })
        }
      }
    })
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
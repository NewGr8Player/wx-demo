//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎，喵~o( =∩ω∩= )m',
    userInfo: {},
    hasUserInfo: false,
    inputShow: false,
    btnText: "输入"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  alertFunc: function(e) {
    console.log('调用方法!');
    wx.scanCode({
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  inputShowFunc: function(e) {
    if (this.data.inputShow) { /* 显示输入框 */
      this.setData({
        btnText: "输入"
      });
      wx.setNavigationBarTitle({
        title: '输入中...'
      });
    } else { /* 不显示输入框 */
      this.setData({
        btnText: "取消"
      });
      wx.setNavigationBarTitle({
        title: "呦呵丶晓晓"
        //that.data.mername//页面标题为路由参数
      });
    }
    this.setData({
      inputShow: !this.data.inputShow
    })
    console.log(this.data.inputShow);
  }
})
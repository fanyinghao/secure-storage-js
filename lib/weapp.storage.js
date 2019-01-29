export default {
  set(key, value) {
    wx.setStorageSync(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(wx.getStorageSync(key));
  },
  remove(key) {
    wx.removeStorageSync(key);
  },
  each(callback) {
    const res = wx.getStorageInfoSync();
    const keys = res.keys;
    for (let key in keys) {
      callback(this.get(key), key);
    }
  },
  clear() {
    wx.clearStorage();
  }
};

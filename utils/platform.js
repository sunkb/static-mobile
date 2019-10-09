function platform() {
  if (process.browser) {
    const u = navigator.userAgent;
    // 移动终端浏览器版本信息
    return {
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, // android终端或uc浏览器
      iPhone: u.indexOf("iPhone") > -1, // 是否为iPhone或者QQHD浏览器
      //iPad: u.indexOf("iPad") > -1, // 是否iPad
      isWeixin: u.toLowerCase().indexOf("micromessenger") !== -1,
      uCBrowser: u.indexOf("UCBrowser") > -1
    };
  }
}

export {platform}

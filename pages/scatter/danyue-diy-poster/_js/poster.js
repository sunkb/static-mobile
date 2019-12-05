const poster = {
  /**
   * devicePixelRatio设备像素比 webkitBackingStorePixelRatio Canvas缓冲区的像素比
   * 将canvas中的1像素等于屏幕中的1像素
   */
  pixelRatio() {
    return window.devicePixelRatio || 1;
  },
  /**
   * 目前没用到
   * 将图片进行压缩，减少页面大小
   * 旋转操作也放在此处
   */
  filterImage(image, width, height, deg) {
    const canvas = document.createElement('canvas');
    const pr = poster.pixelRatio();
    // hidpi-canvas将canvas的width和height属性放大pr倍
    canvas.width = width / pr; // 恢复为原先的大小
    canvas.height = height / pr;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff'; // 绘制背景色
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (deg) {
      ctx.rotate(deg * Math.PI / 180);
      ctx.drawImage(image, 0, -canvas.width);
    } else {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
    return canvas.toDataURL('image/jpeg', 0.7);
  },
  /**
   * 画图
   */
  drawImage(ctx, image, offset) {
    const pr = poster.pixelRatio();
    let key;
    ctx.save();
    for (key in offset.image) {
      offset.image[key] = Math.floor(offset.image[key]);
    }
    for (key in offset.frame) {
      offset.frame[key] = Math.floor(offset.frame[key]);
    }
    // console.log('image------->', offset.image.x, offset.image.y, offset.image.w, offset.image.h);
    // console.log('frame--------->', offset.frame.x * pr, offset.frame.y * pr, offset.frame.w * pr, offset.frame.h * pr);
    ctx.drawImage(
      image[0] || image,
      offset.image.x, offset.image.y, offset.image.w, offset.image.h,
      offset.frame.x * pr, offset.frame.y * pr, offset.frame.w * pr, offset.frame.h * pr,
    );
    console.log('image------->', offset.image.x, offset.image.y, offset.image.w, offset.image.h);
    console.log('frame--------->', offset.frame.x * pr, offset.frame.y * pr, offset.frame.w * pr, offset.frame.h * pr);
    ctx.restore();
  },
  /**
     * 图片裁剪
     * 计算出img在frame中的可见部分相对于img和frame的坐标及尺寸
     */
  intersect($frame, $img) {
    let imgX = 0,
      imgY = 0,
      imgW = 0,
      imgH = 0,
      frmX = 0,
      frmY = 0;
    let imgOffset,
      frmOffset,
      left,
      right,
      top,
      bottom;
    imgOffset = $img.offset(); // 图片的偏移对象
    frmOffset = $frame.offset(); // 画框的偏移对象
    left = imgOffset.left - frmOffset.left;
    right = left + imgOffset.width;
    top = imgOffset.top - frmOffset.top;
    bottom = top + imgOffset.height;
    // console.log(imgOffset, frmOffset);
    // 图片在画框内
    if (!(right <= 0 || left >= frmOffset.width || bottom <= 0 || top >= frmOffset.height)) {
      if (left < 0) {
        imgX = -left;
        frmX = 0;
        imgW = (right < frmOffset.width) ? right : frmOffset.width;
      } else {
        imgX = 0;
        frmX = left;
        imgW = (right < frmOffset.width ? right : frmOffset.width) - left;
      }
      if (top < 0) {
        imgY = -top;
        frmY = 0;
        imgH = (bottom < frmOffset.height) ? bottom : frmOffset.height;
      } else {
        imgY = 0;
        frmY = top;
        imgH = ((bottom < frmOffset.height) ? bottom : frmOffset.height) - top;
      }
    }
    const ratio = $img.data('width') / $img.width(); // 图片真实宽度 与 图片CSS宽度
    // console.log($img.data('width'));
    // console.log($img.width());
    // 图片的实际高度不能低于计算后的高度 否则iphone 5S中就不显示
    let imageHeight = imgH * ratio;
    if (+$img.data('height') < imageHeight) {
      imageHeight = $img.data('height');
    }
    const result = {
      frame: {
        x: frmX, y: frmY, w: imgW, h: imgH,
      },
      image: {
        x: imgX * ratio, y: imgY * ratio, w: imgW * ratio, h: imageHeight,
      },
    };
    // console.log('result----->', result);
    return result;
  },
};
export default poster;

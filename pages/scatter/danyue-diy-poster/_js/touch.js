import touch from 'touchjs';
/**
   * 初始化拖拽,放缩事件
   * 开源库touch.js
   */
function initTouch(touchPad, img) {
  let offx = 0;
  let offy = 0;
  let scale = 1;
  let currScale;
  function formatTransform(offx, offy, scale) {
    const translate = `translate3d(${offx}px,${offy}px,0)`;
    scale = `scale(${scale})`;
    return `${translate} ${scale}`;
  }
  touch.on(touchPad, 'touchstart', (e) => {
    e.preventDefault();
  });
  touch.on(touchPad, 'drag', (e) => {
    const currOffx = offx + e.x;
    const currOffy = offy + e.y;
    img.style.webkitTransform = formatTransform(currOffx, currOffy, scale);
    img.style.transform = formatTransform(currOffx, currOffy, scale);
  });
  touch.on(touchPad, 'dragend', (e) => {
    offx += e.x;
    offy += e.y;
  });
  touch.on(touchPad, 'pinch', (e) => {
    if (typeof e.scale !== 'undefined') {
      currScale = e.scale - 1 + scale;
      img.style.webkitTransform = formatTransform(offx, offy, currScale);
      img.style.transform = formatTransform(offx, offy, currScale);
    }
  });
  touch.on(touchPad, 'pinchend', () => {
    scale = currScale;
  });
}
export default initTouch;


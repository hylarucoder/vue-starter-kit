export class BmapService {
  constructor(map) {
    this.map = map;
    this.BMap = window.BMap;
  }
  static getMapScript() {
    if (!global.BMap) {
      return new Promise((resolve, reject) => {
        global._initBMap = function() {
          resolve(global.BMap);
          global.document.head.removeChild($script);
          global._initBMap = null;
        };
        const $script = document.createElement("script");
        global.document.head.appendChild($script);
        $script.src = `//api.map.baidu.com/api?v=2.0&ak=xxxxxx&callback=_initBMap`;
      });
    }
    return Promise.resolve(global.BMap);
  }
}

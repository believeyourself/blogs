if (process.env.Node_ENV === "production") {
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?92956cfdc7c215ba71af5f2a82f81150";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
}

const trackEvent = function (...rest: any[]) {
  if ((window as any)._hmt) {
    (window as any)._hmt.push(rest);
  }
};
export { trackEvent };

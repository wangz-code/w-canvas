export default defineAppConfig({
  pages: ["pages/index/index", "pages/draw/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: "default",
  },
  lazyCodeLoading: "requiredComponents",
  rendererOptions: {
    skyline: {
      defaultDisplayBlock: true,
    },
  },
});

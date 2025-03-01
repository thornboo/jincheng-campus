/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by vite-plugin-uni-pages

interface NavigateToOptions {
  url: "/pages/index/index" |
       "/pages/forum/forum" |
       "/pages/home/home" |
       "/pages/message/message" |
       "/pages/mine/mine" |
       "/pages-sub/campus-canteen/campus-canteen" |
       "/pages-sub/campus-errand-runner/campus-errand-runner" |
       "/pages-sub/campus-supermarket/campus-supermarket" |
       "/pages-sub/find-part-time/find-part-time" |
       "/pages-sub/idle-trade/idle-trade" |
       "/pages-sub/swiper-details/swiper-details" |
       "/lost-found/lost-found" |
       "/lost-found/lost-found-detail" |
       "/lost-found/lost-form";
}
interface RedirectToOptions extends NavigateToOptions {}

interface SwitchTabOptions {
  url: "/pages/home/home" | "/pages/forum/forum" | "/pages/message/message" | "/pages/mine/mine"
}

type ReLaunchOptions = NavigateToOptions | SwitchTabOptions;

declare interface Uni {
  navigateTo(options: UniNamespace.NavigateToOptions & NavigateToOptions): void;
  redirectTo(options: UniNamespace.RedirectToOptions & RedirectToOptions): void;
  switchTab(options: UniNamespace.SwitchTabOptions & SwitchTabOptions): void;
  reLaunch(options: UniNamespace.ReLaunchOptions & ReLaunchOptions): void;
}

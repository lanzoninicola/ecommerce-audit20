import { isDomAvailable } from "@utils/index";
// import layoutTheme from "../../_theme/layoutTheme/layoutTheme";

// const _layoutTheme = layoutTheme();

const HEADLESS_VIEWPORT_SIZE = { width: 0, height: 0 };
// const BROWSER_NAVBAR_HEIGHT = _layoutTheme.viewport.browser.navbarHeight.mobile;

export default function getCurrentWindowSize() {
  if (isDomAvailable) {
    let _width = 0;
    let _height = 0;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    _width = viewportWidth < screenWidth ? viewportWidth : screenWidth;
    _height = viewportHeight < screenHeight ? viewportHeight : screenHeight;

    return { width: _width, height: _height };
  }

  return HEADLESS_VIEWPORT_SIZE;
}

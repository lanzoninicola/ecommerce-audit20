import { isDomAvailable } from "@utils/index";

const HEADLESS_VIEWPORT_SIZE = { width: 0, height: 0 };

export default function getCurrentWindowSize() {
  if (isDomAvailable) {
    // let _width = 0;
    // let _height = 0;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    // const viewportWidth = window.innerWidth;
    // const viewportHeight = window.innerHeight;

    //
    //  Due the inexepcted resize when the browser bar toggle (in mobile browser)
    //  I will try to use the screen size as parameter to calculate the diagonal
    //
    // _width = viewportWidth < screenWidth ? viewportWidth : screenWidth;
    // _height = viewportHeight < screenHeight ? viewportHeight : screenHeight;

    return { width: screenWidth, height: screenHeight };
  }

  return HEADLESS_VIEWPORT_SIZE;
}

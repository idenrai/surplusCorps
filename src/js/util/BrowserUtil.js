class BrowserUtil {

  static getLocale = () => {
    // IE
    if (window.navigator.userLanguage) return window.navigator.userLanguage;
    // Firefox, Opera, Other
    if (window.navigator.language) return window.navigator.language;
    // IE, Opera, Other
    if (window.navigator.browserLanguage) return window.navigator.browserLanguage;
    return undefined;
  }
}

export default BrowserUtil;

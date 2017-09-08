import BrowserUtil from '../js/util/BrowserUtil';
import * as i18n from './i18n';

const Menu = require('./menu');

// Menu data
exports.Menu = Menu.default;

// i18n
const getLocale = () => {
  const locale = BrowserUtil.getLocale();
  if (!locale) return undefined;

  return locale.substr(0, 2);
};

switch (getLocale()) {
  case 'en':
    exports.Message = i18n.en;
    break;
  case 'kr':
  default:
    exports.Message = i18n.kr;
    exports.MessagePortal = i18n.portalMsg;
}

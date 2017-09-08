Object.defineProperty(exports, '__esModule', {
  value: true
});
const ColorManipulator = require('material-ui/utils/colorManipulator');
const Colors = require('material-ui/styles/colors');

exports.default = {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 10,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56
  },
  zIndex: {
    menu: 1000,
    appBar: 1100,
    drawerOverlay: 1200,
    drawer: 1300,
    dialogOverlay: 1400,
    dialog: 1500,
    layer: 2000,
    popover: 2100,
    snackbar: 2900,
    tooltip: 3000
  },
  fontFamily: 'Avenir, Helvetica Neue, Helvetica, Arial, Verdana, Roboto, Meiryo UI, メイリオ, 游ゴシック, Yu Gothic, 游ゴシック体, YuGothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Meiryo, ＭＳ Ｐゴシック, MS PGothic, sans-serif',
  palette: {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey800,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey500,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500,
  },
  appBar: {
    height: 25,
    padding: 20,
    root: {
      position: 'fixed',
      top: 0,
      width: '100%',
      display: 'flex',
      paddingTop: 4,
    },
    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      paddingTop: 1,
      letterSpacing: 0,
      fontSize: 20,
    },
    link: {
      textDecoration: 'none',
    }
  },
};

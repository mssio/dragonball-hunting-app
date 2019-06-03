// Based on solution on https://github.com/facebook/react-native/issues/15114#issuecomment-433811416

const React = require("react");
const { Platform, Text } = require("react-native");

const defaultFontFamily = {
  ...Platform.select({
    android: { fontFamily: "Roboto" }
  })
};

const oldRender = Text.render;
Text.render = function(...args) {
  const origin = oldRender.call(this, ...args);
  return React.cloneElement(origin, {
    style: [defaultFontFamily, origin.props.style]
  });
};

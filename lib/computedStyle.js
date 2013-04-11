window.computedStyle = function (el, prop) {
  var style,
      retVal,
      getComputedStyle = window.getComputedStyle;

  // If we have getComputedStyle
  if (getComputedStyle) {
    // Query it
    // TODO: From CSS-Query notes, we might need (node, null) for FF
    style = getComputedStyle(el);

    // Grab the property and return
    retVal = style.getPropertyValue(prop);
  } else {
  // Otherwise, we are in IE and use currentStyle
    style = el.currentStyle;

    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    var camelProp = prop.replace(/-([\da-z])/gi, function (_, letter) {
      return letter.toUpperCase();
    });
    retVal = style[camelProp];
  }

  // Return our retVal
  return retVal;
};
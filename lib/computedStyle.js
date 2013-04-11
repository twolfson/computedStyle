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

    // If there is a style, grab it
    // DEV: Check if this will fail if there is not
    if (style) {
      retVal = currentStyle[prop];
    }
  }

  // Return our retVal
  return retVal;

  // DEV: Leaving this commented out so testling can tell us right/wrong/etc
  // retVal = el.style[prop];
};
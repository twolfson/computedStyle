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
    retVal = style[prop];
  }

  // Return our retVal
  return retVal;
};
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
      retVal = style[prop];
    }
  }

  // Return our retVal
  return retVal;

  // DEV: Leaving this commented out so testling can tell us right/wrong/etc
  // retVal = el.style[prop];

  // TODO: Test out z-index and whatnot
  // Here is a reference for all cross-browser CSSOM -> DOM names from CSS-Query
  // http://msdn.microsoft.com/en-us/library/ms535231%28v=vs.85%29.aspx
};
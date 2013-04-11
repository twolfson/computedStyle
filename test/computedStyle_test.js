describe('computedStyle', function () {
  // Localize head and body
  var head = document.getElementsByTagName('head')[0],
      body = document.body;

  // Create assertEqual method
  function assertEqual(a, b) {
    if (a !== b) {
      throw new Error('Assertion error: ' + a + ' !== ' + b);
    }
  }

  describe('querying an inline styled DOM element', function () {
    before(function () {
      // Create and style an element
      var el = document.createElement('div');
      el.style.cssText = 'color: #FF0000;';

      // Save the element for later
      this.el = el;

      // Append it to the DOM
      body.appendChild(el);

      // Query the element for its styles
      var color = computedStyle(el, 'color');
      this.color = color;
    });

    after(function () {
      // Clean up the element
      body.removeChild(this.el);
    });

    it('can find the styles', function () {
      // DEV: I don't trust this yet...
      // assertEqual(this.color, 'FF0000');
      assertEqual(this.color, 'rgb(255, 0, 0)');
    });
  });

  describe('querying an stylesheet styled DOM element', function () {
    before(function () {
      // Create an element
      var el = document.createElement('div');
      el.setAttribute('id', 'test-el');

      // Save the element for later
      this.el = el;

      // Append it to the DOM
      body.appendChild(el);

      // Create a stylesheet and append it to the DOM
      // TODO: Try out createElement, whatever quirks mode says, and doc.write
      var stylesheet = document.createElement('style');
      stylesheet.innerHTML = '#test-el { color: #00FF00; }';

      // Save it for later
      this.stylesheet = stylesheet;

      // Append the stylesheet to the DOM
      head.appendChild(stylesheet);

      // Query the element for its styles
      var color = computedStyle(el, 'color');
      this.color = color;
    });

    after(function () {
      // Clean up the element and stylesheet
      body.removeChild(this.el);
      head.removeChild(this.stylesheet);
    });

    it('can find the styles', function () {
      // DEV: I don't trust this yet...
      // assertEqual(this.color, '00FF00');
      assertEqual(this.color, 'rgb(0, 255, 0)');
    });
  });
});
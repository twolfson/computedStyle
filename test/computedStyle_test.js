describe('computedStyle', function () {
  // Localize body
  var body = document.body;

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
      assertEqual(this.color, 'FF0000');
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
      window.document.documentElement.childNodes[0].appendChild(stylesheet);

      // Query the element for its styles
      var color = computedStyle(el, 'color');
      this.color = color;
    });

    after(function () {
      // Clean up the element
      body.removeChild(this.el);
    });

    it('can find the styles', function () {
      assertEqual(this.color, '00FF00');
    });
  });
});
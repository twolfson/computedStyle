describe('computedStyle', function () {
  // Localize head and body
  var head = document.getElementsByTagName('head')[0],
      body = document.body;

  // Create assertion methods
  function assert(a) {
    if (!a) {
      throw new Error('Assertion error: ' + a + ' is falsy');
    }
  }

  function assertEqual(a, b) {
    if (a !== b) {
      throw new Error('Assertion error: ' + a + ' !== ' + b);
    }
  }

  function assertMatches(a, b) {
    if (!a.match(b)) {
      throw new Error('Assertion error: ' + a + ' does not match ' + b);
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
      // Color varies from browser to browser. jQuery doesn't tweak it and if we are keeping this single purpose, neithe will I.
      var color = this.color;
      assert(color);
      assertMatches(color, /^#FF0000|rgb\(255, 0, 0\)$/i);
    });
  });

  describe('querying an stylesheet styled DOM element', function () {
    before(function () {
      // Create an element
      var el = document.createElement('div');
      el.setAttribute('id', 'test-el');

      // Save the element for later
      this.el = el;

      // TODO: Remove this
      el.innerHTML = 'aaaa';

      // Append it to the DOM
      body.appendChild(el);

      // Create a stylesheet and append it to the DOM
      // TODO: Try out createElement, whatever quirks mode says, and doc.write
      document.write('<style>#test-el { color: #00FF00; }</style>');
      // try {
      //   var stylesheet = document.createElement('style');
      //   alert(stylesheet.nodeValue);
      //   // stylesheet.innerHTML = '#test-el { color: #00FF00; }';
      // } catch (e) {}


      // Save it for later
      this.stylesheet = stylesheet;

      // Append the stylesheet to the DOM
      head.appendChild(stylesheet);

      // Query the element for its styles
      var color = computedStyle(el, 'color');
      this.color = color;
    });

    // after(function () {
    //   // Clean up the element and stylesheet
    //   body.removeChild(this.el);
    //   head.removeChild(this.stylesheet);
    // });

    it('can find the styles', function () {
      var color = this.color;
      assert(color);
      assertMatches(color, /^#00FF00|rgb\(0, 255, 0\)$/i);
    });
  });
});
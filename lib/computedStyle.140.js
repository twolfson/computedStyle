function(e,p,r,g){g=window.getComputedStyle;return g?g(e).getPropertyValue(p):e.currentStyle[p]}
function(e,p,r,g,c){g=window.getComputedStyle;return g?g(e).getPropertyValue(p):c=p.replace(/-(\w)/g,(_,l){return l.toUpperCase()}),e.currentStyle[c]}
function(e,p,r,g){g=window.getComputedStyle;return g?g(e).getPropertyValue(p):e.currentStyle[p.replace(/-\w/g,(x){return x[1].toUpperCase()})]}
// also, not guaranteed [0] will work -- I think we might need .charAt(0) =(
// which would bring us back to regexp grouping
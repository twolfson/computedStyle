function(e,p,g){g=window.getComputedStyle;return (g?g(e):e.currentStyle)[p.replace(/-(\w)/g,(w,l){return l.toUpperCase()})]}
// also, not guaranteed [0] will work -- I think we might need .charAt(0) =(
// which would bring us back to regexp grouping
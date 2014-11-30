!function() {
  var previous

  document.addEventListener('mouseover', justAnchor(function(el) {
    var zIndex = previous ? +previous.style.zIndex : 0

    previous = el
    el.style.zIndex = zIndex + 1
  }))

  function justAnchor(fn) {
    return function(ev) {
      var el = ev.target

      if(!el) return
      if(el === previous) return
      if(!el.tagName || el.tagName.toLowerCase() !== 'a') return

      fn(el)
    }
  }
}()

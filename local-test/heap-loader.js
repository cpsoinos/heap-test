;(window.heapReadyCb = window.heapReadyCb || []),
  (window.heap = window.heap || []),
  (heap.load = function (e, t) {
    ;(window.heap.envId = e),
      (window.heap.clientConfig = t = t || {}),
      (window.heap.clientConfig.shouldFetchServerConfig = !1)
    var a = document.createElement("script")
    ;(a.type = "text/javascript"),
      (a.async = !0),
      (a.src = "https://cdn.us.heap-api.com/config/" + e + "/heap_config.js")
    var r = document.getElementsByTagName("script")[0]
    r.parentNode.insertBefore(a, r)
    var n = [
        "init",
        "startTracking",
        "stopTracking",
        "track",
        "resetIdentity",
        "identify",
        "getSessionId",
        "getUserId",
        "getIdentity",
        "addUserProperties",
        "addEventProperties",
        "removeEventProperty",
        "clearEventProperties",
        "addAccountProperties",
        "addAdapter",
        "addTransformer",
        "addTransformerFn",
        "onReady",
      ],
      i = function (e) {
        return function () {
          var t = Array.prototype.slice.call(arguments, 0)
          window.heapReadyCb.push({
            name: e,
            fn: function () {
              heap[e] && heap[e].apply(heap, t)
            },
          })
        }
      }
    for (let o = 0; o < n.length; o++) heap[n[o]] = i(n[o])
  })
heap.load("660636389", { logLevel: "trace" })

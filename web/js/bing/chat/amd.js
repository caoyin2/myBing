/* eslint-disable */
var amd, define, require;
(function(n) {
    function e(n, i, u) {
        t[n] || (t[n] = {
            dependencies: i,
            callback: u
        },
        r(n))
    }
    function r(n) {
        if (n) {
            if (n)
                return u(n)
        } else {
            if (!f) {
                for (var r in t)
                    u(r);
                f = !0
            }
            return i
        }
    }
    function u(n) {
        var s, e;
        if (i[n])
            return i[n];
        if (t.hasOwnProperty(n)) {
            var h = t[n]
              , f = h.dependencies
              , l = h.callback
              , a = r
              , o = {}
              , c = [a, o];
            if (f.length < 2)
                throw "invalid usage";
            else if (f.length > 2)
                for (s = f.slice(2, f.length),
                e = 0; e < s.length; e++)
                    c.push(u(s[e]));
            return l.apply(this, c),
            i[n] = o,
            o
        }
    }
    var t = {}
      , i = {}
      , f = !1;
    n.define = e;
    n.require = r
}
)(amd || (amd = {}));
define = amd.define;
require = amd.require;
var _w = window
  , _d = document
  , sb_ie = window.ActiveXObject !== undefined
  , sb_i6 = sb_ie && !_w.XMLHttpRequest
  , _ge = function(n) {
    return _d.getElementById(n)
}
  , _qs = function(n, t) {
    return t = typeof t == "undefined" ? _d : t,
    t.querySelector ? t.querySelector(n) : null
}
  , sb_st = function(n, t) {
    return setTimeout(n, t)
}
  , sb_rst = sb_st
  , sb_ct = function(n) {
    clearTimeout(n)
}
  , sb_gt = function() {
    return (new Date).getTime()
}
  , sj_gx = function() {
    return sb_i6 ? new ActiveXObject("MSXML2.XMLHTTP") : new XMLHttpRequest
};
_w.sj_ce = function(n, t, i) {
    var r = _d.createElement(n);
    return t && (r.id = t),
    i && (r.className = i),
    r
}
;
_w.sj_cook = _w.sj_cook || {
    get: function(n, t) {
        var i = _d.cookie.match(new RegExp("\\b" + n + "=[^;]+")), r;
        return t && i ? (r = i[0].match(new RegExp("\\b" + t + "=([^&]*)")),
        r ? r[1] : null) : i ? i[0] : null
    }
};
_w.sk_merge || (_w.sk_merge = function(n) {
    _d.cookie = n
}
);
_w.bbe = "A:rms:answers:Shared:BingCore.Bundle";
define("fallback", ["require", "exports"], function(n, t) {
    function f() {
        return function() {
            for (var r, h, c, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            if (r = s(arguments.callee),
            u && (h = e(r),
            h.toString() != f().toString()))
                return h.apply(null, arguments);
            c = i[r].q;
            t[0] === "onPP" && o();
            c.push(t)
        }
    }
    function s(n) {
        for (var t in i)
            if (i[t].h === n)
                return t
    }
    function e(n, t) {
        for (var u, e = n.split("."), i = _w, r = 0; r < e.length; r++)
            u = e[r],
            typeof i[u] == "undefined" && t && (i[u] = r === e.length - 1 ? f() : {}),
            i = i[u];
        return i
    }
    function o() {
        var e = i["rms.js"].q, o, f, r, n, s, u, t;
        if (e.length > 0)
            for (o = !1,
            f = 0; f < e.length; f++) {
                for (r = e[f],
                n = 0; n < r.length; n++)
                    if (s = _w.bbe,
                    u = r[n][s],
                    u || (u = r[n]["A:rmsBu0"]),
                    u) {
                        t = _d.createElement("script");
                        t.setAttribute("data-rms", "1");
                        t.setAttribute("crossorigin", "anonymous");
                        t.src = u;
                        t.type = "text/javascript";
                        setTimeout(function() {
                            _d.body.appendChild(t)
                        }, 0);
                        r.splice(n, 1);
                        o = !0;
                        break
                    }
                if (o)
                    break
            }
    }
    function h() {
        var n, t, f;
        for (u = !1,
        n = 0; n < r.length; n++)
            t = r[n],
            f = e(t, !0),
            i[t] = {
                h: f,
                q: []
            }
    }
    function c() {
        for (var t, n = 0; n < r.length; n++) {
            var o = r[n]
              , s = i[o].q
              , h = e(o);
            for (t = 0; t < s.length; t++)
                h.toString() !== f().toString() && h.apply(null, s[t])
        }
        u = !0
    }
    function l(n, t, i, r) {
        n && ((n === _w || n === _d || n === _d.body) && t == "load" ? _w.sj_evt.bind("onP1", i, !0) : n.addEventListener ? n.addEventListener(t, i, r) : n.attachEvent ? n.attachEvent("on" + t, i) : n["on" + t] = i)
    }
    t.__esModule = !0;
    t.replay = void 0;
    var r = ["rms.js", "sj_evt.bind", "sj_evt.fire", "sj_jb", "sj_wf", "sj_cook.get", "sj_cook.set", "sj_pd", "sj_sp", "sj_be", "sj_go", "sj_ev", "sj_ue", "sj_evt.unbind", "sj_et", "Log.Log", "sj_mo", "sj_so"]
      , i = {}
      , u = !1;
    _w.fb_is = o;
    t.replay = c;
    h();
    _w.sj_be = l
});
function lb() {
    _w.si_sendCReq && sb_st(_w.si_sendCReq, 800);
    _w.lbc && _w.lbc()
}
;(function() {
    function n(n) {
        n = sb_ie ? _w.event : n;
        (!n.altKey || n.ctrlKey || n.shiftKey) && (n.key && n.key === "Enter" || n.keyCode && n.keyCode === 13) && _w.si_ct(sb_ie ? n.srcElement : n.target, !1, n, "enter")
    }
    sj_be(document, "keydown", n, !1)
}
)();
(function() {
    function n(n) {
        _w.si_ct(sb_ie ? _w.event.srcElement : n.target, !1, _w.event || n);
        sj_evt && sj_evt.fire("cbksent", n)
    }
    sj_be(document, "mousedown", n, !1);
    sj_evt.bind("sydFSCLoaded", function() {
        var t;
        ((t = CIB === null || CIB === void 0 ? void 0 : CIB.config) === null || t === void 0 ? void 0 : t.bing) && (CIB.config.bing.sendClickBeacon = n)
    }, !0)
}
)();
_w.si_sbwu = function(n) {
    var r = _G.BQIG == null ? _G.IG : _G.BQIG
      , u = "/fd/ls/GLinkPingPost.aspx?IG=" + r + n
      , t = "sendBeacon"
      , i = !1;
    if (navigator && navigator[t])
        try {
            navigator[t](u, "");
            i = !0
        } catch (f) {}
    return i
}
;
ClTrCo = {
    furl: !0
};
var ctcc = 0
  , clc = _w.ClTrCo || {};
_w.si_ct = function(n, t, i, r) {
    var u, o, e, s, f, a, h, c, l;
    if (clc.SharedClickSuppressed)
        return !0;
    u = "getAttribute";
    try {
        for (; n !== document.body; n = n.parentNode) {
            if (!n || n === document || n[u]("data-noct"))
                break;
            if (o = (n.tagName === "A" || n[u]("data-clicks")) && (n[u]("h") || n[u]("data-h")) || n[u]("_ct"),
            o) {
                e = n[u]("_ctf");
                s = -1;
                i && (i.type === "keydown" ? s = -2 : i.button != null && (s = i.button));
                e && _w[e] || (e = "si_T");
                e === "si_T" && (f = n[u]("href"),
                _G !== undefined && _G.EF !== undefined && _G.EF.newtabredironclicktracking === 1 && f.indexOf("/newtabredir") == 0 ? (a = new RegExp("[?&]?url=([^&]*)(&|$)"),
                h = f.match(a),
                h && (f = f.indexOf("&be=1") >= 0 ? encodeURIComponent(atob(decodeURIComponent(h[1]))) : h[1])) : f = encodeURIComponent(n[u]("href")),
                clc.furl && !n[u]("data-private") ? o += "&url=" + f : clc.mfurl && (o += "&abc=" + f));
                r && (o += "&source=" + r);
                c = "";
                clc.mc && (c = "&c=" + ctcc++);
                l = "&" + o + c;
                _w.si_sbwu(l) || _w[e] && _w[e](l, n, i, s);
                break
            }
            if (t)
                break
        }
    } catch (v) {
        _w.SharedLogHelper ? SharedLogHelper.LogWarning("clickEX", null, v) : (new Image).src = _G.lsUrl + '&Type=Event.ClientInst&DATA=[{"T":"CI.Warning","FID":"CI","Name":"JSWarning","Text":' + v.message + "}]"
    }
    return !0
}
;
_w.si_sbwu || (_w.si_sbwu = function() {
    return !1
}
),
function() {
    _w._G && (_G.si_ct_e = "click")
}();
var wlc_d = 1500
  , wlc_t = 63826472602;
;var perf;
(function(n) {
    function f(n) {
        return i.hasOwnProperty(n) ? i[n] : n
    }
    function e(n) {
        var t = "S";
        return n == 0 ? t = "P" : n == 2 && (t = "M"),
        t
    }
    function o(n) {
        for (var c, i = [], t = {}, r, l = 0; l < n.length; l++) {
            var a = n[l]
              , o = a.v
              , s = a.t
              , h = a.k;
            s === 0 && (h = f(h),
            o = o.toString(36));
            s === 3 ? i.push("".concat(h, ":").concat(o)) : (r = t[s] = t[s] || [],
            r.push("".concat(h, ":").concat(o)))
        }
        for (c in t)
            t.hasOwnProperty(c) && (r = t[c],
            i.push("".concat(e(+c), ':"').concat(r.join(","), '"')));
        return i.push(u),
        i
    }
    for (var r = ["redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "secureConnectionStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "unloadEventStart", "unloadEventEnd", "firstChunkEnd", "secondChunkStart", "htmlEnd", "pageEnd", "msFirstPaint"], u = "v:1.1", i = {}, t = 0; t < r.length; t++)
        i[r[t]] = t;
    n.compress = o
}
)(perf || (perf = {}));
window.perf = window.perf || {},
function(n) {
    n.log = function(t, i) {
        var f = n.compress(t), r;
        f.push('T:"CI.Perf",FID:"CI",Name:"PerfV2"');
        var e = "/fd/ls/lsp.aspx?"
          , o = "sendBeacon"
          , h = "<E><T>Event.ClientInst<\/T><IG>".concat(_G.IG, "<\/IG><TS>").concat(i, "<\/TS><D><![CDATA[{").concat(f.join(","), "}]\]><\/D><\/E>")
          , s = "<ClientInstRequest><Events>".concat(h, "<\/Events><STS>").concat(i, "<\/STS><\/ClientInstRequest>")
          , u = !_w.navigator || !navigator[o];
        if (!u)
            try {
                navigator[o](e, s)
            } catch (c) {
                u = !0
            }
        u && (r = sj_gx(),
        r.open("POST", e, !0),
        r.setRequestHeader("Content-Type", "text/xml"),
        r.send(s))
    }
}(window.perf);
var perf;
(function(n) {
    function a() {
        return c(Math.random() * 1e4)
    }
    function o() {
        return y ? c(f.now()) + l : +new Date
    }
    function v(n, r, f) {
        t.length === 0 && i && sb_st(u, 1e3);
        t.push({
            k: n,
            v: r,
            t: f
        })
    }
    function p(n) {
        return i || (r = n),
        !i
    }
    function w(n, t) {
        t || (t = o());
        v(n, t, 0)
    }
    function b(n, t) {
        v(n, t, 1)
    }
    function u() {
        var u, f;
        if (t.length) {
            for (u = 0; u < t.length; u++)
                f = t[u],
                f.t === 0 && (f.v -= r);
            t.push({
                k: "id",
                v: e,
                t: 3
            });
            n.log(t, o());
            t = [];
            i = !0
        }
    }
    function k() {
        r = o();
        e = a();
        i = !1;
        sj_evt.bind("onP1", u)
    }
    var s = "performance", h = !!_w[s], f = _w[s], y = h && !!f.now, c = Math.round, t = [], i = !1, l, r, e;
    h ? l = r = f.timing.navigationStart : r = _w.si_ST ? _w.si_ST : +new Date;
    e = a();
    n.setStartTime = p;
    n.mark = w;
    n.record = b;
    n.flush = u;
    n.reset = k;
    sj_be(window, "load", u, !1);
    sj_be(window, "beforeunload", u, !1)
}
)(perf || (perf = {}));
_w.si_PP = function(n, t, i) {
    var r, o, l, h, e, c;
    if (!_G.PPS) {
        for (o = ["FC", "BC", "SE", "TC", "H", "BP", null]; r = o.shift(); )
            o.push('"' + r + '":' + (_G[r + "T"] ? _G[r + "T"] - _G.ST : -1));
        var u = _w.perf, s = "navigation", r, f = i || _w.performance && _w.performance.timing;
        if (f && u) {
            if (l = f.navigationStart,
            u.setStartTime(l),
            l >= 0) {
                for (r in f)
                    h = f[r],
                    typeof h == "number" && h > 0 && r !== "navigationStart" && r !== s && u.mark(r, h);
                _G.FCT && u.mark("FN", _G.FCT);
                _G.BCT && u.mark("BN", _G.BCT)
            }
            u.record("nav", s in f ? f[s] : performance[s].type)
        }
        e = "connection";
        c = "";
        _w.navigator && navigator[e] && (c = ',"net":"'.concat(navigator[e].type, '"'),
        navigator[e].downlinkMax && (c += ',"dlMax":"'.concat(navigator[e].downlinkMax, '"')));
        _G.PPImg = new Image;
        _G.PPImg.src = _G.lsUrl + '&Type=Event.CPT&DATA={"pp":{"S":"' + (t || "L") + '",' + o.join(",") + ',"CT":' + (n - _G.ST) + ',"IL":' + _d.images.length + "}" + (_G.C1 ? "," + _G.C1 : "") + c + "}" + (_G.P ? "&P=" + _G.P : "") + (_G.DA ? "&DA=" + _G.DA : "") + (_G.MN ? "&MN=" + _G.MN : "");
        _G.PPS = 1;
        sb_st(function() {
            u && u.flush();
            sj_evt.fire("onPP");
            sj_evt.fire(_w.p1)
        }, 1)
    }
}
;
_w.onbeforeunload = function() {
    si_PP(new Date, "A")
}
;
sj_evt.bind("ajax.requestSent", function() {
    window.perf && perf.reset()
});
var sj_log = function(n, t, i) {
    var r = new RegExp('"',"g");
    (new Image).src = _G.lsUrl + '&Type=Event.ClientInst&DATA=[{"T":"' + n + '","FID":"CI","Name":"' + t + '","Text":"' + escape(i.replace(r, "")) + '"}]'
};
var BM = BM || {}
  , adrule = "." + _G.adc + " > ul";
BM.rules = {
    ".b_scopebar": [0, 80, 0],
    ".b_logo": [-1, -1, 0],
    ".b_searchboxForm": [100, 19, 0],
    "#id_h": [-1, -1, 0],
    "#b_tween": [-1, -1, 1],
    "#b_results": [100, -1, 1],
    "#b_context": [710, -1, 1],
    "#b_navheader": [-1, -1, 0],
    "#bfb-answer": [-1, -1, 1],
    ".tab-menu > ul": [-1, -1, 1],
    ".b_footer": [0, -1, 0],
    "#b_notificationContainer": [-1, -1, 0],
    "#ajaxMaskLayer": [-1, -1, 0],
    "img,div[data-src],.rms_img": [-1, -1, 0],
    iframe: [-1, -1, 0]
};
BM.rules[adrule] = [-1, -1, 1];
var BM = BM || {};
(function(n) {
    function u(n, u) {
        n in t || (t[n] = []);
        !u.compute || n in r || (r[n] = u.compute);
        !u.unload || n in i || (i[n] = u.unload);
        u.load && u.load()
    }
    function f(n, i) {
        t[n].push({
            t: s(),
            i: i
        })
    }
    function e(n) {
        return n in i && i[n](),
        n in t ? t[n] : void 0
    }
    function o() {
        for (var n in r)
            r[n]()
    }
    function s() {
        return window.performance && performance.now ? Math.round(performance.now()) : new Date - window.si_ST
    }
    var t = {}
      , i = {}
      , r = {};
    n.wireup = u;
    n.enqueue = f;
    n.dequeue = e;
    n.trigger = o
}
)(BM);
(function(n) {
    function i() {
        var i = document.documentElement
          , r = document.body
          , u = "innerWidth"in window ? window.innerWidth : i.clientWidth
          , f = "innerHeight"in window ? window.innerHeight : i.clientHeight
          , e = window.pageXOffset || i.scrollLeft
          , o = window.pageYOffset || i.scrollTop
          , s = document.visibilityState || "default";
        n.enqueue(t, {
            x: e,
            y: o,
            w: u,
            h: f,
            dw: r.clientWidth,
            dh: r.clientHeight,
            v: s
        })
    }
    var t = "V";
    n.wireup(t, {
        load: null,
        compute: i,
        unload: null
    })
}
)(BM);
(function(n) {
    function i() {
        var e, o, u, s, f, r;
        if (document.querySelector && document.querySelectorAll) {
            e = [];
            o = n.rules;
            for (u in o)
                for (s = o[u],
                u += !s[2] ? "" : " >*",
                f = document.querySelectorAll(u),
                r = 0; r < f.length; r++) {
                    var i = f[r]
                      , h = 0
                      , c = 0
                      , l = i.offsetWidth
                      , a = i.offsetHeight;
                    do
                        h += i.offsetLeft,
                        c += i.offsetTop;
                    while (i = i.offsetParent);
                    e.push({
                        _e: f[r],
                        x: h,
                        y: c,
                        w: l,
                        h: a
                    })
                }
            n.enqueue(t, e)
        }
    }
    var t = "L";
    n.wireup(t, {
        load: null,
        compute: i,
        unload: null
    })
}
)(BM);
(function(n) {
    function f() {
        u(sj_be, r)
    }
    function r(i) {
        return i && n.enqueue(t, i),
        !0
    }
    function e() {
        u(sj_ue, r)
    }
    function u(n, t) {
        for (var u, r = 0; r < i.length; r++)
            u = i[r],
            n(u === "resize" ? window : document, window.navigator.pointerEnabled ? u.replace("mouse", "pointer") : u, t, !1)
    }
    var t = "EVT"
      , i = ["click", "mousedown", "mouseup", "touchstart", "touchend", "mousemove", "touchmove", "scroll", "keydown", "resize"];
    n.wireup(t, {
        load: f,
        compute: null,
        unload: e
    })
}
)(BM);
FallBackToDefaultProfilePic = function(e) {
    var new_element = document.createElement('span');
    new_element.setAttribute('id', 'id_p');
    new_element.setAttribute('class', 'sw_spd id_avatar');
    new_element.setAttribute('aria-label', "默认个人资料图片");
    new_element.setAttribute('role', 'link');
    var p = e.parentNode;
    p && p.replaceChild(new_element, e);
}
;

﻿"use strict";
let config = {
    colors: {
        primary: "#696cff",
        secondary: "#8592a3",
        success: "#71dd37",
        info: "#03c3ec",
        warning: "#ffab00",
        danger: "#ff3e1d",
        dark: "#233446",
        black: "#000",
        white: "#fff",
        cardColor: "#fff",
        bodyBg: "#f5f5f9",
        bodyColor: "#697a8d",
        headingColor: "#566a7f",
        textMuted: "#a1acb8",
        borderColor: "#eceef1"
    }
}

let menu, animate;
!function () {
    document.querySelectorAll("#layout-menu").forEach(function (e) {
        menu = new Menu(e, {
            orientation: "vertical",
            closeChildren: !1
        }),
            window.Helpers.scrollToActive(animate = !1),
            window.Helpers.mainMenu = menu
    });
    document.querySelectorAll(".layout-menu-toggle").forEach(e => {
        e.addEventListener("click", e => {
            e.preventDefault(),
                window.Helpers.toggleCollapsed()
        }
        )
    }
    );
    if (document.getElementById("layout-menu")) {
        var t = document.getElementById("layout-menu");
        var l = function () {
            Helpers.isSmallScreen() || document.querySelector(".layout-menu-toggle").classList.add("d-block")
        };
        let e = null;
        t.onmouseenter = function () {
            e = Helpers.isSmallScreen() ? setTimeout(l, 0) : setTimeout(l, 300)
        }
            ,
            t.onmouseleave = function () {
                document.querySelector(".layout-menu-toggle").classList.remove("d-block"),
                    clearTimeout(e)
            }
    }
    let e = document.getElementsByClassName("menu-inner")
        , o = document.getElementsByClassName("menu-inner-shadow")[0];
    0 < e.length && o && e[0].addEventListener("ps-scroll-y", function () {
        this.querySelector(".ps__thumb-y").offsetTop ? o.style.display = "block" : o.style.display = "none"
    }),
        [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) {
            return new bootstrap.Tooltip(e)
        });
    function n(e) {
        "show.bs.collapse" == e.type || "show.bs.collapse" == e.type ? e.target.closest(".accordion-item").classList.add("active") : e.target.closest(".accordion-item").classList.remove("active")
    }
    [].slice.call(document.querySelectorAll(".accordion")).map(function (e) {
        e.addEventListener("show.bs.collapse", n),
            e.addEventListener("hide.bs.collapse", n)
    });
    window.Helpers.setAutoUpdate(!0),
        window.Helpers.initPasswordToggle(),
        window.Helpers.initSpeechToText(),
        window.Helpers.isSmallScreen() || window.Helpers.setCollapsed(!0, !1)
}();


/*! For license information please see bootstrap.js.LICENSE.txt */
!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var n = t();
        for (var i in n)
            ("object" == typeof exports ? exports : e)[i] = n[i]
    }
}(self, (function () {
    return function () {
        "use strict";
        var e = {
            d: function (t, n) {
                for (var i in n)
                    e.o(n, i) && !e.o(t, i) && Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: n[i]
                    })
            },
            o: function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            r: function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
        }
            , t = {};
        e.r(t),
            e.d(t, {
                bootstrap: function () {
                    return i
                }
            });
        var n = {};
        e.r(n),
            e.d(n, {
                afterMain: function () {
                    return E
                },
                afterRead: function () {
                    return b
                },
                afterWrite: function () {
                    return T
                },
                applyStyles: function () {
                    return D
                },
                arrow: function () {
                    return Z
                },
                auto: function () {
                    return c
                },
                basePlacements: function () {
                    return l
                },
                beforeMain: function () {
                    return w
                },
                beforeRead: function () {
                    return _
                },
                beforeWrite: function () {
                    return A
                },
                bottom: function () {
                    return o
                },
                clippingParents: function () {
                    return d
                },
                computeStyles: function () {
                    return ie
                },
                createPopper: function () {
                    return De
                },
                createPopperBase: function () {
                    return Pe
                },
                createPopperLite: function () {
                    return Ie
                },
                detectOverflow: function () {
                    return _e
                },
                end: function () {
                    return f
                },
                eventListeners: function () {
                    return oe
                },
                flip: function () {
                    return ye
                },
                hide: function () {
                    return ke
                },
                left: function () {
                    return s
                },
                main: function () {
                    return k
                },
                modifierPhases: function () {
                    return C
                },
                offset: function () {
                    return Ee
                },
                placements: function () {
                    return g
                },
                popper: function () {
                    return p
                },
                popperGenerator: function () {
                    return Le
                },
                popperOffsets: function () {
                    return Ae
                },
                preventOverflow: function () {
                    return Oe
                },
                read: function () {
                    return y
                },
                reference: function () {
                    return v
                },
                right: function () {
                    return a
                },
                start: function () {
                    return u
                },
                top: function () {
                    return r
                },
                variationPlacements: function () {
                    return m
                },
                viewport: function () {
                    return h
                },
                write: function () {
                    return O
                }
            });
        var i = {};
        e.r(i),
            e.d(i, {
                Alert: function () {
                    return $t
                },
                Button: function () {
                    return en
                },
                Carousel: function () {
                    return Dn
                },
                Collapse: function () {
                    return Un
                },
                Dropdown: function () {
                    return _i
                },
                Modal: function () {
                    return Zi
                },
                Offcanvas: function () {
                    return gr
                },
                Popover: function () {
                    return Br
                },
                ScrollSpy: function () {
                    return $r
                },
                Tab: function () {
                    return wo
                },
                Toast: function () {
                    return Mo
                },
                Tooltip: function () {
                    return Mr
                }
            });
        var r = "top"
            , o = "bottom"
            , a = "right"
            , s = "left"
            , c = "auto"
            , l = [r, o, a, s]
            , u = "start"
            , f = "end"
            , d = "clippingParents"
            , h = "viewport"
            , p = "popper"
            , v = "reference"
            , m = l.reduce((function (e, t) {
                return e.concat([t + "-" + u, t + "-" + f])
            }
            ), [])
            , g = [].concat(l, [c]).reduce((function (e, t) {
                return e.concat([t, t + "-" + u, t + "-" + f])
            }
            ), [])
            , _ = "beforeRead"
            , y = "read"
            , b = "afterRead"
            , w = "beforeMain"
            , k = "main"
            , E = "afterMain"
            , A = "beforeWrite"
            , O = "write"
            , T = "afterWrite"
            , C = [_, y, b, w, k, E, A, O, T];
        function x(e) {
            return e ? (e.nodeName || "").toLowerCase() : null
        }
        function S(e) {
            if (null == e)
                return window;
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return t && t.defaultView || window
            }
            return e
        }
        function L(e) {
            return e instanceof S(e).Element || e instanceof Element
        }
        function j(e) {
            return e instanceof S(e).HTMLElement || e instanceof HTMLElement
        }
        function P(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof S(e).ShadowRoot || e instanceof ShadowRoot)
        }
        var D = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
                var t = e.state;
                Object.keys(t.elements).forEach((function (e) {
                    var n = t.styles[e] || {}
                        , i = t.attributes[e] || {}
                        , r = t.elements[e];
                    j(r) && x(r) && (Object.assign(r.style, n),
                        Object.keys(i).forEach((function (e) {
                            var t = i[e];
                            !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
                        }
                        )))
                }
                ))
            },
            effect: function (e) {
                var t = e.state
                    , n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                return Object.assign(t.elements.popper.style, n.popper),
                    t.styles = n,
                    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                    function () {
                        Object.keys(t.elements).forEach((function (e) {
                            var i = t.elements[e]
                                , r = t.attributes[e] || {}
                                , o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) {
                                    return e[t] = "",
                                        e
                                }
                                ), {});
                            j(i) && x(i) && (Object.assign(i.style, o),
                                Object.keys(r).forEach((function (e) {
                                    i.removeAttribute(e)
                                }
                                )))
                        }
                        ))
                    }
            },
            requires: ["computeStyles"]
        };
        function I(e) {
            return e.split("-")[0]
        }
        var N = Math.max
            , M = Math.min
            , F = Math.round;
        function H() {
            var e = navigator.userAgentData;
            return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function (e) {
                return e.brand + "/" + e.version
            }
            )).join(" ") : navigator.userAgent
        }
        function B() {
            return !/^((?!chrome|android).)*safari/i.test(H())
        }
        function R(e, t, n) {
            void 0 === t && (t = !1),
                void 0 === n && (n = !1);
            var i = e.getBoundingClientRect()
                , r = 1
                , o = 1;
            t && j(e) && (r = e.offsetWidth > 0 && F(i.width) / e.offsetWidth || 1,
                o = e.offsetHeight > 0 && F(i.height) / e.offsetHeight || 1);
            var a = (L(e) ? S(e) : window).visualViewport
                , s = !B() && n
                , c = (i.left + (s && a ? a.offsetLeft : 0)) / r
                , l = (i.top + (s && a ? a.offsetTop : 0)) / o
                , u = i.width / r
                , f = i.height / o;
            return {
                width: u,
                height: f,
                top: l,
                right: c + u,
                bottom: l + f,
                left: c,
                x: c,
                y: l
            }
        }
        function W(e) {
            var t = R(e)
                , n = e.offsetWidth
                , i = e.offsetHeight;
            return Math.abs(t.width - n) <= 1 && (n = t.width),
                Math.abs(t.height - i) <= 1 && (i = t.height),
            {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: n,
                height: i
            }
        }
        function z(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t))
                return !0;
            if (n && P(n)) {
                var i = t;
                do {
                    if (i && e.isSameNode(i))
                        return !0;
                    i = i.parentNode || i.host
                } while (i)
            }
            return !1
        }
        function q(e) {
            return S(e).getComputedStyle(e)
        }
        function V(e) {
            return ["table", "td", "th"].indexOf(x(e)) >= 0
        }
        function K(e) {
            return ((L(e) ? e.ownerDocument : e.document) || window.document).documentElement
        }
        function Q(e) {
            return "html" === x(e) ? e : e.assignedSlot || e.parentNode || (P(e) ? e.host : null) || K(e)
        }
        function U(e) {
            return j(e) && "fixed" !== q(e).position ? e.offsetParent : null
        }
        function X(e) {
            for (var t = S(e), n = U(e); n && V(n) && "static" === q(n).position;)
                n = U(n);
            return n && ("html" === x(n) || "body" === x(n) && "static" === q(n).position) ? t : n || function (e) {
                var t = /firefox/i.test(H());
                if (/Trident/i.test(H()) && j(e) && "fixed" === q(e).position)
                    return null;
                var n = Q(e);
                for (P(n) && (n = n.host); j(n) && ["html", "body"].indexOf(x(n)) < 0;) {
                    var i = q(n);
                    if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter)
                        return n;
                    n = n.parentNode
                }
                return null
            }(e) || t
        }
        function Y(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
        }
        function $(e, t, n) {
            return N(e, M(t, n))
        }
        function G(e) {
            return Object.assign({}, {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, e)
        }
        function J(e, t) {
            return t.reduce((function (t, n) {
                return t[n] = e,
                    t
            }
            ), {})
        }
        var Z = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t, n = e.state, i = e.name, c = e.options, u = n.elements.arrow, f = n.modifiersData.popperOffsets, d = I(n.placement), h = Y(d), p = [s, a].indexOf(d) >= 0 ? "height" : "width";
                if (u && f) {
                    var v = function (e, t) {
                        return G("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : e) ? e : J(e, l))
                    }(c.padding, n)
                        , m = W(u)
                        , g = "y" === h ? r : s
                        , _ = "y" === h ? o : a
                        , y = n.rects.reference[p] + n.rects.reference[h] - f[h] - n.rects.popper[p]
                        , b = f[h] - n.rects.reference[h]
                        , w = X(u)
                        , k = w ? "y" === h ? w.clientHeight || 0 : w.clientWidth || 0 : 0
                        , E = y / 2 - b / 2
                        , A = v[g]
                        , O = k - m[p] - v[_]
                        , T = k / 2 - m[p] / 2 + E
                        , C = $(A, T, O)
                        , x = h;
                    n.modifiersData[i] = ((t = {})[x] = C,
                        t.centerOffset = C - T,
                        t)
                }
            },
            effect: function (e) {
                var t = e.state
                    , n = e.options.element
                    , i = void 0 === n ? "[data-popper-arrow]" : n;
                null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && z(t.elements.popper, i) && (t.elements.arrow = i)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        };
        function ee(e) {
            return e.split("-")[1]
        }
        var te = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function ne(e) {
            var t, n = e.popper, i = e.popperRect, c = e.placement, l = e.variation, u = e.offsets, d = e.position, h = e.gpuAcceleration, p = e.adaptive, v = e.roundOffsets, m = e.isFixed, g = u.x, _ = void 0 === g ? 0 : g, y = u.y, b = void 0 === y ? 0 : y, w = "function" == typeof v ? v({
                x: _,
                y: b
            }) : {
                x: _,
                y: b
            };
            _ = w.x,
                b = w.y;
            var k = u.hasOwnProperty("x")
                , E = u.hasOwnProperty("y")
                , A = s
                , O = r
                , T = window;
            if (p) {
                var C = X(n)
                    , x = "clientHeight"
                    , L = "clientWidth";
                C === S(n) && "static" !== q(C = K(n)).position && "absolute" === d && (x = "scrollHeight",
                    L = "scrollWidth"),
                    (c === r || (c === s || c === a) && l === f) && (O = o,
                        b -= (m && C === T && T.visualViewport ? T.visualViewport.height : C[x]) - i.height,
                        b *= h ? 1 : -1),
                    c !== s && (c !== r && c !== o || l !== f) || (A = a,
                        _ -= (m && C === T && T.visualViewport ? T.visualViewport.width : C[L]) - i.width,
                        _ *= h ? 1 : -1)
            }
            var j, P = Object.assign({
                position: d
            }, p && te), D = !0 === v ? function (e, t) {
                var n = e.x
                    , i = e.y
                    , r = t.devicePixelRatio || 1;
                return {
                    x: F(n * r) / r || 0,
                    y: F(i * r) / r || 0
                }
            }({
                x: _,
                y: b
            }, S(n)) : {
                x: _,
                y: b
            };
            return _ = D.x,
                b = D.y,
                h ? Object.assign({}, P, ((j = {})[O] = E ? "0" : "",
                    j[A] = k ? "0" : "",
                    j.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + _ + "px, " + b + "px)" : "translate3d(" + _ + "px, " + b + "px, 0)",
                    j)) : Object.assign({}, P, ((t = {})[O] = E ? b + "px" : "",
                        t[A] = k ? _ + "px" : "",
                        t.transform = "",
                        t))
        }
        var ie = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
                var t = e.state
                    , n = e.options
                    , i = n.gpuAcceleration
                    , r = void 0 === i || i
                    , o = n.adaptive
                    , a = void 0 === o || o
                    , s = n.roundOffsets
                    , c = void 0 === s || s
                    , l = {
                        placement: I(t.placement),
                        variation: ee(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: r,
                        isFixed: "fixed" === t.options.strategy
                    };
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, ne(Object.assign({}, l, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: a,
                    roundOffsets: c
                })))),
                    null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, ne(Object.assign({}, l, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: c
                    })))),
                    t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-placement": t.placement
                    })
            },
            data: {}
        }
            , re = {
                passive: !0
            }
            , oe = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function () { },
                effect: function (e) {
                    var t = e.state
                        , n = e.instance
                        , i = e.options
                        , r = i.scroll
                        , o = void 0 === r || r
                        , a = i.resize
                        , s = void 0 === a || a
                        , c = S(t.elements.popper)
                        , l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return o && l.forEach((function (e) {
                        e.addEventListener("scroll", n.update, re)
                    }
                    )),
                        s && c.addEventListener("resize", n.update, re),
                        function () {
                            o && l.forEach((function (e) {
                                e.removeEventListener("scroll", n.update, re)
                            }
                            )),
                                s && c.removeEventListener("resize", n.update, re)
                        }
                },
                data: {}
            }
            , ae = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
        function se(e) {
            return e.replace(/left|right|bottom|top/g, (function (e) {
                return ae[e]
            }
            ))
        }
        var ce = {
            start: "end",
            end: "start"
        };
        function le(e) {
            return e.replace(/start|end/g, (function (e) {
                return ce[e]
            }
            ))
        }
        function ue(e) {
            var t = S(e);
            return {
                scrollLeft: t.pageXOffset,
                scrollTop: t.pageYOffset
            }
        }
        function fe(e) {
            return R(K(e)).left + ue(e).scrollLeft
        }
        function de(e) {
            var t = q(e)
                , n = t.overflow
                , i = t.overflowX
                , r = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + r + i)
        }
        function he(e) {
            return ["html", "body", "#document"].indexOf(x(e)) >= 0 ? e.ownerDocument.body : j(e) && de(e) ? e : he(Q(e))
        }
        function pe(e, t) {
            var n;
            void 0 === t && (t = []);
            var i = he(e)
                , r = i === (null == (n = e.ownerDocument) ? void 0 : n.body)
                , o = S(i)
                , a = r ? [o].concat(o.visualViewport || [], de(i) ? i : []) : i
                , s = t.concat(a);
            return r ? s : s.concat(pe(Q(a)))
        }
        function ve(e) {
            return Object.assign({}, e, {
                left: e.x,
                top: e.y,
                right: e.x + e.width,
                bottom: e.y + e.height
            })
        }
        function me(e, t, n) {
            return t === h ? ve(function (e, t) {
                var n = S(e)
                    , i = K(e)
                    , r = n.visualViewport
                    , o = i.clientWidth
                    , a = i.clientHeight
                    , s = 0
                    , c = 0;
                if (r) {
                    o = r.width,
                        a = r.height;
                    var l = B();
                    (l || !l && "fixed" === t) && (s = r.offsetLeft,
                        c = r.offsetTop)
                }
                return {
                    width: o,
                    height: a,
                    x: s + fe(e),
                    y: c
                }
            }(e, n)) : L(t) ? function (e, t) {
                var n = R(e, !1, "fixed" === t);
                return n.top = n.top + e.clientTop,
                    n.left = n.left + e.clientLeft,
                    n.bottom = n.top + e.clientHeight,
                    n.right = n.left + e.clientWidth,
                    n.width = e.clientWidth,
                    n.height = e.clientHeight,
                    n.x = n.left,
                    n.y = n.top,
                    n
            }(t, n) : ve(function (e) {
                var t, n = K(e), i = ue(e), r = null == (t = e.ownerDocument) ? void 0 : t.body, o = N(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = N(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -i.scrollLeft + fe(e), c = -i.scrollTop;
                return "rtl" === q(r || n).direction && (s += N(n.clientWidth, r ? r.clientWidth : 0) - o),
                {
                    width: o,
                    height: a,
                    x: s,
                    y: c
                }
            }(K(e)))
        }
        function ge(e) {
            var t, n = e.reference, i = e.element, c = e.placement, l = c ? I(c) : null, d = c ? ee(c) : null, h = n.x + n.width / 2 - i.width / 2, p = n.y + n.height / 2 - i.height / 2;
            switch (l) {
                case r:
                    t = {
                        x: h,
                        y: n.y - i.height
                    };
                    break;
                case o:
                    t = {
                        x: h,
                        y: n.y + n.height
                    };
                    break;
                case a:
                    t = {
                        x: n.x + n.width,
                        y: p
                    };
                    break;
                case s:
                    t = {
                        x: n.x - i.width,
                        y: p
                    };
                    break;
                default:
                    t = {
                        x: n.x,
                        y: n.y
                    }
            }
            var v = l ? Y(l) : null;
            if (null != v) {
                var m = "y" === v ? "height" : "width";
                switch (d) {
                    case u:
                        t[v] = t[v] - (n[m] / 2 - i[m] / 2);
                        break;
                    case f:
                        t[v] = t[v] + (n[m] / 2 - i[m] / 2)
                }
            }
            return t
        }
        function _e(e, t) {
            void 0 === t && (t = {});
            var n = t
                , i = n.placement
                , s = void 0 === i ? e.placement : i
                , c = n.strategy
                , u = void 0 === c ? e.strategy : c
                , f = n.boundary
                , m = void 0 === f ? d : f
                , g = n.rootBoundary
                , _ = void 0 === g ? h : g
                , y = n.elementContext
                , b = void 0 === y ? p : y
                , w = n.altBoundary
                , k = void 0 !== w && w
                , E = n.padding
                , A = void 0 === E ? 0 : E
                , O = G("number" != typeof A ? A : J(A, l))
                , T = b === p ? v : p
                , C = e.rects.popper
                , S = e.elements[k ? T : b]
                , P = function (e, t, n, i) {
                    var r = "clippingParents" === t ? function (e) {
                        var t = pe(Q(e))
                            , n = ["absolute", "fixed"].indexOf(q(e).position) >= 0 && j(e) ? X(e) : e;
                        return L(n) ? t.filter((function (e) {
                            return L(e) && z(e, n) && "body" !== x(e)
                        }
                        )) : []
                    }(e) : [].concat(t)
                        , o = [].concat(r, [n])
                        , a = o[0]
                        , s = o.reduce((function (t, n) {
                            var r = me(e, n, i);
                            return t.top = N(r.top, t.top),
                                t.right = M(r.right, t.right),
                                t.bottom = M(r.bottom, t.bottom),
                                t.left = N(r.left, t.left),
                                t
                        }
                        ), me(e, a, i));
                    return s.width = s.right - s.left,
                        s.height = s.bottom - s.top,
                        s.x = s.left,
                        s.y = s.top,
                        s
                }(L(S) ? S : S.contextElement || K(e.elements.popper), m, _, u)
                , D = R(e.elements.reference)
                , I = ge({
                    reference: D,
                    element: C,
                    strategy: "absolute",
                    placement: s
                })
                , F = ve(Object.assign({}, C, I))
                , H = b === p ? F : D
                , B = {
                    top: P.top - H.top + O.top,
                    bottom: H.bottom - P.bottom + O.bottom,
                    left: P.left - H.left + O.left,
                    right: H.right - P.right + O.right
                }
                , W = e.modifiersData.offset;
            if (b === p && W) {
                var V = W[s];
                Object.keys(B).forEach((function (e) {
                    var t = [a, o].indexOf(e) >= 0 ? 1 : -1
                        , n = [r, o].indexOf(e) >= 0 ? "y" : "x";
                    B[e] += V[n] * t
                }
                ))
            }
            return B
        }
        var ye = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t = e.state
                    , n = e.options
                    , i = e.name;
                if (!t.modifiersData[i]._skip) {
                    for (var f = n.mainAxis, d = void 0 === f || f, h = n.altAxis, p = void 0 === h || h, v = n.fallbackPlacements, _ = n.padding, y = n.boundary, b = n.rootBoundary, w = n.altBoundary, k = n.flipVariations, E = void 0 === k || k, A = n.allowedAutoPlacements, O = t.options.placement, T = I(O), C = v || (T !== O && E ? function (e) {
                        if (I(e) === c)
                            return [];
                        var t = se(e);
                        return [le(e), t, le(t)]
                    }(O) : [se(O)]), x = [O].concat(C).reduce((function (e, n) {
                        return e.concat(I(n) === c ? function (e, t) {
                            void 0 === t && (t = {});
                            var n = t
                                , i = n.placement
                                , r = n.boundary
                                , o = n.rootBoundary
                                , a = n.padding
                                , s = n.flipVariations
                                , c = n.allowedAutoPlacements
                                , u = void 0 === c ? g : c
                                , f = ee(i)
                                , d = f ? s ? m : m.filter((function (e) {
                                    return ee(e) === f
                                }
                                )) : l
                                , h = d.filter((function (e) {
                                    return u.indexOf(e) >= 0
                                }
                                ));
                            0 === h.length && (h = d);
                            var p = h.reduce((function (t, n) {
                                return t[n] = _e(e, {
                                    placement: n,
                                    boundary: r,
                                    rootBoundary: o,
                                    padding: a
                                })[I(n)],
                                    t
                            }
                            ), {});
                            return Object.keys(p).sort((function (e, t) {
                                return p[e] - p[t]
                            }
                            ))
                        }(t, {
                            placement: n,
                            boundary: y,
                            rootBoundary: b,
                            padding: _,
                            flipVariations: E,
                            allowedAutoPlacements: A
                        }) : n)
                    }
                    ), []), S = t.rects.reference, L = t.rects.popper, j = new Map, P = !0, D = x[0], N = 0; N < x.length; N++) {
                        var M = x[N]
                            , F = I(M)
                            , H = ee(M) === u
                            , B = [r, o].indexOf(F) >= 0
                            , R = B ? "width" : "height"
                            , W = _e(t, {
                                placement: M,
                                boundary: y,
                                rootBoundary: b,
                                altBoundary: w,
                                padding: _
                            })
                            , z = B ? H ? a : s : H ? o : r;
                        S[R] > L[R] && (z = se(z));
                        var q = se(z)
                            , V = [];
                        if (d && V.push(W[F] <= 0),
                            p && V.push(W[z] <= 0, W[q] <= 0),
                            V.every((function (e) {
                                return e
                            }
                            ))) {
                            D = M,
                                P = !1;
                            break
                        }
                        j.set(M, V)
                    }
                    if (P)
                        for (var K = function (e) {
                            var t = x.find((function (t) {
                                var n = j.get(t);
                                if (n)
                                    return n.slice(0, e).every((function (e) {
                                        return e
                                    }
                                    ))
                            }
                            ));
                            if (t)
                                return D = t,
                                    "break"
                        }, Q = E ? 3 : 1; Q > 0 && "break" !== K(Q); Q--)
                            ;
                    t.placement !== D && (t.modifiersData[i]._skip = !0,
                        t.placement = D,
                        t.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        };
        function be(e, t, n) {
            return void 0 === n && (n = {
                x: 0,
                y: 0
            }),
            {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x
            }
        }
        function we(e) {
            return [r, a, o, s].some((function (t) {
                return e[t] >= 0
            }
            ))
        }
        var ke = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
                var t = e.state
                    , n = e.name
                    , i = t.rects.reference
                    , r = t.rects.popper
                    , o = t.modifiersData.preventOverflow
                    , a = _e(t, {
                        elementContext: "reference"
                    })
                    , s = _e(t, {
                        altBoundary: !0
                    })
                    , c = be(a, i)
                    , l = be(s, r, o)
                    , u = we(c)
                    , f = we(l);
                t.modifiersData[n] = {
                    referenceClippingOffsets: c,
                    popperEscapeOffsets: l,
                    isReferenceHidden: u,
                    hasPopperEscaped: f
                },
                    t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-reference-hidden": u,
                        "data-popper-escaped": f
                    })
            }
        }
            , Ee = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function (e) {
                    var t = e.state
                        , n = e.options
                        , i = e.name
                        , o = n.offset
                        , c = void 0 === o ? [0, 0] : o
                        , l = g.reduce((function (e, n) {
                            return e[n] = function (e, t, n) {
                                var i = I(e)
                                    , o = [s, r].indexOf(i) >= 0 ? -1 : 1
                                    , c = "function" == typeof n ? n(Object.assign({}, t, {
                                        placement: e
                                    })) : n
                                    , l = c[0]
                                    , u = c[1];
                                return l = l || 0,
                                    u = (u || 0) * o,
                                    [s, a].indexOf(i) >= 0 ? {
                                        x: u,
                                        y: l
                                    } : {
                                        x: l,
                                        y: u
                                    }
                            }(n, t.rects, c),
                                e
                        }
                        ), {})
                        , u = l[t.placement]
                        , f = u.x
                        , d = u.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f,
                        t.modifiersData.popperOffsets.y += d),
                        t.modifiersData[i] = l
                }
            }
            , Ae = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function (e) {
                    var t = e.state
                        , n = e.name;
                    t.modifiersData[n] = ge({
                        reference: t.rects.reference,
                        element: t.rects.popper,
                        strategy: "absolute",
                        placement: t.placement
                    })
                },
                data: {}
            }
            , Oe = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function (e) {
                    var t = e.state
                        , n = e.options
                        , i = e.name
                        , c = n.mainAxis
                        , l = void 0 === c || c
                        , f = n.altAxis
                        , d = void 0 !== f && f
                        , h = n.boundary
                        , p = n.rootBoundary
                        , v = n.altBoundary
                        , m = n.padding
                        , g = n.tether
                        , _ = void 0 === g || g
                        , y = n.tetherOffset
                        , b = void 0 === y ? 0 : y
                        , w = _e(t, {
                            boundary: h,
                            rootBoundary: p,
                            padding: m,
                            altBoundary: v
                        })
                        , k = I(t.placement)
                        , E = ee(t.placement)
                        , A = !E
                        , O = Y(k)
                        , T = "x" === O ? "y" : "x"
                        , C = t.modifiersData.popperOffsets
                        , x = t.rects.reference
                        , S = t.rects.popper
                        , L = "function" == typeof b ? b(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : b
                        , j = "number" == typeof L ? {
                            mainAxis: L,
                            altAxis: L
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, L)
                        , P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
                        , D = {
                            x: 0,
                            y: 0
                        };
                    if (C) {
                        if (l) {
                            var F, H = "y" === O ? r : s, B = "y" === O ? o : a, R = "y" === O ? "height" : "width", z = C[O], q = z + w[H], V = z - w[B], K = _ ? -S[R] / 2 : 0, Q = E === u ? x[R] : S[R], U = E === u ? -S[R] : -x[R], G = t.elements.arrow, J = _ && G ? W(G) : {
                                width: 0,
                                height: 0
                            }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }, te = Z[H], ne = Z[B], ie = $(0, x[R], J[R]), re = A ? x[R] / 2 - K - ie - te - j.mainAxis : Q - ie - te - j.mainAxis, oe = A ? -x[R] / 2 + K + ie + ne + j.mainAxis : U + ie + ne + j.mainAxis, ae = t.elements.arrow && X(t.elements.arrow), se = ae ? "y" === O ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, ce = null != (F = null == P ? void 0 : P[O]) ? F : 0, le = z + oe - ce, ue = $(_ ? M(q, z + re - ce - se) : q, z, _ ? N(V, le) : V);
                            C[O] = ue,
                                D[O] = ue - z
                        }
                        if (d) {
                            var fe, de = "x" === O ? r : s, he = "x" === O ? o : a, pe = C[T], ve = "y" === T ? "height" : "width", me = pe + w[de], ge = pe - w[he], ye = -1 !== [r, s].indexOf(k), be = null != (fe = null == P ? void 0 : P[T]) ? fe : 0, we = ye ? me : pe - x[ve] - S[ve] - be + j.altAxis, ke = ye ? pe + x[ve] + S[ve] - be - j.altAxis : ge, Ee = _ && ye ? function (e, t, n) {
                                var i = $(e, t, n);
                                return i > n ? n : i
                            }(we, pe, ke) : $(_ ? we : me, pe, _ ? ke : ge);
                            C[T] = Ee,
                                D[T] = Ee - pe
                        }
                        t.modifiersData[i] = D
                    }
                },
                requiresIfExists: ["offset"]
            };
        function Te(e, t, n) {
            void 0 === n && (n = !1);
            var i, r, o = j(t), a = j(t) && function (e) {
                var t = e.getBoundingClientRect()
                    , n = F(t.width) / e.offsetWidth || 1
                    , i = F(t.height) / e.offsetHeight || 1;
                return 1 !== n || 1 !== i
            }(t), s = K(t), c = R(e, a, n), l = {
                scrollLeft: 0,
                scrollTop: 0
            }, u = {
                x: 0,
                y: 0
            };
            return (o || !o && !n) && (("body" !== x(t) || de(s)) && (l = (i = t) !== S(i) && j(i) ? {
                scrollLeft: (r = i).scrollLeft,
                scrollTop: r.scrollTop
            } : ue(i)),
                j(t) ? ((u = R(t, !0)).x += t.clientLeft,
                    u.y += t.clientTop) : s && (u.x = fe(s))),
            {
                x: c.left + l.scrollLeft - u.x,
                y: c.top + l.scrollTop - u.y,
                width: c.width,
                height: c.height
            }
        }
        function Ce(e) {
            var t = new Map
                , n = new Set
                , i = [];
            function r(e) {
                n.add(e.name),
                    [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) {
                        if (!n.has(e)) {
                            var i = t.get(e);
                            i && r(i)
                        }
                    }
                    )),
                    i.push(e)
            }
            return e.forEach((function (e) {
                t.set(e.name, e)
            }
            )),
                e.forEach((function (e) {
                    n.has(e.name) || r(e)
                }
                )),
                i
        }
        var xe = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function Se() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return !t.some((function (e) {
                return !(e && "function" == typeof e.getBoundingClientRect)
            }
            ))
        }
        function Le(e) {
            void 0 === e && (e = {});
            var t = e
                , n = t.defaultModifiers
                , i = void 0 === n ? [] : n
                , r = t.defaultOptions
                , o = void 0 === r ? xe : r;
            return function (e, t, n) {
                void 0 === n && (n = o);
                var r, a, s = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, xe, o),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                }, c = [], l = !1, u = {
                    state: s,
                    setOptions: function (n) {
                        var r = "function" == typeof n ? n(s.options) : n;
                        f(),
                            s.options = Object.assign({}, o, s.options, r),
                            s.scrollParents = {
                                reference: L(e) ? pe(e) : e.contextElement ? pe(e.contextElement) : [],
                                popper: pe(t)
                            };
                        var a, l, d = function (e) {
                            var t = Ce(e);
                            return C.reduce((function (e, n) {
                                return e.concat(t.filter((function (e) {
                                    return e.phase === n
                                }
                                )))
                            }
                            ), [])
                        }((a = [].concat(i, s.options.modifiers),
                            l = a.reduce((function (e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign({}, n, t, {
                                    options: Object.assign({}, n.options, t.options),
                                    data: Object.assign({}, n.data, t.data)
                                }) : t,
                                    e
                            }
                            ), {}),
                            Object.keys(l).map((function (e) {
                                return l[e]
                            }
                            ))));
                        return s.orderedModifiers = d.filter((function (e) {
                            return e.enabled
                        }
                        )),
                            s.orderedModifiers.forEach((function (e) {
                                var t = e.name
                                    , n = e.options
                                    , i = void 0 === n ? {} : n
                                    , r = e.effect;
                                if ("function" == typeof r) {
                                    var o = r({
                                        state: s,
                                        name: t,
                                        instance: u,
                                        options: i
                                    });
                                    c.push(o || function () { }
                                    )
                                }
                            }
                            )),
                            u.update()
                    },
                    forceUpdate: function () {
                        if (!l) {
                            var e = s.elements
                                , t = e.reference
                                , n = e.popper;
                            if (Se(t, n)) {
                                s.rects = {
                                    reference: Te(t, X(n), "fixed" === s.options.strategy),
                                    popper: W(n)
                                },
                                    s.reset = !1,
                                    s.placement = s.options.placement,
                                    s.orderedModifiers.forEach((function (e) {
                                        return s.modifiersData[e.name] = Object.assign({}, e.data)
                                    }
                                    ));
                                for (var i = 0; i < s.orderedModifiers.length; i++)
                                    if (!0 !== s.reset) {
                                        var r = s.orderedModifiers[i]
                                            , o = r.fn
                                            , a = r.options
                                            , c = void 0 === a ? {} : a
                                            , f = r.name;
                                        "function" == typeof o && (s = o({
                                            state: s,
                                            options: c,
                                            name: f,
                                            instance: u
                                        }) || s)
                                    } else
                                        s.reset = !1,
                                            i = -1
                            }
                        }
                    },
                    update: (r = function () {
                        return new Promise((function (e) {
                            u.forceUpdate(),
                                e(s)
                        }
                        ))
                    }
                        ,
                        function () {
                            return a || (a = new Promise((function (e) {
                                Promise.resolve().then((function () {
                                    a = void 0,
                                        e(r())
                                }
                                ))
                            }
                            ))),
                                a
                        }
                    ),
                    destroy: function () {
                        f(),
                            l = !0
                    }
                };
                if (!Se(e, t))
                    return u;
                function f() {
                    c.forEach((function (e) {
                        return e()
                    }
                    )),
                        c = []
                }
                return u.setOptions(n).then((function (e) {
                    !l && n.onFirstUpdate && n.onFirstUpdate(e)
                }
                )),
                    u
            }
        }
        var je, Pe = Le(), De = Le({
            defaultModifiers: [oe, Ae, ie, D, Ee, ye, Oe, Z, ke]
        }), Ie = Le({
            defaultModifiers: [oe, Ae, ie, D]
        });
        function Ne() {
            return Ne = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, n) {
                var i = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = We(e));)
                        ;
                    return e
                }(e, t);
                if (i) {
                    var r = Object.getOwnPropertyDescriptor(i, t);
                    return r.get ? r.get.call(arguments.length < 3 ? e : n) : r.value
                }
            }
                ,
                Ne.apply(this, arguments)
        }
        function Me(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Fe(e, t)
        }
        function Fe(e, t) {
            return Fe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                Fe(e, t)
        }
        function He(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = We(e);
                if (t) {
                    var r = We(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Be(this, n)
            }
        }
        function Be(e, t) {
            if (t && ("object" === et(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return Re(e)
        }
        function Re(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function We(e) {
            return We = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                We(e)
        }
        function ze(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function qe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ze(Object(n), !0).forEach((function (t) {
                    Ve(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ze(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Ve(e, t, n) {
            return (t = Xe(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function Ke(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function Qe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, Xe(i.key), i)
            }
        }
        function Ue(e, t, n) {
            return t && Qe(e.prototype, t),
                n && Qe(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e
        }
        function Xe(e) {
            var t = function (e, t) {
                if ("object" !== et(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(e, "string");
                    if ("object" !== et(i))
                        return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === et(t) ? t : String(t)
        }
        function Ye(e, t) {
            return function (e) {
                if (Array.isArray(e))
                    return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var i, r, o, a, s = [], c = !0, l = !1;
                    try {
                        if (o = (n = n.call(e)).next,
                            0 === t) {
                            if (Object(n) !== n)
                                return;
                            c = !1
                        } else
                            for (; !(c = (i = o.call(n)).done) && (s.push(i.value),
                                s.length !== t); c = !0)
                                ;
                    } catch (e) {
                        l = !0,
                            r = e
                    } finally {
                        try {
                            if (!c && null != n.return && (a = n.return(),
                                Object(a) !== a))
                                return
                        } finally {
                            if (l)
                                throw r
                        }
                    }
                    return s
                }
            }(e, t) || Je(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function $e(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = Je(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                        , r = function () { };
                    return {
                        s: r,
                        n: function () {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function (e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, s = !1;
            return {
                s: function () {
                    n = n.call(e)
                },
                n: function () {
                    var e = n.next();
                    return a = e.done,
                        e
                },
                e: function (e) {
                    s = !0,
                        o = e
                },
                f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw o
                    }
                }
            }
        }
        function Ge(e) {
            return function (e) {
                if (Array.isArray(e))
                    return Ze(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || Je(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Je(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return Ze(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ze(e, t) : void 0
            }
        }
        function Ze(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        function et(e) {
            return et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                et(e)
        }
        var tt = new Map
            , nt = "transitionend"
            , it = function (e) {
                return e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (function (e, t) {
                    return "#".concat(CSS.escape(t))
                }
                ))),
                    e
            }
            , rt = function (e) {
                e.dispatchEvent(new Event(nt))
            }
            , ot = function (e) {
                return !(!e || "object" !== et(e)) && (void 0 !== e.jquery && (e = e[0]),
                    void 0 !== e.nodeType)
            }
            , at = function (e) {
                return ot(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(it(e)) : null
            }
            , st = function (e) {
                if (!ot(e) || 0 === e.getClientRects().length)
                    return !1;
                var t = "visible" === getComputedStyle(e).getPropertyValue("visibility")
                    , n = e.closest("details:not([open])");
                if (!n)
                    return t;
                if (n !== e) {
                    var i = e.closest("summary");
                    if (i && i.parentNode !== n)
                        return !1;
                    if (null === i)
                        return !1
                }
                return t
            }
            , ct = function (e) {
                return !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"))
            }
            , lt = function e(t) {
                if (!document.documentElement.attachShadow)
                    return null;
                if ("function" == typeof t.getRootNode) {
                    var n = t.getRootNode();
                    return n instanceof ShadowRoot ? n : null
                }
                return t instanceof ShadowRoot ? t : t.parentNode ? e(t.parentNode) : null
            }
            , ut = function () { }
            , ft = function (e) {
                e.offsetHeight
            }
            , dt = function () {
                return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
            }
            , ht = []
            , pt = function () {
                return "rtl" === document.documentElement.dir
            }
            , vt = function (e) {
                var t;
                t = function () {
                    var t = dt();
                    if (t) {
                        var n = e.NAME
                            , i = t.fn[n];
                        t.fn[n] = e.jQueryInterface,
                            t.fn[n].Constructor = e,
                            t.fn[n].noConflict = function () {
                                return t.fn[n] = i,
                                    e.jQueryInterface
                            }
                    }
                }
                    ,
                    "loading" === document.readyState ? (ht.length || document.addEventListener("DOMContentLoaded", (function () {
                        for (var e = 0, t = ht; e < t.length; e++)
                            (0,
                                t[e])()
                    }
                    )),
                        ht.push(t)) : t()
            }
            , mt = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                    , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
                return "function" == typeof e ? e.apply(void 0, Ge(t)) : n
            }
            , gt = function (e, t) {
                if (arguments.length > 2 && void 0 !== arguments[2] && !arguments[2])
                    mt(e);
                else {
                    var n = function (e) {
                        if (!e)
                            return 0;
                        var t = window.getComputedStyle(e)
                            , n = t.transitionDuration
                            , i = t.transitionDelay
                            , r = Number.parseFloat(n)
                            , o = Number.parseFloat(i);
                        return r || o ? (n = n.split(",")[0],
                            i = i.split(",")[0],
                            1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0
                    }(t) + 5
                        , i = !1;
                    t.addEventListener(nt, (function n(r) {
                        r.target === t && (i = !0,
                            t.removeEventListener(nt, n),
                            mt(e))
                    }
                    )),
                        setTimeout((function () {
                            i || rt(t)
                        }
                        ), n)
                }
            }
            , _t = function (e, t, n, i) {
                var r = e.length
                    , o = e.indexOf(t);
                return -1 === o ? !n && i ? e[r - 1] : e[0] : (o += n ? 1 : -1,
                    i && (o = (o + r) % r),
                    e[Math.max(0, Math.min(o, r - 1))])
            }
            , yt = /[^.]*(?=\..*)\.|.*/
            , bt = /\..*/
            , wt = /::\d+$/
            , kt = {}
            , Et = 1
            , At = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }
            , Ot = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function Tt(e, t) {
            return t && "".concat(t, "::").concat(Et++) || e.uidEvent || Et++
        }
        function Ct(e) {
            var t = Tt(e);
            return e.uidEvent = t,
                kt[t] = kt[t] || {},
                kt[t]
        }
        function xt(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return Object.values(e).find((function (e) {
                return e.callable === t && e.delegationSelector === n
            }
            ))
        }
        function St(e, t, n) {
            var i = "string" == typeof t
                , r = i ? n : t || n
                , o = Dt(e);
            return Ot.has(o) || (o = e),
                [i, r, o]
        }
        function Lt(e, t, n, i, r) {
            if ("string" == typeof t && e) {
                var o = Ye(St(t, n, i), 3)
                    , a = o[0]
                    , s = o[1]
                    , c = o[2];
                t in At && (s = function (e) {
                    return function (t) {
                        if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))
                            return e.call(this, t)
                    }
                }(s));
                var l = Ct(e)
                    , u = l[c] || (l[c] = {})
                    , f = xt(u, s, a ? n : null);
                if (f)
                    f.oneOff = f.oneOff && r;
                else {
                    var d = Tt(s, t.replace(yt, ""))
                        , h = a ? function (e, t, n) {
                            return function i(r) {
                                for (var o = e.querySelectorAll(t), a = r.target; a && a !== this; a = a.parentNode) {
                                    var s, c = $e(o);
                                    try {
                                        for (c.s(); !(s = c.n()).done;)
                                            if (s.value === a)
                                                return Nt(r, {
                                                    delegateTarget: a
                                                }),
                                                    i.oneOff && It.off(e, r.type, t, n),
                                                    n.apply(a, [r])
                                    } catch (e) {
                                        c.e(e)
                                    } finally {
                                        c.f()
                                    }
                                }
                            }
                        }(e, n, s) : function (e, t) {
                            return function n(i) {
                                return Nt(i, {
                                    delegateTarget: e
                                }),
                                    n.oneOff && It.off(e, i.type, t),
                                    t.apply(e, [i])
                            }
                        }(e, s);
                    h.delegationSelector = a ? n : null,
                        h.callable = s,
                        h.oneOff = r,
                        h.uidEvent = d,
                        u[d] = h,
                        e.addEventListener(c, h, a)
                }
            }
        }
        function jt(e, t, n, i, r) {
            var o = xt(t[n], i, r);
            o && (e.removeEventListener(n, o, Boolean(r)),
                delete t[n][o.uidEvent])
        }
        function Pt(e, t, n, i) {
            for (var r = t[n] || {}, o = 0, a = Object.entries(r); o < a.length; o++) {
                var s = Ye(a[o], 2)
                    , c = s[0]
                    , l = s[1];
                c.includes(i) && jt(e, t, n, l.callable, l.delegationSelector)
            }
        }
        function Dt(e) {
            return e = e.replace(bt, ""),
                At[e] || e
        }
        var It = {
            on: function (e, t, n, i) {
                Lt(e, t, n, i, !1)
            },
            one: function (e, t, n, i) {
                Lt(e, t, n, i, !0)
            },
            off: function (e, t, n, i) {
                if ("string" == typeof t && e) {
                    var r = Ye(St(t, n, i), 3)
                        , o = r[0]
                        , a = r[1]
                        , s = r[2]
                        , c = s !== t
                        , l = Ct(e)
                        , u = l[s] || {}
                        , f = t.startsWith(".");
                    if (void 0 === a) {
                        if (f)
                            for (var d = 0, h = Object.keys(l); d < h.length; d++)
                                Pt(e, l, h[d], t.slice(1));
                        for (var p = 0, v = Object.entries(u); p < v.length; p++) {
                            var m = Ye(v[p], 2)
                                , g = m[0]
                                , _ = m[1]
                                , y = g.replace(wt, "");
                            c && !t.includes(y) || jt(e, l, s, _.callable, _.delegationSelector)
                        }
                    } else {
                        if (!Object.keys(u).length)
                            return;
                        jt(e, l, s, a, o ? n : null)
                    }
                }
            },
            trigger: function (e, t, n) {
                if ("string" != typeof t || !e)
                    return null;
                var i = dt()
                    , r = null
                    , o = !0
                    , a = !0
                    , s = !1;
                t !== Dt(t) && i && (r = i.Event(t, n),
                    i(e).trigger(r),
                    o = !r.isPropagationStopped(),
                    a = !r.isImmediatePropagationStopped(),
                    s = r.isDefaultPrevented());
                var c = Nt(new Event(t, {
                    bubbles: o,
                    cancelable: !0
                }), n);
                return s && c.preventDefault(),
                    a && e.dispatchEvent(c),
                    c.defaultPrevented && r && r.preventDefault(),
                    c
            }
        };
        function Nt(e) {
            for (var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = function () {
                var n = o[r]
                    , i = (t = Ye(n, 2))[0]
                    , a = t[1];
                try {
                    e[i] = a
                } catch (t) {
                    Object.defineProperty(e, i, {
                        configurable: !0,
                        get: function () {
                            return a
                        }
                    })
                }
            }, r = 0, o = Object.entries(n); r < o.length; r++)
                i();
            return e
        }
        function Mt(e) {
            if ("true" === e)
                return !0;
            if ("false" === e)
                return !1;
            if (e === Number(e).toString())
                return Number(e);
            if ("" === e || "null" === e)
                return null;
            if ("string" != typeof e)
                return e;
            try {
                return JSON.parse(decodeURIComponent(e))
            } catch (t) {
                return e
            }
        }
        function Ft(e) {
            return e.replace(/[A-Z]/g, (function (e) {
                return "-".concat(e.toLowerCase())
            }
            ))
        }
        var Ht = function (e, t, n) {
            e.setAttribute("data-bs-".concat(Ft(t)), n)
        }
            , Bt = function (e, t) {
                e.removeAttribute("data-bs-".concat(Ft(t)))
            }
            , Rt = function (e) {
                if (!e)
                    return {};
                var t, n = {}, i = Object.keys(e.dataset).filter((function (e) {
                    return e.startsWith("bs") && !e.startsWith("bsConfig")
                }
                )), r = $e(i);
                try {
                    for (r.s(); !(t = r.n()).done;) {
                        var o = t.value
                            , a = o.replace(/^bs/, "");
                        n[a = a.charAt(0).toLowerCase() + a.slice(1, a.length)] = Mt(e.dataset[o])
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return n
            }
            , Wt = function (e, t) {
                return Mt(e.getAttribute("data-bs-".concat(Ft(t))))
            }
            , zt = function () {
                function e() {
                    Ke(this, e)
                }
                return Ue(e, [{
                    key: "_getConfig",
                    value: function (e) {
                        return e = this._mergeConfigObj(e),
                            e = this._configAfterMerge(e),
                            this._typeCheckConfig(e),
                            e
                    }
                }, {
                    key: "_configAfterMerge",
                    value: function (e) {
                        return e
                    }
                }, {
                    key: "_mergeConfigObj",
                    value: function (e, t) {
                        var n = ot(t) ? Wt(t, "config") : {};
                        return qe(qe(qe(qe({}, this.constructor.Default), "object" === et(n) ? n : {}), ot(t) ? Rt(t) : {}), "object" === et(e) ? e : {})
                    }
                }, {
                    key: "_typeCheckConfig",
                    value: function (e) {
                        for (var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.constructor.DefaultType, i = 0, r = Object.entries(n); i < r.length; i++) {
                            var o = Ye(r[i], 2)
                                , a = o[0]
                                , s = o[1]
                                , c = e[a]
                                , l = ot(c) ? "element" : null == (t = c) ? "".concat(t) : Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase();
                            if (!new RegExp(s).test(l))
                                throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ': Option "').concat(a, '" provided type "').concat(l, '" but expected type "').concat(s, '".'))
                        }
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return {}
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return {}
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        throw new Error('You have to implement the static method "NAME", for each component!')
                    }
                }]),
                    e
            }()
            , qt = function (e) {
                Me(n, e);
                var t = He(n);
                function n(e, i) {
                    var r;
                    return Ke(this, n),
                        r = t.call(this),
                        (e = at(e)) ? (r._element = e,
                            r._config = r._getConfig(i),
                            function (e, t, n) {
                                tt.has(e) || tt.set(e, new Map);
                                var i = tt.get(e);
                                i.has(t) || 0 === i.size ? i.set(t, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(i.keys())[0], "."))
                            }(r._element, r.constructor.DATA_KEY, Re(r)),
                            r) : Be(r)
                }
                return Ue(n, [{
                    key: "dispose",
                    value: function () {
                        (function (e, t) {
                            if (tt.has(e)) {
                                var n = tt.get(e);
                                n.delete(t),
                                    0 === n.size && tt.delete(e)
                            }
                        }
                        )(this._element, this.constructor.DATA_KEY),
                            It.off(this._element, this.constructor.EVENT_KEY);
                        var e, t = $e(Object.getOwnPropertyNames(this));
                        try {
                            for (t.s(); !(e = t.n()).done;)
                                this[e.value] = null
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }, {
                    key: "_queueCallback",
                    value: function (e, t) {
                        gt(e, t, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
                    }
                }, {
                    key: "_getConfig",
                    value: function (e) {
                        return e = this._mergeConfigObj(e, this._element),
                            e = this._configAfterMerge(e),
                            this._typeCheckConfig(e),
                            e
                    }
                }], [{
                    key: "getInstance",
                    value: function (e) {
                        return function (e, t) {
                            return tt.has(e) && tt.get(e).get(t) || null
                        }(at(e), this.DATA_KEY)
                    }
                }, {
                    key: "getOrCreateInstance",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.getInstance(e) || new this(e, "object" === et(t) ? t : null)
                    }
                }, {
                    key: "VERSION",
                    get: function () {
                        return "5.3.2"
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.".concat(this.NAME)
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".".concat(this.DATA_KEY)
                    }
                }, {
                    key: "eventName",
                    value: function (e) {
                        return "".concat(e).concat(this.EVENT_KEY)
                    }
                }]),
                    n
            }(zt)
            , Vt = function (e) {
                var t = e.getAttribute("data-bs-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    if (!n || !n.includes("#") && !n.startsWith("."))
                        return null;
                    n.includes("#") && !n.startsWith("#") && (n = "#".concat(n.split("#")[1])),
                        t = n && "#" !== n ? it(n.trim()) : null
                }
                return t
            }
            , Kt = {
                find: function (e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
                    return (t = []).concat.apply(t, Ge(Element.prototype.querySelectorAll.call(n, e)))
                },
                findOne: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
                    return Element.prototype.querySelector.call(t, e)
                },
                children: function (e, t) {
                    var n;
                    return (n = []).concat.apply(n, Ge(e.children)).filter((function (e) {
                        return e.matches(t)
                    }
                    ))
                },
                parents: function (e, t) {
                    for (var n = [], i = e.parentNode.closest(t); i;)
                        n.push(i),
                            i = i.parentNode.closest(t);
                    return n
                },
                prev: function (e, t) {
                    for (var n = e.previousElementSibling; n;) {
                        if (n.matches(t))
                            return [n];
                        n = n.previousElementSibling
                    }
                    return []
                },
                next: function (e, t) {
                    for (var n = e.nextElementSibling; n;) {
                        if (n.matches(t))
                            return [n];
                        n = n.nextElementSibling
                    }
                    return []
                },
                focusableChildren: function (e) {
                    var t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((function (e) {
                        return "".concat(e, ':not([tabindex^="-"])')
                    }
                    )).join(",");
                    return this.find(t, e).filter((function (e) {
                        return !ct(e) && st(e)
                    }
                    ))
                },
                getSelectorFromElement: function (e) {
                    var t = Vt(e);
                    return t && Kt.findOne(t) ? t : null
                },
                getElementFromSelector: function (e) {
                    var t = Vt(e);
                    return t ? Kt.findOne(t) : null
                },
                getMultipleElementsFromSelector: function (e) {
                    var t = Vt(e);
                    return t ? Kt.find(t) : []
                }
            }
            , Qt = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hide"
                    , n = "click.dismiss".concat(e.EVENT_KEY)
                    , i = e.NAME;
                It.on(document, n, '[data-bs-dismiss="'.concat(i, '"]'), (function (n) {
                    if (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
                        !ct(this)) {
                        var r = Kt.getElementFromSelector(this) || this.closest(".".concat(i));
                        e.getOrCreateInstance(r)[t]()
                    }
                }
                ))
            }
            , Ut = ".".concat("bs.alert")
            , Xt = "close".concat(Ut)
            , Yt = "closed".concat(Ut)
            , $t = function (e) {
                Me(n, e);
                var t = He(n);
                function n() {
                    return Ke(this, n),
                        t.apply(this, arguments)
                }
                return Ue(n, [{
                    key: "close",
                    value: function () {
                        var e = this;
                        if (!It.trigger(this._element, Xt).defaultPrevented) {
                            this._element.classList.remove("show");
                            var t = this._element.classList.contains("fade");
                            this._queueCallback((function () {
                                return e._destroyElement()
                            }
                            ), this._element, t)
                        }
                    }
                }, {
                    key: "_destroyElement",
                    value: function () {
                        this._element.remove(),
                            It.trigger(this._element, Yt),
                            this.dispose()
                    }
                }], [{
                    key: "NAME",
                    get: function () {
                        return "alert"
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (e) {
                        return this.each((function () {
                            var t = n.getOrCreateInstance(this);
                            if ("string" == typeof e) {
                                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                                    throw new TypeError('No method named "'.concat(e, '"'));
                                t[e](this)
                            }
                        }
                        ))
                    }
                }]),
                    n
            }(qt);
        Qt($t, "close"),
            vt($t);
        var Gt = ".".concat("bs.button")
            , Jt = '[data-bs-toggle="button"]'
            , Zt = "click".concat(Gt).concat(".data-api")
            , en = function (e) {
                Me(n, e);
                var t = He(n);
                function n() {
                    return Ke(this, n),
                        t.apply(this, arguments)
                }
                return Ue(n, [{
                    key: "toggle",
                    value: function () {
                        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
                    }
                }], [{
                    key: "NAME",
                    get: function () {
                        return "button"
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (e) {
                        return this.each((function () {
                            var t = n.getOrCreateInstance(this);
                            "toggle" === e && t[e]()
                        }
                        ))
                    }
                }]),
                    n
            }(qt);
        It.on(document, Zt, Jt, (function (e) {
            e.preventDefault();
            var t = e.target.closest(Jt);
            en.getOrCreateInstance(t).toggle()
        }
        )),
            vt(en);
        var tn = ".bs.swipe"
            , nn = "touchstart".concat(tn)
            , rn = "touchmove".concat(tn)
            , on = "touchend".concat(tn)
            , an = "pointerdown".concat(tn)
            , sn = "pointerup".concat(tn)
            , cn = {
                endCallback: null,
                leftCallback: null,
                rightCallback: null
            }
            , ln = {
                endCallback: "(function|null)",
                leftCallback: "(function|null)",
                rightCallback: "(function|null)"
            }
            , un = function (e) {
                Me(n, e);
                var t = He(n);
                function n(e, i) {
                    var r;
                    return Ke(this, n),
                        (r = t.call(this))._element = e,
                        e && n.isSupported() ? (r._config = r._getConfig(i),
                            r._deltaX = 0,
                            r._supportPointerEvents = Boolean(window.PointerEvent),
                            r._initEvents(),
                            r) : Be(r)
                }
                return Ue(n, [{
                    key: "dispose",
                    value: function () {
                        It.off(this._element, tn)
                    }
                }, {
                    key: "_start",
                    value: function (e) {
                        this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX
                    }
                }, {
                    key: "_end",
                    value: function (e) {
                        this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX),
                            this._handleSwipe(),
                            mt(this._config.endCallback)
                    }
                }, {
                    key: "_move",
                    value: function (e) {
                        this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX
                    }
                }, {
                    key: "_handleSwipe",
                    value: function () {
                        var e = Math.abs(this._deltaX);
                        if (!(e <= 40)) {
                            var t = e / this._deltaX;
                            this._deltaX = 0,
                                t && mt(t > 0 ? this._config.rightCallback : this._config.leftCallback)
                        }
                    }
                }, {
                    key: "_initEvents",
                    value: function () {
                        var e = this;
                        this._supportPointerEvents ? (It.on(this._element, an, (function (t) {
                            return e._start(t)
                        }
                        )),
                            It.on(this._element, sn, (function (t) {
                                return e._end(t)
                            }
                            )),
                            this._element.classList.add("pointer-event")) : (It.on(this._element, nn, (function (t) {
                                return e._start(t)
                            }
                            )),
                                It.on(this._element, rn, (function (t) {
                                    return e._move(t)
                                }
                                )),
                                It.on(this._element, on, (function (t) {
                                    return e._end(t)
                                }
                                )))
                    }
                }, {
                    key: "_eventIsPointerPenTouch",
                    value: function (e) {
                        return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return cn
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return ln
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return "swipe"
                    }
                }, {
                    key: "isSupported",
                    value: function () {
                        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
                    }
                }]),
                    n
            }(zt)
            , fn = ".".concat("bs.carousel")
            , dn = ".data-api"
            , hn = "next"
            , pn = "prev"
            , vn = "left"
            , mn = "right"
            , gn = "slide".concat(fn)
            , _n = "slid".concat(fn)
            , yn = "keydown".concat(fn)
            , bn = "mouseenter".concat(fn)
            , wn = "mouseleave".concat(fn)
            , kn = "dragstart".concat(fn)
            , En = "load".concat(fn).concat(dn)
            , An = "click".concat(fn).concat(dn)
            , On = "carousel"
            , Tn = "active"
            , Cn = ".active"
            , xn = ".carousel-item"
            , Sn = Cn + xn
            , Ln = (Ve(je = {}, "ArrowLeft", mn),
                Ve(je, "ArrowRight", vn),
                je)
            , jn = {
                interval: 5e3,
                keyboard: !0,
                pause: "hover",
                ride: !1,
                touch: !0,
                wrap: !0
            }
            , Pn = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                pause: "(string|boolean)",
                ride: "(boolean|string)",
                touch: "boolean",
                wrap: "boolean"
            }
            , Dn = function (e) {
                Me(n, e);
                var t = He(n);
                function n(e, i) {
                    var r;
                    return Ke(this, n),
                        (r = t.call(this, e, i))._interval = null,
                        r._activeElement = null,
                        r._isSliding = !1,
                        r.touchTimeout = null,
                        r._swipeHelper = null,
                        r._indicatorsElement = Kt.findOne(".carousel-indicators", r._element),
                        r._addEventListeners(),
                        r._config.ride === On && r.cycle(),
                        r
                }
                return Ue(n, [{
                    key: "next",
                    value: function () {
                        this._slide(hn)
                    }
                }, {
                    key: "nextWhenVisible",
                    value: function () {
                        !document.hidden && st(this._element) && this.next()
                    }
                }, {
                    key: "prev",
                    value: function () {
                        this._slide(pn)
                    }
                }, {
                    key: "pause",
                    value: function () {
                        this._isSliding && rt(this._element),
                            this._clearInterval()
                    }
                }, {
                    key: "cycle",
                    value: function () {
                        var e = this;
                        this._clearInterval(),
                            this._updateInterval(),
                            this._interval = setInterval((function () {
                                return e.nextWhenVisible()
                            }
                            ), this._config.interval)
                    }
                }, {
                    key: "_maybeEnableCycle",
                    value: function () {
                        var e = this;
                        this._config.ride && (this._isSliding ? It.one(this._element, _n, (function () {
                            return e.cycle()
                        }
                        )) : this.cycle())
                    }
                }, {
                    key: "to",
                    value: function (e) {
                        var t = this
                            , n = this._getItems();
                        if (!(e > n.length - 1 || e < 0))
                            if (this._isSliding)
                                It.one(this._element, _n, (function () {
                                    return t.to(e)
                                }
                                ));
                            else {
                                var i = this._getItemIndex(this._getActive());
                                if (i !== e) {
                                    var r = e > i ? hn : pn;
                                    this._slide(r, n[e])
                                }
                            }
                    }
                }, {
                    key: "dispose",
                    value: function () {
                        this._swipeHelper && this._swipeHelper.dispose(),
                            Ne(We(n.prototype), "dispose", this).call(this)
                    }
                }, {
                    key: "_configAfterMerge",
                    value: function (e) {
                        return e.defaultInterval = e.interval,
                            e
                    }
                }, {
                    key: "_addEventListeners",
                    value: function () {
                        var e = this;
                        this._config.keyboard && It.on(this._element, yn, (function (t) {
                            return e._keydown(t)
                        }
                        )),
                            "hover" === this._config.pause && (It.on(this._element, bn, (function () {
                                return e.pause()
                            }
                            )),
                                It.on(this._element, wn, (function () {
                                    return e._maybeEnableCycle()
                                }
                                ))),
                            this._config.touch && un.isSupported() && this._addTouchEventListeners()
                    }
                }, {
                    key: "_addTouchEventListeners",
                    value: function () {
                        var e, t = this, n = $e(Kt.find(".carousel-item img", this._element));
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var i = e.value;
                                It.on(i, kn, (function (e) {
                                    return e.preventDefault()
                                }
                                ))
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        var r = {
                            leftCallback: function () {
                                return t._slide(t._directionToOrder(vn))
                            },
                            rightCallback: function () {
                                return t._slide(t._directionToOrder(mn))
                            },
                            endCallback: function () {
                                "hover" === t._config.pause && (t.pause(),
                                    t.touchTimeout && clearTimeout(t.touchTimeout),
                                    t.touchTimeout = setTimeout((function () {
                                        return t._maybeEnableCycle()
                                    }
                                    ), 500 + t._config.interval))
                            }
                        };
                        this._swipeHelper = new un(this._element, r)
                    }
                }, {
                    key: "_keydown",
                    value: function (e) {
                        if (!/input|textarea/i.test(e.target.tagName)) {
                            var t = Ln[e.key];
                            t && (e.preventDefault(),
                                this._slide(this._directionToOrder(t)))
                        }
                    }
                }, {
                    key: "_getItemIndex",
                    value: function (e) {
                        return this._getItems().indexOf(e)
                    }
                }, {
                    key: "_setActiveIndicatorElement",
                    value: function (e) {
                        if (this._indicatorsElement) {
                            var t = Kt.findOne(Cn, this._indicatorsElement);
                            t.classList.remove(Tn),
                                t.removeAttribute("aria-current");
                            var n = Kt.findOne('[data-bs-slide-to="'.concat(e, '"]'), this._indicatorsElement);
                            n && (n.classList.add(Tn),
                                n.setAttribute("aria-current", "true"))
                        }
                    }
                }, {
                    key: "_updateInterval",
                    value: function () {
                        var e = this._activeElement || this._getActive();
                        if (e) {
                            var t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                            this._config.interval = t || this._config.defaultInterval
                        }
                    }
                }, {
                    key: "_slide",
                    value: function (e) {
                        var t = this
                            , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (!this._isSliding) {
                            var i = this._getActive()
                                , r = e === hn
                                , o = n || _t(this._getItems(), i, r, this._config.wrap);
                            if (o !== i) {
                                var a = this._getItemIndex(o)
                                    , s = function (n) {
                                        return It.trigger(t._element, n, {
                                            relatedTarget: o,
                                            direction: t._orderToDirection(e),
                                            from: t._getItemIndex(i),
                                            to: a
                                        })
                                    };
                                if (!s(gn).defaultPrevented && i && o) {
                                    var c = Boolean(this._interval);
                                    this.pause(),
                                        this._isSliding = !0,
                                        this._setActiveIndicatorElement(a),
                                        this._activeElement = o;
                                    var l = r ? "carousel-item-start" : "carousel-item-end"
                                        , u = r ? "carousel-item-next" : "carousel-item-prev";
                                    o.classList.add(u),
                                        ft(o),
                                        i.classList.add(l),
                                        o.classList.add(l),
                                        this._queueCallback((function () {
                                            o.classList.remove(l, u),
                                                o.classList.add(Tn),
                                                i.classList.remove(Tn, u, l),
                                                t._isSliding = !1,
                                                s(_n)
                                        }
                                        ), i, this._isAnimated()),
                                        c && this.cycle()
                                }
                            }
                        }
                    }
                }, {
                    key: "_isAnimated",
                    value: function () {
                        return this._element.classList.contains("slide")
                    }
                }, {
                    key: "_getActive",
                    value: function () {
                        return Kt.findOne(Sn, this._element)
                    }
                }, {
                    key: "_getItems",
                    value: function () {
                        return Kt.find(xn, this._element)
                    }
                }, {
                    key: "_clearInterval",
                    value: function () {
                        this._interval && (clearInterval(this._interval),
                            this._interval = null)
                    }
                }, {
                    key: "_directionToOrder",
                    value: function (e) {
                        return pt() ? e === vn ? pn : hn : e === vn ? hn : pn
                    }
                }, {
                    key: "_orderToDirection",
                    value: function (e) {
                        return pt() ? e === pn ? vn : mn : e === pn ? mn : vn
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return jn
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Pn
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return "carousel"
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (e) {
                        return this.each((function () {
                            var t = n.getOrCreateInstance(this, e);
                            if ("number" != typeof e) {
                                if ("string" == typeof e) {
                                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                                        throw new TypeError('No method named "'.concat(e, '"'));
                                    t[e]()
                                }
                            } else
                                t.to(e)
                        }
                        ))
                    }
                }]),
                    n
            }(qt);
        It.on(document, An, "[data-bs-slide], [data-bs-slide-to]", (function (e) {
            var t = Kt.getElementFromSelector(this);
            if (t && t.classList.contains(On)) {
                e.preventDefault();
                var n = Dn.getOrCreateInstance(t)
                    , i = this.getAttribute("data-bs-slide-to");
                if (i)
                    return n.to(i),
                        void n._maybeEnableCycle();
                if ("next" === Wt(this, "slide"))
                    return n.next(),
                        void n._maybeEnableCycle();
                n.prev(),
                    n._maybeEnableCycle()
            }
        }
        )),
            It.on(window, En, (function () {
                var e, t = $e(Kt.find('[data-bs-ride="carousel"]'));
                try {
                    for (t.s(); !(e = t.n()).done;) {
                        var n = e.value;
                        Dn.getOrCreateInstance(n)
                    }
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
            }
            )),
            vt(Dn);
        var In = ".".concat("bs.collapse")
            , Nn = "show".concat(In)
            , Mn = "shown".concat(In)
            , Fn = "hide".concat(In)
            , Hn = "hidden".concat(In)
            , Bn = "click".concat(In).concat(".data-api")
            , Rn = "show"
            , Wn = "collapse"
            , zn = "collapsing"
            , qn = ":scope .".concat(Wn, " .").concat(Wn)
            , Vn = '[data-bs-toggle="collapse"]'
            , Kn = {
                parent: null,
                toggle: !0
            }
            , Qn = {
                parent: "(null|element)",
                toggle: "boolean"
            }
            , Un = function (e) {
                Me(n, e);
                var t = He(n);
                function n(e, i) {
                    var r;
                    Ke(this, n),
                        (r = t.call(this, e, i))._isTransitioning = !1,
                        r._triggerArray = [];
                    var o, a = $e(Kt.find(Vn));
                    try {
                        for (a.s(); !(o = a.n()).done;) {
                            var s = o.value
                                , c = Kt.getSelectorFromElement(s)
                                , l = Kt.find(c).filter((function (e) {
                                    return e === r._element
                                }
                                ));
                            null !== c && l.length && r._triggerArray.push(s)
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                    return r._initializeChildren(),
                        r._config.parent || r._addAriaAndCollapsedClass(r._triggerArray, r._isShown()),
                        r._config.toggle && r.toggle(),
                        r
                }
                return Ue(n, [{
                    key: "toggle",
                    value: function () {
                        this._isShown() ? this.hide() : this.show()
                    }
                }, {
                    key: "show",
                    value: function () {
                        var e = this;
                        if (!this._isTransitioning && !this._isShown()) {
                            var t = [];
                            if (!(this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((function (t) {
                                return t !== e._element
                            }
                            )).map((function (e) {
                                return n.getOrCreateInstance(e, {
                                    toggle: !1
                                })
                            }
                            ))),
                                t.length && t[0]._isTransitioning || It.trigger(this._element, Nn).defaultPrevented)) {
                                var i, r = $e(t);
                                try {
                                    for (r.s(); !(i = r.n()).done;)
                                        i.value.hide()
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                                var o = this._getDimension();
                                this._element.classList.remove(Wn),
                                    this._element.classList.add(zn),
                                    this._element.style[o] = 0,
                                    this._addAriaAndCollapsedClass(this._triggerArray, !0),
                                    this._isTransitioning = !0;
                                var a = o[0].toUpperCase() + o.slice(1)
                                    , s = "scroll".concat(a);
                                this._queueCallback((function () {
                                    e._isTransitioning = !1,
                                        e._element.classList.remove(zn),
                                        e._element.classList.add(Wn, Rn),
                                        e._element.style[o] = "",
                                        It.trigger(e._element, Mn)
                                }
                                ), this._element, !0),
                                    this._element.style[o] = "".concat(this._element[s], "px")
                            }
                        }
                    }
                }, {
                    key: "hide",
                    value: function () {
                        var e = this;
                        if (!this._isTransitioning && this._isShown() && !It.trigger(this._element, Fn).defaultPrevented) {
                            var t = this._getDimension();
                            this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"),
                                ft(this._element),
                                this._element.classList.add(zn),
                                this._element.classList.remove(Wn, Rn);
                            var n, i = $e(this._triggerArray);
                            try {
                                for (i.s(); !(n = i.n()).done;) {
                                    var r = n.value
                                        , o = Kt.getElementFromSelector(r);
                                    o && !this._isShown(o) && this._addAriaAndCollapsedClass([r], !1)
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                            this._isTransitioning = !0,
                                this._element.style[t] = "",
                                this._queueCallback((function () {
                                    e._isTransitioning = !1,
                                        e._element.classList.remove(zn),
                                        e._element.classList.add(Wn),
                                        It.trigger(e._element, Hn)
                                }
                                ), this._element, !0)
                        }
                    }
                }, {
                    key: "_isShown",
                    value: function () {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._element).classList.contains(Rn)
                    }
                }, {
                    key: "_configAfterMerge",
                    value: function (e) {
                        return e.toggle = Boolean(e.toggle),
                            e.parent = at(e.parent),
                            e
                    }
                }, {
                    key: "_getDimension",
                    value: function () {
                        return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
                    }
                }, {
                    key: "_initializeChildren",
                    value: function () {
                        if (this._config.parent) {
                            var e, t = $e(this._getFirstLevelChildren(Vn));
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var n = e.value
                                        , i = Kt.getElementFromSelector(n);
                                    i && this._addAriaAndCollapsedClass([n], this._isShown(i))
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                        }
                    }
                }, {
                    key: "_getFirstLevelChildren",
                    value: function (e) {
                        var t = Kt.find(qn, this._config.parent);
                        return Kt.find(e, this._config.parent).filter((function (e) {
                            return !t.includes(e)
                        }
                        ))
                    }
                }, {
                    key: "_addAriaAndCollapsedClass",
                    value: function (e, t) {
                        if (e.length) {
                            var n, i = $e(e);
                            try {
                                for (i.s(); !(n = i.n()).done;) {
                                    var r = n.value;
                                    r.classList.toggle("collapsed", !t),
                                        r.setAttribute("aria-expanded", t)
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return Kn
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Qn
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return "collapse"
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (e) {
                        var t = {};
                        return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
                            this.each((function () {
                                var i = n.getOrCreateInstance(this, t);
                                if ("string" == typeof e) {
                                    if (void 0 === i[e])
                                        throw new TypeError('No method named "'.concat(e, '"'));
                                    i[e]()
                                }
                            }
                            ))
                    }
                }]),
                    n
            }(qt);
        It.on(document, Bn, Vn, (function (e) {
            ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
            var t, n = $e(Kt.getMultipleElementsFromSelector(this));
            try {
                for (n.s(); !(t = n.n()).done;) {
                    var i = t.value;
                    Un.getOrCreateInstance(i, {
                        toggle: !1
                    }).toggle()
                }
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
        }
        )),
            vt(Un);
        var Xn = "dropdown"
            , Yn = ".".concat("bs.dropdown")
            , $n = ".data-api"
            , Gn = "ArrowUp"
            , Jn = "ArrowDown"
            , Zn = "hide".concat(Yn)
            , ei = "hidden".concat(Yn)
            , ti = "show".concat(Yn)
            , ni = "shown".concat(Yn)
            , ii = "click".concat(Yn).concat($n)
            , ri = "keydown".concat(Yn).concat($n)
            , oi = "keyup".concat(Yn).concat($n)
            , ai = "show"
            , si = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
            , ci = "".concat(si, ".").concat(ai)
            , li = ".dropdown-menu"
            , ui = pt() ? "top-end" : "top-start"
            , fi = pt() ? "top-start" : "top-end"
            , di = pt() ? "bottom-end" : "bottom-start"
            , hi = pt() ? "bottom-start" : "bottom-end"
            , pi = pt() ? "left-start" : "right-start"
            , vi = pt() ? "right-start" : "left-start"
            , mi = {
                autoClose: !0,
                boundary: "clippingParents",
                display: "dynamic",
                offset: [0, 2],
                popperConfig: null,
                reference: "toggle"
            }
            , gi = {
                autoClose: "(boolean|string)",
                boundary: "(string|element)",
                display: "string",
                offset: "(array|string|function)",
                popperConfig: "(null|object|function)",
                reference: "(string|element|object)"
            }
            , _i = function (e) {
                Me(i, e);
                var t = He(i);
                function i(e, n) {
                    var r;
                    return Ke(this, i),
                        (r = t.call(this, e, n))._popper = null,
                        r._parent = r._element.parentNode,
                        r._menu = Kt.next(r._element, li)[0] || Kt.prev(r._element, li)[0] || Kt.findOne(li, r._parent),
                        r._inNavbar = r._detectNavbar(),
                        r
                }
                return Ue(i, [{
                    key: "toggle",
                    value: function () {
                        return this._isShown() ? this.hide() : this.show()
                    }
                }, {
                    key: "show",
                    value: function () {
                        if (!ct(this._element) && !this._isShown()) {
                            var e = {
                                relatedTarget: this._element
                            };
                            if (!It.trigger(this._element, ti, e).defaultPrevented) {
                                if (this._createPopper(),
                                    "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
                                    var t, n, i = $e((t = []).concat.apply(t, Ge(document.body.children)));
                                    try {
                                        for (i.s(); !(n = i.n()).done;) {
                                            var r = n.value;
                                            It.on(r, "mouseover", ut)
                                        }
                                    } catch (e) {
                                        i.e(e)
                                    } finally {
                                        i.f()
                                    }
                                }
                                this._element.focus(),
                                    this._element.setAttribute("aria-expanded", !0),
                                    this._menu.classList.add(ai),
                                    this._element.classList.add(ai),
                                    It.trigger(this._element, ni, e)
                            }
                        }
                    }
                }, {
                    key: "hide",
                    value: function () {
                        if (!ct(this._element) && this._isShown()) {
                            var e = {
                                relatedTarget: this._element
                            };
                            this._completeHide(e)
                        }
                    }
                }, {
                    key: "dispose",
                    value: function () {
                        this._popper && this._popper.destroy(),
                            Ne(We(i.prototype), "dispose", this).call(this)
                    }
                }, {
                    key: "update",
                    value: function () {
                        this._inNavbar = this._detectNavbar(),
                            this._popper && this._popper.update()
                    }
                }, {
                    key: "_completeHide",
                    value: function (e) {
                        if (!It.trigger(this._element, Zn, e).defaultPrevented) {
                            if ("ontouchstart" in document.documentElement) {
                                var t, n, i = $e((t = []).concat.apply(t, Ge(document.body.children)));
                                try {
                                    for (i.s(); !(n = i.n()).done;) {
                                        var r = n.value;
                                        It.off(r, "mouseover", ut)
                                    }
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                            }
                            this._popper && this._popper.destroy(),
                                this._menu.classList.remove(ai),
                                this._element.classList.remove(ai),
                                this._element.setAttribute("aria-expanded", "false"),
                                Bt(this._menu, "popper"),
                                It.trigger(this._element, ei, e)
                        }
                    }
                }, {
                    key: "_getConfig",
                    value: function (e) {
                        if ("object" === et((e = Ne(We(i.prototype), "_getConfig", this).call(this, e)).reference) && !ot(e.reference) && "function" != typeof e.reference.getBoundingClientRect)
                            throw new TypeError("".concat(Xn.toUpperCase(), ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'));
                        return e
                    }
                }, {
                    key: "_createPopper",
                    value: function () {
                        if (void 0 === n)
                            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        var e = this._element;
                        "parent" === this._config.reference ? e = this._parent : ot(this._config.reference) ? e = at(this._config.reference) : "object" === et(this._config.reference) && (e = this._config.reference);
                        var t = this._getPopperConfig();
                        this._popper = De(e, this._menu, t)
                    }
                }, {
                    key: "_isShown",
                    value: function () {
                        return this._menu.classList.contains(ai)
                    }
                }, {
                    key: "_getPlacement",
                    value: function () {
                        var e = this._parent;
                        if (e.classList.contains("dropend"))
                            return pi;
                        if (e.classList.contains("dropstart"))
                            return vi;
                        if (e.classList.contains("dropup-center"))
                            return "top";
                        if (e.classList.contains("dropdown-center"))
                            return "bottom";
                        var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                        return e.classList.contains("dropup") ? t ? fi : ui : t ? hi : di
                    }
                }, {
                    key: "_detectNavbar",
                    value: function () {
                        return null !== this._element.closest(".navbar")
                    }
                }, {
                    key: "_getOffset",
                    value: function () {
                        var e = this
                            , t = this._config.offset;
                        return "string" == typeof t ? t.split(",").map((function (e) {
                            return Number.parseInt(e, 10)
                        }
                        )) : "function" == typeof t ? function (n) {
                            return t(n, e._element)
                        }
                            : t
                    }
                }, {
                    key: "_getPopperConfig",
                    value: function () {
                        var e = {
                            placement: this._getPlacement(),
                            modifiers: [{
                                name: "preventOverflow",
                                options: {
                                    boundary: this._config.boundary
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: this._getOffset()
                                }
                            }]
                        };
                        return (this._inNavbar || "static" === this._config.display) && (Ht(this._menu, "popper", "static"),
                            e.modifiers = [{
                                name: "applyStyles",
                                enabled: !1
                            }]),
                            qe(qe({}, e), mt(this._config.popperConfig, [e]))
                    }
                }, {
                    key: "_selectMenuItem",
                    value: function (e) {
                        var t = e.key
                            , n = e.target
                            , i = Kt.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((function (e) {
                                return st(e)
                            }
                            ));
                        i.length && _t(i, n, t === Jn, !i.includes(n)).focus()
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return mi
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return gi
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return Xn
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (e) {
                        return this.each((function () {
                            var t = i.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e])
                                    throw new TypeError('No method named "'.concat(e, '"'));
                                t[e]()
                            }
                        }
                        ))
                    }
                }, {
                    key: "clearMenus",
                    value: function (e) {
                        if (2 !== e.button && ("keyup" !== e.type || "Tab" === e.key)) {
                            var t, n = $e(Kt.find(ci));
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value
                                        , o = i.getInstance(r);
                                    if (o && !1 !== o._config.autoClose) {
                                        var a = e.composedPath()
                                            , s = a.includes(o._menu);
                                        if (!(a.includes(o._element) || "inside" === o._config.autoClose && !s || "outside" === o._config.autoClose && s || o._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName)))) {
                                            var c = {
                                                relatedTarget: o._element
                                            };
                                            "click" === e.type && (c.clickEvent = e),
                                                o._completeHide(c)
                                        }
                                    }
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                        }
                    }
                }, {
                    key: "dataApiKeydownHandler",
                    value: function (e) {
                        var t = /input|textarea/i.test(e.target.tagName)
                            , n = "Escape" === e.key
                            , r = [Gn, Jn].includes(e.key);
                        if ((r || n) && (!t || n)) {
                            e.preventDefault();
                            var o = this.matches(si) ? this : Kt.prev(this, si)[0] || Kt.next(this, si)[0] || Kt.findOne(si, e.delegateTarget.parentNode)
                                , a = i.getOrCreateInstance(o);
                            if (r)
                                return e.stopPropagation(),
                                    a.show(),
                                    void a._selectMenuItem(e);
                            a._isShown() && (e.stopPropagation(),
                                a.hide(),
                                o.focus())
                        }
                    }
                }]),
                    i
            }(qt);
        It.on(document, ri, si, _i.dataApiKeydownHandler),
            It.on(document, ri, li, _i.dataApiKeydownHandler),
            It.on(document, ii, _i.clearMenus),
            It.on(document, oi, _i.clearMenus),
            It.on(document, ii, si, (function (e) {
                e.preventDefault(),
                    _i.getOrCreateInstance(this).toggle()
            }
            )),
            vt(_i);
        var yi = "backdrop"
            , bi = "show"
            , wi = "mousedown.bs.".concat(yi)
            , ki = {
                className: "modal-backdrop",
                clickCallback: null,
                isAnimated: !1,
                isVisible: !0,
                rootElement: "body"
            }
            , Ei = {
                className: "string",
                clickCallback: "(function|null)",
                isAnimated: "boolean",
                isVisible: "boolean",
                rootElement: "(element|string)"
            }
            , Ai = function (e) {
                Me(n, e);
                var t = He(n);
                function n(e) {
                    var i;
                    return Ke(this, n),
                        (i = t.call(this))._config = i._getConfig(e),
                        i._isAppended = !1,
                        i._element = null,
                        i
                }
                return Ue(n, [{
                    key: "show",
                    value: function (e) {
                        if (this._config.isVisible) {
                            this._append();
                            var t = this._getElement();
                            this._config.isAnimated && ft(t),
                                t.classList.add(bi),
                                this._emulateAnimation((function () {
                                    mt(e)
                                }
                                ))
                        } else
                            mt(e)
                    }
                }, {
                    key: "hide",
                    value: function (e) {
                        var t = this;
                        this._config.isVisible ? (this._getElement().classList.remove(bi),
                            this._emulateAnimation((function () {
                                t.dispose(),
                                    mt(e)
                            }
                            ))) : mt(e)
                    }
                }, {
                    key: "dispose",
                    value: function () {
                        this._isAppended && (It.off(this._element, wi),
                            this._element.remove(),
                            this._isAppended = !1)
                    }
                }, {
                    key: "_getElement",
                    value: function () {
                        if (!this._element) {
                            var e = document.createElement("div");
                            e.className = this._config.className,
                                this._config.isAnimated && e.classList.add("fade"),
                                this._element = e
                        }
                        return this._element
                    }
                }, {
                    key: "_configAfterMerge",
                    value: function (e) {
                        return e.rootElement = at(e.rootElement),
                            e
                    }
                }, {
                    key: "_append",
                    value: function () {
                        var e = this;
                        if (!this._isAppended) {
                            var t = this._getElement();
                            this._config.rootElement.append(t),
                                It.on(t, wi, (function () {
                                    mt(e._config.clickCallback)
                                }
                                )),
                                this._isAppended = !0
                        }
                    }
                }, {
                    key: "_emulateAnimation",
                    value: function (e) {
                        gt(e, this._getElement(), this._config.isAnimated)
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return ki
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Ei
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return yi
                    }
                }]),
                    n
            }(zt)
            , Oi = ".".concat("bs.focustrap")
            , Ti = "focusin".concat(Oi)
            , Ci = "keydown.tab".concat(Oi)
            , xi = "backward"
            , Si = {
                autofocus: !0,
                trapElement: null
            }
            , Li = {
                autofocus: "boolean",
                trapElement: "element"
            }
            , ji = function (e) {
                Me(n, e);
                var t = He(n);
                function n(e) {
                    var i;
                    return Ke(this, n),
                        (i = t.call(this))._config = i._getConfig(e),
                        i._isActive = !1,
                        i._lastTabNavDirection = null,
                        i
                }
                return Ue(n, [{
                    key: "activate",
                    value: function () {
                        var e = this;
                        this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
                            It.off(document, Oi),
                            It.on(document, Ti, (function (t) {
                                return e._handleFocusin(t)
                            }
                            )),
                            It.on(document, Ci, (function (t) {
                                return e._handleKeydown(t)
                            }
                            )),
                            this._isActive = !0)
                    }
                }, {
                    key: "deactivate",
                    value: function () {
                        this._isActive && (this._isActive = !1,
                            It.off(document, Oi))
                    }
                }, {
                    key: "_handleFocusin",
                    value: function (e) {
                        var t = this._config.trapElement;
                        if (e.target !== document && e.target !== t && !t.contains(e.target)) {
                            var n = Kt.focusableChildren(t);
                            0 === n.length ? t.focus() : this._lastTabNavDirection === xi ? n[n.length - 1].focus() : n[0].focus()
                        }
                    }
                }, {
                    key: "_handleKeydown",
                    value: function (e) {
                        "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? xi : "forward")
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return Si
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Li
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return "focustrap"
                    }
                }]),
                    n
            }(zt)
            , Pi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            , Di = ".sticky-top"
            , Ii = "padding-right"
            , Ni = "margin-right"
            , Mi = function () {
                function e() {
                    Ke(this, e),
                        this._element = document.body
                }
                return Ue(e, [{
                    key: "getWidth",
                    value: function () {
                        var e = document.documentElement.clientWidth;
                        return Math.abs(window.innerWidth - e)
                    }
                }, {
                    key: "hide",
                    value: function () {
                        var e = this.getWidth();
                        this._disableOverFlow(),
                            this._setElementAttributes(this._element, Ii, (function (t) {
                                return t + e
                            }
                            )),
                            this._setElementAttributes(Pi, Ii, (function (t) {
                                return t + e
                            }
                            )),
                            this._setElementAttributes(Di, Ni, (function (t) {
                                return t - e
                            }
                            ))
                    }
                }, {
                    key: "reset",
                    value: function () {
                        this._resetElementAttributes(this._element, "overflow"),
                            this._resetElementAttributes(this._element, Ii),
                            this._resetElementAttributes(Pi, Ii),
                            this._resetElementAttributes(Di, Ni)
                    }
                }, {
                    key: "isOverflowing",
                    value: function () {
                        return this.getWidth() > 0
                    }
                }, {
                    key: "_disableOverFlow",
                    value: function () {
                        this._saveInitialAttribute(this._element, "overflow"),
                            this._element.style.overflow = "hidden"
                    }
                }, {
                    key: "_setElementAttributes",
                    value: function (e, t, n) {
                        var i = this
                            , r = this.getWidth();
                        this._applyManipulationCallback(e, (function (e) {
                            if (!(e !== i._element && window.innerWidth > e.clientWidth + r)) {
                                i._saveInitialAttribute(e, t);
                                var o = window.getComputedStyle(e).getPropertyValue(t);
                                e.style.setProperty(t, "".concat(n(Number.parseFloat(o)), "px"))
                            }
                        }
                        ))
                    }
                }, {
                    key: "_saveInitialAttribute",
                    value: function (e, t) {
                        var n = e.style.getPropertyValue(t);
                        n && Ht(e, t, n)
                    }
                }, {
                    key: "_resetElementAttributes",
                    value: function (e, t) {
                        this._applyManipulationCallback(e, (function (e) {
                            var n = Wt(e, t);
                            null !== n ? (Bt(e, t),
                                e.style.setProperty(t, n)) : e.style.removeProperty(t)
                        }
                        ))
                    }
                }, {
                    key: "_applyManipulationCallback",
                    value: function (e, t) {
                        if (ot(e))
                            t(e);
                        else {
                            var n, i = $e(Kt.find(e, this._element));
                            try {
                                for (i.s(); !(n = i.n()).done;)
                                    t(n.value)
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }
                    }
                }]),
                    e
            }()
            , Fi = ".".concat("bs.modal")
            , Hi = "hide".concat(Fi)
            , Bi = "hidePrevented".concat(Fi)
            , Ri = "hidden".concat(Fi)
            , Wi = "show".concat(Fi)
            , zi = "shown".concat(Fi)
            , qi = "resize".concat(Fi)
            , Vi = "click.dismiss".concat(Fi)
            , Ki = "mousedown.dismiss".concat(Fi)
            , Qi = "keydown.dismiss".concat(Fi)
            , Ui = "click".concat(Fi).concat(".data-api")
            , Xi = "modal-open"
            , Yi = "show"
            , $i = "modal-static"
            , Gi = {
                backdrop: !0,
                focus: !0,
                keyboard: !0
            }
            , Ji = {
                backdrop: "(boolean|string)",
                focus: "boolean",
                keyboard: "boolean"
            }
            , Zi = function (e) {
                Me(n, e);
                var t = He(n);
                function n(e, i) {
                    var r;
                    return Ke(this, n),
                        (r = t.call(this, e, i))._dialog = Kt.findOne(".modal-dialog", r._element),
                        r._backdrop = r._initializeBackDrop(),
                        r._focustrap = r._initializeFocusTrap(),
                        r._isShown = !1,
                        r._isTransitioning = !1,
                        r._scrollBar = new Mi,
                        r._addEventListeners(),
                        r
                }
                return Ue(n, [{
                    key: "toggle",
                    value: function (e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }
                }, {
                    key: "show",
                    value: function (e) {
                        var t = this;
                        this._isShown || this._isTransitioning || It.trigger(this._element, Wi, {
                            relatedTarget: e
                        }).defaultPrevented || (this._isShown = !0,
                            this._isTransitioning = !0,
                            this._scrollBar.hide(),
                            document.body.classList.add(Xi),
                            this._adjustDialog(),
                            this._backdrop.show((function () {
                                return t._showElement(e)
                            }
                            )))
                    }
                }, {
                    key: "hide",
                    value: function () {
                        var e = this;
                        this._isShown && !this._isTransitioning && (It.trigger(this._element, Hi).defaultPrevented || (this._isShown = !1,
                            this._isTransitioning = !0,
                            this._focustrap.deactivate(),
                            this._element.classList.remove(Yi),
                            this._queueCallback((function () {
                                return e._hideModal()
                            }
                            ), this._element, this._isAnimated())))
                    }
                }, {
                    key: "dispose",
                    value: function () {
                        It.off(window, Fi),
                            It.off(this._dialog, Fi),
                            this._backdrop.dispose(),
                            this._focustrap.deactivate(),
                            Ne(We(n.prototype), "dispose", this).call(this)
                    }
                }, {
                    key: "handleUpdate",
                    value: function () {
                        this._adjustDialog()
                    }
                }, {
                    key: "_initializeBackDrop",
                    value: function () {
                        return new Ai({
                            isVisible: Boolean(this._config.backdrop),
                            isAnimated: this._isAnimated()
                        })
                    }
                }, {
                    key: "_initializeFocusTrap",
                    value: function () {
                        return new ji({
                            trapElement: this._element
                        })
                    }
                }, {
                    key: "_showElement",
                    value: function (e) {
                        var t = this;
                        document.body.contains(this._element) || document.body.append(this._element),
                            this._element.style.display = "block",
                            this._element.removeAttribute("aria-hidden"),
                            this._element.setAttribute("aria-modal", !0),
                            this._element.setAttribute("role", "dialog"),
                            this._element.scrollTop = 0;
                        var n = Kt.findOne(".modal-body", this._dialog);
                        n && (n.scrollTop = 0),
                            ft(this._element),
                            this._element.classList.add(Yi),
                            this._queueCallback((function () {
                                t._config.focus && t._focustrap.activate(),
                                    t._isTransitioning = !1,
                                    It.trigger(t._element, zi, {
                                        relatedTarget: e
                                    })
                            }
                            ), this._dialog, this._isAnimated())
                    }
                }, {
                    key: "_addEventListeners",
                    value: function () {
                        var e = this;
                        It.on(this._element, Qi, (function (t) {
                            "Escape" === t.key && (e._config.keyboard ? e.hide() : e._triggerBackdropTransition())
                        }
                        )),
                            It.on(window, qi, (function () {
                                e._isShown && !e._isTransitioning && e._adjustDialog()
                            }
                            )),
                            It.on(this._element, Ki, (function (t) {
                                It.one(e._element, Vi, (function (n) {
                                    e._element === t.target && e._element === n.target && ("static" !== e._config.backdrop ? e._config.backdrop && e.hide() : e._triggerBackdropTransition())
                                }
                                ))
                            }
                            ))
                    }
                }, {
                    key: "_hideModal",
                    value: function () {
                        var e = this;
                        this._element.style.display = "none",
                            this._element.setAttribute("aria-hidden", !0),
                            this._element.removeAttribute("aria-modal"),
                            this._element.removeAttribute("role"),
                            this._isTransitioning = !1,
                            this._backdrop.hide((function () {
                                document.body.classList.remove(Xi),
                                    e._resetAdjustments(),
                                    e._scrollBar.reset(),
                                    It.trigger(e._element, Ri)
                            }
                            ))
                    }
                }, {
                    key: "_isAnimated",
                    value: function () {
                        return this._element.classList.contains("fade")
                    }
                }, {
                    key: "_triggerBackdropTransition",
                    value: function () {
                        var e = this;
                        if (!It.trigger(this._element, Bi).defaultPrevented) {
                            var t = this._element.scrollHeight > document.documentElement.clientHeight
                                , n = this._element.style.overflowY;
                            "hidden" === n || this._element.classList.contains($i) || (t || (this._element.style.overflowY = "hidden"),
                                this._element.classList.add($i),
                                this._queueCallback((function () {
                                    e._element.classList.remove($i),
                                        e._queueCallback((function () {
                                            e._element.style.overflowY = n
                                        }
                                        ), e._dialog)
                                }
                                ), this._dialog),
                                this._element.focus())
                        }
                    }
                }, {
                    key: "_adjustDialog",
                    value: function () {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight
                            , t = this._scrollBar.getWidth()
                            , n = t > 0;
                        if (n && !e) {
                            var i = pt() ? "paddingLeft" : "paddingRight";
                            this._element.style[i] = "".concat(t, "px")
                        }
                        if (!n && e) {
                            var r = pt() ? "paddingRight" : "paddingLeft";
                            this._element.style[r] = "".concat(t, "px")
                        }
                    }
                }, {
                    key: "_resetAdjustments",
                    value: function () {
                        this._element.style.paddingLeft = "",
                            this._element.style.paddingRight = ""
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return Gi
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Ji
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return "modal"
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (e, t) {
                        return this.each((function () {
                            var i = n.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === i[e])
                                    throw new TypeError('No method named "'.concat(e, '"'));
                                i[e](t)
                            }
                        }
                        ))
                    }
                }]),
                    n
            }(qt);
        It.on(document, Ui, '[data-bs-toggle="modal"]', (function (e) {
            var t = this
                , n = Kt.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                It.one(n, Wi, (function (e) {
                    e.defaultPrevented || It.one(n, Ri, (function () {
                        st(t) && t.focus()
                    }
                    ))
                }
                ));
            var i = Kt.findOne(".modal.show");
            i && Zi.getInstance(i).hide(),
                Zi.getOrCreateInstance(n).toggle(this)
        }
        )),
            Qt(Zi),
            vt(Zi);
        var er = ".".concat("bs.offcanvas")
            , tr = ".data-api"
            , nr = "load".concat(er).concat(tr)
            , ir = "show"
            , rr = "showing"
            , or = "hiding"
            , ar = ".offcanvas.show"
            , sr = "show".concat(er)
            , cr = "shown".concat(er)
            , lr = "hide".concat(er)
            , ur = "hidePrevented".concat(er)
            , fr = "hidden".concat(er)
            , dr = "resize".concat(er)
            , hr = "click".concat(er).concat(tr)
            , pr = "keydown.dismiss".concat(er)
            , vr = {
                backdrop: !0,
                keyboard: !0,
                scroll: !1
            }
            , mr = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                scroll: "boolean"
            }
            , gr = function (e) {
                Me(n, e);
                var t = He(n);
                function n(e, i) {
                    var r;
                    return Ke(this, n),
                        (r = t.call(this, e, i))._isShown = !1,
                        r._backdrop = r._initializeBackDrop(),
                        r._focustrap = r._initializeFocusTrap(),
                        r._addEventListeners(),
                        r
                }
                return Ue(n, [{
                    key: "toggle",
                    value: function (e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }
                }, {
                    key: "show",
                    value: function (e) {
                        var t = this;
                        this._isShown || It.trigger(this._element, sr, {
                            relatedTarget: e
                        }).defaultPrevented || (this._isShown = !0,
                            this._backdrop.show(),
                            this._config.scroll || (new Mi).hide(),
                            this._element.setAttribute("aria-modal", !0),
                            this._element.setAttribute("role", "dialog"),
                            this._element.classList.add(rr),
                            this._queueCallback((function () {
                                t._config.scroll && !t._config.backdrop || t._focustrap.activate(),
                                    t._element.classList.add(ir),
                                    t._element.classList.remove(rr),
                                    It.trigger(t._element, cr, {
                                        relatedTarget: e
                                    })
                            }
                            ), this._element, !0))
                    }
                }, {
                    key: "hide",
                    value: function () {
                        var e = this;
                        this._isShown && !It.trigger(this._element, lr).defaultPrevented && (this._focustrap.deactivate(),
                            this._element.blur(),
                            this._isShown = !1,
                            this._element.classList.add(or),
                            this._backdrop.hide(),
                            this._queueCallback((function () {
                                e._element.classList.remove(ir, or),
                                    e._element.removeAttribute("aria-modal"),
                                    e._element.removeAttribute("role"),
                                    e._config.scroll || (new Mi).reset(),
                                    It.trigger(e._element, fr)
                            }
                            ), this._element, !0))
                    }
                }, {
                    key: "dispose",
                    value: function () {
                        this._backdrop.dispose(),
                            this._focustrap.deactivate(),
                            Ne(We(n.prototype), "dispose", this).call(this)
                    }
                }, {
                    key: "_initializeBackDrop",
                    value: function () {
                        var e = this
                            , t = Boolean(this._config.backdrop);
                        return new Ai({
                            className: "offcanvas-backdrop",
                            isVisible: t,
                            isAnimated: !0,
                            rootElement: this._element.parentNode,
                            clickCallback: t ? function () {
                                "static" !== e._config.backdrop ? e.hide() : It.trigger(e._element, ur)
                            }
                                : null
                        })
                    }
                }, {
                    key: "_initializeFocusTrap",
                    value: function () {
                        return new ji({
                            trapElement: this._element
                        })
                    }
                }, {
                    key: "_addEventListeners",
                    value: function () {
                        var e = this;
                        It.on(this._element, pr, (function (t) {
                            "Escape" === t.key && (e._config.keyboard ? e.hide() : It.trigger(e._element, ur))
                        }
                        ))
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return vr
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return mr
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return "offcanvas"
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (e) {
                        return this.each((function () {
                            var t = n.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                                    throw new TypeError('No method named "'.concat(e, '"'));
                                t[e](this)
                            }
                        }
                        ))
                    }
                }]),
                    n
            }(qt);
        It.on(document, hr, '[data-bs-toggle="offcanvas"]', (function (e) {
            var t = this
                , n = Kt.getElementFromSelector(this);
            if (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                !ct(this)) {
                It.one(n, fr, (function () {
                    st(t) && t.focus()
                }
                ));
                var i = Kt.findOne(ar);
                i && i !== n && gr.getInstance(i).hide(),
                    gr.getOrCreateInstance(n).toggle(this)
            }
        }
        )),
            It.on(window, nr, (function () {
                var e, t = $e(Kt.find(ar));
                try {
                    for (t.s(); !(e = t.n()).done;) {
                        var n = e.value;
                        gr.getOrCreateInstance(n).show()
                    }
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
            }
            )),
            It.on(window, dr, (function () {
                var e, t = $e(Kt.find("[aria-modal][class*=show][class*=offcanvas-]"));
                try {
                    for (t.s(); !(e = t.n()).done;) {
                        var n = e.value;
                        "fixed" !== getComputedStyle(n).position && gr.getOrCreateInstance(n).hide()
                    }
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
            }
            )),
            Qt(gr),
            vt(gr);
        var _r = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
            , yr = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
            , br = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i
            , wr = function (e, t) {
                var n = e.nodeName.toLowerCase();
                return t.includes(n) ? !yr.has(n) || Boolean(br.test(e.nodeValue)) : t.filter((function (e) {
                    return e instanceof RegExp
                }
                )).some((function (e) {
                    return e.test(n)
                }
                ))
            }
            , kr = {
                allowList: _r,
                content: {},
                extraClass: "",
                html: !1,
                sanitize: !0,
                sanitizeFn: null,
                template: "<div></div>"
            }
            , Er = {
                allowList: "object",
                content: "object",
                extraClass: "(string|function)",
                html: "boolean",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                template: "string"
            }
            , Ar = {
                entry: "(string|element|function|null)",
                selector: "(string|element)"
            }
            , Or = function (e) {
                Me(n, e);
                var t = He(n);
                function n(e) {
                    var i;
                    return Ke(this, n),
                        (i = t.call(this))._config = i._getConfig(e),
                        i
                }
                return Ue(n, [{
                    key: "getContent",
                    value: function () {
                        var e = this;
                        return Object.values(this._config.content).map((function (t) {
                            return e._resolvePossibleFunction(t)
                        }
                        )).filter(Boolean)
                    }
                }, {
                    key: "hasContent",
                    value: function () {
                        return this.getContent().length > 0
                    }
                }, {
                    key: "changeContent",
                    value: function (e) {
                        return this._checkContent(e),
                            this._config.content = qe(qe({}, this._config.content), e),
                            this
                    }
                }, {
                    key: "toHtml",
                    value: function () {
                        var e = document.createElement("div");
                        e.innerHTML = this._maybeSanitize(this._config.template);
                        for (var t = 0, n = Object.entries(this._config.content); t < n.length; t++) {
                            var i = Ye(n[t], 2)
                                , r = i[0]
                                , o = i[1];
                            this._setContent(e, o, r)
                        }
                        var a, s = e.children[0], c = this._resolvePossibleFunction(this._config.extraClass);
                        return c && (a = s.classList).add.apply(a, Ge(c.split(" "))),
                            s
                    }
                }, {
                    key: "_typeCheckConfig",
                    value: function (e) {
                        Ne(We(n.prototype), "_typeCheckConfig", this).call(this, e),
                            this._checkContent(e.content)
                    }
                }, {
                    key: "_checkContent",
                    value: function (e) {
                        for (var t = 0, i = Object.entries(e); t < i.length; t++) {
                            var r = Ye(i[t], 2)
                                , o = r[0]
                                , a = r[1];
                            Ne(We(n.prototype), "_typeCheckConfig", this).call(this, {
                                selector: o,
                                entry: a
                            }, Ar)
                        }
                    }
                }, {
                    key: "_setContent",
                    value: function (e, t, n) {
                        var i = Kt.findOne(n, e);
                        i && ((t = this._resolvePossibleFunction(t)) ? ot(t) ? this._putElementInTemplate(at(t), i) : this._config.html ? i.innerHTML = this._maybeSanitize(t) : i.textContent = t : i.remove())
                    }
                }, {
                    key: "_maybeSanitize",
                    value: function (e) {
                        return this._config.sanitize ? function (e, t, n) {
                            var i;
                            if (!e.length)
                                return e;
                            if (n && "function" == typeof n)
                                return n(e);
                            var r, o = (new window.DOMParser).parseFromString(e, "text/html"), a = $e((i = []).concat.apply(i, Ge(o.body.querySelectorAll("*"))));
                            try {
                                for (a.s(); !(r = a.n()).done;) {
                                    var s, c = r.value, l = c.nodeName.toLowerCase();
                                    if (Object.keys(t).includes(l)) {
                                        var u, f = (s = []).concat.apply(s, Ge(c.attributes)), d = [].concat(t["*"] || [], t[l] || []), h = $e(f);
                                        try {
                                            for (h.s(); !(u = h.n()).done;) {
                                                var p = u.value;
                                                wr(p, d) || c.removeAttribute(p.nodeName)
                                            }
                                        } catch (e) {
                                            h.e(e)
                                        } finally {
                                            h.f()
                                        }
                                    } else
                                        c.remove()
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            return o.body.innerHTML
                        }(e, this._config.allowList, this._config.sanitizeFn) : e
                    }
                }, {
                    key: "_resolvePossibleFunction",
                    value: function (e) {
                        return mt(e, [this])
                    }
                }, {
                    key: "_putElementInTemplate",
                    value: function (e, t) {
                        if (this._config.html)
                            return t.innerHTML = "",
                                void t.append(e);
                        t.textContent = e.textContent
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return kr
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Er
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return "TemplateFactory"
                    }
                }]),
                    n
            }(zt)
            , Tr = new Set(["sanitize", "allowList", "sanitizeFn"])
            , Cr = "fade"
            , xr = "show"
            , Sr = ".".concat("modal")
            , Lr = "hide.bs.modal"
            , jr = "hover"
            , Pr = "focus"
            , Dr = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: pt() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: pt() ? "right" : "left"
            }
            , Ir = {
                allowList: _r,
                animation: !0,
                boundary: "clippingParents",
                container: !1,
                customClass: "",
                delay: 0,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                html: !1,
                offset: [0, 6],
                placement: "top",
                popperConfig: null,
                sanitize: !0,
                sanitizeFn: null,
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                title: "",
                trigger: "hover focus"
            }
            , Nr = {
                allowList: "object",
                animation: "boolean",
                boundary: "(string|element)",
                container: "(string|element|boolean)",
                customClass: "(string|function)",
                delay: "(number|object)",
                fallbackPlacements: "array",
                html: "boolean",
                offset: "(array|string|function)",
                placement: "(string|function)",
                popperConfig: "(null|object|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                selector: "(string|boolean)",
                template: "string",
                title: "(string|element|function)",
                trigger: "string"
            }
            , Mr = function (e) {
                Me(i, e);
                var t = He(i);
                function i(e, r) {
                    var o;
                    if (Ke(this, i),
                        void 0 === n)
                        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                    return (o = t.call(this, e, r))._isEnabled = !0,
                        o._timeout = 0,
                        o._isHovered = null,
                        o._activeTrigger = {},
                        o._popper = null,
                        o._templateFactory = null,
                        o._newContent = null,
                        o.tip = null,
                        o._setListeners(),
                        o._config.selector || o._fixTitle(),
                        o
                }
                return Ue(i, [{
                    key: "enable",
                    value: function () {
                        this._isEnabled = !0
                    }
                }, {
                    key: "disable",
                    value: function () {
                        this._isEnabled = !1
                    }
                }, {
                    key: "toggleEnabled",
                    value: function () {
                        this._isEnabled = !this._isEnabled
                    }
                }, {
                    key: "toggle",
                    value: function () {
                        this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click,
                            this._isShown() ? this._leave() : this._enter())
                    }
                }, {
                    key: "dispose",
                    value: function () {
                        clearTimeout(this._timeout),
                            It.off(this._element.closest(Sr), Lr, this._hideModalHandler),
                            this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
                            this._disposePopper(),
                            Ne(We(i.prototype), "dispose", this).call(this)
                    }
                }, {
                    key: "show",
                    value: function () {
                        var e = this;
                        if ("none" === this._element.style.display)
                            throw new Error("Please use show on visible elements");
                        if (this._isWithContent() && this._isEnabled) {
                            var t = It.trigger(this._element, this.constructor.eventName("show"))
                                , n = (lt(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                            if (!t.defaultPrevented && n) {
                                this._disposePopper();
                                var i = this._getTipElement();
                                this._element.setAttribute("aria-describedby", i.getAttribute("id"));
                                var r = this._config.container;
                                if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(i),
                                    It.trigger(this._element, this.constructor.eventName("inserted"))),
                                    this._popper = this._createPopper(i),
                                    i.classList.add(xr),
                                    "ontouchstart" in document.documentElement) {
                                    var o, a, s = $e((o = []).concat.apply(o, Ge(document.body.children)));
                                    try {
                                        for (s.s(); !(a = s.n()).done;) {
                                            var c = a.value;
                                            It.on(c, "mouseover", ut)
                                        }
                                    } catch (e) {
                                        s.e(e)
                                    } finally {
                                        s.f()
                                    }
                                }
                                this._queueCallback((function () {
                                    It.trigger(e._element, e.constructor.eventName("shown")),
                                        !1 === e._isHovered && e._leave(),
                                        e._isHovered = !1
                                }
                                ), this.tip, this._isAnimated())
                            }
                        }
                    }
                }, {
                    key: "hide",
                    value: function () {
                        var e = this;
                        if (this._isShown() && !It.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                            if (this._getTipElement().classList.remove(xr),
                                "ontouchstart" in document.documentElement) {
                                var t, n, i = $e((t = []).concat.apply(t, Ge(document.body.children)));
                                try {
                                    for (i.s(); !(n = i.n()).done;) {
                                        var r = n.value;
                                        It.off(r, "mouseover", ut)
                                    }
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                            }
                            this._activeTrigger.click = !1,
                                this._activeTrigger[Pr] = !1,
                                this._activeTrigger[jr] = !1,
                                this._isHovered = null,
                                this._queueCallback((function () {
                                    e._isWithActiveTrigger() || (e._isHovered || e._disposePopper(),
                                        e._element.removeAttribute("aria-describedby"),
                                        It.trigger(e._element, e.constructor.eventName("hidden")))
                                }
                                ), this.tip, this._isAnimated())
                        }
                    }
                }, {
                    key: "update",
                    value: function () {
                        this._popper && this._popper.update()
                    }
                }, {
                    key: "_isWithContent",
                    value: function () {
                        return Boolean(this._getTitle())
                    }
                }, {
                    key: "_getTipElement",
                    value: function () {
                        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
                            this.tip
                    }
                }, {
                    key: "_createTipElement",
                    value: function (e) {
                        var t = this._getTemplateFactory(e).toHtml();
                        if (!t)
                            return null;
                        t.classList.remove(Cr, xr),
                            t.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
                        var n = function (e) {
                            do {
                                e += Math.floor(1e6 * Math.random())
                            } while (document.getElementById(e));
                            return e
                        }(this.constructor.NAME).toString();
                        return t.setAttribute("id", n),
                            this._isAnimated() && t.classList.add(Cr),
                            t
                    }
                }, {
                    key: "setContent",
                    value: function (e) {
                        this._newContent = e,
                            this._isShown() && (this._disposePopper(),
                                this.show())
                    }
                }, {
                    key: "_getTemplateFactory",
                    value: function (e) {
                        return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Or(qe(qe({}, this._config), {}, {
                            content: e,
                            extraClass: this._resolvePossibleFunction(this._config.customClass)
                        })),
                            this._templateFactory
                    }
                }, {
                    key: "_getContentForTemplate",
                    value: function () {
                        return Ve({}, ".tooltip-inner", this._getTitle())
                    }
                }, {
                    key: "_getTitle",
                    value: function () {
                        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
                    }
                }, {
                    key: "_initializeOnDelegatedTarget",
                    value: function (e) {
                        return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
                    }
                }, {
                    key: "_isAnimated",
                    value: function () {
                        return this._config.animation || this.tip && this.tip.classList.contains(Cr)
                    }
                }, {
                    key: "_isShown",
                    value: function () {
                        return this.tip && this.tip.classList.contains(xr)
                    }
                }, {
                    key: "_createPopper",
                    value: function (e) {
                        var t = mt(this._config.placement, [this, e, this._element])
                            , n = Dr[t.toUpperCase()];
                        return De(this._element, e, this._getPopperConfig(n))
                    }
                }, {
                    key: "_getOffset",
                    value: function () {
                        var e = this
                            , t = this._config.offset;
                        return "string" == typeof t ? t.split(",").map((function (e) {
                            return Number.parseInt(e, 10)
                        }
                        )) : "function" == typeof t ? function (n) {
                            return t(n, e._element)
                        }
                            : t
                    }
                }, {
                    key: "_resolvePossibleFunction",
                    value: function (e) {
                        return mt(e, [this._element])
                    }
                }, {
                    key: "_getPopperConfig",
                    value: function (e) {
                        var t = this
                            , n = {
                                placement: e,
                                modifiers: [{
                                    name: "flip",
                                    options: {
                                        fallbackPlacements: this._config.fallbackPlacements
                                    }
                                }, {
                                    name: "offset",
                                    options: {
                                        offset: this._getOffset()
                                    }
                                }, {
                                    name: "preventOverflow",
                                    options: {
                                        boundary: this._config.boundary
                                    }
                                }, {
                                    name: "arrow",
                                    options: {
                                        element: ".".concat(this.constructor.NAME, "-arrow")
                                    }
                                }, {
                                    name: "preSetPlacement",
                                    enabled: !0,
                                    phase: "beforeMain",
                                    fn: function (e) {
                                        t._getTipElement().setAttribute("data-popper-placement", e.state.placement)
                                    }
                                }]
                            };
                        return qe(qe({}, n), mt(this._config.popperConfig, [n]))
                    }
                }, {
                    key: "_setListeners",
                    value: function () {
                        var e, t = this, n = $e(this._config.trigger.split(" "));
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var i = e.value;
                                if ("click" === i)
                                    It.on(this._element, this.constructor.eventName("click"), this._config.selector, (function (e) {
                                        t._initializeOnDelegatedTarget(e).toggle()
                                    }
                                    ));
                                else if ("manual" !== i) {
                                    var r = i === jr ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")
                                        , o = i === jr ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                                    It.on(this._element, r, this._config.selector, (function (e) {
                                        var n = t._initializeOnDelegatedTarget(e);
                                        n._activeTrigger["focusin" === e.type ? Pr : jr] = !0,
                                            n._enter()
                                    }
                                    )),
                                        It.on(this._element, o, this._config.selector, (function (e) {
                                            var n = t._initializeOnDelegatedTarget(e);
                                            n._activeTrigger["focusout" === e.type ? Pr : jr] = n._element.contains(e.relatedTarget),
                                                n._leave()
                                        }
                                        ))
                                }
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        this._hideModalHandler = function () {
                            t._element && t.hide()
                        }
                            ,
                            It.on(this._element.closest(Sr), Lr, this._hideModalHandler)
                    }
                }, {
                    key: "_fixTitle",
                    value: function () {
                        var e = this._element.getAttribute("title");
                        e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e),
                            this._element.setAttribute("data-bs-original-title", e),
                            this._element.removeAttribute("title"))
                    }
                }, {
                    key: "_enter",
                    value: function () {
                        var e = this;
                        this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0,
                            this._setTimeout((function () {
                                e._isHovered && e.show()
                            }
                            ), this._config.delay.show))
                    }
                }, {
                    key: "_leave",
                    value: function () {
                        var e = this;
                        this._isWithActiveTrigger() || (this._isHovered = !1,
                            this._setTimeout((function () {
                                e._isHovered || e.hide()
                            }
                            ), this._config.delay.hide))
                    }
                }, {
                    key: "_setTimeout",
                    value: function (e, t) {
                        clearTimeout(this._timeout),
                            this._timeout = setTimeout(e, t)
                    }
                }, {
                    key: "_isWithActiveTrigger",
                    value: function () {
                        return Object.values(this._activeTrigger).includes(!0)
                    }
                }, {
                    key: "_getConfig",
                    value: function (e) {
                        for (var t = Rt(this._element), n = 0, i = Object.keys(t); n < i.length; n++) {
                            var r = i[n];
                            Tr.has(r) && delete t[r]
                        }
                        return e = qe(qe({}, t), "object" === et(e) && e ? e : {}),
                            e = this._mergeConfigObj(e),
                            e = this._configAfterMerge(e),
                            this._typeCheckConfig(e),
                            e
                    }
                }, {
                    key: "_configAfterMerge",
                    value: function (e) {
                        return e.container = !1 === e.container ? document.body : at(e.container),
                            "number" == typeof e.delay && (e.delay = {
                                show: e.delay,
                                hide: e.delay
                            }),
                            "number" == typeof e.title && (e.title = e.title.toString()),
                            "number" == typeof e.content && (e.content = e.content.toString()),
                            e
                    }
                }, {
                    key: "_getDelegateConfig",
                    value: function () {
                        for (var e = {}, t = 0, n = Object.entries(this._config); t < n.length; t++) {
                            var i = Ye(n[t], 2)
                                , r = i[0]
                                , o = i[1];
                            this.constructor.Default[r] !== o && (e[r] = o)
                        }
                        return e.selector = !1,
                            e.trigger = "manual",
                            e
                    }
                }, {
                    key: "_disposePopper",
                    value: function () {
                        this._popper && (this._popper.destroy(),
                            this._popper = null),
                            this.tip && (this.tip.remove(),
                                this.tip = null)
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return Ir
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Nr
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return "tooltip"
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (e) {
                        return this.each((function () {
                            var t = i.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e])
                                    throw new TypeError('No method named "'.concat(e, '"'));
                                t[e]()
                            }
                        }
                        ))
                    }
                }]),
                    i
            }(qt);
        vt(Mr);
        var Fr = qe(qe({}, Mr.Default), {}, {
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click"
        })
            , Hr = qe(qe({}, Mr.DefaultType), {}, {
                content: "(null|string|element|function)"
            })
            , Br = function (e) {
                Me(n, e);
                var t = He(n);
                function n() {
                    return Ke(this, n),
                        t.apply(this, arguments)
                }
                return Ue(n, [{
                    key: "_isWithContent",
                    value: function () {
                        return this._getTitle() || this._getContent()
                    }
                }, {
                    key: "_getContentForTemplate",
                    value: function () {
                        var e;
                        return Ve(e = {}, ".popover-header", this._getTitle()),
                            Ve(e, ".popover-body", this._getContent()),
                            e
                    }
                }, {
                    key: "_getContent",
                    value: function () {
                        return this._resolvePossibleFunction(this._config.content)
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return Fr
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Hr
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return "popover"
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (e) {
                        return this.each((function () {
                            var t = n.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e])
                                    throw new TypeError('No method named "'.concat(e, '"'));
                                t[e]()
                            }
                        }
                        ))
                    }
                }]),
                    n
            }(Mr);
        vt(Br);
        var Rr = ".".concat("bs.scrollspy")
            , Wr = "activate".concat(Rr)
            , zr = "click".concat(Rr)
            , qr = "load".concat(Rr).concat(".data-api")
            , Vr = "active"
            , Kr = "[href]"
            , Qr = ".nav-link"
            , Ur = "".concat(Qr, ", ").concat(".nav-item", " > ").concat(Qr, ", ").concat(".list-group-item")
            , Xr = {
                offset: null,
                rootMargin: "0px 0px -25%",
                smoothScroll: !1,
                target: null,
                threshold: [.1, .5, 1]
            }
            , Yr = {
                offset: "(number|null)",
                rootMargin: "string",
                smoothScroll: "boolean",
                target: "element",
                threshold: "array"
            }
            , $r = function (e) {
                Me(n, e);
                var t = He(n);
                function n(e, i) {
                    var r;
                    return Ke(this, n),
                        (r = t.call(this, e, i))._targetLinks = new Map,
                        r._observableSections = new Map,
                        r._rootElement = "visible" === getComputedStyle(r._element).overflowY ? null : r._element,
                        r._activeTarget = null,
                        r._observer = null,
                        r._previousScrollData = {
                            visibleEntryTop: 0,
                            parentScrollTop: 0
                        },
                        r.refresh(),
                        r
                }
                return Ue(n, [{
                    key: "refresh",
                    value: function () {
                        this._initializeTargetsAndObservables(),
                            this._maybeEnableSmoothScroll(),
                            this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
                        var e, t = $e(this._observableSections.values());
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n = e.value;
                                this._observer.observe(n)
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }, {
                    key: "dispose",
                    value: function () {
                        this._observer.disconnect(),
                            Ne(We(n.prototype), "dispose", this).call(this)
                    }
                }, {
                    key: "_configAfterMerge",
                    value: function (e) {
                        return e.target = at(e.target) || document.body,
                            e.rootMargin = e.offset ? "".concat(e.offset, "px 0px -30%") : e.rootMargin,
                            "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map((function (e) {
                                return Number.parseFloat(e)
                            }
                            ))),
                            e
                    }
                }, {
                    key: "_maybeEnableSmoothScroll",
                    value: function () {
                        var e = this;
                        this._config.smoothScroll && (It.off(this._config.target, zr),
                            It.on(this._config.target, zr, Kr, (function (t) {
                                var n = e._observableSections.get(t.target.hash);
                                if (n) {
                                    t.preventDefault();
                                    var i = e._rootElement || window
                                        , r = n.offsetTop - e._element.offsetTop;
                                    if (i.scrollTo)
                                        return void i.scrollTo({
                                            top: r,
                                            behavior: "smooth"
                                        });
                                    i.scrollTop = r
                                }
                            }
                            )))
                    }
                }, {
                    key: "_getNewObserver",
                    value: function () {
                        var e = this
                            , t = {
                                root: this._rootElement,
                                threshold: this._config.threshold,
                                rootMargin: this._config.rootMargin
                            };
                        return new IntersectionObserver((function (t) {
                            return e._observerCallback(t)
                        }
                        ), t)
                    }
                }, {
                    key: "_observerCallback",
                    value: function (e) {
                        var t = this
                            , n = function (e) {
                                return t._targetLinks.get("#".concat(e.target.id))
                            }
                            , i = function (e) {
                                t._previousScrollData.visibleEntryTop = e.target.offsetTop,
                                    t._process(n(e))
                            }
                            , r = (this._rootElement || document.documentElement).scrollTop
                            , o = r >= this._previousScrollData.parentScrollTop;
                        this._previousScrollData.parentScrollTop = r;
                        var a, s = $e(e);
                        try {
                            for (s.s(); !(a = s.n()).done;) {
                                var c = a.value;
                                if (c.isIntersecting) {
                                    var l = c.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                                    if (o && l) {
                                        if (i(c),
                                            !r)
                                            return
                                    } else
                                        o || l || i(c)
                                } else
                                    this._activeTarget = null,
                                        this._clearActiveClass(n(c))
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                    }
                }, {
                    key: "_initializeTargetsAndObservables",
                    value: function () {
                        this._targetLinks = new Map,
                            this._observableSections = new Map;
                        var e, t = $e(Kt.find(Kr, this._config.target));
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n = e.value;
                                if (n.hash && !ct(n)) {
                                    var i = Kt.findOne(decodeURI(n.hash), this._element);
                                    st(i) && (this._targetLinks.set(decodeURI(n.hash), n),
                                        this._observableSections.set(n.hash, i))
                                }
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }, {
                    key: "_process",
                    value: function (e) {
                        this._activeTarget !== e && (this._clearActiveClass(this._config.target),
                            this._activeTarget = e,
                            e.classList.add(Vr),
                            this._activateParents(e),
                            It.trigger(this._element, Wr, {
                                relatedTarget: e
                            }))
                    }
                }, {
                    key: "_activateParents",
                    value: function (e) {
                        if (e.classList.contains("dropdown-item"))
                            Kt.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(Vr);
                        else {
                            var t, n = $e(Kt.parents(e, ".nav, .list-group"));
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var i, r = t.value, o = $e(Kt.prev(r, Ur));
                                    try {
                                        for (o.s(); !(i = o.n()).done;)
                                            i.value.classList.add(Vr)
                                    } catch (e) {
                                        o.e(e)
                                    } finally {
                                        o.f()
                                    }
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                        }
                    }
                }, {
                    key: "_clearActiveClass",
                    value: function (e) {
                        e.classList.remove(Vr);
                        var t, n = $e(Kt.find("".concat(Kr, ".").concat(Vr), e));
                        try {
                            for (n.s(); !(t = n.n()).done;)
                                t.value.classList.remove(Vr)
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return Xr
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Yr
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return "scrollspy"
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (e) {
                        return this.each((function () {
                            var t = n.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                                    throw new TypeError('No method named "'.concat(e, '"'));
                                t[e]()
                            }
                        }
                        ))
                    }
                }]),
                    n
            }(qt);
        It.on(window, qr, (function () {
            var e, t = $e(Kt.find('[data-bs-spy="scroll"]'));
            try {
                for (t.s(); !(e = t.n()).done;) {
                    var n = e.value;
                    $r.getOrCreateInstance(n)
                }
            } catch (e) {
                t.e(e)
            } finally {
                t.f()
            }
        }
        )),
            vt($r);
        var Gr = ".".concat("bs.tab")
            , Jr = "hide".concat(Gr)
            , Zr = "hidden".concat(Gr)
            , eo = "show".concat(Gr)
            , to = "shown".concat(Gr)
            , no = "click".concat(Gr)
            , io = "keydown".concat(Gr)
            , ro = "load".concat(Gr)
            , oo = "ArrowLeft"
            , ao = "ArrowRight"
            , so = "ArrowUp"
            , co = "ArrowDown"
            , lo = "Home"
            , uo = "End"
            , fo = "active"
            , ho = "fade"
            , po = "show"
            , vo = ".dropdown-toggle"
            , mo = ":not(".concat(vo, ")")
            , go = ".nav-link".concat(mo, ", .list-group-item").concat(mo, ', [role="tab"]').concat(mo)
            , _o = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
            , yo = "".concat(go, ", ").concat(_o)
            , bo = ".".concat(fo, '[data-bs-toggle="tab"], .').concat(fo, '[data-bs-toggle="pill"], .').concat(fo, '[data-bs-toggle="list"]')
            , wo = function (e) {
                Me(n, e);
                var t = He(n);
                function n(e) {
                    var i;
                    return Ke(this, n),
                        (i = t.call(this, e))._parent = i._element.closest('.list-group, .nav, [role="tablist"]'),
                        i._parent ? (i._setInitialAttributes(i._parent, i._getChildren()),
                            It.on(i._element, io, (function (e) {
                                return i._keydown(e)
                            }
                            )),
                            i) : Be(i)
                }
                return Ue(n, [{
                    key: "show",
                    value: function () {
                        var e = this._element;
                        if (!this._elemIsActive(e)) {
                            var t = this._getActiveElem()
                                , n = t ? It.trigger(t, Jr, {
                                    relatedTarget: e
                                }) : null;
                            It.trigger(e, eo, {
                                relatedTarget: t
                            }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e),
                                this._activate(e, t))
                        }
                    }
                }, {
                    key: "_activate",
                    value: function (e, t) {
                        var n = this;
                        e && (e.classList.add(fo),
                            this._activate(Kt.getElementFromSelector(e)),
                            this._queueCallback((function () {
                                "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"),
                                    e.setAttribute("aria-selected", !0),
                                    n._toggleDropDown(e, !0),
                                    It.trigger(e, to, {
                                        relatedTarget: t
                                    })) : e.classList.add(po)
                            }
                            ), e, e.classList.contains(ho)))
                    }
                }, {
                    key: "_deactivate",
                    value: function (e, t) {
                        var n = this;
                        e && (e.classList.remove(fo),
                            e.blur(),
                            this._deactivate(Kt.getElementFromSelector(e)),
                            this._queueCallback((function () {
                                "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1),
                                    e.setAttribute("tabindex", "-1"),
                                    n._toggleDropDown(e, !1),
                                    It.trigger(e, Zr, {
                                        relatedTarget: t
                                    })) : e.classList.remove(po)
                            }
                            ), e, e.classList.contains(ho)))
                    }
                }, {
                    key: "_keydown",
                    value: function (e) {
                        if ([oo, ao, so, co, lo, uo].includes(e.key)) {
                            e.stopPropagation(),
                                e.preventDefault();
                            var t, i = this._getChildren().filter((function (e) {
                                return !ct(e)
                            }
                            ));
                            if ([lo, uo].includes(e.key))
                                t = i[e.key === lo ? 0 : i.length - 1];
                            else {
                                var r = [ao, co].includes(e.key);
                                t = _t(i, e.target, r, !0)
                            }
                            t && (t.focus({
                                preventScroll: !0
                            }),
                                n.getOrCreateInstance(t).show())
                        }
                    }
                }, {
                    key: "_getChildren",
                    value: function () {
                        return Kt.find(yo, this._parent)
                    }
                }, {
                    key: "_getActiveElem",
                    value: function () {
                        var e = this;
                        return this._getChildren().find((function (t) {
                            return e._elemIsActive(t)
                        }
                        )) || null
                    }
                }, {
                    key: "_setInitialAttributes",
                    value: function (e, t) {
                        this._setAttributeIfNotExists(e, "role", "tablist");
                        var n, i = $e(t);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var r = n.value;
                                this._setInitialAttributesOnChild(r)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    }
                }, {
                    key: "_setInitialAttributesOnChild",
                    value: function (e) {
                        e = this._getInnerElement(e);
                        var t = this._elemIsActive(e)
                            , n = this._getOuterElement(e);
                        e.setAttribute("aria-selected", t),
                            n !== e && this._setAttributeIfNotExists(n, "role", "presentation"),
                            t || e.setAttribute("tabindex", "-1"),
                            this._setAttributeIfNotExists(e, "role", "tab"),
                            this._setInitialAttributesOnTargetPanel(e)
                    }
                }, {
                    key: "_setInitialAttributesOnTargetPanel",
                    value: function (e) {
                        var t = Kt.getElementFromSelector(e);
                        t && (this._setAttributeIfNotExists(t, "role", "tabpanel"),
                            e.id && this._setAttributeIfNotExists(t, "aria-labelledby", "".concat(e.id)))
                    }
                }, {
                    key: "_toggleDropDown",
                    value: function (e, t) {
                        var n = this._getOuterElement(e);
                        if (n.classList.contains("dropdown")) {
                            var i = function (e, i) {
                                var r = Kt.findOne(e, n);
                                r && r.classList.toggle(i, t)
                            };
                            i(vo, fo),
                                i(".dropdown-menu", po),
                                n.setAttribute("aria-expanded", t)
                        }
                    }
                }, {
                    key: "_setAttributeIfNotExists",
                    value: function (e, t, n) {
                        e.hasAttribute(t) || e.setAttribute(t, n)
                    }
                }, {
                    key: "_elemIsActive",
                    value: function (e) {
                        return e.classList.contains(fo)
                    }
                }, {
                    key: "_getInnerElement",
                    value: function (e) {
                        return e.matches(yo) ? e : Kt.findOne(yo, e)
                    }
                }, {
                    key: "_getOuterElement",
                    value: function (e) {
                        return e.closest(".nav-item, .list-group-item") || e
                    }
                }], [{
                    key: "NAME",
                    get: function () {
                        return "tab"
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (e) {
                        return this.each((function () {
                            var t = n.getOrCreateInstance(this);
                            if ("string" == typeof e) {
                                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                                    throw new TypeError('No method named "'.concat(e, '"'));
                                t[e]()
                            }
                        }
                        ))
                    }
                }]),
                    n
            }(qt);
        It.on(document, no, _o, (function (e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                ct(this) || wo.getOrCreateInstance(this).show()
        }
        )),
            It.on(window, ro, (function () {
                var e, t = $e(Kt.find(bo));
                try {
                    for (t.s(); !(e = t.n()).done;) {
                        var n = e.value;
                        wo.getOrCreateInstance(n)
                    }
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
            }
            )),
            vt(wo);
        var ko = ".".concat("bs.toast")
            , Eo = "mouseover".concat(ko)
            , Ao = "mouseout".concat(ko)
            , Oo = "focusin".concat(ko)
            , To = "focusout".concat(ko)
            , Co = "hide".concat(ko)
            , xo = "hidden".concat(ko)
            , So = "show".concat(ko)
            , Lo = "shown".concat(ko)
            , jo = "hide"
            , Po = "show"
            , Do = "showing"
            , Io = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            }
            , No = {
                animation: !0,
                autohide: !0,
                delay: 5e3
            }
            , Mo = function (e) {
                Me(n, e);
                var t = He(n);
                function n(e, i) {
                    var r;
                    return Ke(this, n),
                        (r = t.call(this, e, i))._timeout = null,
                        r._hasMouseInteraction = !1,
                        r._hasKeyboardInteraction = !1,
                        r._setListeners(),
                        r
                }
                return Ue(n, [{
                    key: "show",
                    value: function () {
                        var e = this;
                        It.trigger(this._element, So).defaultPrevented || (this._clearTimeout(),
                            this._config.animation && this._element.classList.add("fade"),
                            this._element.classList.remove(jo),
                            ft(this._element),
                            this._element.classList.add(Po, Do),
                            this._queueCallback((function () {
                                e._element.classList.remove(Do),
                                    It.trigger(e._element, Lo),
                                    e._maybeScheduleHide()
                            }
                            ), this._element, this._config.animation))
                    }
                }, {
                    key: "hide",
                    value: function () {
                        var e = this;
                        this.isShown() && !It.trigger(this._element, Co).defaultPrevented && (this._element.classList.add(Do),
                            this._queueCallback((function () {
                                e._element.classList.add(jo),
                                    e._element.classList.remove(Do, Po),
                                    It.trigger(e._element, xo)
                            }
                            ), this._element, this._config.animation))
                    }
                }, {
                    key: "dispose",
                    value: function () {
                        this._clearTimeout(),
                            this.isShown() && this._element.classList.remove(Po),
                            Ne(We(n.prototype), "dispose", this).call(this)
                    }
                }, {
                    key: "isShown",
                    value: function () {
                        return this._element.classList.contains(Po)
                    }
                }, {
                    key: "_maybeScheduleHide",
                    value: function () {
                        var e = this;
                        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((function () {
                            e.hide()
                        }
                        ), this._config.delay)))
                    }
                }, {
                    key: "_onInteraction",
                    value: function (e, t) {
                        switch (e.type) {
                            case "mouseover":
                            case "mouseout":
                                this._hasMouseInteraction = t;
                                break;
                            case "focusin":
                            case "focusout":
                                this._hasKeyboardInteraction = t
                        }
                        if (t)
                            this._clearTimeout();
                        else {
                            var n = e.relatedTarget;
                            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
                        }
                    }
                }, {
                    key: "_setListeners",
                    value: function () {
                        var e = this;
                        It.on(this._element, Eo, (function (t) {
                            return e._onInteraction(t, !0)
                        }
                        )),
                            It.on(this._element, Ao, (function (t) {
                                return e._onInteraction(t, !1)
                            }
                            )),
                            It.on(this._element, Oo, (function (t) {
                                return e._onInteraction(t, !0)
                            }
                            )),
                            It.on(this._element, To, (function (t) {
                                return e._onInteraction(t, !1)
                            }
                            ))
                    }
                }, {
                    key: "_clearTimeout",
                    value: function () {
                        clearTimeout(this._timeout),
                            this._timeout = null
                    }
                }], [{
                    key: "Default",
                    get: function () {
                        return No
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Io
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return "toast"
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (e) {
                        return this.each((function () {
                            var t = n.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e])
                                    throw new TypeError('No method named "'.concat(e, '"'));
                                t[e](this)
                            }
                        }
                        ))
                    }
                }]),
                    n
            }(qt);
        Qt(Mo),
            vt(Mo);
        try {
            window.bootstrap = i
        } catch (e) { }
        return t
    }()
}
))
!function (t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        var n = e();
        for (var i in n)
            ("object" == typeof exports ? exports : t)[i] = n[i]
    }
}(self, (function () {
    return function () {
        "use strict";
        var t = {
            d: function (e, n) {
                for (var i in n)
                    t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: n[i]
                    })
            },
            o: function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            },
            r: function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
            }
        }
            , e = {};
        function n(t) {
            return a(t) || function (t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(t) || r(t) || o()
        }
        function i(t, e) {
            return a(t) || function (t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var i, o, r, s, a = [], u = !0, l = !1;
                    try {
                        if (r = (n = n.call(t)).next,
                            0 === e) {
                            if (Object(n) !== n)
                                return;
                            u = !1
                        } else
                            for (; !(u = (i = r.call(n)).done) && (a.push(i.value),
                                a.length !== e); u = !0)
                                ;
                    } catch (t) {
                        l = !0,
                            o = t
                    } finally {
                        try {
                            if (!u && null != n.return && (s = n.return(),
                                Object(s) !== s))
                                return
                        } finally {
                            if (l)
                                throw o
                        }
                    }
                    return a
                }
            }(t, e) || r(t, e) || o()
        }
        function o() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function r(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return s(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0
            }
        }
        function s(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        function a(t) {
            if (Array.isArray(t))
                return t
        }
        t.r(e),
            t.d(e, {
                Helpers: function () {
                    return d
                }
            });
        var u = ["transitionend", "webkitTransitionEnd", "oTransitionEnd"]
            , l = ["transition", "MozTransition", "webkitTransition", "WebkitTransition", "OTransition"];
        function c(t) {
            throw new Error("Parameter required".concat(t ? ": `".concat(t, "`") : ""))
        }
        var d = {
            ROOT_EL: "undefined" != typeof window ? document.documentElement : null,
            LAYOUT_BREAKPOINT: 1200,
            RESIZE_DELAY: 200,
            menuPsScroll: null,
            mainMenu: null,
            _curStyle: null,
            _styleEl: null,
            _resizeTimeout: null,
            _resizeCallback: null,
            _transitionCallback: null,
            _transitionCallbackTimeout: null,
            _listeners: [],
            _initialized: !1,
            _autoUpdate: !1,
            _lastWindowHeight: 0,
            _scrollToActive: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                    , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500
                    , n = this.getLayoutMenu();
                if (n) {
                    var i = n.querySelector("li.menu-item.active:not(.open)");
                    if (i) {
                        var o = this.getLayoutMenu().querySelector(".menu-inner");
                        if ("string" == typeof i && (i = document.querySelector(i)),
                            "number" != typeof i && (i = i.getBoundingClientRect().top + o.scrollTop),
                            i < parseInt(2 * o.clientHeight / 3, 10))
                            return;
                        var r = o.scrollTop
                            , s = i - r - parseInt(o.clientHeight / 2, 10)
                            , a = +new Date;
                        !0 === t ? function t() {
                            var n, i, u, l = +new Date - a, c = (n = l,
                                i = r,
                                u = s,
                                (n /= e / 2) < 1 ? u / 2 * n * n + i : -u / 2 * ((n -= 1) * (n - 2) - 1) + i);
                            o.scrollTop = c,
                                l < e ? requestAnimationFrame(t) : o.scrollTop = s
                        }() : o.scrollTop = s
                    }
                }
            },
            _addClass: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ROOT_EL;
                e && void 0 !== e.length ? e.forEach((function (e) {
                    e && t.split(" ").forEach((function (t) {
                        return e.classList.add(t)
                    }
                    ))
                }
                )) : e && t.split(" ").forEach((function (t) {
                    return e.classList.add(t)
                }
                ))
            },
            _removeClass: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ROOT_EL;
                e && void 0 !== e.length ? e.forEach((function (e) {
                    e && t.split(" ").forEach((function (t) {
                        return e.classList.remove(t)
                    }
                    ))
                }
                )) : e && t.split(" ").forEach((function (t) {
                    return e.classList.remove(t)
                }
                ))
            },
            _toggleClass: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.ROOT_EL
                    , e = arguments.length > 1 ? arguments[1] : void 0
                    , n = arguments.length > 2 ? arguments[2] : void 0;
                t.classList.contains(e) ? t.classList.replace(e, n) : t.classList.replace(n, e)
            },
            _hasClass: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ROOT_EL
                    , n = !1;
                return t.split(" ").forEach((function (t) {
                    e.classList.contains(t) && (n = !0)
                }
                )),
                    n
            },
            _findParent: function (t, e) {
                if (t && "BODY" === t.tagName.toUpperCase() || "HTML" === t.tagName.toUpperCase())
                    return null;
                for (t = t.parentNode; t && "BODY" !== t.tagName.toUpperCase() && !t.classList.contains(e);)
                    t = t.parentNode;
                return t && "BODY" !== t.tagName.toUpperCase() ? t : null
            },
            _triggerWindowEvent: function (t) {
                var e;
                "undefined" != typeof window && (document.createEvent ? ("function" == typeof Event ? e = new Event(t) : (e = document.createEvent("Event")).initEvent(t, !1, !0),
                    window.dispatchEvent(e)) : window.fireEvent("on".concat(t), document.createEventObject()))
            },
            _triggerEvent: function (t) {
                this._triggerWindowEvent("layout".concat(t)),
                    this._listeners.filter((function (e) {
                        return e.event === t
                    }
                    )).forEach((function (t) {
                        return t.callback.call(null)
                    }
                    ))
            },
            _updateInlineStyle: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this._styleEl || (this._styleEl = document.createElement("style"),
                    this._styleEl.type = "text/css",
                    document.head.appendChild(this._styleEl));
                var n = "\n.layout-menu-fixed .layout-navbar-full .layout-menu,\n.layout-page {\n  padding-top: {navbarHeight}px !important;\n}\n.content-wrapper {\n  padding-bottom: {footerHeight}px !important;\n}".replace(/\{navbarHeight\}/gi, t).replace(/\{footerHeight\}/gi, e);
                this._curStyle !== n && (this._curStyle = n,
                    this._styleEl.textContent = n)
            },
            _removeInlineStyle: function () {
                this._styleEl && document.head.removeChild(this._styleEl),
                    this._styleEl = null,
                    this._curStyle = null
            },
            _redrawLayoutMenu: function () {
                var t = this.getLayoutMenu();
                if (t && t.querySelector(".menu")) {
                    var e = t.querySelector(".menu-inner")
                        , n = e.scrollTop
                        , i = document.documentElement.scrollTop;
                    return t.style.display = "none",
                        t.style.display = "",
                        e.scrollTop = n,
                        document.documentElement.scrollTop = i,
                        !0
                }
                return !1
            },
            _supportsTransitionEnd: function () {
                if (window.QUnit)
                    return !1;
                var t = document.body || document.documentElement;
                if (!t)
                    return !1;
                var e = !1;
                return l.forEach((function (n) {
                    void 0 !== t.style[n] && (e = !0)
                }
                )),
                    e
            },
            _getNavbarHeight: function () {
                var t = this
                    , e = this.getLayoutNavbar();
                if (!e)
                    return 0;
                if (!this.isSmallScreen())
                    return e.getBoundingClientRect().height;
                var n = e.cloneNode(!0);
                n.id = null,
                    n.style.visibility = "hidden",
                    n.style.position = "absolute",
                    Array.prototype.slice.call(n.querySelectorAll(".collapse.show")).forEach((function (e) {
                        return t._removeClass("show", e)
                    }
                    )),
                    e.parentNode.insertBefore(n, e);
                var i = n.getBoundingClientRect().height;
                return n.parentNode.removeChild(n),
                    i
            },
            _getFooterHeight: function () {
                var t = this.getLayoutFooter();
                return t ? t.getBoundingClientRect().height : 0
            },
            _getAnimationDuration: function (t) {
                var e = window.getComputedStyle(t).transitionDuration;
                return parseFloat(e) * (-1 !== e.indexOf("ms") ? 1 : 1e3)
            },
            _setMenuHoverState: function (t) {
                this[t ? "_addClass" : "_removeClass"]("layout-menu-hover")
            },
            _setCollapsed: function (t) {
                var e = this;
                this.isSmallScreen() && (t ? this._removeClass("layout-menu-expanded") : setTimeout((function () {
                    e._addClass("layout-menu-expanded")
                }
                ), this._redrawLayoutMenu() ? 5 : 0))
            },
            _bindLayoutAnimationEndEvent: function (t, e) {
                var n = this
                    , i = this.getMenu()
                    , o = i ? this._getAnimationDuration(i) + 50 : 0;
                if (!o)
                    return t.call(this),
                        void e.call(this);
                this._transitionCallback = function (t) {
                    t.target === i && (n._unbindLayoutAnimationEndEvent(),
                        e.call(n))
                }
                    ,
                    u.forEach((function (t) {
                        i.addEventListener(t, n._transitionCallback, !1)
                    }
                    )),
                    t.call(this),
                    this._transitionCallbackTimeout = setTimeout((function () {
                        n._transitionCallback.call(n, {
                            target: i
                        })
                    }
                    ), o)
            },
            _unbindLayoutAnimationEndEvent: function () {
                var t = this
                    , e = this.getMenu();
                this._transitionCallbackTimeout && (clearTimeout(this._transitionCallbackTimeout),
                    this._transitionCallbackTimeout = null),
                    e && this._transitionCallback && u.forEach((function (n) {
                        e.removeEventListener(n, t._transitionCallback, !1)
                    }
                    )),
                    this._transitionCallback && (this._transitionCallback = null)
            },
            _bindWindowResizeEvent: function () {
                var t = this;
                this._unbindWindowResizeEvent();
                var e = function () {
                    t._resizeTimeout && (clearTimeout(t._resizeTimeout),
                        t._resizeTimeout = null),
                        t._triggerEvent("resize")
                };
                this._resizeCallback = function () {
                    t._resizeTimeout && clearTimeout(t._resizeTimeout),
                        t._resizeTimeout = setTimeout(e, t.RESIZE_DELAY)
                }
                    ,
                    window.addEventListener("resize", this._resizeCallback, !1)
            },
            _unbindWindowResizeEvent: function () {
                this._resizeTimeout && (clearTimeout(this._resizeTimeout),
                    this._resizeTimeout = null),
                    this._resizeCallback && (window.removeEventListener("resize", this._resizeCallback, !1),
                        this._resizeCallback = null)
            },
            _bindMenuMouseEvents: function () {
                var t = this;
                if (!(this._menuMouseEnter && this._menuMouseLeave && this._windowTouchStart)) {
                    var e = this.getLayoutMenu();
                    if (!e)
                        return this._unbindMenuMouseEvents();
                    this._menuMouseEnter || (this._menuMouseEnter = function () {
                        return t.isSmallScreen() || t._hasClass("layout-transitioning"),
                            t._setMenuHoverState(!1)
                    }
                        ,
                        e.addEventListener("mouseenter", this._menuMouseEnter, !1),
                        e.addEventListener("touchstart", this._menuMouseEnter, !1)),
                        this._menuMouseLeave || (this._menuMouseLeave = function () {
                            t._setMenuHoverState(!1)
                        }
                            ,
                            e.addEventListener("mouseleave", this._menuMouseLeave, !1)),
                        this._windowTouchStart || (this._windowTouchStart = function (e) {
                            e && e.target && t._findParent(e.target, ".layout-menu") || t._setMenuHoverState(!1)
                        }
                            ,
                            window.addEventListener("touchstart", this._windowTouchStart, !0))
                }
            },
            _unbindMenuMouseEvents: function () {
                if (this._menuMouseEnter || this._menuMouseLeave || this._windowTouchStart) {
                    var t = this.getLayoutMenu();
                    this._menuMouseEnter && (t && (t.removeEventListener("mouseenter", this._menuMouseEnter, !1),
                        t.removeEventListener("touchstart", this._menuMouseEnter, !1)),
                        this._menuMouseEnter = null),
                        this._menuMouseLeave && (t && t.removeEventListener("mouseleave", this._menuMouseLeave, !1),
                            this._menuMouseLeave = null),
                        this._windowTouchStart && (t && window.addEventListener("touchstart", this._windowTouchStart, !0),
                            this._windowTouchStart = null),
                        this._setMenuHoverState(!1)
                }
            },
            scrollToActive: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this._scrollToActive(t)
            },
            setCollapsed: function () {
                var t = this
                    , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c("collapsed")
                    , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.getLayoutMenu() && (this._unbindLayoutAnimationEndEvent(),
                    n && this._supportsTransitionEnd() ? (this._addClass("layout-transitioning"),
                        e && this._setMenuHoverState(!1),
                        this._bindLayoutAnimationEndEvent((function () {
                            t.isSmallScreen && t._setCollapsed(e)
                        }
                        ), (function () {
                            t._removeClass("layout-transitioning"),
                                t._triggerWindowEvent("resize"),
                                t._triggerEvent("toggle"),
                                t._setMenuHoverState(!1)
                        }
                        ))) : (this._addClass("layout-no-transition"),
                            e && this._setMenuHoverState(!1),
                            this._setCollapsed(e),
                            setTimeout((function () {
                                t._removeClass("layout-no-transition"),
                                    t._triggerWindowEvent("resize"),
                                    t._triggerEvent("toggle"),
                                    t._setMenuHoverState(!1)
                            }
                            ), 1)))
            },
            toggleCollapsed: function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.setCollapsed(!this.isCollapsed(), t)
            },
            setPosition: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c("fixed")
                    , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c("offcanvas");
                this._removeClass("layout-menu-offcanvas layout-menu-fixed layout-menu-fixed-offcanvas"),
                    !t && e ? this._addClass("layout-menu-offcanvas") : t && !e ? (this._addClass("layout-menu-fixed"),
                        this._redrawLayoutMenu()) : t && e && (this._addClass("layout-menu-fixed-offcanvas"),
                            this._redrawLayoutMenu()),
                    this.update()
            },
            getLayoutMenu: function () {
                return document.querySelector(".layout-menu")
            },
            getMenu: function () {
                var t = this.getLayoutMenu();
                return t ? this._hasClass("menu", t) ? t : t.querySelector(".menu") : null
            },
            getLayoutNavbar: function () {
                return document.querySelector(".layout-navbar")
            },
            getLayoutFooter: function () {
                return document.querySelector(".content-footer")
            },
            update: function () {
                (this.getLayoutNavbar() && (!this.isSmallScreen() && this.isLayoutNavbarFull() && this.isFixed() || this.isNavbarFixed()) || this.getLayoutFooter() && this.isFooterFixed()) && this._updateInlineStyle(this._getNavbarHeight(), this._getFooterHeight()),
                    this._bindMenuMouseEvents()
            },
            setAutoUpdate: function () {
                var t = this
                    , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c("enable");
                e && !this._autoUpdate ? (this.on("resize.Helpers:autoUpdate", (function () {
                    return t.update()
                }
                )),
                    this._autoUpdate = !0) : !e && this._autoUpdate && (this.off("resize.Helpers:autoUpdate"),
                        this._autoUpdate = !1)
            },
            isRtl: function () {
                return "rtl" === document.querySelector("body").getAttribute("dir") || "rtl" === document.querySelector("html").getAttribute("dir")
            },
            isMobileDevice: function () {
                return void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile")
            },
            isSmallScreen: function () {
                return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < this.LAYOUT_BREAKPOINT
            },
            isLayoutNavbarFull: function () {
                return !!document.querySelector(".layout-wrapper.layout-navbar-full")
            },
            isCollapsed: function () {
                return this.isSmallScreen() ? !this._hasClass("layout-menu-expanded") : this._hasClass("layout-menu-collapsed")
            },
            isFixed: function () {
                return this._hasClass("layout-menu-fixed layout-menu-fixed-offcanvas")
            },
            isNavbarFixed: function () {
                return this._hasClass("layout-navbar-fixed") || !this.isSmallScreen() && this.isFixed() && this.isLayoutNavbarFull()
            },
            isFooterFixed: function () {
                return this._hasClass("layout-footer-fixed")
            },
            isLightStyle: function () {
                return document.documentElement.classList.contains("light-style")
            },
            on: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c("event")
                    , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c("callback")
                    , o = i(t.split("."), 1)[0]
                    , r = n(t.split(".")).slice(1);
                r = r.join(".") || null,
                    this._listeners.push({
                        event: o,
                        namespace: r,
                        callback: e
                    })
            },
            off: function () {
                var t = this
                    , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c("event")
                    , o = i(e.split("."), 1)[0]
                    , r = n(e.split(".")).slice(1);
                r = r.join(".") || null,
                    this._listeners.filter((function (t) {
                        return t.event === o && t.namespace === r
                    }
                    )).forEach((function (e) {
                        return t._listeners.splice(t._listeners.indexOf(e), 1)
                    }
                    ))
            },
            init: function () {
                var t = this;
                this._initialized || (this._initialized = !0,
                    this._updateInlineStyle(0),
                    this._bindWindowResizeEvent(),
                    this.off("init._Helpers"),
                    this.on("init._Helpers", (function () {
                        t.off("resize._Helpers:redrawMenu"),
                            t.on("resize._Helpers:redrawMenu", (function () {
                                t.isSmallScreen() && !t.isCollapsed() && t._redrawLayoutMenu()
                            }
                            )),
                            "number" == typeof document.documentMode && document.documentMode < 11 && (t.off("resize._Helpers:ie10RepaintBody"),
                                t.on("resize._Helpers:ie10RepaintBody", (function () {
                                    if (!t.isFixed()) {
                                        var e = document.documentElement.scrollTop;
                                        document.body.style.display = "none",
                                            document.body.style.display = "block",
                                            document.documentElement.scrollTop = e
                                    }
                                }
                                )))
                    }
                    )),
                    this._triggerEvent("init"))
            },
            destroy: function () {
                var t = this;
                this._initialized && (this._initialized = !1,
                    this._removeClass("layout-transitioning"),
                    this._removeInlineStyle(),
                    this._unbindLayoutAnimationEndEvent(),
                    this._unbindWindowResizeEvent(),
                    this._unbindMenuMouseEvents(),
                    this.setAutoUpdate(!1),
                    this.off("init._Helpers"),
                    this._listeners.filter((function (t) {
                        return "init" !== t.event
                    }
                    )).forEach((function (e) {
                        return t._listeners.splice(t._listeners.indexOf(e), 1)
                    }
                    )))
            },
            initPasswordToggle: function () {
                var t = document.querySelectorAll(".form-password-toggle i");
                null != t && t.forEach((function (t) {
                    t.addEventListener("click", (function (e) {
                        e.preventDefault();
                        var n = t.closest(".form-password-toggle")
                            , i = n.querySelector("i")
                            , o = n.querySelector("input");
                        "text" === o.getAttribute("type") ? (o.setAttribute("type", "password"),
                            i.classList.replace("bx-show", "bx-hide")) : "password" === o.getAttribute("type") && (o.setAttribute("type", "text"),
                                i.classList.replace("bx-hide", "bx-show"))
                    }
                    ))
                }
                ))
            },
            initSpeechToText: function () {
                var t = window.SpeechRecognition || window.webkitSpeechRecognition
                    , e = document.querySelectorAll(".speech-to-text");
                if (null != t && null != e) {
                    var n = new t;
                    document.querySelectorAll(".speech-to-text i").forEach((function (t) {
                        var e = !1;
                        t.addEventListener("click", (function () {
                            t.closest(".input-group").querySelector(".form-control").focus(),
                                n.onspeechstart = function () {
                                    e = !0
                                }
                                ,
                                !1 === e && n.start(),
                                n.onerror = function () {
                                    e = !1
                                }
                                ,
                                n.onresult = function (e) {
                                    t.closest(".input-group").querySelector(".form-control").value = e.results[0][0].transcript
                                }
                                ,
                                n.onspeechend = function () {
                                    e = !1,
                                        n.stop()
                                }
                        }
                        ))
                    }
                    ))
                }
            },
            ajaxCall: function (t) {
                return new Promise((function (e, n) {
                    var i = new XMLHttpRequest;
                    i.open("GET", t),
                        i.onload = function () {
                            return 200 === i.status ? e(i.response) : n(Error(i.statusText))
                        }
                        ,
                        i.onerror = function (t) {
                            return n(Error("Network Error: ".concat(t)))
                        }
                        ,
                        i.send()
                }
                ))
            },
            initSidebarToggle: function () {
                document.querySelectorAll('[data-bs-toggle="sidebar"]').forEach((function (t) {
                    t.addEventListener("click", (function () {
                        var e = t.getAttribute("data-target")
                            , n = t.getAttribute("data-overlay")
                            , i = document.querySelectorAll(".app-overlay");
                        document.querySelectorAll(e).forEach((function (t) {
                            t.classList.toggle("show"),
                                null != n && !1 !== n && void 0 !== i && (t.classList.contains("show") ? i[0].classList.add("show") : i[0].classList.remove("show"),
                                    i[0].addEventListener("click", (function (e) {
                                        e.currentTarget.classList.remove("show"),
                                            t.classList.remove("show")
                                    }
                                    )))
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        };
        return "undefined" != typeof window && (d.init(),
            d.isMobileDevice() && window.chrome && document.documentElement.classList.add("layout-menu-100vh"),
            "complete" === document.readyState ? d.update() : document.addEventListener("DOMContentLoaded", (function t() {
                d.update(),
                    document.removeEventListener("DOMContentLoaded", t)
            }
            ))),
            e
    }()
}
))
!function (e, n) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = n();
    else if ("function" == typeof define && define.amd)
        define([], n);
    else {
        var t = n();
        for (var i in t)
            ("object" == typeof exports ? exports : e)[i] = t[i]
    }
}(self, (function () {
    return function () {
        "use strict";
        var e = {
            d: function (n, t) {
                for (var i in t)
                    e.o(t, i) && !e.o(n, i) && Object.defineProperty(n, i, {
                        enumerable: !0,
                        get: t[i]
                    })
            },
            o: function (e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            },
            r: function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
        }
            , n = {};
        function t(e) {
            return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                t(e)
        }
        function i(e, n) {
            for (var i = 0; i < n.length; i++) {
                var o = n[i];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, (void 0,
                        s = function (e, n) {
                            if ("object" !== t(e) || null === e)
                                return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var o = i.call(e, "string");
                                if ("object" !== t(o))
                                    return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o.key),
                        "symbol" === t(s) ? s : String(s)), o)
            }
            var s
        }
        e.r(n),
            e.d(n, {
                Menu: function () {
                    return s
                }
            });
        var o = ["transitionend", "webkitTransitionEnd", "oTransitionEnd"]
            , s = function () {
                function e(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                        , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    !function (e, n) {
                        if (!(e instanceof n))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this._el = n,
                        this._animate = !1 !== t.animate,
                        this._accordion = !1 !== t.accordion,
                        this._closeChildren = Boolean(t.closeChildren),
                        this._onOpen = t.onOpen || function () { }
                        ,
                        this._onOpened = t.onOpened || function () { }
                        ,
                        this._onClose = t.onClose || function () { }
                        ,
                        this._onClosed = t.onClosed || function () { }
                        ,
                        this._psScroll = null,
                        this._topParent = null,
                        this._menuBgClass = null,
                        n.classList.add("menu"),
                        n.classList[this._animate ? "remove" : "add"]("menu-no-animation"),
                        n.classList.add("menu-vertical");
                    var o = i || window.PerfectScrollbar;
                    o ? (this._scrollbar = new o(n.querySelector(".menu-inner"), {
                        suppressScrollX: !0,
                        wheelPropagation: !e._hasClass("layout-menu-fixed layout-menu-fixed-offcanvas")
                    }),
                        window.Helpers.menuPsScroll = this._scrollbar) : n.querySelector(".menu-inner").classList.add("overflow-auto");
                    for (var s = n.classList, l = 0; l < s.length; l++)
                        s[l].startsWith("bg-") && (this._menuBgClass = s[l]);
                    n.setAttribute("data-bg-class", this._menuBgClass),
                        this._bindEvents(),
                        n.menuInstance = this
                }
                var n, t, s;
                return n = e,
                    t = [{
                        key: "_bindEvents",
                        value: function () {
                            var n = this;
                            this._evntElClick = function (t) {
                                if (t.target.closest("ul") && t.target.closest("ul").classList.contains("menu-inner")) {
                                    var i = e._findParent(t.target, "menu-item", !1);
                                    i && (n._topParent = i.childNodes[0])
                                }
                                var o = t.target.classList.contains("menu-toggle") ? t.target : e._findParent(t.target, "menu-toggle", !1);
                                o && (t.preventDefault(),
                                    "true" !== o.getAttribute("data-hover") && n.toggle(o))
                            }
                                ,
                                window.Helpers.isMobileDevice && this._el.addEventListener("click", this._evntElClick),
                                this._evntWindowResize = function () {
                                    n.update(),
                                        n._lastWidth !== window.innerWidth && (n._lastWidth = window.innerWidth,
                                            n.update());
                                    var e = document.querySelector("[data-template^='horizontal-menu']");
                                    n._horizontal || e || n.manageScroll()
                                }
                                ,
                                window.addEventListener("resize", this._evntWindowResize)
                        }
                    }, {
                        key: "_unbindEvents",
                        value: function () {
                            this._evntElClick && (this._el.removeEventListener("click", this._evntElClick),
                                this._evntElClick = null),
                                this._evntElMouseOver && (this._el.removeEventListener("mouseover", this._evntElMouseOver),
                                    this._evntElMouseOver = null),
                                this._evntElMouseOut && (this._el.removeEventListener("mouseout", this._evntElMouseOut),
                                    this._evntElMouseOut = null),
                                this._evntWindowResize && (window.removeEventListener("resize", this._evntWindowResize),
                                    this._evntWindowResize = null),
                                this._evntBodyClick && (document.body.removeEventListener("click", this._evntBodyClick),
                                    this._evntBodyClick = null),
                                this._evntInnerMousemove && (this._inner.removeEventListener("mousemove", this._evntInnerMousemove),
                                    this._evntInnerMousemove = null),
                                this._evntInnerMouseleave && (this._inner.removeEventListener("mouseleave", this._evntInnerMouseleave),
                                    this._evntInnerMouseleave = null)
                        }
                    }, {
                        key: "open",
                        value: function (n) {
                            var t = this
                                , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._closeChildren
                                , o = this._findUnopenedParent(e._getItem(n, !0), i);
                            if (o) {
                                var s = e._getLink(o, !0);
                                e._promisify(this._onOpen, this, o, s, e._findMenu(o)).then((function () {
                                    t._horizontal && e._isRoot(o) ? t._onOpened && t._onOpened(t, o, s, e._findMenu(o)) : t._animate && !t._horizontal ? (window.requestAnimationFrame((function () {
                                        return t._toggleAnimation(!0, o, !1)
                                    }
                                    )),
                                        t._accordion && t._closeOther(o, i)) : t._animate ? t._onOpened && t._onOpened(t, o, s, e._findMenu(o)) : (o.classList.add("open"),
                                            t._onOpened && t._onOpened(t, o, s, e._findMenu(o)),
                                            t._accordion && t._closeOther(o, i))
                                }
                                )).catch((function () { }
                                ))
                            }
                        }
                    }, {
                        key: "close",
                        value: function (n) {
                            var t = this
                                , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._closeChildren
                                , o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                                , s = e._getItem(n, !0)
                                , l = e._getLink(n, !0);
                            s.classList.contains("open") && !s.classList.contains("disabled") && e._promisify(this._onClose, this, s, l, e._findMenu(s), o).then((function () {
                                if (t._horizontal && e._isRoot(s))
                                    t._onClosed && t._onClosed(t, s, l, e._findMenu(s));
                                else if (t._animate && !t._horizontal)
                                    window.requestAnimationFrame((function () {
                                        return t._toggleAnimation(!1, s, i)
                                    }
                                    ));
                                else {
                                    if (s.classList.remove("open"),
                                        i)
                                        for (var n = s.querySelectorAll(".menu-item.open"), o = 0, r = n.length; o < r; o++)
                                            n[o].classList.remove("open");
                                    t._onClosed && t._onClosed(t, s, l, e._findMenu(s))
                                }
                            }
                            )).catch((function () { }
                            ))
                        }
                    }, {
                        key: "_closeOther",
                        value: function (n, t) {
                            for (var i = e._findChild(n.parentNode, ["menu-item", "open"]), o = 0, s = i.length; o < s; o++)
                                i[o] !== n && this.close(i[o], t)
                        }
                    }, {
                        key: "toggle",
                        value: function (n) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._closeChildren
                                , i = e._getItem(n, !0);
                            i.classList.contains("open") ? this.close(i, t) : this.open(i, t)
                        }
                    }, {
                        key: "_findUnopenedParent",
                        value: function (n, t) {
                            for (var i = [], o = null; n;)
                                n.classList.contains("disabled") ? (o = null,
                                    i = []) : (n.classList.contains("open") || (o = n),
                                        i.push(n)),
                                    n = e._findParent(n, "menu-item", !1);
                            if (!o)
                                return null;
                            if (1 === i.length)
                                return o;
                            for (var s = 0, l = (i = i.slice(0, i.indexOf(o))).length; s < l; s++)
                                if (i[s].classList.add("open"),
                                    this._accordion)
                                    for (var r = e._findChild(i[s].parentNode, ["menu-item", "open"]), a = 0, u = r.length; a < u; a++)
                                        if (r[a] !== i[s] && (r[a].classList.remove("open"),
                                            t))
                                            for (var c = r[a].querySelectorAll(".menu-item.open"), d = 0, h = c.length; d < h; d++)
                                                c[d].classList.remove("open");
                            return o
                        }
                    }, {
                        key: "_toggleAnimation",
                        value: function (n, t, i) {
                            var o = this
                                , s = e._getLink(t, !0)
                                , l = e._findMenu(t);
                            e._unbindAnimationEndEvent(t);
                            var r = Math.round(s.getBoundingClientRect().height);
                            t.style.overflow = "hidden";
                            var a = function () {
                                t.classList.remove("menu-item-animating"),
                                    t.classList.remove("menu-item-closing"),
                                    t.style.overflow = null,
                                    t.style.height = null,
                                    o.update()
                            };
                            n ? (t.style.height = "".concat(r, "px"),
                                t.classList.add("menu-item-animating"),
                                t.classList.add("open"),
                                e._bindAnimationEndEvent(t, (function () {
                                    a(),
                                        o._onOpened(o, t, s, l)
                                }
                                )),
                                setTimeout((function () {
                                    t.style.height = "".concat(r + Math.round(l.getBoundingClientRect().height), "px")
                                }
                                ), 50)) : (t.style.height = "".concat(r + Math.round(l.getBoundingClientRect().height), "px"),
                                    t.classList.add("menu-item-animating"),
                                    t.classList.add("menu-item-closing"),
                                    e._bindAnimationEndEvent(t, (function () {
                                        if (t.classList.remove("open"),
                                            a(),
                                            i)
                                            for (var e = t.querySelectorAll(".menu-item.open"), n = 0, r = e.length; n < r; n++)
                                                e[n].classList.remove("open");
                                        o._onClosed(o, t, s, l)
                                    }
                                    )),
                                    setTimeout((function () {
                                        t.style.height = "".concat(r, "px")
                                    }
                                    ), 50))
                        }
                    }, {
                        key: "_getItemOffset",
                        value: function (e) {
                            for (var n = this._inner.childNodes[0], t = 0; n !== e;)
                                n.tagName && (t += Math.round(n.getBoundingClientRect().width)),
                                    n = n.nextSibling;
                            return t
                        }
                    }, {
                        key: "_innerWidth",
                        get: function () {
                            for (var e = this._inner.childNodes, n = 0, t = 0, i = e.length; t < i; t++)
                                e[t].tagName && (n += Math.round(e[t].getBoundingClientRect().width));
                            return n
                        }
                    }, {
                        key: "_innerPosition",
                        get: function () {
                            return parseInt(this._inner.style[this._rtl ? "marginRight" : "marginLeft"] || "0px", 10)
                        },
                        set: function (e) {
                            return this._inner.style[this._rtl ? "marginRight" : "marginLeft"] = "".concat(e, "px"),
                                e
                        }
                    }, {
                        key: "closeAll",
                        value: function () {
                            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._closeChildren, n = this._el.querySelectorAll(".menu-inner > .menu-item.open"), t = 0, i = n.length; t < i; t++)
                                this.close(n[t], e)
                        }
                    }, {
                        key: "update",
                        value: function () {
                            this._scrollbar && this._scrollbar.update()
                        }
                    }, {
                        key: "manageScroll",
                        value: function () {
                            var e = window.PerfectScrollbar
                                , n = document.querySelector(".menu-inner");
                            if (window.innerWidth < window.Helpers.LAYOUT_BREAKPOINT)
                                null !== this._scrollbar && (this._scrollbar.destroy(),
                                    this._scrollbar = null),
                                    n.classList.add("overflow-auto");
                            else {
                                if (null === this._scrollbar) {
                                    var t = new e(document.querySelector(".menu-inner"), {
                                        suppressScrollX: !0,
                                        wheelPropagation: !1
                                    });
                                    this._scrollbar = t
                                }
                                n.classList.remove("overflow-auto")
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            if (this._el) {
                                this._unbindEvents();
                                for (var n = this._el.querySelectorAll(".menu-item"), t = 0, i = n.length; t < i; t++)
                                    e._unbindAnimationEndEvent(n[t]),
                                        n[t].classList.remove("menu-item-animating"),
                                        n[t].classList.remove("open"),
                                        n[t].style.overflow = null,
                                        n[t].style.height = null;
                                for (var o = this._el.querySelectorAll(".menu-menu"), s = 0, l = o.length; s < l; s++)
                                    o[s].style.marginRight = null,
                                        o[s].style.marginLeft = null;
                                this._el.classList.remove("menu-no-animation"),
                                    this._wrapper && (this._prevBtn.parentNode.removeChild(this._prevBtn),
                                        this._nextBtn.parentNode.removeChild(this._nextBtn),
                                        this._wrapper.parentNode.insertBefore(this._inner, this._wrapper),
                                        this._wrapper.parentNode.removeChild(this._wrapper),
                                        this._inner.style.marginLeft = null,
                                        this._inner.style.marginRight = null),
                                    this._el.menuInstance = null,
                                    delete this._el.menuInstance,
                                    this._el = null,
                                    this._animate = null,
                                    this._accordion = null,
                                    this._closeChildren = null,
                                    this._onOpen = null,
                                    this._onOpened = null,
                                    this._onClose = null,
                                    this._onClosed = null,
                                    this._scrollbar && (this._scrollbar.destroy(),
                                        this._scrollbar = null),
                                    this._inner = null,
                                    this._prevBtn = null,
                                    this._wrapper = null,
                                    this._nextBtn = null
                            }
                        }
                    }],
                    s = [{
                        key: "childOf",
                        value: function (e, n) {
                            if (e.parentNode) {
                                for (; (e = e.parentNode) && e !== n;)
                                    ;
                                return !!e
                            }
                            return !1
                        }
                    }, {
                        key: "_isRoot",
                        value: function (n) {
                            return !e._findParent(n, "menu-item", !1)
                        }
                    }, {
                        key: "_findParent",
                        value: function (e, n) {
                            var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            if ("BODY" === e.tagName.toUpperCase())
                                return null;
                            for (e = e.parentNode; "BODY" !== e.tagName.toUpperCase() && !e.classList.contains(n);)
                                e = e.parentNode;
                            if (!(e = "BODY" !== e.tagName.toUpperCase() ? e : null) && t)
                                throw new Error("Cannot find `.".concat(n, "` parent element"));
                            return e
                        }
                    }, {
                        key: "_findChild",
                        value: function (e, n) {
                            for (var t = e.childNodes, i = [], o = 0, s = t.length; o < s; o++)
                                if (t[o].classList) {
                                    for (var l = 0, r = 0; r < n.length; r++)
                                        t[o].classList.contains(n[r]) && (l += 1);
                                    n.length === l && i.push(t[o])
                                }
                            return i
                        }
                    }, {
                        key: "_findMenu",
                        value: function (e) {
                            for (var n = e.childNodes[0], t = null; n && !t;)
                                n.classList && n.classList.contains("menu-sub") && (t = n),
                                    n = n.nextSibling;
                            if (!t)
                                throw new Error("Cannot find `.menu-sub` element for the current `.menu-toggle`");
                            return t
                        }
                    }, {
                        key: "_hasClass",
                        value: function (e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.Helpers.ROOT_EL
                                , t = !1;
                            return e.split(" ").forEach((function (e) {
                                n.classList.contains(e) && (t = !0)
                            }
                            )),
                                t
                        }
                    }, {
                        key: "_getItem",
                        value: function (n, t) {
                            var i = null
                                , o = t ? "menu-toggle" : "menu-link";
                            if (n.classList.contains("menu-item") ? e._findChild(n, [o]).length && (i = n) : n.classList.contains(o) && (i = n.parentNode.classList.contains("menu-item") ? n.parentNode : null),
                                !i)
                                throw new Error("".concat(t ? "Toggable " : "", "`.menu-item` element not found."));
                            return i
                        }
                    }, {
                        key: "_getLink",
                        value: function (n, t) {
                            var i = []
                                , o = t ? "menu-toggle" : "menu-link";
                            if (n.classList.contains(o) ? i = [n] : n.classList.contains("menu-item") && (i = e._findChild(n, [o])),
                                !i.length)
                                throw new Error("`".concat(o, "` element not found."));
                            return i[0]
                        }
                    }, {
                        key: "_bindAnimationEndEvent",
                        value: function (n, t) {
                            var i = function (i) {
                                i.target === n && (e._unbindAnimationEndEvent(n),
                                    t(i))
                            }
                                , s = window.getComputedStyle(n).transitionDuration;
                            s = parseFloat(s) * (-1 !== s.indexOf("ms") ? 1 : 1e3),
                                n._menuAnimationEndEventCb = i,
                                o.forEach((function (e) {
                                    return n.addEventListener(e, n._menuAnimationEndEventCb, !1)
                                }
                                )),
                                n._menuAnimationEndEventTimeout = setTimeout((function () {
                                    i({
                                        target: n
                                    })
                                }
                                ), s + 50)
                        }
                    }, {
                        key: "_promisify",
                        value: function (e) {
                            for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                                t[i - 1] = arguments[i];
                            var o = e.apply(void 0, t);
                            return o instanceof Promise ? o : !1 === o ? Promise.reject() : Promise.resolve()
                        }
                    }, {
                        key: "_unbindAnimationEndEvent",
                        value: function (e) {
                            var n = e._menuAnimationEndEventCb;
                            e._menuAnimationEndEventTimeout && (clearTimeout(e._menuAnimationEndEventTimeout),
                                e._menuAnimationEndEventTimeout = null),
                                n && (o.forEach((function (t) {
                                    return e.removeEventListener(t, n, !1)
                                }
                                )),
                                    e._menuAnimationEndEventCb = null)
                        }
                    }, {
                        key: "setDisabled",
                        value: function (n, t) {
                            e._getItem(n, !1).classList[t ? "add" : "remove"]("disabled")
                        }
                    }, {
                        key: "isActive",
                        value: function (n) {
                            return e._getItem(n, !1).classList.contains("active")
                        }
                    }, {
                        key: "isOpened",
                        value: function (n) {
                            return e._getItem(n, !1).classList.contains("open")
                        }
                    }, {
                        key: "isDisabled",
                        value: function (n) {
                            return e._getItem(n, !1).classList.contains("disabled")
                        }
                    }],
                    t && i(n.prototype, t),
                    s && i(n, s),
                    Object.defineProperty(n, "prototype", {
                        writable: !1
                    }),
                    e
            }();
        return n
    }()
}
))
/*! For license information please see jquery.js.LICENSE.txt */
!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var n = t();
        for (var r in n)
            ("object" == typeof exports ? exports : e)[r] = n[r]
    }
}(self, (function () {
    return function () {
        var e = {
            9755: function (e, t) {
                var n;
                !function (t, n) {
                    "use strict";
                    "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                        if (!e.document)
                            throw new Error("jQuery requires a window with a document");
                        return n(e)
                    }
                        : n(t)
                }("undefined" != typeof window ? window : this, (function (r, i) {
                    "use strict";
                    var o = []
                        , a = Object.getPrototypeOf
                        , s = o.slice
                        , u = o.flat ? function (e) {
                            return o.flat.call(e)
                        }
                            : function (e) {
                                return o.concat.apply([], e)
                            }
                        , l = o.push
                        , c = o.indexOf
                        , f = {}
                        , p = f.toString
                        , d = f.hasOwnProperty
                        , h = d.toString
                        , g = h.call(Object)
                        , v = {}
                        , y = function (e) {
                            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                        }
                        , m = function (e) {
                            return null != e && e === e.window
                        }
                        , x = r.document
                        , b = {
                            type: !0,
                            src: !0,
                            nonce: !0,
                            noModule: !0
                        };
                    function w(e, t, n) {
                        var r, i, o = (n = n || x).createElement("script");
                        if (o.text = e,
                            t)
                            for (r in b)
                                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                        n.head.appendChild(o).parentNode.removeChild(o)
                    }
                    function T(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
                    }
                    var C = "3.7.1"
                        , S = /HTML$/i
                        , E = function (e, t) {
                            return new E.fn.init(e, t)
                        };
                    function k(e) {
                        var t = !!e && "length" in e && e.length
                            , n = T(e);
                        return !y(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                    }
                    function j(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    }
                    E.fn = E.prototype = {
                        jquery: C,
                        constructor: E,
                        length: 0,
                        toArray: function () {
                            return s.call(this)
                        },
                        get: function (e) {
                            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                        },
                        pushStack: function (e) {
                            var t = E.merge(this.constructor(), e);
                            return t.prevObject = this,
                                t
                        },
                        each: function (e) {
                            return E.each(this, e)
                        },
                        map: function (e) {
                            return this.pushStack(E.map(this, (function (t, n) {
                                return e.call(t, n, t)
                            }
                            )))
                        },
                        slice: function () {
                            return this.pushStack(s.apply(this, arguments))
                        },
                        first: function () {
                            return this.eq(0)
                        },
                        last: function () {
                            return this.eq(-1)
                        },
                        even: function () {
                            return this.pushStack(E.grep(this, (function (e, t) {
                                return (t + 1) % 2
                            }
                            )))
                        },
                        odd: function () {
                            return this.pushStack(E.grep(this, (function (e, t) {
                                return t % 2
                            }
                            )))
                        },
                        eq: function (e) {
                            var t = this.length
                                , n = +e + (e < 0 ? t : 0);
                            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                        },
                        end: function () {
                            return this.prevObject || this.constructor()
                        },
                        push: l,
                        sort: o.sort,
                        splice: o.splice
                    },
                        E.extend = E.fn.extend = function () {
                            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
                            for ("boolean" == typeof a && (l = a,
                                a = arguments[s] || {},
                                s++),
                                "object" == typeof a || y(a) || (a = {}),
                                s === u && (a = this,
                                    s--); s < u; s++)
                                if (null != (e = arguments[s]))
                                    for (t in e)
                                        r = e[t],
                                            "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                                                o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {},
                                                i = !1,
                                                a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                            return a
                        }
                        ,
                        E.extend({
                            expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
                            isReady: !0,
                            error: function (e) {
                                throw new Error(e)
                            },
                            noop: function () { },
                            isPlainObject: function (e) {
                                var t, n;
                                return !(!e || "[object Object]" !== p.call(e) || (t = a(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || h.call(n) !== g))
                            },
                            isEmptyObject: function (e) {
                                var t;
                                for (t in e)
                                    return !1;
                                return !0
                            },
                            globalEval: function (e, t, n) {
                                w(e, {
                                    nonce: t && t.nonce
                                }, n)
                            },
                            each: function (e, t) {
                                var n, r = 0;
                                if (k(e))
                                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                                        ;
                                else
                                    for (r in e)
                                        if (!1 === t.call(e[r], r, e[r]))
                                            break;
                                return e
                            },
                            text: function (e) {
                                var t, n = "", r = 0, i = e.nodeType;
                                if (!i)
                                    for (; t = e[r++];)
                                        n += E.text(t);
                                return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
                            },
                            makeArray: function (e, t) {
                                var n = t || [];
                                return null != e && (k(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
                                    n
                            },
                            inArray: function (e, t, n) {
                                return null == t ? -1 : c.call(t, e, n)
                            },
                            isXMLDoc: function (e) {
                                var t = e && e.namespaceURI
                                    , n = e && (e.ownerDocument || e).documentElement;
                                return !S.test(t || n && n.nodeName || "HTML")
                            },
                            merge: function (e, t) {
                                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                                    e[i++] = t[r];
                                return e.length = i,
                                    e
                            },
                            grep: function (e, t, n) {
                                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                                    !t(e[i], i) !== a && r.push(e[i]);
                                return r
                            },
                            map: function (e, t, n) {
                                var r, i, o = 0, a = [];
                                if (k(e))
                                    for (r = e.length; o < r; o++)
                                        null != (i = t(e[o], o, n)) && a.push(i);
                                else
                                    for (o in e)
                                        null != (i = t(e[o], o, n)) && a.push(i);
                                return u(a)
                            },
                            guid: 1,
                            support: v
                        }),
                        "function" == typeof Symbol && (E.fn[Symbol.iterator] = o[Symbol.iterator]),
                        E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
                            f["[object " + t + "]"] = t.toLowerCase()
                        }
                        ));
                    var A = o.pop
                        , D = o.sort
                        , N = o.splice
                        , q = "[\\x20\\t\\r\\n\\f]"
                        , L = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g");
                    E.contains = function (e, t) {
                        var n = t && t.parentNode;
                        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                    }
                        ;
                    var H = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                    function O(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }
                    E.escapeSelector = function (e) {
                        return (e + "").replace(H, O)
                    }
                        ;
                    var P = x
                        , M = l;
                    !function () {
                        var e, t, n, i, a, u, l, f, p, h, g = M, y = E.expando, m = 0, x = 0, b = ee(), w = ee(), T = ee(), C = ee(), S = function (e, t) {
                            return e === t && (a = !0),
                                0
                        }, k = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", H = "(?:\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", O = "\\[" + q + "*(" + H + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + q + "*\\]", R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", I = new RegExp(q + "+", "g"), W = new RegExp("^" + q + "*," + q + "*"), F = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"), $ = new RegExp(q + "|>"), _ = new RegExp(R), B = new RegExp("^" + H + "$"), z = {
                            ID: new RegExp("^#(" + H + ")"),
                            CLASS: new RegExp("^\\.(" + H + ")"),
                            TAG: new RegExp("^(" + H + "|[*])"),
                            ATTR: new RegExp("^" + O),
                            PSEUDO: new RegExp("^" + R),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + k + ")$", "i"),
                            needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
                        }, X = /^(?:input|select|textarea|button)$/i, U = /^h\d$/i, V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /[+~]/, Y = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"), Q = function (e, t) {
                            var n = "0x" + e.slice(1) - 65536;
                            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                        }, J = function () {
                            ue()
                        }, K = pe((function (e) {
                            return !0 === e.disabled && j(e, "fieldset")
                        }
                        ), {
                            dir: "parentNode",
                            next: "legend"
                        });
                        try {
                            g.apply(o = s.call(P.childNodes), P.childNodes),
                                o[P.childNodes.length].nodeType
                        } catch (e) {
                            g = {
                                apply: function (e, t) {
                                    M.apply(e, s.call(t))
                                },
                                call: function (e) {
                                    M.apply(e, s.call(arguments, 1))
                                }
                            }
                        }
                        function Z(e, t, n, r) {
                            var i, o, a, s, l, c, d, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
                            if (n = n || [],
                                "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                                return n;
                            if (!r && (ue(t),
                                t = t || u,
                                f)) {
                                if (11 !== m && (l = V.exec(e)))
                                    if (i = l[1]) {
                                        if (9 === m) {
                                            if (!(a = t.getElementById(i)))
                                                return n;
                                            if (a.id === i)
                                                return g.call(n, a),
                                                    n
                                        } else if (h && (a = h.getElementById(i)) && Z.contains(t, a) && a.id === i)
                                            return g.call(n, a),
                                                n
                                    } else {
                                        if (l[2])
                                            return g.apply(n, t.getElementsByTagName(e)),
                                                n;
                                        if ((i = l[3]) && t.getElementsByClassName)
                                            return g.apply(n, t.getElementsByClassName(i)),
                                                n
                                    }
                                if (!(C[e + " "] || p && p.test(e))) {
                                    if (d = e,
                                        h = t,
                                        1 === m && ($.test(e) || F.test(e))) {
                                        for ((h = G.test(e) && se(t.parentNode) || t) == t && v.scope || ((s = t.getAttribute("id")) ? s = E.escapeSelector(s) : t.setAttribute("id", s = y)),
                                            o = (c = ce(e)).length; o--;)
                                            c[o] = (s ? "#" + s : ":scope") + " " + fe(c[o]);
                                        d = c.join(",")
                                    }
                                    try {
                                        return g.apply(n, h.querySelectorAll(d)),
                                            n
                                    } catch (t) {
                                        C(e, !0)
                                    } finally {
                                        s === y && t.removeAttribute("id")
                                    }
                                }
                            }
                            return me(e.replace(L, "$1"), t, n, r)
                        }
                        function ee() {
                            var e = [];
                            return function n(r, i) {
                                return e.push(r + " ") > t.cacheLength && delete n[e.shift()],
                                    n[r + " "] = i
                            }
                        }
                        function te(e) {
                            return e[y] = !0,
                                e
                        }
                        function ne(e) {
                            var t = u.createElement("fieldset");
                            try {
                                return !!e(t)
                            } catch (e) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t),
                                    t = null
                            }
                        }
                        function re(e) {
                            return function (t) {
                                return j(t, "input") && t.type === e
                            }
                        }
                        function ie(e) {
                            return function (t) {
                                return (j(t, "input") || j(t, "button")) && t.type === e
                            }
                        }
                        function oe(e) {
                            return function (t) {
                                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && K(t) === e : t.disabled === e : "label" in t && t.disabled === e
                            }
                        }
                        function ae(e) {
                            return te((function (t) {
                                return t = +t,
                                    te((function (n, r) {
                                        for (var i, o = e([], n.length, t), a = o.length; a--;)
                                            n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                                    }
                                    ))
                            }
                            ))
                        }
                        function se(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }
                        function ue(e) {
                            var n, r = e ? e.ownerDocument || e : P;
                            return r != u && 9 === r.nodeType && r.documentElement ? (l = (u = r).documentElement,
                                f = !E.isXMLDoc(u),
                                h = l.matches || l.webkitMatchesSelector || l.msMatchesSelector,
                                l.msMatchesSelector && P != u && (n = u.defaultView) && n.top !== n && n.addEventListener("unload", J),
                                v.getById = ne((function (e) {
                                    return l.appendChild(e).id = E.expando,
                                        !u.getElementsByName || !u.getElementsByName(E.expando).length
                                }
                                )),
                                v.disconnectedMatch = ne((function (e) {
                                    return h.call(e, "*")
                                }
                                )),
                                v.scope = ne((function () {
                                    return u.querySelectorAll(":scope")
                                }
                                )),
                                v.cssHas = ne((function () {
                                    try {
                                        return u.querySelector(":has(*,:jqfake)"),
                                            !1
                                    } catch (e) {
                                        return !0
                                    }
                                }
                                )),
                                v.getById ? (t.filter.ID = function (e) {
                                    var t = e.replace(Y, Q);
                                    return function (e) {
                                        return e.getAttribute("id") === t
                                    }
                                }
                                    ,
                                    t.find.ID = function (e, t) {
                                        if (void 0 !== t.getElementById && f) {
                                            var n = t.getElementById(e);
                                            return n ? [n] : []
                                        }
                                    }
                                ) : (t.filter.ID = function (e) {
                                    var t = e.replace(Y, Q);
                                    return function (e) {
                                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return n && n.value === t
                                    }
                                }
                                    ,
                                    t.find.ID = function (e, t) {
                                        if (void 0 !== t.getElementById && f) {
                                            var n, r, i, o = t.getElementById(e);
                                            if (o) {
                                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                                    return [o];
                                                for (i = t.getElementsByName(e),
                                                    r = 0; o = i[r++];)
                                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                                        return [o]
                                            }
                                            return []
                                        }
                                    }
                                ),
                                t.find.TAG = function (e, t) {
                                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
                                }
                                ,
                                t.find.CLASS = function (e, t) {
                                    if (void 0 !== t.getElementsByClassName && f)
                                        return t.getElementsByClassName(e)
                                }
                                ,
                                p = [],
                                ne((function (e) {
                                    var t;
                                    l.appendChild(e).innerHTML = "<a id='" + y + "' href='' disabled='disabled'></a><select id='" + y + "-\r\\' disabled='disabled'><option selected=''></option></select>",
                                        e.querySelectorAll("[selected]").length || p.push("\\[" + q + "*(?:value|" + k + ")"),
                                        e.querySelectorAll("[id~=" + y + "-]").length || p.push("~="),
                                        e.querySelectorAll("a#" + y + "+*").length || p.push(".#.+[+~]"),
                                        e.querySelectorAll(":checked").length || p.push(":checked"),
                                        (t = u.createElement("input")).setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        l.appendChild(e).disabled = !0,
                                        2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"),
                                        (t = u.createElement("input")).setAttribute("name", ""),
                                        e.appendChild(t),
                                        e.querySelectorAll("[name='']").length || p.push("\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")")
                                }
                                )),
                                v.cssHas || p.push(":has"),
                                p = p.length && new RegExp(p.join("|")),
                                S = function (e, t) {
                                    if (e === t)
                                        return a = !0,
                                            0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === u || e.ownerDocument == P && Z.contains(P, e) ? -1 : t === u || t.ownerDocument == P && Z.contains(P, t) ? 1 : i ? c.call(i, e) - c.call(i, t) : 0 : 4 & n ? -1 : 1)
                                }
                                ,
                                u) : u
                        }
                        for (e in Z.matches = function (e, t) {
                            return Z(e, null, null, t)
                        }
                            ,
                            Z.matchesSelector = function (e, t) {
                                if (ue(e),
                                    f && !C[t + " "] && (!p || !p.test(t)))
                                    try {
                                        var n = h.call(e, t);
                                        if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                            return n
                                    } catch (e) {
                                        C(t, !0)
                                    }
                                return Z(t, u, null, [e]).length > 0
                            }
                            ,
                            Z.contains = function (e, t) {
                                return (e.ownerDocument || e) != u && ue(e),
                                    E.contains(e, t)
                            }
                            ,
                            Z.attr = function (e, n) {
                                (e.ownerDocument || e) != u && ue(e);
                                var r = t.attrHandle[n.toLowerCase()]
                                    , i = r && d.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !f) : void 0;
                                return void 0 !== i ? i : e.getAttribute(n)
                            }
                            ,
                            Z.error = function (e) {
                                throw new Error("Syntax error, unrecognized expression: " + e)
                            }
                            ,
                            E.uniqueSort = function (e) {
                                var t, n = [], r = 0, o = 0;
                                if (a = !v.sortStable,
                                    i = !v.sortStable && s.call(e, 0),
                                    D.call(e, S),
                                    a) {
                                    for (; t = e[o++];)
                                        t === e[o] && (r = n.push(o));
                                    for (; r--;)
                                        N.call(e, n[r], 1)
                                }
                                return i = null,
                                    e
                            }
                            ,
                            E.fn.uniqueSort = function () {
                                return this.pushStack(E.uniqueSort(s.apply(this)))
                            }
                            ,
                            t = E.expr = {
                                cacheLength: 50,
                                createPseudo: te,
                                match: z,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function (e) {
                                        return e[1] = e[1].replace(Y, Q),
                                            e[3] = (e[3] || e[4] || e[5] || "").replace(Y, Q),
                                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                            e.slice(0, 4)
                                    },
                                    CHILD: function (e) {
                                        return e[1] = e[1].toLowerCase(),
                                            "nth" === e[1].slice(0, 3) ? (e[3] || Z.error(e[0]),
                                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Z.error(e[0]),
                                            e
                                    },
                                    PSEUDO: function (e) {
                                        var t, n = !e[6] && e[2];
                                        return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && _.test(n) && (t = ce(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                            e[2] = n.slice(0, t)),
                                            e.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function (e) {
                                        var t = e.replace(Y, Q).toLowerCase();
                                        return "*" === e ? function () {
                                            return !0
                                        }
                                            : function (e) {
                                                return j(e, t)
                                            }
                                    },
                                    CLASS: function (e) {
                                        var t = b[e + " "];
                                        return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && b(e, (function (e) {
                                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                        }
                                        ))
                                    },
                                    ATTR: function (e, t, n) {
                                        return function (r) {
                                            var i = Z.attr(r, e);
                                            return null == i ? "!=" === t : !t || (i += "",
                                                "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                        }
                                    },
                                    CHILD: function (e, t, n, r, i) {
                                        var o = "nth" !== e.slice(0, 3)
                                            , a = "last" !== e.slice(-4)
                                            , s = "of-type" === t;
                                        return 1 === r && 0 === i ? function (e) {
                                            return !!e.parentNode
                                        }
                                            : function (t, n, u) {
                                                var l, c, f, p, d, h = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), x = !u && !s, b = !1;
                                                if (g) {
                                                    if (o) {
                                                        for (; h;) {
                                                            for (f = t; f = f[h];)
                                                                if (s ? j(f, v) : 1 === f.nodeType)
                                                                    return !1;
                                                            d = h = "only" === e && !d && "nextSibling"
                                                        }
                                                        return !0
                                                    }
                                                    if (d = [a ? g.firstChild : g.lastChild],
                                                        a && x) {
                                                        for (b = (p = (l = (c = g[y] || (g[y] = {}))[e] || [])[0] === m && l[1]) && l[2],
                                                            f = p && g.childNodes[p]; f = ++p && f && f[h] || (b = p = 0) || d.pop();)
                                                            if (1 === f.nodeType && ++b && f === t) {
                                                                c[e] = [m, p, b];
                                                                break
                                                            }
                                                    } else if (x && (b = p = (l = (c = t[y] || (t[y] = {}))[e] || [])[0] === m && l[1]),
                                                        !1 === b)
                                                        for (; (f = ++p && f && f[h] || (b = p = 0) || d.pop()) && (!(s ? j(f, v) : 1 === f.nodeType) || !++b || (x && ((c = f[y] || (f[y] = {}))[e] = [m, b]),
                                                            f !== t));)
                                                            ;
                                                    return (b -= i) === r || b % r == 0 && b / r >= 0
                                                }
                                            }
                                    },
                                    PSEUDO: function (e, n) {
                                        var r, i = t.pseudos[e] || t.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
                                        return i[y] ? i(n) : i.length > 1 ? (r = [e, e, "", n],
                                            t.setFilters.hasOwnProperty(e.toLowerCase()) ? te((function (e, t) {
                                                for (var r, o = i(e, n), a = o.length; a--;)
                                                    e[r = c.call(e, o[a])] = !(t[r] = o[a])
                                            }
                                            )) : function (e) {
                                                return i(e, 0, r)
                                            }
                                        ) : i
                                    }
                                },
                                pseudos: {
                                    not: te((function (e) {
                                        var t = []
                                            , n = []
                                            , r = ye(e.replace(L, "$1"));
                                        return r[y] ? te((function (e, t, n, i) {
                                            for (var o, a = r(e, null, i, []), s = e.length; s--;)
                                                (o = a[s]) && (e[s] = !(t[s] = o))
                                        }
                                        )) : function (e, i, o) {
                                            return t[0] = e,
                                                r(t, null, o, n),
                                                t[0] = null,
                                                !n.pop()
                                        }
                                    }
                                    )),
                                    has: te((function (e) {
                                        return function (t) {
                                            return Z(e, t).length > 0
                                        }
                                    }
                                    )),
                                    contains: te((function (e) {
                                        return e = e.replace(Y, Q),
                                            function (t) {
                                                return (t.textContent || E.text(t)).indexOf(e) > -1
                                            }
                                    }
                                    )),
                                    lang: te((function (e) {
                                        return B.test(e || "") || Z.error("unsupported lang: " + e),
                                            e = e.replace(Y, Q).toLowerCase(),
                                            function (t) {
                                                var n;
                                                do {
                                                    if (n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                                return !1
                                            }
                                    }
                                    )),
                                    target: function (e) {
                                        var t = r.location && r.location.hash;
                                        return t && t.slice(1) === e.id
                                    },
                                    root: function (e) {
                                        return e === l
                                    },
                                    focus: function (e) {
                                        return e === function () {
                                            try {
                                                return u.activeElement
                                            } catch (e) { }
                                        }() && u.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                                    },
                                    enabled: oe(!1),
                                    disabled: oe(!0),
                                    checked: function (e) {
                                        return j(e, "input") && !!e.checked || j(e, "option") && !!e.selected
                                    },
                                    selected: function (e) {
                                        return e.parentNode && e.parentNode.selectedIndex,
                                            !0 === e.selected
                                    },
                                    empty: function (e) {
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6)
                                                return !1;
                                        return !0
                                    },
                                    parent: function (e) {
                                        return !t.pseudos.empty(e)
                                    },
                                    header: function (e) {
                                        return U.test(e.nodeName)
                                    },
                                    input: function (e) {
                                        return X.test(e.nodeName)
                                    },
                                    button: function (e) {
                                        return j(e, "input") && "button" === e.type || j(e, "button")
                                    },
                                    text: function (e) {
                                        var t;
                                        return j(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                    },
                                    first: ae((function () {
                                        return [0]
                                    }
                                    )),
                                    last: ae((function (e, t) {
                                        return [t - 1]
                                    }
                                    )),
                                    eq: ae((function (e, t, n) {
                                        return [n < 0 ? n + t : n]
                                    }
                                    )),
                                    even: ae((function (e, t) {
                                        for (var n = 0; n < t; n += 2)
                                            e.push(n);
                                        return e
                                    }
                                    )),
                                    odd: ae((function (e, t) {
                                        for (var n = 1; n < t; n += 2)
                                            e.push(n);
                                        return e
                                    }
                                    )),
                                    lt: ae((function (e, t, n) {
                                        var r;
                                        for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0;)
                                            e.push(r);
                                        return e
                                    }
                                    )),
                                    gt: ae((function (e, t, n) {
                                        for (var r = n < 0 ? n + t : n; ++r < t;)
                                            e.push(r);
                                        return e
                                    }
                                    ))
                                }
                            },
                            t.pseudos.nth = t.pseudos.eq,
                        {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        })
                            t.pseudos[e] = re(e);
                        for (e in {
                            submit: !0,
                            reset: !0
                        })
                            t.pseudos[e] = ie(e);
                        function le() { }
                        function ce(e, n) {
                            var r, i, o, a, s, u, l, c = w[e + " "];
                            if (c)
                                return n ? 0 : c.slice(0);
                            for (s = e,
                                u = [],
                                l = t.preFilter; s;) {
                                for (a in r && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                                    u.push(o = [])),
                                    r = !1,
                                    (i = F.exec(s)) && (r = i.shift(),
                                        o.push({
                                            value: r,
                                            type: i[0].replace(L, " ")
                                        }),
                                        s = s.slice(r.length)),
                                    t.filter)
                                    !(i = z[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(),
                                        o.push({
                                            value: r,
                                            type: a,
                                            matches: i
                                        }),
                                        s = s.slice(r.length));
                                if (!r)
                                    break
                            }
                            return n ? s.length : s ? Z.error(e) : w(e, u).slice(0)
                        }
                        function fe(e) {
                            for (var t = 0, n = e.length, r = ""; t < n; t++)
                                r += e[t].value;
                            return r
                        }
                        function pe(e, t, n) {
                            var r = t.dir
                                , i = t.next
                                , o = i || r
                                , a = n && "parentNode" === o
                                , s = x++;
                            return t.first ? function (t, n, i) {
                                for (; t = t[r];)
                                    if (1 === t.nodeType || a)
                                        return e(t, n, i);
                                return !1
                            }
                                : function (t, n, u) {
                                    var l, c, f = [m, s];
                                    if (u) {
                                        for (; t = t[r];)
                                            if ((1 === t.nodeType || a) && e(t, n, u))
                                                return !0
                                    } else
                                        for (; t = t[r];)
                                            if (1 === t.nodeType || a)
                                                if (c = t[y] || (t[y] = {}),
                                                    i && j(t, i))
                                                    t = t[r] || t;
                                                else {
                                                    if ((l = c[o]) && l[0] === m && l[1] === s)
                                                        return f[2] = l[2];
                                                    if (c[o] = f,
                                                        f[2] = e(t, n, u))
                                                        return !0
                                                }
                                    return !1
                                }
                        }
                        function de(e) {
                            return e.length > 1 ? function (t, n, r) {
                                for (var i = e.length; i--;)
                                    if (!e[i](t, n, r))
                                        return !1;
                                return !0
                            }
                                : e[0]
                        }
                        function he(e, t, n, r, i) {
                            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                                    l && t.push(s)));
                            return a
                        }
                        function ge(e, t, n, r, i, o) {
                            return r && !r[y] && (r = ge(r)),
                                i && !i[y] && (i = ge(i, o)),
                                te((function (o, a, s, u) {
                                    var l, f, p, d, h = [], v = [], y = a.length, m = o || function (e, t, n) {
                                        for (var r = 0, i = t.length; r < i; r++)
                                            Z(e, t[r], n);
                                        return n
                                    }(t || "*", s.nodeType ? [s] : s, []), x = !e || !o && t ? m : he(m, h, e, s, u);
                                    if (n ? n(x, d = i || (o ? e : y || r) ? [] : a, s, u) : d = x,
                                        r)
                                        for (l = he(d, v),
                                            r(l, [], s, u),
                                            f = l.length; f--;)
                                            (p = l[f]) && (d[v[f]] = !(x[v[f]] = p));
                                    if (o) {
                                        if (i || e) {
                                            if (i) {
                                                for (l = [],
                                                    f = d.length; f--;)
                                                    (p = d[f]) && l.push(x[f] = p);
                                                i(null, d = [], l, u)
                                            }
                                            for (f = d.length; f--;)
                                                (p = d[f]) && (l = i ? c.call(o, p) : h[f]) > -1 && (o[l] = !(a[l] = p))
                                        }
                                    } else
                                        d = he(d === a ? d.splice(y, d.length) : d),
                                            i ? i(null, a, d, u) : g.apply(a, d)
                                }
                                ))
                        }
                        function ve(e) {
                            for (var r, i, o, a = e.length, s = t.relative[e[0].type], u = s || t.relative[" "], l = s ? 1 : 0, f = pe((function (e) {
                                return e === r
                            }
                            ), u, !0), p = pe((function (e) {
                                return c.call(r, e) > -1
                            }
                            ), u, !0), d = [function (e, t, i) {
                                var o = !s && (i || t != n) || ((r = t).nodeType ? f(e, t, i) : p(e, t, i));
                                return r = null,
                                    o
                            }
                            ]; l < a; l++)
                                if (i = t.relative[e[l].type])
                                    d = [pe(de(d), i)];
                                else {
                                    if ((i = t.filter[e[l].type].apply(null, e[l].matches))[y]) {
                                        for (o = ++l; o < a && !t.relative[e[o].type]; o++)
                                            ;
                                        return ge(l > 1 && de(d), l > 1 && fe(e.slice(0, l - 1).concat({
                                            value: " " === e[l - 2].type ? "*" : ""
                                        })).replace(L, "$1"), i, l < o && ve(e.slice(l, o)), o < a && ve(e = e.slice(o)), o < a && fe(e))
                                    }
                                    d.push(i)
                                }
                            return de(d)
                        }
                        function ye(e, r) {
                            var i, o = [], a = [], s = T[e + " "];
                            if (!s) {
                                for (r || (r = ce(e)),
                                    i = r.length; i--;)
                                    (s = ve(r[i]))[y] ? o.push(s) : a.push(s);
                                s = T(e, function (e, r) {
                                    var i = r.length > 0
                                        , o = e.length > 0
                                        , a = function (a, s, l, c, p) {
                                            var d, h, v, y = 0, x = "0", b = a && [], w = [], T = n, C = a || o && t.find.TAG("*", p), S = m += null == T ? 1 : Math.random() || .1, k = C.length;
                                            for (p && (n = s == u || s || p); x !== k && null != (d = C[x]); x++) {
                                                if (o && d) {
                                                    for (h = 0,
                                                        s || d.ownerDocument == u || (ue(d),
                                                            l = !f); v = e[h++];)
                                                        if (v(d, s || u, l)) {
                                                            g.call(c, d);
                                                            break
                                                        }
                                                    p && (m = S)
                                                }
                                                i && ((d = !v && d) && y--,
                                                    a && b.push(d))
                                            }
                                            if (y += x,
                                                i && x !== y) {
                                                for (h = 0; v = r[h++];)
                                                    v(b, w, s, l);
                                                if (a) {
                                                    if (y > 0)
                                                        for (; x--;)
                                                            b[x] || w[x] || (w[x] = A.call(c));
                                                    w = he(w)
                                                }
                                                g.apply(c, w),
                                                    p && !a && w.length > 0 && y + r.length > 1 && E.uniqueSort(c)
                                            }
                                            return p && (m = S,
                                                n = T),
                                                b
                                        };
                                    return i ? te(a) : a
                                }(a, o)),
                                    s.selector = e
                            }
                            return s
                        }
                        function me(e, n, r, i) {
                            var o, a, s, u, l, c = "function" == typeof e && e, p = !i && ce(e = c.selector || e);
                            if (r = r || [],
                                1 === p.length) {
                                if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && 9 === n.nodeType && f && t.relative[a[1].type]) {
                                    if (!(n = (t.find.ID(s.matches[0].replace(Y, Q), n) || [])[0]))
                                        return r;
                                    c && (n = n.parentNode),
                                        e = e.slice(a.shift().value.length)
                                }
                                for (o = z.needsContext.test(e) ? 0 : a.length; o-- && (s = a[o],
                                    !t.relative[u = s.type]);)
                                    if ((l = t.find[u]) && (i = l(s.matches[0].replace(Y, Q), G.test(a[0].type) && se(n.parentNode) || n))) {
                                        if (a.splice(o, 1),
                                            !(e = i.length && fe(a)))
                                            return g.apply(r, i),
                                                r;
                                        break
                                    }
                            }
                            return (c || ye(e, p))(i, n, !f, r, !n || G.test(e) && se(n.parentNode) || n),
                                r
                        }
                        le.prototype = t.filters = t.pseudos,
                            t.setFilters = new le,
                            v.sortStable = y.split("").sort(S).join("") === y,
                            ue(),
                            v.sortDetached = ne((function (e) {
                                return 1 & e.compareDocumentPosition(u.createElement("fieldset"))
                            }
                            )),
                            E.find = Z,
                            E.expr[":"] = E.expr.pseudos,
                            E.unique = E.uniqueSort,
                            Z.compile = ye,
                            Z.select = me,
                            Z.setDocument = ue,
                            Z.tokenize = ce,
                            Z.escape = E.escapeSelector,
                            Z.getText = E.text,
                            Z.isXML = E.isXMLDoc,
                            Z.selectors = E.expr,
                            Z.support = E.support,
                            Z.uniqueSort = E.uniqueSort
                    }();
                    var R = function (e, t, n) {
                        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                            if (1 === e.nodeType) {
                                if (i && E(e).is(n))
                                    break;
                                r.push(e)
                            }
                        return r
                    }
                        , I = function (e, t) {
                            for (var n = []; e; e = e.nextSibling)
                                1 === e.nodeType && e !== t && n.push(e);
                            return n
                        }
                        , W = E.expr.match.needsContext
                        , F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                    function $(e, t, n) {
                        return y(t) ? E.grep(e, (function (e, r) {
                            return !!t.call(e, r, e) !== n
                        }
                        )) : t.nodeType ? E.grep(e, (function (e) {
                            return e === t !== n
                        }
                        )) : "string" != typeof t ? E.grep(e, (function (e) {
                            return c.call(t, e) > -1 !== n
                        }
                        )) : E.filter(t, e, n)
                    }
                    E.filter = function (e, t, n) {
                        var r = t[0];
                        return n && (e = ":not(" + e + ")"),
                            1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, (function (e) {
                                return 1 === e.nodeType
                            }
                            )))
                    }
                        ,
                        E.fn.extend({
                            find: function (e) {
                                var t, n, r = this.length, i = this;
                                if ("string" != typeof e)
                                    return this.pushStack(E(e).filter((function () {
                                        for (t = 0; t < r; t++)
                                            if (E.contains(i[t], this))
                                                return !0
                                    }
                                    )));
                                for (n = this.pushStack([]),
                                    t = 0; t < r; t++)
                                    E.find(e, i[t], n);
                                return r > 1 ? E.uniqueSort(n) : n
                            },
                            filter: function (e) {
                                return this.pushStack($(this, e || [], !1))
                            },
                            not: function (e) {
                                return this.pushStack($(this, e || [], !0))
                            },
                            is: function (e) {
                                return !!$(this, "string" == typeof e && W.test(e) ? E(e) : e || [], !1).length
                            }
                        });
                    var _, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    (E.fn.init = function (e, t, n) {
                        var r, i;
                        if (!e)
                            return this;
                        if (n = n || _,
                            "string" == typeof e) {
                            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : B.exec(e)) || !r[1] && t)
                                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (r[1]) {
                                if (t = t instanceof E ? t[0] : t,
                                    E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)),
                                    F.test(r[1]) && E.isPlainObject(t))
                                    for (r in t)
                                        y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                return this
                            }
                            return (i = x.getElementById(r[2])) && (this[0] = i,
                                this.length = 1),
                                this
                        }
                        return e.nodeType ? (this[0] = e,
                            this.length = 1,
                            this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
                    }
                    ).prototype = E.fn,
                        _ = E(x);
                    var z = /^(?:parents|prev(?:Until|All))/
                        , X = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };
                    function U(e, t) {
                        for (; (e = e[t]) && 1 !== e.nodeType;)
                            ;
                        return e
                    }
                    E.fn.extend({
                        has: function (e) {
                            var t = E(e, this)
                                , n = t.length;
                            return this.filter((function () {
                                for (var e = 0; e < n; e++)
                                    if (E.contains(this, t[e]))
                                        return !0
                            }
                            ))
                        },
                        closest: function (e, t) {
                            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && E(e);
                            if (!W.test(e))
                                for (; r < i; r++)
                                    for (n = this[r]; n && n !== t; n = n.parentNode)
                                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                            o.push(n);
                                            break
                                        }
                            return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o)
                        },
                        index: function (e) {
                            return e ? "string" == typeof e ? c.call(E(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function (e, t) {
                            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
                        },
                        addBack: function (e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                        }
                    }),
                        E.each({
                            parent: function (e) {
                                var t = e.parentNode;
                                return t && 11 !== t.nodeType ? t : null
                            },
                            parents: function (e) {
                                return R(e, "parentNode")
                            },
                            parentsUntil: function (e, t, n) {
                                return R(e, "parentNode", n)
                            },
                            next: function (e) {
                                return U(e, "nextSibling")
                            },
                            prev: function (e) {
                                return U(e, "previousSibling")
                            },
                            nextAll: function (e) {
                                return R(e, "nextSibling")
                            },
                            prevAll: function (e) {
                                return R(e, "previousSibling")
                            },
                            nextUntil: function (e, t, n) {
                                return R(e, "nextSibling", n)
                            },
                            prevUntil: function (e, t, n) {
                                return R(e, "previousSibling", n)
                            },
                            siblings: function (e) {
                                return I((e.parentNode || {}).firstChild, e)
                            },
                            children: function (e) {
                                return I(e.firstChild)
                            },
                            contents: function (e) {
                                return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (j(e, "template") && (e = e.content || e),
                                    E.merge([], e.childNodes))
                            }
                        }, (function (e, t) {
                            E.fn[e] = function (n, r) {
                                var i = E.map(this, t, n);
                                return "Until" !== e.slice(-5) && (r = n),
                                    r && "string" == typeof r && (i = E.filter(r, i)),
                                    this.length > 1 && (X[e] || E.uniqueSort(i),
                                        z.test(e) && i.reverse()),
                                    this.pushStack(i)
                            }
                        }
                        ));
                    var V = /[^\x20\t\r\n\f]+/g;
                    function G(e) {
                        return e
                    }
                    function Y(e) {
                        throw e
                    }
                    function Q(e, t, n, r) {
                        var i;
                        try {
                            e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                        } catch (e) {
                            n.apply(void 0, [e])
                        }
                    }
                    E.Callbacks = function (e) {
                        e = "string" == typeof e ? function (e) {
                            var t = {};
                            return E.each(e.match(V) || [], (function (e, n) {
                                t[n] = !0
                            }
                            )),
                                t
                        }(e) : E.extend({}, e);
                        var t, n, r, i, o = [], a = [], s = -1, u = function () {
                            for (i = i || e.once,
                                r = t = !0; a.length; s = -1)
                                for (n = a.shift(); ++s < o.length;)
                                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                                        n = !1);
                            e.memory || (n = !1),
                                t = !1,
                                i && (o = n ? [] : "")
                        }, l = {
                            add: function () {
                                return o && (n && !t && (s = o.length - 1,
                                    a.push(n)),
                                    function t(n) {
                                        E.each(n, (function (n, r) {
                                            y(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r)
                                        }
                                        ))
                                    }(arguments),
                                    n && !t && u()),
                                    this
                            },
                            remove: function () {
                                return E.each(arguments, (function (e, t) {
                                    for (var n; (n = E.inArray(t, o, n)) > -1;)
                                        o.splice(n, 1),
                                            n <= s && s--
                                }
                                )),
                                    this
                            },
                            has: function (e) {
                                return e ? E.inArray(e, o) > -1 : o.length > 0
                            },
                            empty: function () {
                                return o && (o = []),
                                    this
                            },
                            disable: function () {
                                return i = a = [],
                                    o = n = "",
                                    this
                            },
                            disabled: function () {
                                return !o
                            },
                            lock: function () {
                                return i = a = [],
                                    n || t || (o = n = ""),
                                    this
                            },
                            locked: function () {
                                return !!i
                            },
                            fireWith: function (e, n) {
                                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                                    a.push(n),
                                    t || u()),
                                    this
                            },
                            fire: function () {
                                return l.fireWith(this, arguments),
                                    this
                            },
                            fired: function () {
                                return !!r
                            }
                        };
                        return l
                    }
                        ,
                        E.extend({
                            Deferred: function (e) {
                                var t = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
                                    , n = "pending"
                                    , i = {
                                        state: function () {
                                            return n
                                        },
                                        always: function () {
                                            return o.done(arguments).fail(arguments),
                                                this
                                        },
                                        catch: function (e) {
                                            return i.then(null, e)
                                        },
                                        pipe: function () {
                                            var e = arguments;
                                            return E.Deferred((function (n) {
                                                E.each(t, (function (t, r) {
                                                    var i = y(e[r[4]]) && e[r[4]];
                                                    o[r[1]]((function () {
                                                        var e = i && i.apply(this, arguments);
                                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                                    }
                                                    ))
                                                }
                                                )),
                                                    e = null
                                            }
                                            )).promise()
                                        },
                                        then: function (e, n, i) {
                                            var o = 0;
                                            function a(e, t, n, i) {
                                                return function () {
                                                    var s = this
                                                        , u = arguments
                                                        , l = function () {
                                                            var r, l;
                                                            if (!(e < o)) {
                                                                if ((r = n.apply(s, u)) === t.promise())
                                                                    throw new TypeError("Thenable self-resolution");
                                                                l = r && ("object" == typeof r || "function" == typeof r) && r.then,
                                                                    y(l) ? i ? l.call(r, a(o, t, G, i), a(o, t, Y, i)) : (o++,
                                                                        l.call(r, a(o, t, G, i), a(o, t, Y, i), a(o, t, G, t.notifyWith))) : (n !== G && (s = void 0,
                                                                            u = [r]),
                                                                            (i || t.resolveWith)(s, u))
                                                            }
                                                        }
                                                        , c = i ? l : function () {
                                                            try {
                                                                l()
                                                            } catch (r) {
                                                                E.Deferred.exceptionHook && E.Deferred.exceptionHook(r, c.error),
                                                                    e + 1 >= o && (n !== Y && (s = void 0,
                                                                        u = [r]),
                                                                        t.rejectWith(s, u))
                                                            }
                                                        }
                                                        ;
                                                    e ? c() : (E.Deferred.getErrorHook ? c.error = E.Deferred.getErrorHook() : E.Deferred.getStackHook && (c.error = E.Deferred.getStackHook()),
                                                        r.setTimeout(c))
                                                }
                                            }
                                            return E.Deferred((function (r) {
                                                t[0][3].add(a(0, r, y(i) ? i : G, r.notifyWith)),
                                                    t[1][3].add(a(0, r, y(e) ? e : G)),
                                                    t[2][3].add(a(0, r, y(n) ? n : Y))
                                            }
                                            )).promise()
                                        },
                                        promise: function (e) {
                                            return null != e ? E.extend(e, i) : i
                                        }
                                    }
                                    , o = {};
                                return E.each(t, (function (e, r) {
                                    var a = r[2]
                                        , s = r[5];
                                    i[r[1]] = a.add,
                                        s && a.add((function () {
                                            n = s
                                        }
                                        ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                                        a.add(r[3].fire),
                                        o[r[0]] = function () {
                                            return o[r[0] + "With"](this === o ? void 0 : this, arguments),
                                                this
                                        }
                                        ,
                                        o[r[0] + "With"] = a.fireWith
                                }
                                )),
                                    i.promise(o),
                                    e && e.call(o, o),
                                    o
                            },
                            when: function (e) {
                                var t = arguments.length
                                    , n = t
                                    , r = Array(n)
                                    , i = s.call(arguments)
                                    , o = E.Deferred()
                                    , a = function (e) {
                                        return function (n) {
                                            r[e] = this,
                                                i[e] = arguments.length > 1 ? s.call(arguments) : n,
                                                --t || o.resolveWith(r, i)
                                        }
                                    };
                                if (t <= 1 && (Q(e, o.done(a(n)).resolve, o.reject, !t),
                                    "pending" === o.state() || y(i[n] && i[n].then)))
                                    return o.then();
                                for (; n--;)
                                    Q(i[n], a(n), o.reject);
                                return o.promise()
                            }
                        });
                    var J = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    E.Deferred.exceptionHook = function (e, t) {
                        r.console && r.console.warn && e && J.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                    }
                        ,
                        E.readyException = function (e) {
                            r.setTimeout((function () {
                                throw e
                            }
                            ))
                        }
                        ;
                    var K = E.Deferred();
                    function Z() {
                        x.removeEventListener("DOMContentLoaded", Z),
                            r.removeEventListener("load", Z),
                            E.ready()
                    }
                    E.fn.ready = function (e) {
                        return K.then(e).catch((function (e) {
                            E.readyException(e)
                        }
                        )),
                            this
                    }
                        ,
                        E.extend({
                            isReady: !1,
                            readyWait: 1,
                            ready: function (e) {
                                (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0,
                                    !0 !== e && --E.readyWait > 0 || K.resolveWith(x, [E]))
                            }
                        }),
                        E.ready.then = K.then,
                        "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? r.setTimeout(E.ready) : (x.addEventListener("DOMContentLoaded", Z),
                            r.addEventListener("load", Z));
                    var ee = function (e, t, n, r, i, o, a) {
                        var s = 0
                            , u = e.length
                            , l = null == n;
                        if ("object" === T(n))
                            for (s in i = !0,
                                n)
                                ee(e, t, s, n[s], !0, o, a);
                        else if (void 0 !== r && (i = !0,
                            y(r) || (a = !0),
                            l && (a ? (t.call(e, r),
                                t = null) : (l = t,
                                    t = function (e, t, n) {
                                        return l.call(E(e), n)
                                    }
                            )),
                            t))
                            for (; s < u; s++)
                                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                    }
                        , te = /^-ms-/
                        , ne = /-([a-z])/g;
                    function re(e, t) {
                        return t.toUpperCase()
                    }
                    function ie(e) {
                        return e.replace(te, "ms-").replace(ne, re)
                    }
                    var oe = function (e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                    };
                    function ae() {
                        this.expando = E.expando + ae.uid++
                    }
                    ae.uid = 1,
                        ae.prototype = {
                            cache: function (e) {
                                var t = e[this.expando];
                                return t || (t = {},
                                    oe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                        value: t,
                                        configurable: !0
                                    }))),
                                    t
                            },
                            set: function (e, t, n) {
                                var r, i = this.cache(e);
                                if ("string" == typeof t)
                                    i[ie(t)] = n;
                                else
                                    for (r in t)
                                        i[ie(r)] = t[r];
                                return i
                            },
                            get: function (e, t) {
                                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ie(t)]
                            },
                            access: function (e, t, n) {
                                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                                    void 0 !== n ? n : t)
                            },
                            remove: function (e, t) {
                                var n, r = e[this.expando];
                                if (void 0 !== r) {
                                    if (void 0 !== t) {
                                        n = (t = Array.isArray(t) ? t.map(ie) : (t = ie(t)) in r ? [t] : t.match(V) || []).length;
                                        for (; n--;)
                                            delete r[t[n]]
                                    }
                                    (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                                }
                            },
                            hasData: function (e) {
                                var t = e[this.expando];
                                return void 0 !== t && !E.isEmptyObject(t)
                            }
                        };
                    var se = new ae
                        , ue = new ae
                        , le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                        , ce = /[A-Z]/g;
                    function fe(e, t, n) {
                        var r;
                        if (void 0 === n && 1 === e.nodeType)
                            if (r = "data-" + t.replace(ce, "-$&").toLowerCase(),
                                "string" == typeof (n = e.getAttribute(r))) {
                                try {
                                    n = function (e) {
                                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : le.test(e) ? JSON.parse(e) : e)
                                    }(n)
                                } catch (e) { }
                                ue.set(e, t, n)
                            } else
                                n = void 0;
                        return n
                    }
                    E.extend({
                        hasData: function (e) {
                            return ue.hasData(e) || se.hasData(e)
                        },
                        data: function (e, t, n) {
                            return ue.access(e, t, n)
                        },
                        removeData: function (e, t) {
                            ue.remove(e, t)
                        },
                        _data: function (e, t, n) {
                            return se.access(e, t, n)
                        },
                        _removeData: function (e, t) {
                            se.remove(e, t)
                        }
                    }),
                        E.fn.extend({
                            data: function (e, t) {
                                var n, r, i, o = this[0], a = o && o.attributes;
                                if (void 0 === e) {
                                    if (this.length && (i = ue.get(o),
                                        1 === o.nodeType && !se.get(o, "hasDataAttrs"))) {
                                        for (n = a.length; n--;)
                                            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = ie(r.slice(5)),
                                                fe(o, r, i[r]));
                                        se.set(o, "hasDataAttrs", !0)
                                    }
                                    return i
                                }
                                return "object" == typeof e ? this.each((function () {
                                    ue.set(this, e)
                                }
                                )) : ee(this, (function (t) {
                                    var n;
                                    if (o && void 0 === t)
                                        return void 0 !== (n = ue.get(o, e)) || void 0 !== (n = fe(o, e)) ? n : void 0;
                                    this.each((function () {
                                        ue.set(this, e, t)
                                    }
                                    ))
                                }
                                ), null, t, arguments.length > 1, null, !0)
                            },
                            removeData: function (e) {
                                return this.each((function () {
                                    ue.remove(this, e)
                                }
                                ))
                            }
                        }),
                        E.extend({
                            queue: function (e, t, n) {
                                var r;
                                if (e)
                                    return t = (t || "fx") + "queue",
                                        r = se.get(e, t),
                                        n && (!r || Array.isArray(n) ? r = se.access(e, t, E.makeArray(n)) : r.push(n)),
                                        r || []
                            },
                            dequeue: function (e, t) {
                                t = t || "fx";
                                var n = E.queue(e, t)
                                    , r = n.length
                                    , i = n.shift()
                                    , o = E._queueHooks(e, t);
                                "inprogress" === i && (i = n.shift(),
                                    r--),
                                    i && ("fx" === t && n.unshift("inprogress"),
                                        delete o.stop,
                                        i.call(e, (function () {
                                            E.dequeue(e, t)
                                        }
                                        ), o)),
                                    !r && o && o.empty.fire()
                            },
                            _queueHooks: function (e, t) {
                                var n = t + "queueHooks";
                                return se.get(e, n) || se.access(e, n, {
                                    empty: E.Callbacks("once memory").add((function () {
                                        se.remove(e, [t + "queue", n])
                                    }
                                    ))
                                })
                            }
                        }),
                        E.fn.extend({
                            queue: function (e, t) {
                                var n = 2;
                                return "string" != typeof e && (t = e,
                                    e = "fx",
                                    n--),
                                    arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                                        var n = E.queue(this, e, t);
                                        E._queueHooks(this, e),
                                            "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
                                    }
                                    ))
                            },
                            dequeue: function (e) {
                                return this.each((function () {
                                    E.dequeue(this, e)
                                }
                                ))
                            },
                            clearQueue: function (e) {
                                return this.queue(e || "fx", [])
                            },
                            promise: function (e, t) {
                                var n, r = 1, i = E.Deferred(), o = this, a = this.length, s = function () {
                                    --r || i.resolveWith(o, [o])
                                };
                                for ("string" != typeof e && (t = e,
                                    e = void 0),
                                    e = e || "fx"; a--;)
                                    (n = se.get(o[a], e + "queueHooks")) && n.empty && (r++,
                                        n.empty.add(s));
                                return s(),
                                    i.promise(t)
                            }
                        });
                    var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                        , de = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i")
                        , he = ["Top", "Right", "Bottom", "Left"]
                        , ge = x.documentElement
                        , ve = function (e) {
                            return E.contains(e.ownerDocument, e)
                        }
                        , ye = {
                            composed: !0
                        };
                    ge.getRootNode && (ve = function (e) {
                        return E.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument
                    }
                    );
                    var me = function (e, t) {
                        return "none" === (e = t || e).style.display || "" === e.style.display && ve(e) && "none" === E.css(e, "display")
                    };
                    function xe(e, t, n, r) {
                        var i, o, a = 20, s = r ? function () {
                            return r.cur()
                        }
                            : function () {
                                return E.css(e, t, "")
                            }
                            , u = s(), l = n && n[3] || (E.cssNumber[t] ? "" : "px"), c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && de.exec(E.css(e, t));
                        if (c && c[3] !== l) {
                            for (u /= 2,
                                l = l || c[3],
                                c = +u || 1; a--;)
                                E.style(e, t, c + l),
                                    (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                                    c /= o;
                            c *= 2,
                                E.style(e, t, c + l),
                                n = n || []
                        }
                        return n && (c = +c || +u || 0,
                            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                            r && (r.unit = l,
                                r.start = c,
                                r.end = i)),
                            i
                    }
                    var be = {};
                    function we(e) {
                        var t, n = e.ownerDocument, r = e.nodeName, i = be[r];
                        return i || (t = n.body.appendChild(n.createElement(r)),
                            i = E.css(t, "display"),
                            t.parentNode.removeChild(t),
                            "none" === i && (i = "block"),
                            be[r] = i,
                            i)
                    }
                    function Te(e, t) {
                        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
                            (r = e[o]).style && (n = r.style.display,
                                t ? ("none" === n && (i[o] = se.get(r, "display") || null,
                                    i[o] || (r.style.display = "")),
                                    "" === r.style.display && me(r) && (i[o] = we(r))) : "none" !== n && (i[o] = "none",
                                        se.set(r, "display", n)));
                        for (o = 0; o < a; o++)
                            null != i[o] && (e[o].style.display = i[o]);
                        return e
                    }
                    E.fn.extend({
                        show: function () {
                            return Te(this, !0)
                        },
                        hide: function () {
                            return Te(this)
                        },
                        toggle: function (e) {
                            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                                me(this) ? E(this).show() : E(this).hide()
                            }
                            ))
                        }
                    });
                    var Ce, Se, Ee = /^(?:checkbox|radio)$/i, ke = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, je = /^$|^module$|\/(?:java|ecma)script/i;
                    Ce = x.createDocumentFragment().appendChild(x.createElement("div")),
                        (Se = x.createElement("input")).setAttribute("type", "radio"),
                        Se.setAttribute("checked", "checked"),
                        Se.setAttribute("name", "t"),
                        Ce.appendChild(Se),
                        v.checkClone = Ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
                        Ce.innerHTML = "<textarea>x</textarea>",
                        v.noCloneChecked = !!Ce.cloneNode(!0).lastChild.defaultValue,
                        Ce.innerHTML = "<option></option>",
                        v.option = !!Ce.lastChild;
                    var Ae = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };
                    function De(e, t) {
                        var n;
                        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                            void 0 === t || t && j(e, t) ? E.merge([e], n) : n
                    }
                    function Ne(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            se.set(e[n], "globalEval", !t || se.get(t[n], "globalEval"))
                    }
                    Ae.tbody = Ae.tfoot = Ae.colgroup = Ae.caption = Ae.thead,
                        Ae.th = Ae.td,
                        v.option || (Ae.optgroup = Ae.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var qe = /<|&#?\w+;/;
                    function Le(e, t, n, r, i) {
                        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                            if ((o = e[d]) || 0 === o)
                                if ("object" === T(o))
                                    E.merge(p, o.nodeType ? [o] : o);
                                else if (qe.test(o)) {
                                    for (a = a || f.appendChild(t.createElement("div")),
                                        s = (ke.exec(o) || ["", ""])[1].toLowerCase(),
                                        u = Ae[s] || Ae._default,
                                        a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
                                        c = u[0]; c--;)
                                        a = a.lastChild;
                                    E.merge(p, a.childNodes),
                                        (a = f.firstChild).textContent = ""
                                } else
                                    p.push(t.createTextNode(o));
                        for (f.textContent = "",
                            d = 0; o = p[d++];)
                            if (r && E.inArray(o, r) > -1)
                                i && i.push(o);
                            else if (l = ve(o),
                                a = De(f.appendChild(o), "script"),
                                l && Ne(a),
                                n)
                                for (c = 0; o = a[c++];)
                                    je.test(o.type || "") && n.push(o);
                        return f
                    }
                    var He = /^([^.]*)(?:\.(.+)|)/;
                    function Oe() {
                        return !0
                    }
                    function Pe() {
                        return !1
                    }
                    function Me(e, t, n, r, i, o) {
                        var a, s;
                        if ("object" == typeof t) {
                            for (s in "string" != typeof n && (r = r || n,
                                n = void 0),
                                t)
                                Me(e, s, n, r, t[s], o);
                            return e
                        }
                        if (null == r && null == i ? (i = n,
                            r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                                r = void 0) : (i = r,
                                    r = n,
                                    n = void 0)),
                            !1 === i)
                            i = Pe;
                        else if (!i)
                            return e;
                        return 1 === o && (a = i,
                            i = function (e) {
                                return E().off(e),
                                    a.apply(this, arguments)
                            }
                            ,
                            i.guid = a.guid || (a.guid = E.guid++)),
                            e.each((function () {
                                E.event.add(this, t, i, r, n)
                            }
                            ))
                    }
                    function Re(e, t, n) {
                        n ? (se.set(e, t, !1),
                            E.event.add(e, t, {
                                namespace: !1,
                                handler: function (e) {
                                    var n, r = se.get(this, t);
                                    if (1 & e.isTrigger && this[t]) {
                                        if (r)
                                            (E.event.special[t] || {}).delegateType && e.stopPropagation();
                                        else if (r = s.call(arguments),
                                            se.set(this, t, r),
                                            this[t](),
                                            n = se.get(this, t),
                                            se.set(this, t, !1),
                                            r !== n)
                                            return e.stopImmediatePropagation(),
                                                e.preventDefault(),
                                                n
                                    } else
                                        r && (se.set(this, t, E.event.trigger(r[0], r.slice(1), this)),
                                            e.stopPropagation(),
                                            e.isImmediatePropagationStopped = Oe)
                                }
                            })) : void 0 === se.get(e, t) && E.event.add(e, t, Oe)
                    }
                    E.event = {
                        global: {},
                        add: function (e, t, n, r, i) {
                            var o, a, s, u, l, c, f, p, d, h, g, v = se.get(e);
                            if (oe(e))
                                for (n.handler && (n = (o = n).handler,
                                    i = o.selector),
                                    i && E.find.matchesSelector(ge, i),
                                    n.guid || (n.guid = E.guid++),
                                    (u = v.events) || (u = v.events = Object.create(null)),
                                    (a = v.handle) || (a = v.handle = function (t) {
                                        return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                                    }
                                    ),
                                    l = (t = (t || "").match(V) || [""]).length; l--;)
                                    d = g = (s = He.exec(t[l]) || [])[1],
                                        h = (s[2] || "").split(".").sort(),
                                        d && (f = E.event.special[d] || {},
                                            d = (i ? f.delegateType : f.bindType) || d,
                                            f = E.event.special[d] || {},
                                            c = E.extend({
                                                type: d,
                                                origType: g,
                                                data: r,
                                                handler: n,
                                                guid: n.guid,
                                                selector: i,
                                                needsContext: i && E.expr.match.needsContext.test(i),
                                                namespace: h.join(".")
                                            }, o),
                                            (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                                                f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                                            f.add && (f.add.call(e, c),
                                                c.handler.guid || (c.handler.guid = n.guid)),
                                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                            E.event.global[d] = !0)
                        },
                        remove: function (e, t, n, r, i) {
                            var o, a, s, u, l, c, f, p, d, h, g, v = se.hasData(e) && se.get(e);
                            if (v && (u = v.events)) {
                                for (l = (t = (t || "").match(V) || [""]).length; l--;)
                                    if (d = g = (s = He.exec(t[l]) || [])[1],
                                        h = (s[2] || "").split(".").sort(),
                                        d) {
                                        for (f = E.event.special[d] || {},
                                            p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                            a = o = p.length; o--;)
                                            c = p[o],
                                                !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                                                    c.selector && p.delegateCount--,
                                                    f.remove && f.remove.call(e, c));
                                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, d, v.handle),
                                            delete u[d])
                                    } else
                                        for (d in u)
                                            E.event.remove(e, d + t[l], n, r, !0);
                                E.isEmptyObject(u) && se.remove(e, "handle events")
                            }
                        },
                        dispatch: function (e) {
                            var t, n, r, i, o, a, s = new Array(arguments.length), u = E.event.fix(e), l = (se.get(this, "events") || Object.create(null))[u.type] || [], c = E.event.special[u.type] || {};
                            for (s[0] = u,
                                t = 1; t < arguments.length; t++)
                                s[t] = arguments[t];
                            if (u.delegateTarget = this,
                                !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                                for (a = E.event.handlers.call(this, u, l),
                                    t = 0; (i = a[t++]) && !u.isPropagationStopped();)
                                    for (u.currentTarget = i.elem,
                                        n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();)
                                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                                            u.data = o.data,
                                            void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                                                u.stopPropagation()));
                                return c.postDispatch && c.postDispatch.call(this, u),
                                    u.result
                            }
                        },
                        handlers: function (e, t) {
                            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
                            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                                for (; l !== this; l = l.parentNode || this)
                                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                        for (o = [],
                                            a = {},
                                            n = 0; n < u; n++)
                                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? E(i, this).index(l) > -1 : E.find(i, this, null, [l]).length),
                                                a[i] && o.push(r);
                                        o.length && s.push({
                                            elem: l,
                                            handlers: o
                                        })
                                    }
                            return l = this,
                                u < t.length && s.push({
                                    elem: l,
                                    handlers: t.slice(u)
                                }),
                                s
                        },
                        addProp: function (e, t) {
                            Object.defineProperty(E.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: y(t) ? function () {
                                    if (this.originalEvent)
                                        return t(this.originalEvent)
                                }
                                    : function () {
                                        if (this.originalEvent)
                                            return this.originalEvent[e]
                                    }
                                ,
                                set: function (t) {
                                    Object.defineProperty(this, e, {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: t
                                    })
                                }
                            })
                        },
                        fix: function (e) {
                            return e[E.expando] ? e : new E.Event(e)
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            click: {
                                setup: function (e) {
                                    var t = this || e;
                                    return Ee.test(t.type) && t.click && j(t, "input") && Re(t, "click", !0),
                                        !1
                                },
                                trigger: function (e) {
                                    var t = this || e;
                                    return Ee.test(t.type) && t.click && j(t, "input") && Re(t, "click"),
                                        !0
                                },
                                _default: function (e) {
                                    var t = e.target;
                                    return Ee.test(t.type) && t.click && j(t, "input") && se.get(t, "click") || j(t, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function (e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                }
                            }
                        }
                    },
                        E.removeEvent = function (e, t, n) {
                            e.removeEventListener && e.removeEventListener(t, n)
                        }
                        ,
                        E.Event = function (e, t) {
                            if (!(this instanceof E.Event))
                                return new E.Event(e, t);
                            e && e.type ? (this.originalEvent = e,
                                this.type = e.type,
                                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Oe : Pe,
                                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                                this.currentTarget = e.currentTarget,
                                this.relatedTarget = e.relatedTarget) : this.type = e,
                                t && E.extend(this, t),
                                this.timeStamp = e && e.timeStamp || Date.now(),
                                this[E.expando] = !0
                        }
                        ,
                        E.Event.prototype = {
                            constructor: E.Event,
                            isDefaultPrevented: Pe,
                            isPropagationStopped: Pe,
                            isImmediatePropagationStopped: Pe,
                            isSimulated: !1,
                            preventDefault: function () {
                                var e = this.originalEvent;
                                this.isDefaultPrevented = Oe,
                                    e && !this.isSimulated && e.preventDefault()
                            },
                            stopPropagation: function () {
                                var e = this.originalEvent;
                                this.isPropagationStopped = Oe,
                                    e && !this.isSimulated && e.stopPropagation()
                            },
                            stopImmediatePropagation: function () {
                                var e = this.originalEvent;
                                this.isImmediatePropagationStopped = Oe,
                                    e && !this.isSimulated && e.stopImmediatePropagation(),
                                    this.stopPropagation()
                            }
                        },
                        E.each({
                            altKey: !0,
                            bubbles: !0,
                            cancelable: !0,
                            changedTouches: !0,
                            ctrlKey: !0,
                            detail: !0,
                            eventPhase: !0,
                            metaKey: !0,
                            pageX: !0,
                            pageY: !0,
                            shiftKey: !0,
                            view: !0,
                            char: !0,
                            code: !0,
                            charCode: !0,
                            key: !0,
                            keyCode: !0,
                            button: !0,
                            buttons: !0,
                            clientX: !0,
                            clientY: !0,
                            offsetX: !0,
                            offsetY: !0,
                            pointerId: !0,
                            pointerType: !0,
                            screenX: !0,
                            screenY: !0,
                            targetTouches: !0,
                            toElement: !0,
                            touches: !0,
                            which: !0
                        }, E.event.addProp),
                        E.each({
                            focus: "focusin",
                            blur: "focusout"
                        }, (function (e, t) {
                            function n(e) {
                                if (x.documentMode) {
                                    var n = se.get(this, "handle")
                                        , r = E.event.fix(e);
                                    r.type = "focusin" === e.type ? "focus" : "blur",
                                        r.isSimulated = !0,
                                        n(e),
                                        r.target === r.currentTarget && n(r)
                                } else
                                    E.event.simulate(t, e.target, E.event.fix(e))
                            }
                            E.event.special[e] = {
                                setup: function () {
                                    var r;
                                    if (Re(this, e, !0),
                                        !x.documentMode)
                                        return !1;
                                    (r = se.get(this, t)) || this.addEventListener(t, n),
                                        se.set(this, t, (r || 0) + 1)
                                },
                                trigger: function () {
                                    return Re(this, e),
                                        !0
                                },
                                teardown: function () {
                                    var e;
                                    if (!x.documentMode)
                                        return !1;
                                    (e = se.get(this, t) - 1) ? se.set(this, t, e) : (this.removeEventListener(t, n),
                                        se.remove(this, t))
                                },
                                _default: function (t) {
                                    return se.get(t.target, e)
                                },
                                delegateType: t
                            },
                                E.event.special[t] = {
                                    setup: function () {
                                        var r = this.ownerDocument || this.document || this
                                            , i = x.documentMode ? this : r
                                            , o = se.get(i, t);
                                        o || (x.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)),
                                            se.set(i, t, (o || 0) + 1)
                                    },
                                    teardown: function () {
                                        var r = this.ownerDocument || this.document || this
                                            , i = x.documentMode ? this : r
                                            , o = se.get(i, t) - 1;
                                        o ? se.set(i, t, o) : (x.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0),
                                            se.remove(i, t))
                                    }
                                }
                        }
                        )),
                        E.each({
                            mouseenter: "mouseover",
                            mouseleave: "mouseout",
                            pointerenter: "pointerover",
                            pointerleave: "pointerout"
                        }, (function (e, t) {
                            E.event.special[e] = {
                                delegateType: t,
                                bindType: t,
                                handle: function (e) {
                                    var n, r = e.relatedTarget, i = e.handleObj;
                                    return r && (r === this || E.contains(this, r)) || (e.type = i.origType,
                                        n = i.handler.apply(this, arguments),
                                        e.type = t),
                                        n
                                }
                            }
                        }
                        )),
                        E.fn.extend({
                            on: function (e, t, n, r) {
                                return Me(this, e, t, n, r)
                            },
                            one: function (e, t, n, r) {
                                return Me(this, e, t, n, r, 1)
                            },
                            off: function (e, t, n) {
                                var r, i;
                                if (e && e.preventDefault && e.handleObj)
                                    return r = e.handleObj,
                                        E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                                        this;
                                if ("object" == typeof e) {
                                    for (i in e)
                                        this.off(i, t, e[i]);
                                    return this
                                }
                                return !1 !== t && "function" != typeof t || (n = t,
                                    t = void 0),
                                    !1 === n && (n = Pe),
                                    this.each((function () {
                                        E.event.remove(this, e, n, t)
                                    }
                                    ))
                            }
                        });
                    var Ie = /<script|<style|<link/i
                        , We = /checked\s*(?:[^=]|=\s*.checked.)/i
                        , Fe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                    function $e(e, t) {
                        return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
                    }
                    function _e(e) {
                        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                            e
                    }
                    function Be(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                            e
                    }
                    function ze(e, t) {
                        var n, r, i, o, a, s;
                        if (1 === t.nodeType) {
                            if (se.hasData(e) && (s = se.get(e).events))
                                for (i in se.remove(t, "handle events"),
                                    s)
                                    for (n = 0,
                                        r = s[i].length; n < r; n++)
                                        E.event.add(t, i, s[i][n]);
                            ue.hasData(e) && (o = ue.access(e),
                                a = E.extend({}, o),
                                ue.set(t, a))
                        }
                    }
                    function Xe(e, t) {
                        var n = t.nodeName.toLowerCase();
                        "input" === n && Ee.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                    }
                    function Ue(e, t, n, r) {
                        t = u(t);
                        var i, o, a, s, l, c, f = 0, p = e.length, d = p - 1, h = t[0], g = y(h);
                        if (g || p > 1 && "string" == typeof h && !v.checkClone && We.test(h))
                            return e.each((function (i) {
                                var o = e.eq(i);
                                g && (t[0] = h.call(this, i, o.html())),
                                    Ue(o, t, n, r)
                            }
                            ));
                        if (p && (o = (i = Le(t, e[0].ownerDocument, !1, e, r)).firstChild,
                            1 === i.childNodes.length && (i = o),
                            o || r)) {
                            for (s = (a = E.map(De(i, "script"), _e)).length; f < p; f++)
                                l = i,
                                    f !== d && (l = E.clone(l, !0, !0),
                                        s && E.merge(a, De(l, "script"))),
                                    n.call(e[f], l, f);
                            if (s)
                                for (c = a[a.length - 1].ownerDocument,
                                    E.map(a, Be),
                                    f = 0; f < s; f++)
                                    l = a[f],
                                        je.test(l.type || "") && !se.access(l, "globalEval") && E.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                                            nonce: l.nonce || l.getAttribute("nonce")
                                        }, c) : w(l.textContent.replace(Fe, ""), l, c))
                        }
                        return e
                    }
                    function Ve(e, t, n) {
                        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                            n || 1 !== r.nodeType || E.cleanData(De(r)),
                                r.parentNode && (n && ve(r) && Ne(De(r, "script")),
                                    r.parentNode.removeChild(r));
                        return e
                    }
                    E.extend({
                        htmlPrefilter: function (e) {
                            return e
                        },
                        clone: function (e, t, n) {
                            var r, i, o, a, s = e.cloneNode(!0), u = ve(e);
                            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                                for (a = De(s),
                                    r = 0,
                                    i = (o = De(e)).length; r < i; r++)
                                    Xe(o[r], a[r]);
                            if (t)
                                if (n)
                                    for (o = o || De(e),
                                        a = a || De(s),
                                        r = 0,
                                        i = o.length; r < i; r++)
                                        ze(o[r], a[r]);
                                else
                                    ze(e, s);
                            return (a = De(s, "script")).length > 0 && Ne(a, !u && De(e, "script")),
                                s
                        },
                        cleanData: function (e) {
                            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                                if (oe(n)) {
                                    if (t = n[se.expando]) {
                                        if (t.events)
                                            for (r in t.events)
                                                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                                        n[se.expando] = void 0
                                    }
                                    n[ue.expando] && (n[ue.expando] = void 0)
                                }
                        }
                    }),
                        E.fn.extend({
                            detach: function (e) {
                                return Ve(this, e, !0)
                            },
                            remove: function (e) {
                                return Ve(this, e)
                            },
                            text: function (e) {
                                return ee(this, (function (e) {
                                    return void 0 === e ? E.text(this) : this.empty().each((function () {
                                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                                    }
                                    ))
                                }
                                ), null, e, arguments.length)
                            },
                            append: function () {
                                return Ue(this, arguments, (function (e) {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $e(this, e).appendChild(e)
                                }
                                ))
                            },
                            prepend: function () {
                                return Ue(this, arguments, (function (e) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var t = $e(this, e);
                                        t.insertBefore(e, t.firstChild)
                                    }
                                }
                                ))
                            },
                            before: function () {
                                return Ue(this, arguments, (function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this)
                                }
                                ))
                            },
                            after: function () {
                                return Ue(this, arguments, (function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                                }
                                ))
                            },
                            empty: function () {
                                for (var e, t = 0; null != (e = this[t]); t++)
                                    1 === e.nodeType && (E.cleanData(De(e, !1)),
                                        e.textContent = "");
                                return this
                            },
                            clone: function (e, t) {
                                return e = null != e && e,
                                    t = null == t ? e : t,
                                    this.map((function () {
                                        return E.clone(this, e, t)
                                    }
                                    ))
                            },
                            html: function (e) {
                                return ee(this, (function (e) {
                                    var t = this[0] || {}
                                        , n = 0
                                        , r = this.length;
                                    if (void 0 === e && 1 === t.nodeType)
                                        return t.innerHTML;
                                    if ("string" == typeof e && !Ie.test(e) && !Ae[(ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                                        e = E.htmlPrefilter(e);
                                        try {
                                            for (; n < r; n++)
                                                1 === (t = this[n] || {}).nodeType && (E.cleanData(De(t, !1)),
                                                    t.innerHTML = e);
                                            t = 0
                                        } catch (e) { }
                                    }
                                    t && this.empty().append(e)
                                }
                                ), null, e, arguments.length)
                            },
                            replaceWith: function () {
                                var e = [];
                                return Ue(this, arguments, (function (t) {
                                    var n = this.parentNode;
                                    E.inArray(this, e) < 0 && (E.cleanData(De(this)),
                                        n && n.replaceChild(t, this))
                                }
                                ), e)
                            }
                        }),
                        E.each({
                            appendTo: "append",
                            prependTo: "prepend",
                            insertBefore: "before",
                            insertAfter: "after",
                            replaceAll: "replaceWith"
                        }, (function (e, t) {
                            E.fn[e] = function (e) {
                                for (var n, r = [], i = E(e), o = i.length - 1, a = 0; a <= o; a++)
                                    n = a === o ? this : this.clone(!0),
                                        E(i[a])[t](n),
                                        l.apply(r, n.get());
                                return this.pushStack(r)
                            }
                        }
                        ));
                    var Ge = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i")
                        , Ye = /^--/
                        , Qe = function (e) {
                            var t = e.ownerDocument.defaultView;
                            return t && t.opener || (t = r),
                                t.getComputedStyle(e)
                        }
                        , Je = function (e, t, n) {
                            var r, i, o = {};
                            for (i in t)
                                o[i] = e.style[i],
                                    e.style[i] = t[i];
                            for (i in r = n.call(e),
                                t)
                                e.style[i] = o[i];
                            return r
                        }
                        , Ke = new RegExp(he.join("|"), "i");
                    function Ze(e, t, n) {
                        var r, i, o, a, s = Ye.test(t), u = e.style;
                        return (n = n || Qe(e)) && (a = n.getPropertyValue(t) || n[t],
                            s && a && (a = a.replace(L, "$1") || void 0),
                            "" !== a || ve(e) || (a = E.style(e, t)),
                            !v.pixelBoxStyles() && Ge.test(a) && Ke.test(t) && (r = u.width,
                                i = u.minWidth,
                                o = u.maxWidth,
                                u.minWidth = u.maxWidth = u.width = a,
                                a = n.width,
                                u.width = r,
                                u.minWidth = i,
                                u.maxWidth = o)),
                            void 0 !== a ? a + "" : a
                    }
                    function et(e, t) {
                        return {
                            get: function () {
                                if (!e())
                                    return (this.get = t).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }
                    !function () {
                        function e() {
                            if (c) {
                                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                                    c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                                    ge.appendChild(l).appendChild(c);
                                var e = r.getComputedStyle(c);
                                n = "1%" !== e.top,
                                    u = 12 === t(e.marginLeft),
                                    c.style.right = "60%",
                                    a = 36 === t(e.right),
                                    i = 36 === t(e.width),
                                    c.style.position = "absolute",
                                    o = 12 === t(c.offsetWidth / 3),
                                    ge.removeChild(l),
                                    c = null
                            }
                        }
                        function t(e) {
                            return Math.round(parseFloat(e))
                        }
                        var n, i, o, a, s, u, l = x.createElement("div"), c = x.createElement("div");
                        c.style && (c.style.backgroundClip = "content-box",
                            c.cloneNode(!0).style.backgroundClip = "",
                            v.clearCloneStyle = "content-box" === c.style.backgroundClip,
                            E.extend(v, {
                                boxSizingReliable: function () {
                                    return e(),
                                        i
                                },
                                pixelBoxStyles: function () {
                                    return e(),
                                        a
                                },
                                pixelPosition: function () {
                                    return e(),
                                        n
                                },
                                reliableMarginLeft: function () {
                                    return e(),
                                        u
                                },
                                scrollboxSize: function () {
                                    return e(),
                                        o
                                },
                                reliableTrDimensions: function () {
                                    var e, t, n, i;
                                    return null == s && (e = x.createElement("table"),
                                        t = x.createElement("tr"),
                                        n = x.createElement("div"),
                                        e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                                        t.style.cssText = "box-sizing:content-box;border:1px solid",
                                        t.style.height = "1px",
                                        n.style.height = "9px",
                                        n.style.display = "block",
                                        ge.appendChild(e).appendChild(t).appendChild(n),
                                        i = r.getComputedStyle(t),
                                        s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight,
                                        ge.removeChild(e)),
                                        s
                                }
                            }))
                    }();
                    var tt = ["Webkit", "Moz", "ms"]
                        , nt = x.createElement("div").style
                        , rt = {};
                    function it(e) {
                        return E.cssProps[e] || rt[e] || (e in nt ? e : rt[e] = function (e) {
                            for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--;)
                                if ((e = tt[n] + t) in nt)
                                    return e
                        }(e) || e)
                    }
                    var ot = /^(none|table(?!-c[ea]).+)/
                        , at = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        }
                        , st = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        };
                    function ut(e, t, n) {
                        var r = de.exec(t);
                        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                    }
                    function lt(e, t, n, r, i, o) {
                        var a = "width" === t ? 1 : 0
                            , s = 0
                            , u = 0
                            , l = 0;
                        if (n === (r ? "border" : "content"))
                            return 0;
                        for (; a < 4; a += 2)
                            "margin" === n && (l += E.css(e, n + he[a], !0, i)),
                                r ? ("content" === n && (u -= E.css(e, "padding" + he[a], !0, i)),
                                    "margin" !== n && (u -= E.css(e, "border" + he[a] + "Width", !0, i))) : (u += E.css(e, "padding" + he[a], !0, i),
                                        "padding" !== n ? u += E.css(e, "border" + he[a] + "Width", !0, i) : s += E.css(e, "border" + he[a] + "Width", !0, i));
                        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
                            u + l
                    }
                    function ct(e, t, n) {
                        var r = Qe(e)
                            , i = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r)
                            , o = i
                            , a = Ze(e, t, r)
                            , s = "offset" + t[0].toUpperCase() + t.slice(1);
                        if (Ge.test(a)) {
                            if (!n)
                                return a;
                            a = "auto"
                        }
                        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && j(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r),
                            (o = s in e) && (a = e[s])),
                            (a = parseFloat(a) || 0) + lt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                    }
                    function ft(e, t, n, r, i) {
                        return new ft.prototype.init(e, t, n, r, i)
                    }
                    E.extend({
                        cssHooks: {
                            opacity: {
                                get: function (e, t) {
                                    if (t) {
                                        var n = Ze(e, "opacity");
                                        return "" === n ? "1" : n
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            aspectRatio: !0,
                            borderImageSlice: !0,
                            columnCount: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            scale: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0,
                            fillOpacity: !0,
                            floodOpacity: !0,
                            stopOpacity: !0,
                            strokeMiterlimit: !0,
                            strokeOpacity: !0
                        },
                        cssProps: {},
                        style: function (e, t, n, r) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var i, o, a, s = ie(t), u = Ye.test(t), l = e.style;
                                if (u || (t = it(s)),
                                    a = E.cssHooks[t] || E.cssHooks[s],
                                    void 0 === n)
                                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                                "string" == (o = typeof n) && (i = de.exec(n)) && i[1] && (n = xe(e, t, i),
                                    o = "number"),
                                    null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")),
                                        v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                        a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                            }
                        },
                        css: function (e, t, n, r) {
                            var i, o, a, s = ie(t);
                            return Ye.test(t) || (t = it(s)),
                                (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                                void 0 === i && (i = Ze(e, t, r)),
                                "normal" === i && t in st && (i = st[t]),
                                "" === n || n ? (o = parseFloat(i),
                                    !0 === n || isFinite(o) ? o || 0 : i) : i
                        }
                    }),
                        E.each(["height", "width"], (function (e, t) {
                            E.cssHooks[t] = {
                                get: function (e, n, r) {
                                    if (n)
                                        return !ot.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ct(e, t, r) : Je(e, at, (function () {
                                            return ct(e, t, r)
                                        }
                                        ))
                                },
                                set: function (e, n, r) {
                                    var i, o = Qe(e), a = !v.scrollboxSize() && "absolute" === o.position, s = (a || r) && "border-box" === E.css(e, "boxSizing", !1, o), u = r ? lt(e, t, r, s, o) : 0;
                                    return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - lt(e, t, "border", !1, o) - .5)),
                                        u && (i = de.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                                            n = E.css(e, t)),
                                        ut(0, n, u)
                                }
                            }
                        }
                        )),
                        E.cssHooks.marginLeft = et(v.reliableMarginLeft, (function (e, t) {
                            if (t)
                                return (parseFloat(Ze(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {
                                    marginLeft: 0
                                }, (function () {
                                    return e.getBoundingClientRect().left
                                }
                                ))) + "px"
                        }
                        )),
                        E.each({
                            margin: "",
                            padding: "",
                            border: "Width"
                        }, (function (e, t) {
                            E.cssHooks[e + t] = {
                                expand: function (n) {
                                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                                        i[e + he[r] + t] = o[r] || o[r - 2] || o[0];
                                    return i
                                }
                            },
                                "margin" !== e && (E.cssHooks[e + t].set = ut)
                        }
                        )),
                        E.fn.extend({
                            css: function (e, t) {
                                return ee(this, (function (e, t, n) {
                                    var r, i, o = {}, a = 0;
                                    if (Array.isArray(t)) {
                                        for (r = Qe(e),
                                            i = t.length; a < i; a++)
                                            o[t[a]] = E.css(e, t[a], !1, r);
                                        return o
                                    }
                                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                                }
                                ), e, t, arguments.length > 1)
                            }
                        }),
                        E.Tween = ft,
                        ft.prototype = {
                            constructor: ft,
                            init: function (e, t, n, r, i, o) {
                                this.elem = e,
                                    this.prop = n,
                                    this.easing = i || E.easing._default,
                                    this.options = t,
                                    this.start = this.now = this.cur(),
                                    this.end = r,
                                    this.unit = o || (E.cssNumber[n] ? "" : "px")
                            },
                            cur: function () {
                                var e = ft.propHooks[this.prop];
                                return e && e.get ? e.get(this) : ft.propHooks._default.get(this)
                            },
                            run: function (e) {
                                var t, n = ft.propHooks[this.prop];
                                return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                                    this.now = (this.end - this.start) * t + this.start,
                                    this.options.step && this.options.step.call(this.elem, this.now, this),
                                    n && n.set ? n.set(this) : ft.propHooks._default.set(this),
                                    this
                            }
                        },
                        ft.prototype.init.prototype = ft.prototype,
                        ft.propHooks = {
                            _default: {
                                get: function (e) {
                                    var t;
                                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                                },
                                set: function (e) {
                                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[it(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                                }
                            }
                        },
                        ft.propHooks.scrollTop = ft.propHooks.scrollLeft = {
                            set: function (e) {
                                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                            }
                        },
                        E.easing = {
                            linear: function (e) {
                                return e
                            },
                            swing: function (e) {
                                return .5 - Math.cos(e * Math.PI) / 2
                            },
                            _default: "swing"
                        },
                        E.fx = ft.prototype.init,
                        E.fx.step = {};
                    var pt, dt, ht = /^(?:toggle|show|hide)$/, gt = /queueHooks$/;
                    function vt() {
                        dt && (!1 === x.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(vt) : r.setTimeout(vt, E.fx.interval),
                            E.fx.tick())
                    }
                    function yt() {
                        return r.setTimeout((function () {
                            pt = void 0
                        }
                        )),
                            pt = Date.now()
                    }
                    function mt(e, t) {
                        var n, r = 0, i = {
                            height: e
                        };
                        for (t = t ? 1 : 0; r < 4; r += 2 - t)
                            i["margin" + (n = he[r])] = i["padding" + n] = e;
                        return t && (i.opacity = i.width = e),
                            i
                    }
                    function xt(e, t, n) {
                        for (var r, i = (bt.tweeners[t] || []).concat(bt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                            if (r = i[o].call(n, t, e))
                                return r
                    }
                    function bt(e, t, n) {
                        var r, i, o = 0, a = bt.prefilters.length, s = E.Deferred().always((function () {
                            delete u.elem
                        }
                        )), u = function () {
                            if (i)
                                return !1;
                            for (var t = pt || yt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                                l.tweens[o].run(r);
                            return s.notifyWith(e, [l, r, n]),
                                r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
                                    s.resolveWith(e, [l]),
                                    !1)
                        }, l = s.promise({
                            elem: e,
                            props: E.extend({}, t),
                            opts: E.extend(!0, {
                                specialEasing: {},
                                easing: E.easing._default
                            }, n),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: pt || yt(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function (t, n) {
                                var r = E.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                return l.tweens.push(r),
                                    r
                            },
                            stop: function (t) {
                                var n = 0
                                    , r = t ? l.tweens.length : 0;
                                if (i)
                                    return this;
                                for (i = !0; n < r; n++)
                                    l.tweens[n].run(1);
                                return t ? (s.notifyWith(e, [l, 1, 0]),
                                    s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                                    this
                            }
                        }), c = l.props;
                        for (function (e, t) {
                            var n, r, i, o, a;
                            for (n in e)
                                if (i = t[r = ie(n)],
                                    o = e[n],
                                    Array.isArray(o) && (i = o[1],
                                        o = e[n] = o[0]),
                                    n !== r && (e[r] = o,
                                        delete e[n]),
                                    (a = E.cssHooks[r]) && "expand" in a)
                                    for (n in o = a.expand(o),
                                        delete e[r],
                                        o)
                                        n in e || (e[n] = o[n],
                                            t[n] = i);
                                else
                                    t[r] = i
                        }(c, l.opts.specialEasing); o < a; o++)
                            if (r = bt.prefilters[o].call(l, e, c, l.opts))
                                return y(r.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                                    r;
                        return E.map(c, xt, l),
                            y(l.opts.start) && l.opts.start.call(e, l),
                            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                            E.fx.timer(E.extend(u, {
                                elem: e,
                                anim: l,
                                queue: l.opts.queue
                            })),
                            l
                    }
                    E.Animation = E.extend(bt, {
                        tweeners: {
                            "*": [function (e, t) {
                                var n = this.createTween(e, t);
                                return xe(n.elem, e, de.exec(t), n),
                                    n
                            }
                            ]
                        },
                        tweener: function (e, t) {
                            y(e) ? (t = e,
                                e = ["*"]) : e = e.match(V);
                            for (var n, r = 0, i = e.length; r < i; r++)
                                n = e[r],
                                    bt.tweeners[n] = bt.tweeners[n] || [],
                                    bt.tweeners[n].unshift(t)
                        },
                        prefilters: [function (e, t, n) {
                            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && me(e), v = se.get(e, "fxshow");
                            for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                                s = a.empty.fire,
                                a.empty.fire = function () {
                                    a.unqueued || s()
                                }
                            ),
                                a.unqueued++,
                                p.always((function () {
                                    p.always((function () {
                                        a.unqueued--,
                                            E.queue(e, "fx").length || a.empty.fire()
                                    }
                                    ))
                                }
                                ))),
                                t)
                                if (i = t[r],
                                    ht.test(i)) {
                                    if (delete t[r],
                                        o = o || "toggle" === i,
                                        i === (g ? "hide" : "show")) {
                                        if ("show" !== i || !v || void 0 === v[r])
                                            continue;
                                        g = !0
                                    }
                                    d[r] = v && v[r] || E.style(e, r)
                                }
                            if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                                    null == (l = v && v.display) && (l = se.get(e, "display")),
                                    "none" === (c = E.css(e, "display")) && (l ? c = l : (Te([e], !0),
                                        l = e.style.display || l,
                                        c = E.css(e, "display"),
                                        Te([e]))),
                                    ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (p.done((function () {
                                        h.display = l
                                    }
                                    )),
                                        null == l && (c = h.display,
                                            l = "none" === c ? "" : c)),
                                        h.display = "inline-block")),
                                    n.overflow && (h.overflow = "hidden",
                                        p.always((function () {
                                            h.overflow = n.overflow[0],
                                                h.overflowX = n.overflow[1],
                                                h.overflowY = n.overflow[2]
                                        }
                                        ))),
                                    u = !1,
                                    d)
                                    u || (v ? "hidden" in v && (g = v.hidden) : v = se.access(e, "fxshow", {
                                        display: l
                                    }),
                                        o && (v.hidden = !g),
                                        g && Te([e], !0),
                                        p.done((function () {
                                            for (r in g || Te([e]),
                                                se.remove(e, "fxshow"),
                                                d)
                                                E.style(e, r, d[r])
                                        }
                                        ))),
                                        u = xt(g ? v[r] : 0, r, p),
                                        r in v || (v[r] = u.start,
                                            g && (u.end = u.start,
                                                u.start = 0))
                        }
                        ],
                        prefilter: function (e, t) {
                            t ? bt.prefilters.unshift(e) : bt.prefilters.push(e)
                        }
                    }),
                        E.speed = function (e, t, n) {
                            var r = e && "object" == typeof e ? E.extend({}, e) : {
                                complete: n || !n && t || y(e) && e,
                                duration: e,
                                easing: n && t || t && !y(t) && t
                            };
                            return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default),
                                null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                                r.old = r.complete,
                                r.complete = function () {
                                    y(r.old) && r.old.call(this),
                                        r.queue && E.dequeue(this, r.queue)
                                }
                                ,
                                r
                        }
                        ,
                        E.fn.extend({
                            fadeTo: function (e, t, n, r) {
                                return this.filter(me).css("opacity", 0).show().end().animate({
                                    opacity: t
                                }, e, n, r)
                            },
                            animate: function (e, t, n, r) {
                                var i = E.isEmptyObject(e)
                                    , o = E.speed(t, n, r)
                                    , a = function () {
                                        var t = bt(this, E.extend({}, e), o);
                                        (i || se.get(this, "finish")) && t.stop(!0)
                                    };
                                return a.finish = a,
                                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                            },
                            stop: function (e, t, n) {
                                var r = function (e) {
                                    var t = e.stop;
                                    delete e.stop,
                                        t(n)
                                };
                                return "string" != typeof e && (n = t,
                                    t = e,
                                    e = void 0),
                                    t && this.queue(e || "fx", []),
                                    this.each((function () {
                                        var t = !0
                                            , i = null != e && e + "queueHooks"
                                            , o = E.timers
                                            , a = se.get(this);
                                        if (i)
                                            a[i] && a[i].stop && r(a[i]);
                                        else
                                            for (i in a)
                                                a[i] && a[i].stop && gt.test(i) && r(a[i]);
                                        for (i = o.length; i--;)
                                            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                                t = !1,
                                                o.splice(i, 1));
                                        !t && n || E.dequeue(this, e)
                                    }
                                    ))
                            },
                            finish: function (e) {
                                return !1 !== e && (e = e || "fx"),
                                    this.each((function () {
                                        var t, n = se.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = E.timers, a = r ? r.length : 0;
                                        for (n.finish = !0,
                                            E.queue(this, e, []),
                                            i && i.stop && i.stop.call(this, !0),
                                            t = o.length; t--;)
                                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                                o.splice(t, 1));
                                        for (t = 0; t < a; t++)
                                            r[t] && r[t].finish && r[t].finish.call(this);
                                        delete n.finish
                                    }
                                    ))
                            }
                        }),
                        E.each(["toggle", "show", "hide"], (function (e, t) {
                            var n = E.fn[t];
                            E.fn[t] = function (e, r, i) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(mt(t, !0), e, r, i)
                            }
                        }
                        )),
                        E.each({
                            slideDown: mt("show"),
                            slideUp: mt("hide"),
                            slideToggle: mt("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, (function (e, t) {
                            E.fn[e] = function (e, n, r) {
                                return this.animate(t, e, n, r)
                            }
                        }
                        )),
                        E.timers = [],
                        E.fx.tick = function () {
                            var e, t = 0, n = E.timers;
                            for (pt = Date.now(); t < n.length; t++)
                                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                            n.length || E.fx.stop(),
                                pt = void 0
                        }
                        ,
                        E.fx.timer = function (e) {
                            E.timers.push(e),
                                E.fx.start()
                        }
                        ,
                        E.fx.interval = 13,
                        E.fx.start = function () {
                            dt || (dt = !0,
                                vt())
                        }
                        ,
                        E.fx.stop = function () {
                            dt = null
                        }
                        ,
                        E.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        },
                        E.fn.delay = function (e, t) {
                            return e = E.fx && E.fx.speeds[e] || e,
                                t = t || "fx",
                                this.queue(t, (function (t, n) {
                                    var i = r.setTimeout(t, e);
                                    n.stop = function () {
                                        r.clearTimeout(i)
                                    }
                                }
                                ))
                        }
                        ,
                        function () {
                            var e = x.createElement("input")
                                , t = x.createElement("select").appendChild(x.createElement("option"));
                            e.type = "checkbox",
                                v.checkOn = "" !== e.value,
                                v.optSelected = t.selected,
                                (e = x.createElement("input")).value = "t",
                                e.type = "radio",
                                v.radioValue = "t" === e.value
                        }();
                    var wt, Tt = E.expr.attrHandle;
                    E.fn.extend({
                        attr: function (e, t) {
                            return ee(this, E.attr, e, t, arguments.length > 1)
                        },
                        removeAttr: function (e) {
                            return this.each((function () {
                                E.removeAttr(this, e)
                            }
                            ))
                        }
                    }),
                        E.extend({
                            attr: function (e, t, n) {
                                var r, i, o = e.nodeType;
                                if (3 !== o && 8 !== o && 2 !== o)
                                    return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? wt : void 0)),
                                        void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                                            n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
                            },
                            attrHooks: {
                                type: {
                                    set: function (e, t) {
                                        if (!v.radioValue && "radio" === t && j(e, "input")) {
                                            var n = e.value;
                                            return e.setAttribute("type", t),
                                                n && (e.value = n),
                                                t
                                        }
                                    }
                                }
                            },
                            removeAttr: function (e, t) {
                                var n, r = 0, i = t && t.match(V);
                                if (i && 1 === e.nodeType)
                                    for (; n = i[r++];)
                                        e.removeAttribute(n)
                            }
                        }),
                        wt = {
                            set: function (e, t, n) {
                                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
                                    n
                            }
                        },
                        E.each(E.expr.match.bool.source.match(/\w+/g), (function (e, t) {
                            var n = Tt[t] || E.find.attr;
                            Tt[t] = function (e, t, r) {
                                var i, o, a = t.toLowerCase();
                                return r || (o = Tt[a],
                                    Tt[a] = i,
                                    i = null != n(e, t, r) ? a : null,
                                    Tt[a] = o),
                                    i
                            }
                        }
                        ));
                    var Ct = /^(?:input|select|textarea|button)$/i
                        , St = /^(?:a|area)$/i;
                    function Et(e) {
                        return (e.match(V) || []).join(" ")
                    }
                    function kt(e) {
                        return e.getAttribute && e.getAttribute("class") || ""
                    }
                    function jt(e) {
                        return Array.isArray(e) ? e : "string" == typeof e && e.match(V) || []
                    }
                    E.fn.extend({
                        prop: function (e, t) {
                            return ee(this, E.prop, e, t, arguments.length > 1)
                        },
                        removeProp: function (e) {
                            return this.each((function () {
                                delete this[E.propFix[e] || e]
                            }
                            ))
                        }
                    }),
                        E.extend({
                            prop: function (e, t, n) {
                                var r, i, o = e.nodeType;
                                if (3 !== o && 8 !== o && 2 !== o)
                                    return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                                        i = E.propHooks[t]),
                                        void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                            },
                            propHooks: {
                                tabIndex: {
                                    get: function (e) {
                                        var t = E.find.attr(e, "tabindex");
                                        return t ? parseInt(t, 10) : Ct.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                                    }
                                }
                            },
                            propFix: {
                                for: "htmlFor",
                                class: "className"
                            }
                        }),
                        v.optSelected || (E.propHooks.selected = {
                            get: function (e) {
                                var t = e.parentNode;
                                return t && t.parentNode && t.parentNode.selectedIndex,
                                    null
                            },
                            set: function (e) {
                                var t = e.parentNode;
                                t && (t.selectedIndex,
                                    t.parentNode && t.parentNode.selectedIndex)
                            }
                        }),
                        E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
                            E.propFix[this.toLowerCase()] = this
                        }
                        )),
                        E.fn.extend({
                            addClass: function (e) {
                                var t, n, r, i, o, a;
                                return y(e) ? this.each((function (t) {
                                    E(this).addClass(e.call(this, t, kt(this)))
                                }
                                )) : (t = jt(e)).length ? this.each((function () {
                                    if (r = kt(this),
                                        n = 1 === this.nodeType && " " + Et(r) + " ") {
                                        for (o = 0; o < t.length; o++)
                                            i = t[o],
                                                n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                                        a = Et(n),
                                            r !== a && this.setAttribute("class", a)
                                    }
                                }
                                )) : this
                            },
                            removeClass: function (e) {
                                var t, n, r, i, o, a;
                                return y(e) ? this.each((function (t) {
                                    E(this).removeClass(e.call(this, t, kt(this)))
                                }
                                )) : arguments.length ? (t = jt(e)).length ? this.each((function () {
                                    if (r = kt(this),
                                        n = 1 === this.nodeType && " " + Et(r) + " ") {
                                        for (o = 0; o < t.length; o++)
                                            for (i = t[o]; n.indexOf(" " + i + " ") > -1;)
                                                n = n.replace(" " + i + " ", " ");
                                        a = Et(n),
                                            r !== a && this.setAttribute("class", a)
                                    }
                                }
                                )) : this : this.attr("class", "")
                            },
                            toggleClass: function (e, t) {
                                var n, r, i, o, a = typeof e, s = "string" === a || Array.isArray(e);
                                return y(e) ? this.each((function (n) {
                                    E(this).toggleClass(e.call(this, n, kt(this), t), t)
                                }
                                )) : "boolean" == typeof t && s ? t ? this.addClass(e) : this.removeClass(e) : (n = jt(e),
                                    this.each((function () {
                                        if (s)
                                            for (o = E(this),
                                                i = 0; i < n.length; i++)
                                                r = n[i],
                                                    o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                                        else
                                            void 0 !== e && "boolean" !== a || ((r = kt(this)) && se.set(this, "__className__", r),
                                                this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : se.get(this, "__className__") || ""))
                                    }
                                    )))
                            },
                            hasClass: function (e) {
                                var t, n, r = 0;
                                for (t = " " + e + " "; n = this[r++];)
                                    if (1 === n.nodeType && (" " + Et(kt(n)) + " ").indexOf(t) > -1)
                                        return !0;
                                return !1
                            }
                        });
                    var At = /\r/g;
                    E.fn.extend({
                        val: function (e) {
                            var t, n, r, i = this[0];
                            return arguments.length ? (r = y(e),
                                this.each((function (n) {
                                    var i;
                                    1 === this.nodeType && (null == (i = r ? e.call(this, n, E(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = E.map(i, (function (e) {
                                        return null == e ? "" : e + ""
                                    }
                                    ))),
                                        (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                                }
                                ))) : i ? (t = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(At, "") : null == n ? "" : n : void 0
                        }
                    }),
                        E.extend({
                            valHooks: {
                                option: {
                                    get: function (e) {
                                        var t = E.find.attr(e, "value");
                                        return null != t ? t : Et(E.text(e))
                                    }
                                },
                                select: {
                                    get: function (e) {
                                        var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                                                if (t = E(n).val(),
                                                    a)
                                                    return t;
                                                s.push(t)
                                            }
                                        return s
                                    },
                                    set: function (e, t) {
                                        for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--;)
                                            ((r = i[a]).selected = E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0);
                                        return n || (e.selectedIndex = -1),
                                            o
                                    }
                                }
                            }
                        }),
                        E.each(["radio", "checkbox"], (function () {
                            E.valHooks[this] = {
                                set: function (e, t) {
                                    if (Array.isArray(t))
                                        return e.checked = E.inArray(E(e).val(), t) > -1
                                }
                            },
                                v.checkOn || (E.valHooks[this].get = function (e) {
                                    return null === e.getAttribute("value") ? "on" : e.value
                                }
                                )
                        }
                        ));
                    var Dt = r.location
                        , Nt = {
                            guid: Date.now()
                        }
                        , qt = /\?/;
                    E.parseXML = function (e) {
                        var t, n;
                        if (!e || "string" != typeof e)
                            return null;
                        try {
                            t = (new r.DOMParser).parseFromString(e, "text/xml")
                        } catch (e) { }
                        return n = t && t.getElementsByTagName("parsererror")[0],
                            t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, (function (e) {
                                return e.textContent
                            }
                            )).join("\n") : e)),
                            t
                    }
                        ;
                    var Lt = /^(?:focusinfocus|focusoutblur)$/
                        , Ht = function (e) {
                            e.stopPropagation()
                        };
                    E.extend(E.event, {
                        trigger: function (e, t, n, i) {
                            var o, a, s, u, l, c, f, p, h = [n || x], g = d.call(e, "type") ? e.type : e, v = d.call(e, "namespace") ? e.namespace.split(".") : [];
                            if (a = p = s = n = n || x,
                                3 !== n.nodeType && 8 !== n.nodeType && !Lt.test(g + E.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."),
                                    g = v.shift(),
                                    v.sort()),
                                    l = g.indexOf(":") < 0 && "on" + g,
                                    (e = e[E.expando] ? e : new E.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3,
                                    e.namespace = v.join("."),
                                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                                    e.result = void 0,
                                    e.target || (e.target = n),
                                    t = null == t ? [e] : E.makeArray(t, [e]),
                                    f = E.event.special[g] || {},
                                    i || !f.trigger || !1 !== f.trigger.apply(n, t))) {
                                if (!i && !f.noBubble && !m(n)) {
                                    for (u = f.delegateType || g,
                                        Lt.test(u + g) || (a = a.parentNode); a; a = a.parentNode)
                                        h.push(a),
                                            s = a;
                                    s === (n.ownerDocument || x) && h.push(s.defaultView || s.parentWindow || r)
                                }
                                for (o = 0; (a = h[o++]) && !e.isPropagationStopped();)
                                    p = a,
                                        e.type = o > 1 ? u : f.bindType || g,
                                        (c = (se.get(a, "events") || Object.create(null))[e.type] && se.get(a, "handle")) && c.apply(a, t),
                                        (c = l && a[l]) && c.apply && oe(a) && (e.result = c.apply(a, t),
                                            !1 === e.result && e.preventDefault());
                                return e.type = g,
                                    i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !oe(n) || l && y(n[g]) && !m(n) && ((s = n[l]) && (n[l] = null),
                                        E.event.triggered = g,
                                        e.isPropagationStopped() && p.addEventListener(g, Ht),
                                        n[g](),
                                        e.isPropagationStopped() && p.removeEventListener(g, Ht),
                                        E.event.triggered = void 0,
                                        s && (n[l] = s)),
                                    e.result
                            }
                        },
                        simulate: function (e, t, n) {
                            var r = E.extend(new E.Event, n, {
                                type: e,
                                isSimulated: !0
                            });
                            E.event.trigger(r, null, t)
                        }
                    }),
                        E.fn.extend({
                            trigger: function (e, t) {
                                return this.each((function () {
                                    E.event.trigger(e, t, this)
                                }
                                ))
                            },
                            triggerHandler: function (e, t) {
                                var n = this[0];
                                if (n)
                                    return E.event.trigger(e, t, n, !0)
                            }
                        });
                    var Ot = /\[\]$/
                        , Pt = /\r?\n/g
                        , Mt = /^(?:submit|button|image|reset|file)$/i
                        , Rt = /^(?:input|select|textarea|keygen)/i;
                    function It(e, t, n, r) {
                        var i;
                        if (Array.isArray(t))
                            E.each(t, (function (t, i) {
                                n || Ot.test(e) ? r(e, i) : It(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                            }
                            ));
                        else if (n || "object" !== T(t))
                            r(e, t);
                        else
                            for (i in t)
                                It(e + "[" + i + "]", t[i], n, r)
                    }
                    E.param = function (e, t) {
                        var n, r = [], i = function (e, t) {
                            var n = y(t) ? t() : t;
                            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                        };
                        if (null == e)
                            return "";
                        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
                            E.each(e, (function () {
                                i(this.name, this.value)
                            }
                            ));
                        else
                            for (n in e)
                                It(n, e[n], t, i);
                        return r.join("&")
                    }
                        ,
                        E.fn.extend({
                            serialize: function () {
                                return E.param(this.serializeArray())
                            },
                            serializeArray: function () {
                                return this.map((function () {
                                    var e = E.prop(this, "elements");
                                    return e ? E.makeArray(e) : this
                                }
                                )).filter((function () {
                                    var e = this.type;
                                    return this.name && !E(this).is(":disabled") && Rt.test(this.nodeName) && !Mt.test(e) && (this.checked || !Ee.test(e))
                                }
                                )).map((function (e, t) {
                                    var n = E(this).val();
                                    return null == n ? null : Array.isArray(n) ? E.map(n, (function (e) {
                                        return {
                                            name: t.name,
                                            value: e.replace(Pt, "\r\n")
                                        }
                                    }
                                    )) : {
                                        name: t.name,
                                        value: n.replace(Pt, "\r\n")
                                    }
                                }
                                )).get()
                            }
                        });
                    var Wt = /%20/g
                        , Ft = /#.*$/
                        , $t = /([?&])_=[^&]*/
                        , _t = /^(.*?):[ \t]*([^\r\n]*)$/gm
                        , Bt = /^(?:GET|HEAD)$/
                        , zt = /^\/\//
                        , Xt = {}
                        , Ut = {}
                        , Vt = "*/".concat("*")
                        , Gt = x.createElement("a");
                    function Yt(e) {
                        return function (t, n) {
                            "string" != typeof t && (n = t,
                                t = "*");
                            var r, i = 0, o = t.toLowerCase().match(V) || [];
                            if (y(n))
                                for (; r = o[i++];)
                                    "+" === r[0] ? (r = r.slice(1) || "*",
                                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                        }
                    }
                    function Qt(e, t, n, r) {
                        var i = {}
                            , o = e === Ut;
                        function a(s) {
                            var u;
                            return i[s] = !0,
                                E.each(e[s] || [], (function (e, s) {
                                    var l = s(t, n, r);
                                    return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                                        a(l),
                                        !1)
                                }
                                )),
                                u
                        }
                        return a(t.dataTypes[0]) || !i["*"] && a("*")
                    }
                    function Jt(e, t) {
                        var n, r, i = E.ajaxSettings.flatOptions || {};
                        for (n in t)
                            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                        return r && E.extend(!0, e, r),
                            e
                    }
                    Gt.href = Dt.href,
                        E.extend({
                            active: 0,
                            lastModified: {},
                            etag: {},
                            ajaxSettings: {
                                url: Dt.href,
                                type: "GET",
                                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Dt.protocol),
                                global: !0,
                                processData: !0,
                                async: !0,
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                accepts: {
                                    "*": Vt,
                                    text: "text/plain",
                                    html: "text/html",
                                    xml: "application/xml, text/xml",
                                    json: "application/json, text/javascript"
                                },
                                contents: {
                                    xml: /\bxml\b/,
                                    html: /\bhtml/,
                                    json: /\bjson\b/
                                },
                                responseFields: {
                                    xml: "responseXML",
                                    text: "responseText",
                                    json: "responseJSON"
                                },
                                converters: {
                                    "* text": String,
                                    "text html": !0,
                                    "text json": JSON.parse,
                                    "text xml": E.parseXML
                                },
                                flatOptions: {
                                    url: !0,
                                    context: !0
                                }
                            },
                            ajaxSetup: function (e, t) {
                                return t ? Jt(Jt(e, E.ajaxSettings), t) : Jt(E.ajaxSettings, e)
                            },
                            ajaxPrefilter: Yt(Xt),
                            ajaxTransport: Yt(Ut),
                            ajax: function (e, t) {
                                "object" == typeof e && (t = e,
                                    e = void 0),
                                    t = t || {};
                                var n, i, o, a, s, u, l, c, f, p, d = E.ajaxSetup({}, t), h = d.context || d, g = d.context && (h.nodeType || h.jquery) ? E(h) : E.event, v = E.Deferred(), y = E.Callbacks("once memory"), m = d.statusCode || {}, b = {}, w = {}, T = "canceled", C = {
                                    readyState: 0,
                                    getResponseHeader: function (e) {
                                        var t;
                                        if (l) {
                                            if (!a)
                                                for (a = {}; t = _t.exec(o);)
                                                    a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                            t = a[e.toLowerCase() + " "]
                                        }
                                        return null == t ? null : t.join(", ")
                                    },
                                    getAllResponseHeaders: function () {
                                        return l ? o : null
                                    },
                                    setRequestHeader: function (e, t) {
                                        return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                                            b[e] = t),
                                            this
                                    },
                                    overrideMimeType: function (e) {
                                        return null == l && (d.mimeType = e),
                                            this
                                    },
                                    statusCode: function (e) {
                                        var t;
                                        if (e)
                                            if (l)
                                                C.always(e[C.status]);
                                            else
                                                for (t in e)
                                                    m[t] = [m[t], e[t]];
                                        return this
                                    },
                                    abort: function (e) {
                                        var t = e || T;
                                        return n && n.abort(t),
                                            S(0, t),
                                            this
                                    }
                                };
                                if (v.promise(C),
                                    d.url = ((e || d.url || Dt.href) + "").replace(zt, Dt.protocol + "//"),
                                    d.type = t.method || t.type || d.method || d.type,
                                    d.dataTypes = (d.dataType || "*").toLowerCase().match(V) || [""],
                                    null == d.crossDomain) {
                                    u = x.createElement("a");
                                    try {
                                        u.href = d.url,
                                            u.href = u.href,
                                            d.crossDomain = Gt.protocol + "//" + Gt.host != u.protocol + "//" + u.host
                                    } catch (e) {
                                        d.crossDomain = !0
                                    }
                                }
                                if (d.data && d.processData && "string" != typeof d.data && (d.data = E.param(d.data, d.traditional)),
                                    Qt(Xt, d, t, C),
                                    l)
                                    return C;
                                for (f in (c = E.event && d.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                                    d.type = d.type.toUpperCase(),
                                    d.hasContent = !Bt.test(d.type),
                                    i = d.url.replace(Ft, ""),
                                    d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Wt, "+")) : (p = d.url.slice(i.length),
                                        d.data && (d.processData || "string" == typeof d.data) && (i += (qt.test(i) ? "&" : "?") + d.data,
                                            delete d.data),
                                        !1 === d.cache && (i = i.replace($t, "$1"),
                                            p = (qt.test(i) ? "&" : "?") + "_=" + Nt.guid++ + p),
                                        d.url = i + p),
                                    d.ifModified && (E.lastModified[i] && C.setRequestHeader("If-Modified-Since", E.lastModified[i]),
                                        E.etag[i] && C.setRequestHeader("If-None-Match", E.etag[i])),
                                    (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && C.setRequestHeader("Content-Type", d.contentType),
                                    C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : d.accepts["*"]),
                                    d.headers)
                                    C.setRequestHeader(f, d.headers[f]);
                                if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || l))
                                    return C.abort();
                                if (T = "abort",
                                    y.add(d.complete),
                                    C.done(d.success),
                                    C.fail(d.error),
                                    n = Qt(Ut, d, t, C)) {
                                    if (C.readyState = 1,
                                        c && g.trigger("ajaxSend", [C, d]),
                                        l)
                                        return C;
                                    d.async && d.timeout > 0 && (s = r.setTimeout((function () {
                                        C.abort("timeout")
                                    }
                                    ), d.timeout));
                                    try {
                                        l = !1,
                                            n.send(b, S)
                                    } catch (e) {
                                        if (l)
                                            throw e;
                                        S(-1, e)
                                    }
                                } else
                                    S(-1, "No Transport");
                                function S(e, t, a, u) {
                                    var f, p, x, b, w, T = t;
                                    l || (l = !0,
                                        s && r.clearTimeout(s),
                                        n = void 0,
                                        o = u || "",
                                        C.readyState = e > 0 ? 4 : 0,
                                        f = e >= 200 && e < 300 || 304 === e,
                                        a && (b = function (e, t, n) {
                                            for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)
                                                u.shift(),
                                                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                            if (r)
                                                for (i in s)
                                                    if (s[i] && s[i].test(r)) {
                                                        u.unshift(i);
                                                        break
                                                    }
                                            if (u[0] in n)
                                                o = u[0];
                                            else {
                                                for (i in n) {
                                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                                        o = i;
                                                        break
                                                    }
                                                    a || (a = i)
                                                }
                                                o = o || a
                                            }
                                            if (o)
                                                return o !== u[0] && u.unshift(o),
                                                    n[o]
                                        }(d, C, a)),
                                        !f && E.inArray("script", d.dataTypes) > -1 && E.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function () { }
                                        ),
                                        b = function (e, t, n, r) {
                                            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                                            if (c[1])
                                                for (a in e.converters)
                                                    l[a.toLowerCase()] = e.converters[a];
                                            for (o = c.shift(); o;)
                                                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                                    u = o,
                                                    o = c.shift())
                                                    if ("*" === o)
                                                        o = u;
                                                    else if ("*" !== u && u !== o) {
                                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                                            for (i in l)
                                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                                                        c.unshift(s[1]));
                                                                    break
                                                                }
                                                        if (!0 !== a)
                                                            if (a && e.throws)
                                                                t = a(t);
                                                            else
                                                                try {
                                                                    t = a(t)
                                                                } catch (e) {
                                                                    return {
                                                                        state: "parsererror",
                                                                        error: a ? e : "No conversion from " + u + " to " + o
                                                                    }
                                                                }
                                                    }
                                            return {
                                                state: "success",
                                                data: t
                                            }
                                        }(d, b, C, f),
                                        f ? (d.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (E.lastModified[i] = w),
                                            (w = C.getResponseHeader("etag")) && (E.etag[i] = w)),
                                            204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state,
                                                p = b.data,
                                                f = !(x = b.error))) : (x = T,
                                                    !e && T || (T = "error",
                                                        e < 0 && (e = 0))),
                                        C.status = e,
                                        C.statusText = (t || T) + "",
                                        f ? v.resolveWith(h, [p, T, C]) : v.rejectWith(h, [C, T, x]),
                                        C.statusCode(m),
                                        m = void 0,
                                        c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, d, f ? p : x]),
                                        y.fireWith(h, [C, T]),
                                        c && (g.trigger("ajaxComplete", [C, d]),
                                            --E.active || E.event.trigger("ajaxStop")))
                                }
                                return C
                            },
                            getJSON: function (e, t, n) {
                                return E.get(e, t, n, "json")
                            },
                            getScript: function (e, t) {
                                return E.get(e, void 0, t, "script")
                            }
                        }),
                        E.each(["get", "post"], (function (e, t) {
                            E[t] = function (e, n, r, i) {
                                return y(n) && (i = i || r,
                                    r = n,
                                    n = void 0),
                                    E.ajax(E.extend({
                                        url: e,
                                        type: t,
                                        dataType: i,
                                        data: n,
                                        success: r
                                    }, E.isPlainObject(e) && e))
                            }
                        }
                        )),
                        E.ajaxPrefilter((function (e) {
                            var t;
                            for (t in e.headers)
                                "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                        }
                        )),
                        E._evalUrl = function (e, t, n) {
                            return E.ajax({
                                url: e,
                                type: "GET",
                                dataType: "script",
                                cache: !0,
                                async: !1,
                                global: !1,
                                converters: {
                                    "text script": function () { }
                                },
                                dataFilter: function (e) {
                                    E.globalEval(e, t, n)
                                }
                            })
                        }
                        ,
                        E.fn.extend({
                            wrapAll: function (e) {
                                var t;
                                return this[0] && (y(e) && (e = e.call(this[0])),
                                    t = E(e, this[0].ownerDocument).eq(0).clone(!0),
                                    this[0].parentNode && t.insertBefore(this[0]),
                                    t.map((function () {
                                        for (var e = this; e.firstElementChild;)
                                            e = e.firstElementChild;
                                        return e
                                    }
                                    )).append(this)),
                                    this
                            },
                            wrapInner: function (e) {
                                return y(e) ? this.each((function (t) {
                                    E(this).wrapInner(e.call(this, t))
                                }
                                )) : this.each((function () {
                                    var t = E(this)
                                        , n = t.contents();
                                    n.length ? n.wrapAll(e) : t.append(e)
                                }
                                ))
                            },
                            wrap: function (e) {
                                var t = y(e);
                                return this.each((function (n) {
                                    E(this).wrapAll(t ? e.call(this, n) : e)
                                }
                                ))
                            },
                            unwrap: function (e) {
                                return this.parent(e).not("body").each((function () {
                                    E(this).replaceWith(this.childNodes)
                                }
                                )),
                                    this
                            }
                        }),
                        E.expr.pseudos.hidden = function (e) {
                            return !E.expr.pseudos.visible(e)
                        }
                        ,
                        E.expr.pseudos.visible = function (e) {
                            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                        }
                        ,
                        E.ajaxSettings.xhr = function () {
                            try {
                                return new r.XMLHttpRequest
                            } catch (e) { }
                        }
                        ;
                    var Kt = {
                        0: 200,
                        1223: 204
                    }
                        , Zt = E.ajaxSettings.xhr();
                    v.cors = !!Zt && "withCredentials" in Zt,
                        v.ajax = Zt = !!Zt,
                        E.ajaxTransport((function (e) {
                            var t, n;
                            if (v.cors || Zt && !e.crossDomain)
                                return {
                                    send: function (i, o) {
                                        var a, s = e.xhr();
                                        if (s.open(e.type, e.url, e.async, e.username, e.password),
                                            e.xhrFields)
                                            for (a in e.xhrFields)
                                                s[a] = e.xhrFields[a];
                                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                                            e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                                            i)
                                            s.setRequestHeader(a, i[a]);
                                        t = function (e) {
                                            return function () {
                                                t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                                                    "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Kt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                                        binary: s.response
                                                    } : {
                                                        text: s.responseText
                                                    }, s.getAllResponseHeaders()))
                                            }
                                        }
                                            ,
                                            s.onload = t(),
                                            n = s.onerror = s.ontimeout = t("error"),
                                            void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function () {
                                                4 === s.readyState && r.setTimeout((function () {
                                                    t && n()
                                                }
                                                ))
                                            }
                                            ,
                                            t = t("abort");
                                        try {
                                            s.send(e.hasContent && e.data || null)
                                        } catch (e) {
                                            if (t)
                                                throw e
                                        }
                                    },
                                    abort: function () {
                                        t && t()
                                    }
                                }
                        }
                        )),
                        E.ajaxPrefilter((function (e) {
                            e.crossDomain && (e.contents.script = !1)
                        }
                        )),
                        E.ajaxSetup({
                            accepts: {
                                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                            },
                            contents: {
                                script: /\b(?:java|ecma)script\b/
                            },
                            converters: {
                                "text script": function (e) {
                                    return E.globalEval(e),
                                        e
                                }
                            }
                        }),
                        E.ajaxPrefilter("script", (function (e) {
                            void 0 === e.cache && (e.cache = !1),
                                e.crossDomain && (e.type = "GET")
                        }
                        )),
                        E.ajaxTransport("script", (function (e) {
                            var t, n;
                            if (e.crossDomain || e.scriptAttrs)
                                return {
                                    send: function (r, i) {
                                        t = E("<script>").attr(e.scriptAttrs || {}).prop({
                                            charset: e.scriptCharset,
                                            src: e.url
                                        }).on("load error", n = function (e) {
                                            t.remove(),
                                                n = null,
                                                e && i("error" === e.type ? 404 : 200, e.type)
                                        }
                                        ),
                                            x.head.appendChild(t[0])
                                    },
                                    abort: function () {
                                        n && n()
                                    }
                                }
                        }
                        ));
                    var en, tn = [], nn = /(=)\?(?=&|$)|\?\?/;
                    E.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function () {
                            var e = tn.pop() || E.expando + "_" + Nt.guid++;
                            return this[e] = !0,
                                e
                        }
                    }),
                        E.ajaxPrefilter("json jsonp", (function (e, t, n) {
                            var i, o, a, s = !1 !== e.jsonp && (nn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
                            if (s || "jsonp" === e.dataTypes[0])
                                return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                                    s ? e[s] = e[s].replace(nn, "$1" + i) : !1 !== e.jsonp && (e.url += (qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                                    e.converters["script json"] = function () {
                                        return a || E.error(i + " was not called"),
                                            a[0]
                                    }
                                    ,
                                    e.dataTypes[0] = "json",
                                    o = r[i],
                                    r[i] = function () {
                                        a = arguments
                                    }
                                    ,
                                    n.always((function () {
                                        void 0 === o ? E(r).removeProp(i) : r[i] = o,
                                            e[i] && (e.jsonpCallback = t.jsonpCallback,
                                                tn.push(i)),
                                            a && y(o) && o(a[0]),
                                            a = o = void 0
                                    }
                                    )),
                                    "script"
                        }
                        )),
                        v.createHTMLDocument = ((en = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
                            2 === en.childNodes.length),
                        E.parseHTML = function (e, t, n) {
                            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                                t = !1),
                                t || (v.createHTMLDocument ? ((r = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href,
                                    t.head.appendChild(r)) : t = x),
                                o = !n && [],
                                (i = F.exec(e)) ? [t.createElement(i[1])] : (i = Le([e], t, o),
                                    o && o.length && E(o).remove(),
                                    E.merge([], i.childNodes)));
                            var r, i, o
                        }
                        ,
                        E.fn.load = function (e, t, n) {
                            var r, i, o, a = this, s = e.indexOf(" ");
                            return s > -1 && (r = Et(e.slice(s)),
                                e = e.slice(0, s)),
                                y(t) ? (n = t,
                                    t = void 0) : t && "object" == typeof t && (i = "POST"),
                                a.length > 0 && E.ajax({
                                    url: e,
                                    type: i || "GET",
                                    dataType: "html",
                                    data: t
                                }).done((function (e) {
                                    o = arguments,
                                        a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
                                }
                                )).always(n && function (e, t) {
                                    a.each((function () {
                                        n.apply(this, o || [e.responseText, t, e])
                                    }
                                    ))
                                }
                                ),
                                this
                        }
                        ,
                        E.expr.pseudos.animated = function (e) {
                            return E.grep(E.timers, (function (t) {
                                return e === t.elem
                            }
                            )).length
                        }
                        ,
                        E.offset = {
                            setOffset: function (e, t, n) {
                                var r, i, o, a, s, u, l = E.css(e, "position"), c = E(e), f = {};
                                "static" === l && (e.style.position = "relative"),
                                    s = c.offset(),
                                    o = E.css(e, "top"),
                                    u = E.css(e, "left"),
                                    ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
                                        i = r.left) : (a = parseFloat(o) || 0,
                                            i = parseFloat(u) || 0),
                                    y(t) && (t = t.call(e, n, E.extend({}, s))),
                                    null != t.top && (f.top = t.top - s.top + a),
                                    null != t.left && (f.left = t.left - s.left + i),
                                    "using" in t ? t.using.call(e, f) : c.css(f)
                            }
                        },
                        E.fn.extend({
                            offset: function (e) {
                                if (arguments.length)
                                    return void 0 === e ? this : this.each((function (t) {
                                        E.offset.setOffset(this, e, t)
                                    }
                                    ));
                                var t, n, r = this[0];
                                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                                    n = r.ownerDocument.defaultView,
                                {
                                    top: t.top + n.pageYOffset,
                                    left: t.left + n.pageXOffset
                                }) : {
                                    top: 0,
                                    left: 0
                                } : void 0
                            },
                            position: function () {
                                if (this[0]) {
                                    var e, t, n, r = this[0], i = {
                                        top: 0,
                                        left: 0
                                    };
                                    if ("fixed" === E.css(r, "position"))
                                        t = r.getBoundingClientRect();
                                    else {
                                        for (t = this.offset(),
                                            n = r.ownerDocument,
                                            e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");)
                                            e = e.parentNode;
                                        e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0),
                                            i.left += E.css(e, "borderLeftWidth", !0))
                                    }
                                    return {
                                        top: t.top - i.top - E.css(r, "marginTop", !0),
                                        left: t.left - i.left - E.css(r, "marginLeft", !0)
                                    }
                                }
                            },
                            offsetParent: function () {
                                return this.map((function () {
                                    for (var e = this.offsetParent; e && "static" === E.css(e, "position");)
                                        e = e.offsetParent;
                                    return e || ge
                                }
                                ))
                            }
                        }),
                        E.each({
                            scrollLeft: "pageXOffset",
                            scrollTop: "pageYOffset"
                        }, (function (e, t) {
                            var n = "pageYOffset" === t;
                            E.fn[e] = function (r) {
                                return ee(this, (function (e, r, i) {
                                    var o;
                                    if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                                        void 0 === i)
                                        return o ? o[t] : e[r];
                                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                                }
                                ), e, r, arguments.length)
                            }
                        }
                        )),
                        E.each(["top", "left"], (function (e, t) {
                            E.cssHooks[t] = et(v.pixelPosition, (function (e, n) {
                                if (n)
                                    return n = Ze(e, t),
                                        Ge.test(n) ? E(e).position()[t] + "px" : n
                            }
                            ))
                        }
                        )),
                        E.each({
                            Height: "height",
                            Width: "width"
                        }, (function (e, t) {
                            E.each({
                                padding: "inner" + e,
                                content: t,
                                "": "outer" + e
                            }, (function (n, r) {
                                E.fn[r] = function (i, o) {
                                    var a = arguments.length && (n || "boolean" != typeof i)
                                        , s = n || (!0 === i || !0 === o ? "margin" : "border");
                                    return ee(this, (function (t, n, i) {
                                        var o;
                                        return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                                            Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? E.css(t, n, s) : E.style(t, n, i, s)
                                    }
                                    ), t, a ? i : void 0, a)
                                }
                            }
                            ))
                        }
                        )),
                        E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
                            E.fn[t] = function (e) {
                                return this.on(t, e)
                            }
                        }
                        )),
                        E.fn.extend({
                            bind: function (e, t, n) {
                                return this.on(e, null, t, n)
                            },
                            unbind: function (e, t) {
                                return this.off(e, null, t)
                            },
                            delegate: function (e, t, n, r) {
                                return this.on(t, e, n, r)
                            },
                            undelegate: function (e, t, n) {
                                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                            },
                            hover: function (e, t) {
                                return this.on("mouseenter", e).on("mouseleave", t || e)
                            }
                        }),
                        E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
                            E.fn[t] = function (e, n) {
                                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                            }
                        }
                        ));
                    var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                    E.proxy = function (e, t) {
                        var n, r, i;
                        if ("string" == typeof t && (n = e[t],
                            t = e,
                            e = n),
                            y(e))
                            return r = s.call(arguments, 2),
                                i = function () {
                                    return e.apply(t || this, r.concat(s.call(arguments)))
                                }
                                ,
                                i.guid = e.guid = e.guid || E.guid++,
                                i
                    }
                        ,
                        E.holdReady = function (e) {
                            e ? E.readyWait++ : E.ready(!0)
                        }
                        ,
                        E.isArray = Array.isArray,
                        E.parseJSON = JSON.parse,
                        E.nodeName = j,
                        E.isFunction = y,
                        E.isWindow = m,
                        E.camelCase = ie,
                        E.type = T,
                        E.now = Date.now,
                        E.isNumeric = function (e) {
                            var t = E.type(e);
                            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                        }
                        ,
                        E.trim = function (e) {
                            return null == e ? "" : (e + "").replace(rn, "$1")
                        }
                        ,
                        void 0 === (n = function () {
                            return E
                        }
                            .apply(t, [])) || (e.exports = n);
                    var on = r.jQuery
                        , an = r.$;
                    return E.noConflict = function (e) {
                        return r.$ === E && (r.$ = an),
                            e && r.jQuery === E && (r.jQuery = on),
                            E
                    }
                        ,
                        void 0 === i && (r.jQuery = r.$ = E),
                        E
                }
                ))
            }
        }
            , t = {};
        function n(r) {
            var i = t[r];
            if (void 0 !== i)
                return i.exports;
            var o = t[r] = {
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n),
                o.exports
        }
        n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            }
                : function () {
                    return e
                }
                ;
            return n.d(t, {
                a: t
            }),
                t
        }
            ,
            n.d = function (e, t) {
                for (var r in t)
                    n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
            }
            ,
            n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ;
        var r = {};
        return function () {
            "use strict";
            n.r(r),
                n.d(r, {
                    $: function () {
                        return i
                    },
                    jQuery: function () {
                        return t.a
                    }
                });
            var e = n(9755)
                , t = n.n(e)
                , i = t()
        }(),
            r
    }()
}
));



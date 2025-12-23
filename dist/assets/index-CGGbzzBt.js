(function () {
  const v = document.createElement("link").relList;
  if (v && v.supports && v.supports("modulepreload")) return;
  for (const N of document.querySelectorAll('link[rel="modulepreload"]')) E(N);
  new MutationObserver((N) => {
    for (const M of N)
      if (M.type === "childList")
        for (const V of M.addedNodes)
          V.tagName === "LINK" && V.rel === "modulepreload" && E(V);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(N) {
    const M = {};
    return (
      N.integrity && (M.integrity = N.integrity),
      N.referrerPolicy && (M.referrerPolicy = N.referrerPolicy),
      N.crossOrigin === "use-credentials"
        ? (M.credentials = "include")
        : N.crossOrigin === "anonymous"
          ? (M.credentials = "omit")
          : (M.credentials = "same-origin"),
      M
    );
  }
  function E(N) {
    if (N.ep) return;
    N.ep = !0;
    const M = c(N);
    fetch(N.href, M);
  }
})();
var qt =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Dl(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default")
    ? h.default
    : h;
}
var Li = { exports: {} },
  Er = {},
  Ri = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ms;
function nd() {
  if (Ms) return Y;
  Ms = 1;
  var h = Symbol.for("react.element"),
    v = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    E = Symbol.for("react.strict_mode"),
    N = Symbol.for("react.profiler"),
    M = Symbol.for("react.provider"),
    V = Symbol.for("react.context"),
    re = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    oe = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    se = Symbol.iterator;
  function ae(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (se && f[se]) || f["@@iterator"]),
        typeof f == "function" ? f : null);
  }
  var Fe = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ae = Object.assign,
    ee = {};
  function le(f, y, B) {
    ((this.props = f),
      (this.context = y),
      (this.refs = ee),
      (this.updater = B || Fe));
  }
  ((le.prototype.isReactComponent = {}),
    (le.prototype.setState = function (f, y) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, f, y, "setState");
    }),
    (le.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    }));
  function Ve() {}
  Ve.prototype = le.prototype;
  function Me(f, y, B) {
    ((this.props = f),
      (this.context = y),
      (this.refs = ee),
      (this.updater = B || Fe));
  }
  var Qe = (Me.prototype = new Ve());
  ((Qe.constructor = Me), Ae(Qe, le.prototype), (Qe.isPureReactComponent = !0));
  var Ee = Array.isArray,
    U = Object.prototype.hasOwnProperty,
    P = { current: null },
    W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(f, y, B) {
    var Q,
      q = {},
      G = null,
      A = null;
    if (y != null)
      for (Q in (y.ref !== void 0 && (A = y.ref),
      y.key !== void 0 && (G = "" + y.key),
      y))
        U.call(y, Q) && !W.hasOwnProperty(Q) && (q[Q] = y[Q]);
    var O = arguments.length - 2;
    if (O === 1) q.children = B;
    else if (1 < O) {
      for (var $ = Array(O), ke = 0; ke < O; ke++) $[ke] = arguments[ke + 2];
      q.children = $;
    }
    if (f && f.defaultProps)
      for (Q in ((O = f.defaultProps), O)) q[Q] === void 0 && (q[Q] = O[Q]);
    return {
      $$typeof: h,
      type: f,
      key: G,
      ref: A,
      props: q,
      _owner: P.current,
    };
  }
  function fe(f, y) {
    return {
      $$typeof: h,
      type: f.type,
      key: y,
      ref: f.ref,
      props: f.props,
      _owner: f._owner,
    };
  }
  function he(f) {
    return typeof f == "object" && f !== null && f.$$typeof === h;
  }
  function je(f) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (B) {
        return y[B];
      })
    );
  }
  var ie = /\/+/g;
  function X(f, y) {
    return typeof f == "object" && f !== null && f.key != null
      ? je("" + f.key)
      : y.toString(36);
  }
  function de(f, y, B, Q, q) {
    var G = typeof f;
    (G === "undefined" || G === "boolean") && (f = null);
    var A = !1;
    if (f === null) A = !0;
    else
      switch (G) {
        case "string":
        case "number":
          A = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case h:
            case v:
              A = !0;
          }
      }
    if (A)
      return (
        (A = f),
        (q = q(A)),
        (f = Q === "" ? "." + X(A, 0) : Q),
        Ee(q)
          ? ((B = ""),
            f != null && (B = f.replace(ie, "$&/") + "/"),
            de(q, y, B, "", function (ke) {
              return ke;
            }))
          : q != null &&
            (he(q) &&
              (q = fe(
                q,
                B +
                  (!q.key || (A && A.key === q.key)
                    ? ""
                    : ("" + q.key).replace(ie, "$&/") + "/") +
                  f
              )),
            y.push(q)),
        1
      );
    if (((A = 0), (Q = Q === "" ? "." : Q + ":"), Ee(f)))
      for (var O = 0; O < f.length; O++) {
        G = f[O];
        var $ = Q + X(G, O);
        A += de(G, y, B, $, q);
      }
    else if ((($ = ae(f)), typeof $ == "function"))
      for (f = $.call(f), O = 0; !(G = f.next()).done; )
        ((G = G.value), ($ = Q + X(G, O++)), (A += de(G, y, B, $, q)));
    else if (G === "object")
      throw (
        (y = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]"
              ? "object with keys {" + Object.keys(f).join(", ") + "}"
              : y) +
            "). If you meant to render a collection of children, use an array instead."
        )
      );
    return A;
  }
  function Pe(f, y, B) {
    if (f == null) return f;
    var Q = [],
      q = 0;
    return (
      de(f, Q, "", "", function (G) {
        return y.call(B, G, q++);
      }),
      Q
    );
  }
  function ge(f) {
    if (f._status === -1) {
      var y = f._result;
      ((y = y()),
        y.then(
          function (B) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = B));
          },
          function (B) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = B));
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = y)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var te = { current: null },
    C = { transition: null },
    I = {
      ReactCurrentDispatcher: te,
      ReactCurrentBatchConfig: C,
      ReactCurrentOwner: P,
    };
  function j() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Y.Children = {
      map: Pe,
      forEach: function (f, y, B) {
        Pe(
          f,
          function () {
            y.apply(this, arguments);
          },
          B
        );
      },
      count: function (f) {
        var y = 0;
        return (
          Pe(f, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (f) {
        return (
          Pe(f, function (y) {
            return y;
          }) || []
        );
      },
      only: function (f) {
        if (!he(f))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return f;
      },
    }),
    (Y.Component = le),
    (Y.Fragment = c),
    (Y.Profiler = N),
    (Y.PureComponent = Me),
    (Y.StrictMode = E),
    (Y.Suspense = K),
    (Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
    (Y.act = j),
    (Y.cloneElement = function (f, y, B) {
      if (f == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            f +
            "."
        );
      var Q = Ae({}, f.props),
        q = f.key,
        G = f.ref,
        A = f._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((G = y.ref), (A = P.current)),
          y.key !== void 0 && (q = "" + y.key),
          f.type && f.type.defaultProps)
        )
          var O = f.type.defaultProps;
        for ($ in y)
          U.call(y, $) &&
            !W.hasOwnProperty($) &&
            (Q[$] = y[$] === void 0 && O !== void 0 ? O[$] : y[$]);
      }
      var $ = arguments.length - 2;
      if ($ === 1) Q.children = B;
      else if (1 < $) {
        O = Array($);
        for (var ke = 0; ke < $; ke++) O[ke] = arguments[ke + 2];
        Q.children = O;
      }
      return { $$typeof: h, type: f.type, key: q, ref: G, props: Q, _owner: A };
    }),
    (Y.createContext = function (f) {
      return (
        (f = {
          $$typeof: V,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: M, _context: f }),
        (f.Consumer = f)
      );
    }),
    (Y.createElement = J),
    (Y.createFactory = function (f) {
      var y = J.bind(null, f);
      return ((y.type = f), y);
    }),
    (Y.createRef = function () {
      return { current: null };
    }),
    (Y.forwardRef = function (f) {
      return { $$typeof: re, render: f };
    }),
    (Y.isValidElement = he),
    (Y.lazy = function (f) {
      return { $$typeof: b, _payload: { _status: -1, _result: f }, _init: ge };
    }),
    (Y.memo = function (f, y) {
      return { $$typeof: oe, type: f, compare: y === void 0 ? null : y };
    }),
    (Y.startTransition = function (f) {
      var y = C.transition;
      C.transition = {};
      try {
        f();
      } finally {
        C.transition = y;
      }
    }),
    (Y.unstable_act = j),
    (Y.useCallback = function (f, y) {
      return te.current.useCallback(f, y);
    }),
    (Y.useContext = function (f) {
      return te.current.useContext(f);
    }),
    (Y.useDebugValue = function () {}),
    (Y.useDeferredValue = function (f) {
      return te.current.useDeferredValue(f);
    }),
    (Y.useEffect = function (f, y) {
      return te.current.useEffect(f, y);
    }),
    (Y.useId = function () {
      return te.current.useId();
    }),
    (Y.useImperativeHandle = function (f, y, B) {
      return te.current.useImperativeHandle(f, y, B);
    }),
    (Y.useInsertionEffect = function (f, y) {
      return te.current.useInsertionEffect(f, y);
    }),
    (Y.useLayoutEffect = function (f, y) {
      return te.current.useLayoutEffect(f, y);
    }),
    (Y.useMemo = function (f, y) {
      return te.current.useMemo(f, y);
    }),
    (Y.useReducer = function (f, y, B) {
      return te.current.useReducer(f, y, B);
    }),
    (Y.useRef = function (f) {
      return te.current.useRef(f);
    }),
    (Y.useState = function (f) {
      return te.current.useState(f);
    }),
    (Y.useSyncExternalStore = function (f, y, B) {
      return te.current.useSyncExternalStore(f, y, B);
    }),
    (Y.useTransition = function () {
      return te.current.useTransition();
    }),
    (Y.version = "18.3.1"),
    Y
  );
}
var Is;
function Ai() {
  return (Is || ((Is = 1), (Ri.exports = nd())), Ri.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ds;
function rd() {
  if (Ds) return Er;
  Ds = 1;
  var h = Ai(),
    v = Symbol.for("react.element"),
    c = Symbol.for("react.fragment"),
    E = Object.prototype.hasOwnProperty,
    N = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(re, K, oe) {
    var b,
      se = {},
      ae = null,
      Fe = null;
    (oe !== void 0 && (ae = "" + oe),
      K.key !== void 0 && (ae = "" + K.key),
      K.ref !== void 0 && (Fe = K.ref));
    for (b in K) E.call(K, b) && !M.hasOwnProperty(b) && (se[b] = K[b]);
    if (re && re.defaultProps)
      for (b in ((K = re.defaultProps), K)) se[b] === void 0 && (se[b] = K[b]);
    return {
      $$typeof: v,
      type: re,
      key: ae,
      ref: Fe,
      props: se,
      _owner: N.current,
    };
  }
  return ((Er.Fragment = c), (Er.jsx = V), (Er.jsxs = V), Er);
}
var Fs;
function ld() {
  return (Fs || ((Fs = 1), (Li.exports = rd())), Li.exports);
}
var g = ld(),
  od = Ai();
const id = Dl(od);
var Ol = {},
  Oi = { exports: {} },
  Ze = {},
  Mi = { exports: {} },
  Ii = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var As;
function ud() {
  return (
    As ||
      ((As = 1),
      (function (h) {
        function v(C, I) {
          var j = C.length;
          C.push(I);
          e: for (; 0 < j; ) {
            var f = (j - 1) >>> 1,
              y = C[f];
            if (0 < N(y, I)) ((C[f] = I), (C[j] = y), (j = f));
            else break e;
          }
        }
        function c(C) {
          return C.length === 0 ? null : C[0];
        }
        function E(C) {
          if (C.length === 0) return null;
          var I = C[0],
            j = C.pop();
          if (j !== I) {
            C[0] = j;
            e: for (var f = 0, y = C.length, B = y >>> 1; f < B; ) {
              var Q = 2 * (f + 1) - 1,
                q = C[Q],
                G = Q + 1,
                A = C[G];
              if (0 > N(q, j))
                G < y && 0 > N(A, q)
                  ? ((C[f] = A), (C[G] = j), (f = G))
                  : ((C[f] = q), (C[Q] = j), (f = Q));
              else if (G < y && 0 > N(A, j)) ((C[f] = A), (C[G] = j), (f = G));
              else break e;
            }
          }
          return I;
        }
        function N(C, I) {
          var j = C.sortIndex - I.sortIndex;
          return j !== 0 ? j : C.id - I.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var M = performance;
          h.unstable_now = function () {
            return M.now();
          };
        } else {
          var V = Date,
            re = V.now();
          h.unstable_now = function () {
            return V.now() - re;
          };
        }
        var K = [],
          oe = [],
          b = 1,
          se = null,
          ae = 3,
          Fe = !1,
          Ae = !1,
          ee = !1,
          le = typeof setTimeout == "function" ? setTimeout : null,
          Ve = typeof clearTimeout == "function" ? clearTimeout : null,
          Me = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Qe(C) {
          for (var I = c(oe); I !== null; ) {
            if (I.callback === null) E(oe);
            else if (I.startTime <= C)
              (E(oe), (I.sortIndex = I.expirationTime), v(K, I));
            else break;
            I = c(oe);
          }
        }
        function Ee(C) {
          if (((ee = !1), Qe(C), !Ae))
            if (c(K) !== null) ((Ae = !0), ge(U));
            else {
              var I = c(oe);
              I !== null && te(Ee, I.startTime - C);
            }
        }
        function U(C, I) {
          ((Ae = !1), ee && ((ee = !1), Ve(J), (J = -1)), (Fe = !0));
          var j = ae;
          try {
            for (
              Qe(I), se = c(K);
              se !== null && (!(se.expirationTime > I) || (C && !je()));
            ) {
              var f = se.callback;
              if (typeof f == "function") {
                ((se.callback = null), (ae = se.priorityLevel));
                var y = f(se.expirationTime <= I);
                ((I = h.unstable_now()),
                  typeof y == "function"
                    ? (se.callback = y)
                    : se === c(K) && E(K),
                  Qe(I));
              } else E(K);
              se = c(K);
            }
            if (se !== null) var B = !0;
            else {
              var Q = c(oe);
              (Q !== null && te(Ee, Q.startTime - I), (B = !1));
            }
            return B;
          } finally {
            ((se = null), (ae = j), (Fe = !1));
          }
        }
        var P = !1,
          W = null,
          J = -1,
          fe = 5,
          he = -1;
        function je() {
          return !(h.unstable_now() - he < fe);
        }
        function ie() {
          if (W !== null) {
            var C = h.unstable_now();
            he = C;
            var I = !0;
            try {
              I = W(!0, C);
            } finally {
              I ? X() : ((P = !1), (W = null));
            }
          } else P = !1;
        }
        var X;
        if (typeof Me == "function")
          X = function () {
            Me(ie);
          };
        else if (typeof MessageChannel < "u") {
          var de = new MessageChannel(),
            Pe = de.port2;
          ((de.port1.onmessage = ie),
            (X = function () {
              Pe.postMessage(null);
            }));
        } else
          X = function () {
            le(ie, 0);
          };
        function ge(C) {
          ((W = C), P || ((P = !0), X()));
        }
        function te(C, I) {
          J = le(function () {
            C(h.unstable_now());
          }, I);
        }
        ((h.unstable_IdlePriority = 5),
          (h.unstable_ImmediatePriority = 1),
          (h.unstable_LowPriority = 4),
          (h.unstable_NormalPriority = 3),
          (h.unstable_Profiling = null),
          (h.unstable_UserBlockingPriority = 2),
          (h.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (h.unstable_continueExecution = function () {
            Ae || Fe || ((Ae = !0), ge(U));
          }),
          (h.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (fe = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (h.unstable_getCurrentPriorityLevel = function () {
            return ae;
          }),
          (h.unstable_getFirstCallbackNode = function () {
            return c(K);
          }),
          (h.unstable_next = function (C) {
            switch (ae) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = ae;
            }
            var j = ae;
            ae = I;
            try {
              return C();
            } finally {
              ae = j;
            }
          }),
          (h.unstable_pauseExecution = function () {}),
          (h.unstable_requestPaint = function () {}),
          (h.unstable_runWithPriority = function (C, I) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var j = ae;
            ae = C;
            try {
              return I();
            } finally {
              ae = j;
            }
          }),
          (h.unstable_scheduleCallback = function (C, I, j) {
            var f = h.unstable_now();
            switch (
              (typeof j == "object" && j !== null
                ? ((j = j.delay),
                  (j = typeof j == "number" && 0 < j ? f + j : f))
                : (j = f),
              C)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = j + y),
              (C = {
                id: b++,
                callback: I,
                priorityLevel: C,
                startTime: j,
                expirationTime: y,
                sortIndex: -1,
              }),
              j > f
                ? ((C.sortIndex = j),
                  v(oe, C),
                  c(K) === null &&
                    C === c(oe) &&
                    (ee ? (Ve(J), (J = -1)) : (ee = !0), te(Ee, j - f)))
                : ((C.sortIndex = y), v(K, C), Ae || Fe || ((Ae = !0), ge(U))),
              C
            );
          }),
          (h.unstable_shouldYield = je),
          (h.unstable_wrapCallback = function (C) {
            var I = ae;
            return function () {
              var j = ae;
              ae = I;
              try {
                return C.apply(this, arguments);
              } finally {
                ae = j;
              }
            };
          }));
      })(Ii)),
    Ii
  );
}
var Us;
function ad() {
  return (Us || ((Us = 1), (Mi.exports = ud())), Mi.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bs;
function sd() {
  if (Bs) return Ze;
  Bs = 1;
  var h = Ai(),
    v = ad();
  function c(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var E = new Set(),
    N = {};
  function M(e, t) {
    (V(e, t), V(e + "Capture", t));
  }
  function V(e, t) {
    for (N[e] = t, e = 0; e < t.length; e++) E.add(t[e]);
  }
  var re = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    K = Object.prototype.hasOwnProperty,
    oe =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    b = {},
    se = {};
  function ae(e) {
    return K.call(se, e)
      ? !0
      : K.call(b, e)
        ? !1
        : oe.test(e)
          ? (se[e] = !0)
          : ((b[e] = !0), !1);
  }
  function Fe(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Ae(e, t, n, r) {
    if (t === null || typeof t > "u" || Fe(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function ee(e, t, n, r, l, o, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i));
  }
  var le = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      le[e] = new ee(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      le[t] = new ee(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        le[e] = new ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      le[e] = new ee(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        le[e] = new ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      le[e] = new ee(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      le[e] = new ee(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      le[e] = new ee(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      le[e] = new ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Ve = /[\-:]([a-z])/g;
  function Me(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Ve, Me);
      le[t] = new ee(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Ve, Me);
        le[t] = new ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Ve, Me);
      le[t] = new ee(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      le[e] = new ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (le.xlinkHref = new ee(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      le[e] = new ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function Qe(e, t, n, r) {
    var l = le.hasOwnProperty(t) ? le[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Ae(t, n, l, r) && (n = null),
      r || l === null
        ? ae(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Ee = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    U = Symbol.for("react.element"),
    P = Symbol.for("react.portal"),
    W = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    fe = Symbol.for("react.profiler"),
    he = Symbol.for("react.provider"),
    je = Symbol.for("react.context"),
    ie = Symbol.for("react.forward_ref"),
    X = Symbol.for("react.suspense"),
    de = Symbol.for("react.suspense_list"),
    Pe = Symbol.for("react.memo"),
    ge = Symbol.for("react.lazy"),
    te = Symbol.for("react.offscreen"),
    C = Symbol.iterator;
  function I(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (C && e[C]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var j = Object.assign,
    f;
  function y(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        f = (t && t[1]) || "";
      }
    return (
      `
` +
      f +
      e
    );
  }
  var B = !1;
  function Q(e, t) {
    if (!e || B) return "";
    B = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (m) {
            var r = m;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (m) {
            r = m;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (m) {
          r = m;
        }
        e();
      }
    } catch (m) {
      if (m && r && typeof m.stack == "string") {
        for (
          var l = m.stack.split(`
`),
            o = r.stack.split(`
`),
            i = l.length - 1,
            u = o.length - 1;
          1 <= i && 0 <= u && l[i] !== o[u];
        )
          u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (l[i] !== o[u]) {
            if (i !== 1 || u !== 1)
              do
                if ((i--, u--, 0 > u || l[i] !== o[u])) {
                  var a =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      a.includes("<anonymous>") &&
                      (a = a.replace("<anonymous>", e.displayName)),
                    a
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      ((B = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function q(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = Q(e.type, !1)), e);
      case 11:
        return ((e = Q(e.type.render, !1)), e);
      case 1:
        return ((e = Q(e.type, !0)), e);
      default:
        return "";
    }
  }
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case P:
        return "Portal";
      case fe:
        return "Profiler";
      case J:
        return "StrictMode";
      case X:
        return "Suspense";
      case de:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case je:
          return (e.displayName || "Context") + ".Consumer";
        case he:
          return (e._context.displayName || "Context") + ".Provider";
        case ie:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Pe:
          return (
            (t = e.displayName || null),
            t !== null ? t : G(e.type) || "Memo"
          );
        case ge:
          ((t = e._payload), (e = e._init));
          try {
            return G(e(t));
          } catch {}
      }
    return null;
  }
  function A(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return G(t);
      case 8:
        return t === J ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function O(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function $(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ke(e) {
    var t = $(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            ((r = "" + i), o.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Xt(e) {
    e._valueTracker || (e._valueTracker = ke(e));
  }
  function Bi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Cr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Fl(e, t) {
    var n = t.checked;
    return j({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Hi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = O(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Wi(e, t) {
    ((t = t.checked), t != null && Qe(e, "checked", t, !1));
  }
  function Al(e, t) {
    Wi(e, t);
    var n = O(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Ul(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ul(e, t.type, O(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Vi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Ul(e, t, n) {
    (t !== "number" || Cr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var An = Array.isArray;
  function pn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + O(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Bl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(c(91));
    return j({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Qi(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(c(92));
        if (An(n)) {
          if (1 < n.length) throw Error(c(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: O(n) };
  }
  function $i(e, t) {
    var n = O(t.value),
      r = O(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Ki(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Gi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Hl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Gi(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Nr,
    Yi = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Nr = Nr || document.createElement("div"),
            Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Nr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Un(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    oc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bn).forEach(function (e) {
    oc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]));
    });
  });
  function qi(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Bn.hasOwnProperty(e) && Bn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Ji(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = qi(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var ic = j(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Wl(e, t) {
    if (t) {
      if (ic[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(c(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(c(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(c(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(c(62));
    }
  }
  function Vl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ql = null;
  function $l(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Kl = null,
    mn = null,
    hn = null;
  function Xi(e) {
    if ((e = ar(e))) {
      if (typeof Kl != "function") throw Error(c(280));
      var t = e.stateNode;
      t && ((t = Yr(t)), Kl(e.stateNode, e.type, t));
    }
  }
  function Zi(e) {
    mn ? (hn ? hn.push(e) : (hn = [e])) : (mn = e);
  }
  function bi() {
    if (mn) {
      var e = mn,
        t = hn;
      if (((hn = mn = null), Xi(e), t)) for (e = 0; e < t.length; e++) Xi(t[e]);
    }
  }
  function eu(e, t) {
    return e(t);
  }
  function tu() {}
  var Gl = !1;
  function nu(e, t, n) {
    if (Gl) return e(t, n);
    Gl = !0;
    try {
      return eu(e, t, n);
    } finally {
      ((Gl = !1), (mn !== null || hn !== null) && (tu(), bi()));
    }
  }
  function Hn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Yr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var Yl = !1;
  if (re)
    try {
      var Wn = {};
      (Object.defineProperty(Wn, "passive", {
        get: function () {
          Yl = !0;
        },
      }),
        window.addEventListener("test", Wn, Wn),
        window.removeEventListener("test", Wn, Wn));
    } catch {
      Yl = !1;
    }
  function uc(e, t, n, r, l, o, i, u, a) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (k) {
      this.onError(k);
    }
  }
  var Vn = !1,
    _r = null,
    jr = !1,
    ql = null,
    ac = {
      onError: function (e) {
        ((Vn = !0), (_r = e));
      },
    };
  function sc(e, t, n, r, l, o, i, u, a) {
    ((Vn = !1), (_r = null), uc.apply(ac, arguments));
  }
  function cc(e, t, n, r, l, o, i, u, a) {
    if ((sc.apply(this, arguments), Vn)) {
      if (Vn) {
        var m = _r;
        ((Vn = !1), (_r = null));
      } else throw Error(c(198));
      jr || ((jr = !0), (ql = m));
    }
  }
  function Zt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ru(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function lu(e) {
    if (Zt(e) !== e) throw Error(c(188));
  }
  function fc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Zt(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return (lu(l), e);
          if (o === r) return (lu(l), t);
          o = o.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== r.return) ((n = l), (r = o));
      else {
        for (var i = !1, u = l.child; u; ) {
          if (u === n) {
            ((i = !0), (n = l), (r = o));
            break;
          }
          if (u === r) {
            ((i = !0), (r = l), (n = o));
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === n) {
              ((i = !0), (n = o), (r = l));
              break;
            }
            if (u === r) {
              ((i = !0), (r = o), (n = l));
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(c(189));
        }
      }
      if (n.alternate !== r) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function ou(e) {
    return ((e = fc(e)), e !== null ? iu(e) : null);
  }
  function iu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = iu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var uu = v.unstable_scheduleCallback,
    au = v.unstable_cancelCallback,
    dc = v.unstable_shouldYield,
    pc = v.unstable_requestPaint,
    Ce = v.unstable_now,
    mc = v.unstable_getCurrentPriorityLevel,
    Jl = v.unstable_ImmediatePriority,
    su = v.unstable_UserBlockingPriority,
    Pr = v.unstable_NormalPriority,
    hc = v.unstable_LowPriority,
    cu = v.unstable_IdlePriority,
    Tr = null,
    vt = null;
  function vc(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function")
      try {
        vt.onCommitFiberRoot(Tr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var st = Math.clz32 ? Math.clz32 : wc,
    gc = Math.log,
    yc = Math.LN2;
  function wc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((gc(e) / yc) | 0)) | 0);
  }
  var zr = 64,
    Lr = 4194304;
  function Qn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Rr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = Qn(u)) : ((o &= i), o !== 0 && (r = Qn(o)));
    } else ((i = n & ~l), i !== 0 ? (r = Qn(i)) : o !== 0 && (r = Qn(o)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - st(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function kc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Sc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - st(o),
        u = 1 << i,
        a = l[i];
      (a === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = kc(u, t))
        : a <= t && (e.expiredLanes |= u),
        (o &= ~u));
    }
  }
  function Xl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function fu() {
    var e = zr;
    return ((zr <<= 1), (zr & 4194240) === 0 && (zr = 64), e);
  }
  function Zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function $n(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - st(t)),
      (e[t] = n));
  }
  function xc(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - st(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function bl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - st(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var ue = 0;
  function du(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var pu,
    eo,
    mu,
    hu,
    vu,
    to = !1,
    Or = [],
    zt = null,
    Lt = null,
    Rt = null,
    Kn = new Map(),
    Gn = new Map(),
    Ot = [],
    Ec =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function gu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Lt = null;
        break;
      case "mouseover":
      case "mouseout":
        Rt = null;
        break;
      case "pointerover":
      case "pointerout":
        Kn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gn.delete(t.pointerId);
    }
  }
  function Yn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = ar(t)), t !== null && eo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Cc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Yn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Lt = Yn(Lt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Rt = Yn(Rt, e, t, n, r, l)), !0);
      case "pointerover":
        var o = l.pointerId;
        return (Kn.set(o, Yn(Kn.get(o) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (o = l.pointerId),
          Gn.set(o, Yn(Gn.get(o) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function yu(e) {
    var t = bt(e.target);
    if (t !== null) {
      var n = Zt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ru(n)), t !== null)) {
            ((e.blockedOn = t),
              vu(e.priority, function () {
                mu(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Mr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ro(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Ql = r), n.target.dispatchEvent(r), (Ql = null));
      } else return ((t = ar(n)), t !== null && eo(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function wu(e, t, n) {
    Mr(e) && n.delete(t);
  }
  function Nc() {
    ((to = !1),
      zt !== null && Mr(zt) && (zt = null),
      Lt !== null && Mr(Lt) && (Lt = null),
      Rt !== null && Mr(Rt) && (Rt = null),
      Kn.forEach(wu),
      Gn.forEach(wu));
  }
  function qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      to ||
        ((to = !0),
        v.unstable_scheduleCallback(v.unstable_NormalPriority, Nc)));
  }
  function Jn(e) {
    function t(l) {
      return qn(l, e);
    }
    if (0 < Or.length) {
      qn(Or[0], e);
      for (var n = 1; n < Or.length; n++) {
        var r = Or[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && qn(zt, e),
        Lt !== null && qn(Lt, e),
        Rt !== null && qn(Rt, e),
        Kn.forEach(t),
        Gn.forEach(t),
        n = 0;
      n < Ot.length;
      n++
    )
      ((r = Ot[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null); )
      (yu(n), n.blockedOn === null && Ot.shift());
  }
  var vn = Ee.ReactCurrentBatchConfig,
    Ir = !0;
  function _c(e, t, n, r) {
    var l = ue,
      o = vn.transition;
    vn.transition = null;
    try {
      ((ue = 1), no(e, t, n, r));
    } finally {
      ((ue = l), (vn.transition = o));
    }
  }
  function jc(e, t, n, r) {
    var l = ue,
      o = vn.transition;
    vn.transition = null;
    try {
      ((ue = 4), no(e, t, n, r));
    } finally {
      ((ue = l), (vn.transition = o));
    }
  }
  function no(e, t, n, r) {
    if (Ir) {
      var l = ro(e, t, n, r);
      if (l === null) (So(e, t, r, Dr, n), gu(e, r));
      else if (Cc(l, e, t, n, r)) r.stopPropagation();
      else if ((gu(e, r), t & 4 && -1 < Ec.indexOf(e))) {
        for (; l !== null; ) {
          var o = ar(l);
          if (
            (o !== null && pu(o),
            (o = ro(e, t, n, r)),
            o === null && So(e, t, r, Dr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else So(e, t, r, null, n);
    }
  }
  var Dr = null;
  function ro(e, t, n, r) {
    if (((Dr = null), (e = $l(r)), (e = bt(e)), e !== null))
      if (((t = Zt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ru(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Dr = e), null);
  }
  function ku(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (mc()) {
          case Jl:
            return 1;
          case su:
            return 4;
          case Pr:
          case hc:
            return 16;
          case cu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    lo = null,
    Fr = null;
  function Su() {
    if (Fr) return Fr;
    var e,
      t = lo,
      n = t.length,
      r,
      l = "value" in Mt ? Mt.value : Mt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Fr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ar(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ur() {
    return !0;
  }
  function xu() {
    return !1;
  }
  function be(e) {
    function t(n, r, l, o, i) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null));
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Ur
          : xu),
        (this.isPropagationStopped = xu),
        this
      );
    }
    return (
      j(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ur));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ur));
        },
        persist: function () {},
        isPersistent: Ur,
      }),
      t
    );
  }
  var gn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    oo = be(gn),
    Xn = j({}, gn, { view: 0, detail: 0 }),
    Pc = be(Xn),
    io,
    uo,
    Zn,
    Br = j({}, Xn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: so,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Zn &&
              (Zn && e.type === "mousemove"
                ? ((io = e.screenX - Zn.screenX), (uo = e.screenY - Zn.screenY))
                : (uo = io = 0),
              (Zn = e)),
            io);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : uo;
      },
    }),
    Eu = be(Br),
    Tc = j({}, Br, { dataTransfer: 0 }),
    zc = be(Tc),
    Lc = j({}, Xn, { relatedTarget: 0 }),
    ao = be(Lc),
    Rc = j({}, gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Oc = be(Rc),
    Mc = j({}, gn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ic = be(Mc),
    Dc = j({}, gn, { data: 0 }),
    Cu = be(Dc),
    Fc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Ac = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Uc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Bc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Uc[e])
        ? !!t[e]
        : !1;
  }
  function so() {
    return Bc;
  }
  var Hc = j({}, Xn, {
      key: function (e) {
        if (e.key) {
          var t = Fc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ar(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Ac[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: so,
      charCode: function (e) {
        return e.type === "keypress" ? Ar(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ar(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Wc = be(Hc),
    Vc = j({}, Br, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Nu = be(Vc),
    Qc = j({}, Xn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: so,
    }),
    $c = be(Qc),
    Kc = j({}, gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gc = be(Kc),
    Yc = j({}, Br, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    qc = be(Yc),
    Jc = [9, 13, 27, 32],
    co = re && "CompositionEvent" in window,
    bn = null;
  re && "documentMode" in document && (bn = document.documentMode);
  var Xc = re && "TextEvent" in window && !bn,
    _u = re && (!co || (bn && 8 < bn && 11 >= bn)),
    ju = " ",
    Pu = !1;
  function Tu(e, t) {
    switch (e) {
      case "keyup":
        return Jc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function zu(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var yn = !1;
  function Zc(e, t) {
    switch (e) {
      case "compositionend":
        return zu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Pu = !0), ju);
      case "textInput":
        return ((e = t.data), e === ju && Pu ? null : e);
      default:
        return null;
    }
  }
  function bc(e, t) {
    if (yn)
      return e === "compositionend" || (!co && Tu(e, t))
        ? ((e = Su()), (Fr = lo = Mt = null), (yn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return _u && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ef = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Lu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ef[e.type] : t === "textarea";
  }
  function Ru(e, t, n, r) {
    (Zi(r),
      (t = $r(t, "onChange")),
      0 < t.length &&
        ((n = new oo("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var er = null,
    tr = null;
  function tf(e) {
    Ju(e, 0);
  }
  function Hr(e) {
    var t = En(e);
    if (Bi(t)) return e;
  }
  function nf(e, t) {
    if (e === "change") return t;
  }
  var Ou = !1;
  if (re) {
    var fo;
    if (re) {
      var po = "oninput" in document;
      if (!po) {
        var Mu = document.createElement("div");
        (Mu.setAttribute("oninput", "return;"),
          (po = typeof Mu.oninput == "function"));
      }
      fo = po;
    } else fo = !1;
    Ou = fo && (!document.documentMode || 9 < document.documentMode);
  }
  function Iu() {
    er && (er.detachEvent("onpropertychange", Du), (tr = er = null));
  }
  function Du(e) {
    if (e.propertyName === "value" && Hr(tr)) {
      var t = [];
      (Ru(t, tr, e, $l(e)), nu(tf, t));
    }
  }
  function rf(e, t, n) {
    e === "focusin"
      ? (Iu(), (er = t), (tr = n), er.attachEvent("onpropertychange", Du))
      : e === "focusout" && Iu();
  }
  function lf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Hr(tr);
  }
  function of(e, t) {
    if (e === "click") return Hr(t);
  }
  function uf(e, t) {
    if (e === "input" || e === "change") return Hr(t);
  }
  function af(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ct = typeof Object.is == "function" ? Object.is : af;
  function nr(e, t) {
    if (ct(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!K.call(t, l) || !ct(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Fu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Au(e, t) {
    var n = Fu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Fu(n);
    }
  }
  function Uu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Uu(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Bu() {
    for (var e = window, t = Cr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Cr(e.document);
    }
    return t;
  }
  function mo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function sf(e) {
    var t = Bu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Uu(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && mo(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          ((r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Au(n, o)));
          var i = Au(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var cf = re && "documentMode" in document && 11 >= document.documentMode,
    wn = null,
    ho = null,
    rr = null,
    vo = !1;
  function Hu(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    vo ||
      wn == null ||
      wn !== Cr(r) ||
      ((r = wn),
      "selectionStart" in r && mo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (rr && nr(rr, r)) ||
        ((rr = r),
        (r = $r(ho, "onSelect")),
        0 < r.length &&
          ((t = new oo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = wn))));
  }
  function Wr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var kn = {
      animationend: Wr("Animation", "AnimationEnd"),
      animationiteration: Wr("Animation", "AnimationIteration"),
      animationstart: Wr("Animation", "AnimationStart"),
      transitionend: Wr("Transition", "TransitionEnd"),
    },
    go = {},
    Wu = {};
  re &&
    ((Wu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete kn.animationend.animation,
      delete kn.animationiteration.animation,
      delete kn.animationstart.animation),
    "TransitionEvent" in window || delete kn.transitionend.transition);
  function Vr(e) {
    if (go[e]) return go[e];
    if (!kn[e]) return e;
    var t = kn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Wu) return (go[e] = t[n]);
    return e;
  }
  var Vu = Vr("animationend"),
    Qu = Vr("animationiteration"),
    $u = Vr("animationstart"),
    Ku = Vr("transitionend"),
    Gu = new Map(),
    Yu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function It(e, t) {
    (Gu.set(e, t), M(t, [e]));
  }
  for (var yo = 0; yo < Yu.length; yo++) {
    var wo = Yu[yo],
      ff = wo.toLowerCase(),
      df = wo[0].toUpperCase() + wo.slice(1);
    It(ff, "on" + df);
  }
  (It(Vu, "onAnimationEnd"),
    It(Qu, "onAnimationIteration"),
    It($u, "onAnimationStart"),
    It("dblclick", "onDoubleClick"),
    It("focusin", "onFocus"),
    It("focusout", "onBlur"),
    It(Ku, "onTransitionEnd"),
    V("onMouseEnter", ["mouseout", "mouseover"]),
    V("onMouseLeave", ["mouseout", "mouseover"]),
    V("onPointerEnter", ["pointerout", "pointerover"]),
    V("onPointerLeave", ["pointerout", "pointerover"]),
    M(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    M(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    M("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    M(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    M(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    M(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    ));
  var lr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    pf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(lr)
    );
  function qu(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), cc(r, t, void 0, e), (e.currentTarget = null));
  }
  function Ju(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var u = r[i],
              a = u.instance,
              m = u.currentTarget;
            if (((u = u.listener), a !== o && l.isPropagationStopped()))
              break e;
            (qu(l, u, m), (o = a));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (a = u.instance),
              (m = u.currentTarget),
              (u = u.listener),
              a !== o && l.isPropagationStopped())
            )
              break e;
            (qu(l, u, m), (o = a));
          }
      }
    }
    if (jr) throw ((e = ql), (jr = !1), (ql = null), e);
  }
  function pe(e, t) {
    var n = t[jo];
    n === void 0 && (n = t[jo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Xu(t, e, 2, !1), n.add(r));
  }
  function ko(e, t, n) {
    var r = 0;
    (t && (r |= 4), Xu(n, e, r, t));
  }
  var Qr = "_reactListening" + Math.random().toString(36).slice(2);
  function or(e) {
    if (!e[Qr]) {
      ((e[Qr] = !0),
        E.forEach(function (n) {
          n !== "selectionchange" && (pf.has(n) || ko(n, !1, e), ko(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qr] || ((t[Qr] = !0), ko("selectionchange", !1, t));
    }
  }
  function Xu(e, t, n, r) {
    switch (ku(t)) {
      case 1:
        var l = _c;
        break;
      case 4:
        l = jc;
        break;
      default:
        l = no;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Yl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function So(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var a = i.tag;
              if (
                (a === 3 || a === 4) &&
                ((a = i.stateNode.containerInfo),
                a === l || (a.nodeType === 8 && a.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = bt(u)), i === null)) return;
            if (((a = i.tag), a === 5 || a === 6)) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    nu(function () {
      var m = o,
        k = $l(n),
        S = [];
      e: {
        var w = Gu.get(e);
        if (w !== void 0) {
          var _ = oo,
            z = e;
          switch (e) {
            case "keypress":
              if (Ar(n) === 0) break e;
            case "keydown":
            case "keyup":
              _ = Wc;
              break;
            case "focusin":
              ((z = "focus"), (_ = ao));
              break;
            case "focusout":
              ((z = "blur"), (_ = ao));
              break;
            case "beforeblur":
            case "afterblur":
              _ = ao;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = Eu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = zc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = $c;
              break;
            case Vu:
            case Qu:
            case $u:
              _ = Oc;
              break;
            case Ku:
              _ = Gc;
              break;
            case "scroll":
              _ = Pc;
              break;
            case "wheel":
              _ = qc;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = Ic;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = Nu;
          }
          var L = (t & 4) !== 0,
            Ne = !L && e === "scroll",
            d = L ? (w !== null ? w + "Capture" : null) : w;
          L = [];
          for (var s = m, p; s !== null; ) {
            p = s;
            var x = p.stateNode;
            if (
              (p.tag === 5 &&
                x !== null &&
                ((p = x),
                d !== null &&
                  ((x = Hn(s, d)), x != null && L.push(ir(s, x, p)))),
              Ne)
            )
              break;
            s = s.return;
          }
          0 < L.length &&
            ((w = new _(w, z, null, n, k)), S.push({ event: w, listeners: L }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((w = e === "mouseover" || e === "pointerover"),
            (_ = e === "mouseout" || e === "pointerout"),
            w &&
              n !== Ql &&
              (z = n.relatedTarget || n.fromElement) &&
              (bt(z) || z[St]))
          )
            break e;
          if (
            (_ || w) &&
            ((w =
              k.window === k
                ? k
                : (w = k.ownerDocument)
                  ? w.defaultView || w.parentWindow
                  : window),
            _
              ? ((z = n.relatedTarget || n.toElement),
                (_ = m),
                (z = z ? bt(z) : null),
                z !== null &&
                  ((Ne = Zt(z)), z !== Ne || (z.tag !== 5 && z.tag !== 6)) &&
                  (z = null))
              : ((_ = null), (z = m)),
            _ !== z)
          ) {
            if (
              ((L = Eu),
              (x = "onMouseLeave"),
              (d = "onMouseEnter"),
              (s = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((L = Nu),
                (x = "onPointerLeave"),
                (d = "onPointerEnter"),
                (s = "pointer")),
              (Ne = _ == null ? w : En(_)),
              (p = z == null ? w : En(z)),
              (w = new L(x, s + "leave", _, n, k)),
              (w.target = Ne),
              (w.relatedTarget = p),
              (x = null),
              bt(k) === m &&
                ((L = new L(d, s + "enter", z, n, k)),
                (L.target = p),
                (L.relatedTarget = Ne),
                (x = L)),
              (Ne = x),
              _ && z)
            )
              t: {
                for (L = _, d = z, s = 0, p = L; p; p = Sn(p)) s++;
                for (p = 0, x = d; x; x = Sn(x)) p++;
                for (; 0 < s - p; ) ((L = Sn(L)), s--);
                for (; 0 < p - s; ) ((d = Sn(d)), p--);
                for (; s--; ) {
                  if (L === d || (d !== null && L === d.alternate)) break t;
                  ((L = Sn(L)), (d = Sn(d)));
                }
                L = null;
              }
            else L = null;
            (_ !== null && Zu(S, w, _, L, !1),
              z !== null && Ne !== null && Zu(S, Ne, z, L, !0));
          }
        }
        e: {
          if (
            ((w = m ? En(m) : window),
            (_ = w.nodeName && w.nodeName.toLowerCase()),
            _ === "select" || (_ === "input" && w.type === "file"))
          )
            var R = nf;
          else if (Lu(w))
            if (Ou) R = uf;
            else {
              R = lf;
              var D = rf;
            }
          else
            (_ = w.nodeName) &&
              _.toLowerCase() === "input" &&
              (w.type === "checkbox" || w.type === "radio") &&
              (R = of);
          if (R && (R = R(e, m))) {
            Ru(S, R, n, k);
            break e;
          }
          (D && D(e, w, m),
            e === "focusout" &&
              (D = w._wrapperState) &&
              D.controlled &&
              w.type === "number" &&
              Ul(w, "number", w.value));
        }
        switch (((D = m ? En(m) : window), e)) {
          case "focusin":
            (Lu(D) || D.contentEditable === "true") &&
              ((wn = D), (ho = m), (rr = null));
            break;
          case "focusout":
            rr = ho = wn = null;
            break;
          case "mousedown":
            vo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((vo = !1), Hu(S, n, k));
            break;
          case "selectionchange":
            if (cf) break;
          case "keydown":
          case "keyup":
            Hu(S, n, k);
        }
        var F;
        if (co)
          e: {
            switch (e) {
              case "compositionstart":
                var H = "onCompositionStart";
                break e;
              case "compositionend":
                H = "onCompositionEnd";
                break e;
              case "compositionupdate":
                H = "onCompositionUpdate";
                break e;
            }
            H = void 0;
          }
        else
          yn
            ? Tu(e, n) && (H = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (H = "onCompositionStart");
        (H &&
          (_u &&
            n.locale !== "ko" &&
            (yn || H !== "onCompositionStart"
              ? H === "onCompositionEnd" && yn && (F = Su())
              : ((Mt = k),
                (lo = "value" in Mt ? Mt.value : Mt.textContent),
                (yn = !0))),
          (D = $r(m, H)),
          0 < D.length &&
            ((H = new Cu(H, e, null, n, k)),
            S.push({ event: H, listeners: D }),
            F ? (H.data = F) : ((F = zu(n)), F !== null && (H.data = F)))),
          (F = Xc ? Zc(e, n) : bc(e, n)) &&
            ((m = $r(m, "onBeforeInput")),
            0 < m.length &&
              ((k = new Cu("onBeforeInput", "beforeinput", null, n, k)),
              S.push({ event: k, listeners: m }),
              (k.data = F))));
      }
      Ju(S, t);
    });
  }
  function ir(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function $r(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Hn(e, n)),
        o != null && r.unshift(ir(e, o, l)),
        (o = Hn(e, t)),
        o != null && r.push(ir(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function Sn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Zu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        a = u.alternate,
        m = u.stateNode;
      if (a !== null && a === r) break;
      (u.tag === 5 &&
        m !== null &&
        ((u = m),
        l
          ? ((a = Hn(n, o)), a != null && i.unshift(ir(n, a, u)))
          : l || ((a = Hn(n, o)), a != null && i.push(ir(n, a, u)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var mf = /\r\n?/g,
    hf = /\u0000|\uFFFD/g;
  function bu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        mf,
        `
`
      )
      .replace(hf, "");
  }
  function Kr(e, t, n) {
    if (((t = bu(t)), bu(e) !== t && n)) throw Error(c(425));
  }
  function Gr() {}
  var xo = null,
    Eo = null;
  function Co(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var No = typeof setTimeout == "function" ? setTimeout : void 0,
    vf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ea = typeof Promise == "function" ? Promise : void 0,
    gf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ea < "u"
          ? function (e) {
              return ea.resolve(null).then(e).catch(yf);
            }
          : No;
  function yf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function _o(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Jn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Jn(t);
  }
  function Dt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ta(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var xn = Math.random().toString(36).slice(2),
    gt = "__reactFiber$" + xn,
    ur = "__reactProps$" + xn,
    St = "__reactContainer$" + xn,
    jo = "__reactEvents$" + xn,
    wf = "__reactListeners$" + xn,
    kf = "__reactHandles$" + xn;
  function bt(e) {
    var t = e[gt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[St] || n[gt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ta(e); e !== null; ) {
            if ((n = e[gt])) return n;
            e = ta(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function ar(e) {
    return (
      (e = e[gt] || e[St]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function En(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Yr(e) {
    return e[ur] || null;
  }
  var Po = [],
    Cn = -1;
  function Ft(e) {
    return { current: e };
  }
  function me(e) {
    0 > Cn || ((e.current = Po[Cn]), (Po[Cn] = null), Cn--);
  }
  function ce(e, t) {
    (Cn++, (Po[Cn] = e.current), (e.current = t));
  }
  var At = {},
    Ue = Ft(At),
    Ge = Ft(!1),
    en = At;
  function Nn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return At;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ye(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function qr() {
    (me(Ge), me(Ue));
  }
  function na(e, t, n) {
    if (Ue.current !== At) throw Error(c(168));
    (ce(Ue, t), ce(Ge, n));
  }
  function ra(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(c(108, A(e) || "Unknown", l));
    return j({}, n, r);
  }
  function Jr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        At),
      (en = Ue.current),
      ce(Ue, e),
      ce(Ge, Ge.current),
      !0
    );
  }
  function la(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(c(169));
    (n
      ? ((e = ra(e, t, en)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        me(Ge),
        me(Ue),
        ce(Ue, e))
      : me(Ge),
      ce(Ge, n));
  }
  var xt = null,
    Xr = !1,
    To = !1;
  function oa(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  function Sf(e) {
    ((Xr = !0), oa(e));
  }
  function Ut() {
    if (!To && xt !== null) {
      To = !0;
      var e = 0,
        t = ue;
      try {
        var n = xt;
        for (ue = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((xt = null), (Xr = !1));
      } catch (l) {
        throw (xt !== null && (xt = xt.slice(e + 1)), uu(Jl, Ut), l);
      } finally {
        ((ue = t), (To = !1));
      }
    }
    return null;
  }
  var _n = [],
    jn = 0,
    Zr = null,
    br = 0,
    rt = [],
    lt = 0,
    tn = null,
    Et = 1,
    Ct = "";
  function nn(e, t) {
    ((_n[jn++] = br), (_n[jn++] = Zr), (Zr = e), (br = t));
  }
  function ia(e, t, n) {
    ((rt[lt++] = Et), (rt[lt++] = Ct), (rt[lt++] = tn), (tn = e));
    var r = Et;
    e = Ct;
    var l = 32 - st(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - st(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      ((o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Et = (1 << (32 - st(t) + l)) | (n << l) | r),
        (Ct = o + e));
    } else ((Et = (1 << o) | (n << l) | r), (Ct = e));
  }
  function zo(e) {
    e.return !== null && (nn(e, 1), ia(e, 1, 0));
  }
  function Lo(e) {
    for (; e === Zr; )
      ((Zr = _n[--jn]), (_n[jn] = null), (br = _n[--jn]), (_n[jn] = null));
    for (; e === tn; )
      ((tn = rt[--lt]),
        (rt[lt] = null),
        (Ct = rt[--lt]),
        (rt[lt] = null),
        (Et = rt[--lt]),
        (rt[lt] = null));
  }
  var et = null,
    tt = null,
    ve = !1,
    ft = null;
  function ua(e, t) {
    var n = at(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function aa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (et = e), (tt = Dt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (et = e), (tt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = tn !== null ? { id: Et, overflow: Ct } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = at(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (et = e),
              (tt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ro(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Oo(e) {
    if (ve) {
      var t = tt;
      if (t) {
        var n = t;
        if (!aa(e, t)) {
          if (Ro(e)) throw Error(c(418));
          t = Dt(n.nextSibling);
          var r = et;
          t && aa(e, t)
            ? ua(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (et = e));
        }
      } else {
        if (Ro(e)) throw Error(c(418));
        ((e.flags = (e.flags & -4097) | 2), (ve = !1), (et = e));
      }
    }
  }
  function sa(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    et = e;
  }
  function el(e) {
    if (e !== et) return !1;
    if (!ve) return (sa(e), (ve = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Co(e.type, e.memoizedProps))),
      t && (t = tt))
    ) {
      if (Ro(e)) throw (ca(), Error(c(418)));
      for (; t; ) (ua(e, t), (t = Dt(t.nextSibling)));
    }
    if ((sa(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                tt = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        tt = null;
      }
    } else tt = et ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ca() {
    for (var e = tt; e; ) e = Dt(e.nextSibling);
  }
  function Pn() {
    ((tt = et = null), (ve = !1));
  }
  function Mo(e) {
    ft === null ? (ft = [e]) : ft.push(e);
  }
  var xf = Ee.ReactCurrentBatchConfig;
  function sr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(c(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(c(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (i) {
              var u = l.refs;
              i === null ? delete u[o] : (u[o] = i);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(c(284));
      if (!n._owner) throw Error(c(290, e));
    }
    return e;
  }
  function tl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        c(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      )
    );
  }
  function fa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function da(e) {
    function t(d, s) {
      if (e) {
        var p = d.deletions;
        p === null ? ((d.deletions = [s]), (d.flags |= 16)) : p.push(s);
      }
    }
    function n(d, s) {
      if (!e) return null;
      for (; s !== null; ) (t(d, s), (s = s.sibling));
      return null;
    }
    function r(d, s) {
      for (d = new Map(); s !== null; )
        (s.key !== null ? d.set(s.key, s) : d.set(s.index, s), (s = s.sibling));
      return d;
    }
    function l(d, s) {
      return ((d = Gt(d, s)), (d.index = 0), (d.sibling = null), d);
    }
    function o(d, s, p) {
      return (
        (d.index = p),
        e
          ? ((p = d.alternate),
            p !== null
              ? ((p = p.index), p < s ? ((d.flags |= 2), s) : p)
              : ((d.flags |= 2), s))
          : ((d.flags |= 1048576), s)
      );
    }
    function i(d) {
      return (e && d.alternate === null && (d.flags |= 2), d);
    }
    function u(d, s, p, x) {
      return s === null || s.tag !== 6
        ? ((s = Ni(p, d.mode, x)), (s.return = d), s)
        : ((s = l(s, p)), (s.return = d), s);
    }
    function a(d, s, p, x) {
      var R = p.type;
      return R === W
        ? k(d, s, p.props.children, x, p.key)
        : s !== null &&
            (s.elementType === R ||
              (typeof R == "object" &&
                R !== null &&
                R.$$typeof === ge &&
                fa(R) === s.type))
          ? ((x = l(s, p.props)), (x.ref = sr(d, s, p)), (x.return = d), x)
          : ((x = Nl(p.type, p.key, p.props, null, d.mode, x)),
            (x.ref = sr(d, s, p)),
            (x.return = d),
            x);
    }
    function m(d, s, p, x) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== p.containerInfo ||
        s.stateNode.implementation !== p.implementation
        ? ((s = _i(p, d.mode, x)), (s.return = d), s)
        : ((s = l(s, p.children || [])), (s.return = d), s);
    }
    function k(d, s, p, x, R) {
      return s === null || s.tag !== 7
        ? ((s = fn(p, d.mode, x, R)), (s.return = d), s)
        : ((s = l(s, p)), (s.return = d), s);
    }
    function S(d, s, p) {
      if ((typeof s == "string" && s !== "") || typeof s == "number")
        return ((s = Ni("" + s, d.mode, p)), (s.return = d), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case U:
            return (
              (p = Nl(s.type, s.key, s.props, null, d.mode, p)),
              (p.ref = sr(d, null, s)),
              (p.return = d),
              p
            );
          case P:
            return ((s = _i(s, d.mode, p)), (s.return = d), s);
          case ge:
            var x = s._init;
            return S(d, x(s._payload), p);
        }
        if (An(s) || I(s))
          return ((s = fn(s, d.mode, p, null)), (s.return = d), s);
        tl(d, s);
      }
      return null;
    }
    function w(d, s, p, x) {
      var R = s !== null ? s.key : null;
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return R !== null ? null : u(d, s, "" + p, x);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case U:
            return p.key === R ? a(d, s, p, x) : null;
          case P:
            return p.key === R ? m(d, s, p, x) : null;
          case ge:
            return ((R = p._init), w(d, s, R(p._payload), x));
        }
        if (An(p) || I(p)) return R !== null ? null : k(d, s, p, x, null);
        tl(d, p);
      }
      return null;
    }
    function _(d, s, p, x, R) {
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return ((d = d.get(p) || null), u(s, d, "" + x, R));
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case U:
            return (
              (d = d.get(x.key === null ? p : x.key) || null),
              a(s, d, x, R)
            );
          case P:
            return (
              (d = d.get(x.key === null ? p : x.key) || null),
              m(s, d, x, R)
            );
          case ge:
            var D = x._init;
            return _(d, s, p, D(x._payload), R);
        }
        if (An(x) || I(x)) return ((d = d.get(p) || null), k(s, d, x, R, null));
        tl(s, x);
      }
      return null;
    }
    function z(d, s, p, x) {
      for (
        var R = null, D = null, F = s, H = (s = 0), Oe = null;
        F !== null && H < p.length;
        H++
      ) {
        F.index > H ? ((Oe = F), (F = null)) : (Oe = F.sibling);
        var ne = w(d, F, p[H], x);
        if (ne === null) {
          F === null && (F = Oe);
          break;
        }
        (e && F && ne.alternate === null && t(d, F),
          (s = o(ne, s, H)),
          D === null ? (R = ne) : (D.sibling = ne),
          (D = ne),
          (F = Oe));
      }
      if (H === p.length) return (n(d, F), ve && nn(d, H), R);
      if (F === null) {
        for (; H < p.length; H++)
          ((F = S(d, p[H], x)),
            F !== null &&
              ((s = o(F, s, H)),
              D === null ? (R = F) : (D.sibling = F),
              (D = F)));
        return (ve && nn(d, H), R);
      }
      for (F = r(d, F); H < p.length; H++)
        ((Oe = _(F, d, H, p[H], x)),
          Oe !== null &&
            (e &&
              Oe.alternate !== null &&
              F.delete(Oe.key === null ? H : Oe.key),
            (s = o(Oe, s, H)),
            D === null ? (R = Oe) : (D.sibling = Oe),
            (D = Oe)));
      return (
        e &&
          F.forEach(function (Yt) {
            return t(d, Yt);
          }),
        ve && nn(d, H),
        R
      );
    }
    function L(d, s, p, x) {
      var R = I(p);
      if (typeof R != "function") throw Error(c(150));
      if (((p = R.call(p)), p == null)) throw Error(c(151));
      for (
        var D = (R = null), F = s, H = (s = 0), Oe = null, ne = p.next();
        F !== null && !ne.done;
        H++, ne = p.next()
      ) {
        F.index > H ? ((Oe = F), (F = null)) : (Oe = F.sibling);
        var Yt = w(d, F, ne.value, x);
        if (Yt === null) {
          F === null && (F = Oe);
          break;
        }
        (e && F && Yt.alternate === null && t(d, F),
          (s = o(Yt, s, H)),
          D === null ? (R = Yt) : (D.sibling = Yt),
          (D = Yt),
          (F = Oe));
      }
      if (ne.done) return (n(d, F), ve && nn(d, H), R);
      if (F === null) {
        for (; !ne.done; H++, ne = p.next())
          ((ne = S(d, ne.value, x)),
            ne !== null &&
              ((s = o(ne, s, H)),
              D === null ? (R = ne) : (D.sibling = ne),
              (D = ne)));
        return (ve && nn(d, H), R);
      }
      for (F = r(d, F); !ne.done; H++, ne = p.next())
        ((ne = _(F, d, H, ne.value, x)),
          ne !== null &&
            (e &&
              ne.alternate !== null &&
              F.delete(ne.key === null ? H : ne.key),
            (s = o(ne, s, H)),
            D === null ? (R = ne) : (D.sibling = ne),
            (D = ne)));
      return (
        e &&
          F.forEach(function (td) {
            return t(d, td);
          }),
        ve && nn(d, H),
        R
      );
    }
    function Ne(d, s, p, x) {
      if (
        (typeof p == "object" &&
          p !== null &&
          p.type === W &&
          p.key === null &&
          (p = p.props.children),
        typeof p == "object" && p !== null)
      ) {
        switch (p.$$typeof) {
          case U:
            e: {
              for (var R = p.key, D = s; D !== null; ) {
                if (D.key === R) {
                  if (((R = p.type), R === W)) {
                    if (D.tag === 7) {
                      (n(d, D.sibling),
                        (s = l(D, p.props.children)),
                        (s.return = d),
                        (d = s));
                      break e;
                    }
                  } else if (
                    D.elementType === R ||
                    (typeof R == "object" &&
                      R !== null &&
                      R.$$typeof === ge &&
                      fa(R) === D.type)
                  ) {
                    (n(d, D.sibling),
                      (s = l(D, p.props)),
                      (s.ref = sr(d, D, p)),
                      (s.return = d),
                      (d = s));
                    break e;
                  }
                  n(d, D);
                  break;
                } else t(d, D);
                D = D.sibling;
              }
              p.type === W
                ? ((s = fn(p.props.children, d.mode, x, p.key)),
                  (s.return = d),
                  (d = s))
                : ((x = Nl(p.type, p.key, p.props, null, d.mode, x)),
                  (x.ref = sr(d, s, p)),
                  (x.return = d),
                  (d = x));
            }
            return i(d);
          case P:
            e: {
              for (D = p.key; s !== null; ) {
                if (s.key === D)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === p.containerInfo &&
                    s.stateNode.implementation === p.implementation
                  ) {
                    (n(d, s.sibling),
                      (s = l(s, p.children || [])),
                      (s.return = d),
                      (d = s));
                    break e;
                  } else {
                    n(d, s);
                    break;
                  }
                else t(d, s);
                s = s.sibling;
              }
              ((s = _i(p, d.mode, x)), (s.return = d), (d = s));
            }
            return i(d);
          case ge:
            return ((D = p._init), Ne(d, s, D(p._payload), x));
        }
        if (An(p)) return z(d, s, p, x);
        if (I(p)) return L(d, s, p, x);
        tl(d, p);
      }
      return (typeof p == "string" && p !== "") || typeof p == "number"
        ? ((p = "" + p),
          s !== null && s.tag === 6
            ? (n(d, s.sibling), (s = l(s, p)), (s.return = d), (d = s))
            : (n(d, s), (s = Ni(p, d.mode, x)), (s.return = d), (d = s)),
          i(d))
        : n(d, s);
    }
    return Ne;
  }
  var Tn = da(!0),
    pa = da(!1),
    nl = Ft(null),
    rl = null,
    zn = null,
    Io = null;
  function Do() {
    Io = zn = rl = null;
  }
  function Fo(e) {
    var t = nl.current;
    (me(nl), (e._currentValue = t));
  }
  function Ao(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Ln(e, t) {
    ((rl = e),
      (Io = zn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (qe = !0), (e.firstContext = null)));
  }
  function ot(e) {
    var t = e._currentValue;
    if (Io !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), zn === null)) {
        if (rl === null) throw Error(c(308));
        ((zn = e), (rl.dependencies = { lanes: 0, firstContext: e }));
      } else zn = zn.next = e;
    return t;
  }
  var rn = null;
  function Uo(e) {
    rn === null ? (rn = [e]) : rn.push(e);
  }
  function ma(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Uo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Nt(e, r)
    );
  }
  function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Bt = !1;
  function Bo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ha(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function _t(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Ht(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Z & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Nt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Uo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Nt(e, n)
    );
  }
  function ll(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n));
    }
  }
  function va(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (o === null ? (l = o = i) : (o = o.next = i), (n = n.next));
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function ol(e, t, n, r) {
    var l = e.updateQueue;
    Bt = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var a = u,
        m = a.next;
      ((a.next = null), i === null ? (o = m) : (i.next = m), (i = a));
      var k = e.alternate;
      k !== null &&
        ((k = k.updateQueue),
        (u = k.lastBaseUpdate),
        u !== i &&
          (u === null ? (k.firstBaseUpdate = m) : (u.next = m),
          (k.lastBaseUpdate = a)));
    }
    if (o !== null) {
      var S = l.baseState;
      ((i = 0), (k = m = a = null), (u = o));
      do {
        var w = u.lane,
          _ = u.eventTime;
        if ((r & w) === w) {
          k !== null &&
            (k = k.next =
              {
                eventTime: _,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var z = e,
              L = u;
            switch (((w = t), (_ = n), L.tag)) {
              case 1:
                if (((z = L.payload), typeof z == "function")) {
                  S = z.call(_, S, w);
                  break e;
                }
                S = z;
                break e;
              case 3:
                z.flags = (z.flags & -65537) | 128;
              case 0:
                if (
                  ((z = L.payload),
                  (w = typeof z == "function" ? z.call(_, S, w) : z),
                  w == null)
                )
                  break e;
                S = j({}, S, w);
                break e;
              case 2:
                Bt = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (w = l.effects),
            w === null ? (l.effects = [u]) : w.push(u));
        } else
          ((_ = {
            eventTime: _,
            lane: w,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            k === null ? ((m = k = _), (a = S)) : (k = k.next = _),
            (i |= w));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((w = u),
            (u = w.next),
            (w.next = null),
            (l.lastBaseUpdate = w),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (k === null && (a = S),
        (l.baseState = a),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = k),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((un |= i), (e.lanes = i), (e.memoizedState = S));
    }
  }
  function ga(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(c(191, l));
          l.call(r);
        }
      }
  }
  var cr = {},
    yt = Ft(cr),
    fr = Ft(cr),
    dr = Ft(cr);
  function ln(e) {
    if (e === cr) throw Error(c(174));
    return e;
  }
  function Ho(e, t) {
    switch ((ce(dr, t), ce(fr, e), ce(yt, cr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Hl(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Hl(t, e)));
    }
    (me(yt), ce(yt, t));
  }
  function Rn() {
    (me(yt), me(fr), me(dr));
  }
  function ya(e) {
    ln(dr.current);
    var t = ln(yt.current),
      n = Hl(t, e.type);
    t !== n && (ce(fr, e), ce(yt, n));
  }
  function Wo(e) {
    fr.current === e && (me(yt), me(fr));
  }
  var ye = Ft(0);
  function il(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Vo = [];
  function Qo() {
    for (var e = 0; e < Vo.length; e++)
      Vo[e]._workInProgressVersionPrimary = null;
    Vo.length = 0;
  }
  var ul = Ee.ReactCurrentDispatcher,
    $o = Ee.ReactCurrentBatchConfig,
    on = 0,
    we = null,
    Te = null,
    Le = null,
    al = !1,
    pr = !1,
    mr = 0,
    Ef = 0;
  function Be() {
    throw Error(c(321));
  }
  function Ko(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ct(e[n], t[n])) return !1;
    return !0;
  }
  function Go(e, t, n, r, l, o) {
    if (
      ((on = o),
      (we = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ul.current = e === null || e.memoizedState === null ? jf : Pf),
      (e = n(r, l)),
      pr)
    ) {
      o = 0;
      do {
        if (((pr = !1), (mr = 0), 25 <= o)) throw Error(c(301));
        ((o += 1),
          (Le = Te = null),
          (t.updateQueue = null),
          (ul.current = Tf),
          (e = n(r, l)));
      } while (pr);
    }
    if (
      ((ul.current = fl),
      (t = Te !== null && Te.next !== null),
      (on = 0),
      (Le = Te = we = null),
      (al = !1),
      t)
    )
      throw Error(c(300));
    return e;
  }
  function Yo() {
    var e = mr !== 0;
    return ((mr = 0), e);
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Le === null ? (we.memoizedState = Le = e) : (Le = Le.next = e), Le);
  }
  function it() {
    if (Te === null) {
      var e = we.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Te.next;
    var t = Le === null ? we.memoizedState : Le.next;
    if (t !== null) ((Le = t), (Te = e));
    else {
      if (e === null) throw Error(c(310));
      ((Te = e),
        (e = {
          memoizedState: Te.memoizedState,
          baseState: Te.baseState,
          baseQueue: Te.baseQueue,
          queue: Te.queue,
          next: null,
        }),
        Le === null ? (we.memoizedState = Le = e) : (Le = Le.next = e));
    }
    return Le;
  }
  function hr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function qo(e) {
    var t = it(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = Te,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        ((l.next = o.next), (o.next = i));
      }
      ((r.baseQueue = l = o), (n.pending = null));
    }
    if (l !== null) {
      ((o = l.next), (r = r.baseState));
      var u = (i = null),
        a = null,
        m = o;
      do {
        var k = m.lane;
        if ((on & k) === k)
          (a !== null &&
            (a = a.next =
              {
                lane: 0,
                action: m.action,
                hasEagerState: m.hasEagerState,
                eagerState: m.eagerState,
                next: null,
              }),
            (r = m.hasEagerState ? m.eagerState : e(r, m.action)));
        else {
          var S = {
            lane: k,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          };
          (a === null ? ((u = a = S), (i = r)) : (a = a.next = S),
            (we.lanes |= k),
            (un |= k));
        }
        m = m.next;
      } while (m !== null && m !== o);
      (a === null ? (i = r) : (a.next = u),
        ct(r, t.memoizedState) || (qe = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = a),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (we.lanes |= o), (un |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Jo(e) {
    var t = it(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do ((o = e(o, i.action)), (i = i.next));
      while (i !== l);
      (ct(o, t.memoizedState) || (qe = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function wa() {}
  function ka(e, t) {
    var n = we,
      r = it(),
      l = t(),
      o = !ct(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (qe = !0)),
      (r = r.queue),
      Xo(Ea.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Le !== null && Le.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        vr(9, xa.bind(null, n, r, l, t), void 0, null),
        Re === null)
      )
        throw Error(c(349));
      (on & 30) !== 0 || Sa(n, t, l);
    }
    return l;
  }
  function Sa(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function xa(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Ca(t) && Na(e));
  }
  function Ea(e, t, n) {
    return n(function () {
      Ca(t) && Na(e);
    });
  }
  function Ca(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ct(e, n);
    } catch {
      return !0;
    }
  }
  function Na(e) {
    var t = Nt(e, 1);
    t !== null && ht(t, e, 1, -1);
  }
  function _a(e) {
    var t = wt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = _f.bind(null, we, e)),
      [t.memoizedState, e]
    );
  }
  function vr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ja() {
    return it().memoizedState;
  }
  function sl(e, t, n, r) {
    var l = wt();
    ((we.flags |= e),
      (l.memoizedState = vr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function cl(e, t, n, r) {
    var l = it();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Te !== null) {
      var i = Te.memoizedState;
      if (((o = i.destroy), r !== null && Ko(r, i.deps))) {
        l.memoizedState = vr(t, n, o, r);
        return;
      }
    }
    ((we.flags |= e), (l.memoizedState = vr(1 | t, n, o, r)));
  }
  function Pa(e, t) {
    return sl(8390656, 8, e, t);
  }
  function Xo(e, t) {
    return cl(2048, 8, e, t);
  }
  function Ta(e, t) {
    return cl(4, 2, e, t);
  }
  function za(e, t) {
    return cl(4, 4, e, t);
  }
  function La(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ra(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      cl(4, 4, La.bind(null, t, e), n)
    );
  }
  function Zo() {}
  function Oa(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ko(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ma(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ko(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ia(e, t, n) {
    return (on & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n))
      : (ct(n, t) ||
          ((n = fu()), (we.lanes |= n), (un |= n), (e.baseState = !0)),
        t);
  }
  function Cf(e, t) {
    var n = ue;
    ((ue = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = $o.transition;
    $o.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ue = n), ($o.transition = r));
    }
  }
  function Da() {
    return it().memoizedState;
  }
  function Nf(e, t, n) {
    var r = $t(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Fa(e))
    )
      Aa(t, n);
    else if (((n = ma(e, t, n, r)), n !== null)) {
      var l = Ke();
      (ht(n, e, r, l), Ua(n, t, r));
    }
  }
  function _f(e, t, n) {
    var r = $t(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Fa(e)) Aa(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var i = t.lastRenderedState,
            u = o(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), ct(u, i))) {
            var a = t.interleaved;
            (a === null
              ? ((l.next = l), Uo(t))
              : ((l.next = a.next), (a.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = ma(e, t, l, r)),
        n !== null && ((l = Ke()), ht(n, e, r, l), Ua(n, t, r)));
    }
  }
  function Fa(e) {
    var t = e.alternate;
    return e === we || (t !== null && t === we);
  }
  function Aa(e, t) {
    pr = al = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Ua(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n));
    }
  }
  var fl = {
      readContext: ot,
      useCallback: Be,
      useContext: Be,
      useEffect: Be,
      useImperativeHandle: Be,
      useInsertionEffect: Be,
      useLayoutEffect: Be,
      useMemo: Be,
      useReducer: Be,
      useRef: Be,
      useState: Be,
      useDebugValue: Be,
      useDeferredValue: Be,
      useTransition: Be,
      useMutableSource: Be,
      useSyncExternalStore: Be,
      useId: Be,
      unstable_isNewReconciler: !1,
    },
    jf = {
      readContext: ot,
      useCallback: function (e, t) {
        return ((wt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ot,
      useEffect: Pa,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          sl(4194308, 4, La.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return sl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = wt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = wt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Nf.bind(null, we, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = wt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: _a,
      useDebugValue: Zo,
      useDeferredValue: function (e) {
        return (wt().memoizedState = e);
      },
      useTransition: function () {
        var e = _a(!1),
          t = e[0];
        return ((e = Cf.bind(null, e[1])), (wt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = we,
          l = wt();
        if (ve) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), Re === null)) throw Error(c(349));
          (on & 30) !== 0 || Sa(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Pa(Ea.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          vr(9, xa.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = wt(),
          t = Re.identifierPrefix;
        if (ve) {
          var n = Ct,
            r = Et;
          ((n = (r & ~(1 << (32 - st(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = mr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Ef++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Pf = {
      readContext: ot,
      useCallback: Oa,
      useContext: ot,
      useEffect: Xo,
      useImperativeHandle: Ra,
      useInsertionEffect: Ta,
      useLayoutEffect: za,
      useMemo: Ma,
      useReducer: qo,
      useRef: ja,
      useState: function () {
        return qo(hr);
      },
      useDebugValue: Zo,
      useDeferredValue: function (e) {
        var t = it();
        return Ia(t, Te.memoizedState, e);
      },
      useTransition: function () {
        var e = qo(hr)[0],
          t = it().memoizedState;
        return [e, t];
      },
      useMutableSource: wa,
      useSyncExternalStore: ka,
      useId: Da,
      unstable_isNewReconciler: !1,
    },
    Tf = {
      readContext: ot,
      useCallback: Oa,
      useContext: ot,
      useEffect: Xo,
      useImperativeHandle: Ra,
      useInsertionEffect: Ta,
      useLayoutEffect: za,
      useMemo: Ma,
      useReducer: Jo,
      useRef: ja,
      useState: function () {
        return Jo(hr);
      },
      useDebugValue: Zo,
      useDeferredValue: function (e) {
        var t = it();
        return Te === null ? (t.memoizedState = e) : Ia(t, Te.memoizedState, e);
      },
      useTransition: function () {
        var e = Jo(hr)[0],
          t = it().memoizedState;
        return [e, t];
      },
      useMutableSource: wa,
      useSyncExternalStore: ka,
      useId: Da,
      unstable_isNewReconciler: !1,
    };
  function dt(e, t) {
    if (e && e.defaultProps) {
      ((t = j({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function bo(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : j({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var dl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Zt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ke(),
        l = $t(e),
        o = _t(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Ht(e, o, l)),
        t !== null && (ht(t, e, l, r), ll(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ke(),
        l = $t(e),
        o = _t(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Ht(e, o, l)),
        t !== null && (ht(t, e, l, r), ll(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ke(),
        r = $t(e),
        l = _t(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Ht(e, l, r)),
        t !== null && (ht(t, e, r, n), ll(t, e, r)));
    },
  };
  function Ba(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !nr(n, r) || !nr(l, o)
          : !0
    );
  }
  function Ha(e, t, n) {
    var r = !1,
      l = At,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = ot(o))
        : ((l = Ye(t) ? en : Ue.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Nn(e, l) : At)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = dl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Wa(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && dl.enqueueReplaceState(t, t.state, null));
  }
  function ei(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Bo(e));
    var o = t.contextType;
    (typeof o == "object" && o !== null
      ? (l.context = ot(o))
      : ((o = Ye(t) ? en : Ue.current), (l.context = Nn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (bo(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && dl.enqueueReplaceState(l, l.state, null),
        ol(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function On(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += q(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ti(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ni(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var zf = typeof WeakMap == "function" ? WeakMap : Map;
  function Va(e, t, n) {
    ((n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (wl || ((wl = !0), (gi = r)), ni(e, t));
      }),
      n
    );
  }
  function Qa(e, t, n) {
    ((n = _t(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          ni(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          (ni(e, t),
            typeof r != "function" &&
              (Vt === null ? (Vt = new Set([this])) : Vt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      n
    );
  }
  function $a(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new zf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Qf.bind(null, e, t, n)), t.then(e, e));
  }
  function Ka(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ga(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = _t(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Lf = Ee.ReactCurrentOwner,
    qe = !1;
  function $e(e, t, n, r) {
    t.child = e === null ? pa(t, null, n, r) : Tn(t, e.child, n, r);
  }
  function Ya(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Ln(t, l),
      (r = Go(e, t, n, r, o, l)),
      (n = Yo()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          jt(e, t, l))
        : (ve && n && zo(t), (t.flags |= 1), $e(e, t, r, l), t.child)
    );
  }
  function qa(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Ci(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Ja(e, t, o, r, l))
        : ((e = Nl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : nr), n(i, r) && e.ref === t.ref)
      )
        return jt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Gt(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ja(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (nr(o, r) && e.ref === t.ref)
        if (((qe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (qe = !0);
        else return ((t.lanes = e.lanes), jt(e, t, l));
    }
    return ri(e, t, n, r, l);
  }
  function Xa(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ce(In, nt),
          (nt |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ce(In, nt),
            (nt |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ce(In, nt),
          (nt |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ce(In, nt),
        (nt |= r));
    return ($e(e, t, l, n), t.child);
  }
  function Za(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ri(e, t, n, r, l) {
    var o = Ye(n) ? en : Ue.current;
    return (
      (o = Nn(t, o)),
      Ln(t, l),
      (n = Go(e, t, n, r, o, l)),
      (r = Yo()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          jt(e, t, l))
        : (ve && r && zo(t), (t.flags |= 1), $e(e, t, n, l), t.child)
    );
  }
  function ba(e, t, n, r, l) {
    if (Ye(n)) {
      var o = !0;
      Jr(t);
    } else o = !1;
    if ((Ln(t, l), t.stateNode === null))
      (ml(e, t), Ha(t, n, r), ei(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var a = i.context,
        m = n.contextType;
      typeof m == "object" && m !== null
        ? (m = ot(m))
        : ((m = Ye(n) ? en : Ue.current), (m = Nn(t, m)));
      var k = n.getDerivedStateFromProps,
        S =
          typeof k == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      (S ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((u !== r || a !== m) && Wa(t, i, r, m)),
        (Bt = !1));
      var w = t.memoizedState;
      ((i.state = w),
        ol(t, r, i, l),
        (a = t.memoizedState),
        u !== r || w !== a || Ge.current || Bt
          ? (typeof k == "function" && (bo(t, n, k, r), (a = t.memoizedState)),
            (u = Bt || Ba(t, n, u, r, w, a, m))
              ? (S ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = a)),
            (i.props = r),
            (i.state = a),
            (i.context = m),
            (r = u))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((i = t.stateNode),
        ha(e, t),
        (u = t.memoizedProps),
        (m = t.type === t.elementType ? u : dt(t.type, u)),
        (i.props = m),
        (S = t.pendingProps),
        (w = i.context),
        (a = n.contextType),
        typeof a == "object" && a !== null
          ? (a = ot(a))
          : ((a = Ye(n) ? en : Ue.current), (a = Nn(t, a))));
      var _ = n.getDerivedStateFromProps;
      ((k =
        typeof _ == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((u !== S || w !== a) && Wa(t, i, r, a)),
        (Bt = !1),
        (w = t.memoizedState),
        (i.state = w),
        ol(t, r, i, l));
      var z = t.memoizedState;
      u !== S || w !== z || Ge.current || Bt
        ? (typeof _ == "function" && (bo(t, n, _, r), (z = t.memoizedState)),
          (m = Bt || Ba(t, n, m, r, w, z, a) || !1)
            ? (k ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, z, a),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, z, a)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (u === e.memoizedProps && w === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && w === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = z)),
          (i.props = r),
          (i.state = z),
          (i.context = a),
          (r = m))
        : (typeof i.componentDidUpdate != "function" ||
            (u === e.memoizedProps && w === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && w === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return li(e, t, n, r, o, l);
  }
  function li(e, t, n, r, l, o) {
    Za(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && la(t, n, !1), jt(e, t, o));
    ((r = t.stateNode), (Lf.current = t));
    var u =
      i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Tn(t, e.child, null, o)), (t.child = Tn(t, null, u, o)))
        : $e(e, t, u, o),
      (t.memoizedState = r.state),
      l && la(t, n, !0),
      t.child
    );
  }
  function es(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? na(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && na(e, t.context, !1),
      Ho(e, t.containerInfo));
  }
  function ts(e, t, n, r, l) {
    return (Pn(), Mo(l), (t.flags |= 256), $e(e, t, n, r), t.child);
  }
  var oi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ii(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ns(e, t, n) {
    var r = t.pendingProps,
      l = ye.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ce(ye, l & 1),
      e === null)
    )
      return (
        Oo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((i = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (i = { mode: "hidden", children: i }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = i))
                  : (o = _l(i, r, 0, null)),
                (e = fn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = ii(n)),
                (t.memoizedState = oi),
                e)
              : ui(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return Rf(e, t, i, r, u, l, n);
    if (o) {
      ((o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling));
      var a = { mode: "hidden", children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = a),
            (t.deletions = null))
          : ((r = Gt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (o = Gt(u, o)) : ((o = fn(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? ii(n)
            : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions,
              }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = oi),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Gt(o, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ui(e, t) {
    return (
      (t = _l({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function pl(e, t, n, r) {
    return (
      r !== null && Mo(r),
      Tn(t, e.child, null, n),
      (e = ui(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Rf(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = ti(Error(c(422)))), pl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = _l({ mode: "visible", children: r.children }, l, 0, null)),
            (o = fn(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Tn(t, e.child, null, i),
            (t.child.memoizedState = ii(i)),
            (t.memoizedState = oi),
            o);
    if ((t.mode & 1) === 0) return pl(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u),
        (o = Error(c(419))),
        (r = ti(o, r, void 0)),
        pl(e, t, i, r)
      );
    }
    if (((u = (i & e.childLanes) !== 0), qe || u)) {
      if (((r = Re), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Nt(e, l), ht(r, e, l, -1)));
      }
      return (Ei(), (r = ti(Error(c(421)))), pl(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = $f.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (tt = Dt(l.nextSibling)),
        (et = t),
        (ve = !0),
        (ft = null),
        e !== null &&
          ((rt[lt++] = Et),
          (rt[lt++] = Ct),
          (rt[lt++] = tn),
          (Et = e.id),
          (Ct = e.overflow),
          (tn = t)),
        (t = ui(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function rs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ao(e.return, t, n));
  }
  function ai(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function ls(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if (($e(e, t, r.children, n), (r = ye.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && rs(e, n, t);
          else if (e.tag === 19) rs(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((ce(ye, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && il(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            ai(t, !1, l, n, o));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && il(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ai(t, !0, n, null, o);
          break;
        case "together":
          ai(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ml(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function jt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (un |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Gt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Of(e, t, n) {
    switch (t.tag) {
      case 3:
        (es(t), Pn());
        break;
      case 5:
        ya(t);
        break;
      case 1:
        Ye(t.type) && Jr(t);
        break;
      case 4:
        Ho(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ce(nl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ce(ye, ye.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ns(e, t, n)
              : (ce(ye, ye.current & 1),
                (e = jt(e, t, n)),
                e !== null ? e.sibling : null);
        ce(ye, ye.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ls(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ce(ye, ye.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Xa(e, t, n));
    }
    return jt(e, t, n);
  }
  var os, si, is, us;
  ((os = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (si = function () {}),
    (is = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), ln(yt.current));
        var o = null;
        switch (n) {
          case "input":
            ((l = Fl(e, l)), (r = Fl(e, r)), (o = []));
            break;
          case "select":
            ((l = j({}, l, { value: void 0 })),
              (r = j({}, r, { value: void 0 })),
              (o = []));
            break;
          case "textarea":
            ((l = Bl(e, l)), (r = Bl(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Gr);
        }
        Wl(n, r);
        var i;
        n = null;
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === "style") {
              var u = l[m];
              for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              m !== "dangerouslySetInnerHTML" &&
                m !== "children" &&
                m !== "suppressContentEditableWarning" &&
                m !== "suppressHydrationWarning" &&
                m !== "autoFocus" &&
                (N.hasOwnProperty(m)
                  ? o || (o = [])
                  : (o = o || []).push(m, null));
        for (m in r) {
          var a = r[m];
          if (
            ((u = l != null ? l[m] : void 0),
            r.hasOwnProperty(m) && a !== u && (a != null || u != null))
          )
            if (m === "style")
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (a && a.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in a)
                  a.hasOwnProperty(i) &&
                    u[i] !== a[i] &&
                    (n || (n = {}), (n[i] = a[i]));
              } else (n || (o || (o = []), o.push(m, n)), (n = a));
            else
              m === "dangerouslySetInnerHTML"
                ? ((a = a ? a.__html : void 0),
                  (u = u ? u.__html : void 0),
                  a != null && u !== a && (o = o || []).push(m, a))
                : m === "children"
                  ? (typeof a != "string" && typeof a != "number") ||
                    (o = o || []).push(m, "" + a)
                  : m !== "suppressContentEditableWarning" &&
                    m !== "suppressHydrationWarning" &&
                    (N.hasOwnProperty(m)
                      ? (a != null && m === "onScroll" && pe("scroll", e),
                        o || u === a || (o = []))
                      : (o = o || []).push(m, a));
        }
        n && (o = o || []).push("style", n);
        var m = o;
        (t.updateQueue = m) && (t.flags |= 4);
      }
    }),
    (us = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function gr(e, t) {
    if (!ve)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function Mf(e, t, n) {
    var r = t.pendingProps;
    switch ((Lo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (He(t), null);
      case 1:
        return (Ye(t.type) && qr(), He(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Rn(),
          me(Ge),
          me(Ue),
          Qo(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (el(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ft !== null && (ki(ft), (ft = null)))),
          si(e, t),
          He(t),
          null
        );
      case 5:
        Wo(t);
        var l = ln(dr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (is(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return (He(t), null);
          }
          if (((e = ln(yt.current)), el(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[gt] = t), (r[ur] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (pe("cancel", r), pe("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < lr.length; l++) pe(lr[l], r);
                break;
              case "source":
                pe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (pe("error", r), pe("load", r));
                break;
              case "details":
                pe("toggle", r);
                break;
              case "input":
                (Hi(r, o), pe("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!o.multiple }),
                  pe("invalid", r));
                break;
              case "textarea":
                (Qi(r, o), pe("invalid", r));
            }
            (Wl(n, o), (l = null));
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 &&
                        Kr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (o.suppressHydrationWarning !== !0 &&
                        Kr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : N.hasOwnProperty(i) &&
                    u != null &&
                    i === "onScroll" &&
                    pe("scroll", r);
              }
            switch (n) {
              case "input":
                (Xt(r), Vi(r, o, !0));
                break;
              case "textarea":
                (Xt(r), Ki(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Gr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Gi(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = i.createElement(n, { is: r.is }))
                    : ((e = i.createElement(n)),
                      n === "select" &&
                        ((i = e),
                        r.multiple
                          ? (i.multiple = !0)
                          : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[gt] = t),
              (e[ur] = r),
              os(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Vl(n, r)), n)) {
                case "dialog":
                  (pe("cancel", e), pe("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (pe("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < lr.length; l++) pe(lr[l], e);
                  l = r;
                  break;
                case "source":
                  (pe("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (pe("error", e), pe("load", e), (l = r));
                  break;
                case "details":
                  (pe("toggle", e), (l = r));
                  break;
                case "input":
                  (Hi(e, r), (l = Fl(e, r)), pe("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = j({}, r, { value: void 0 })),
                    pe("invalid", e));
                  break;
                case "textarea":
                  (Qi(e, r), (l = Bl(e, r)), pe("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Wl(n, l), (u = l));
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var a = u[o];
                  o === "style"
                    ? Ji(e, a)
                    : o === "dangerouslySetInnerHTML"
                      ? ((a = a ? a.__html : void 0), a != null && Yi(e, a))
                      : o === "children"
                        ? typeof a == "string"
                          ? (n !== "textarea" || a !== "") && Un(e, a)
                          : typeof a == "number" && Un(e, "" + a)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (N.hasOwnProperty(o)
                            ? a != null && o === "onScroll" && pe("scroll", e)
                            : a != null && Qe(e, o, a, i));
                }
              switch (n) {
                case "input":
                  (Xt(e), Vi(e, r, !1));
                  break;
                case "textarea":
                  (Xt(e), Ki(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + O(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? pn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        pn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Gr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (He(t), null);
      case 6:
        if (e && t.stateNode != null) us(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(c(166));
          if (((n = ln(dr.current)), ln(yt.current), el(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[gt] = t),
              (o = r.nodeValue !== n) && ((e = et), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Kr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Kr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[gt] = t),
              (t.stateNode = r));
        }
        return (He(t), null);
      case 13:
        if (
          (me(ye),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ve && tt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ca(), Pn(), (t.flags |= 98560), (o = !1));
          else if (((o = el(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(c(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(c(317));
              o[gt] = t;
            } else
              (Pn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (He(t), (o = !1));
          } else (ft !== null && (ki(ft), (ft = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ye.current & 1) !== 0
                  ? ze === 0 && (ze = 3)
                  : Ei())),
            t.updateQueue !== null && (t.flags |= 4),
            He(t),
            null);
      case 4:
        return (
          Rn(),
          si(e, t),
          e === null && or(t.stateNode.containerInfo),
          He(t),
          null
        );
      case 10:
        return (Fo(t.type._context), He(t), null);
      case 17:
        return (Ye(t.type) && qr(), He(t), null);
      case 19:
        if ((me(ye), (o = t.memoizedState), o === null)) return (He(t), null);
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) gr(o, !1);
          else {
            if (ze !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = il(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      gr(o, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (i = o.alternate),
                      i === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = i.childLanes),
                          (o.lanes = i.lanes),
                          (o.child = i.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = i.memoizedProps),
                          (o.memoizedState = i.memoizedState),
                          (o.updateQueue = i.updateQueue),
                          (o.type = i.type),
                          (e = i.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (ce(ye, (ye.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ce() > Dn &&
              ((t.flags |= 128), (r = !0), gr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = il(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                gr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !i.alternate &&
                  !ve)
              )
                return (He(t), null);
            } else
              2 * Ce() - o.renderingStartTime > Dn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), gr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last),
              n !== null ? (n.sibling = i) : (t.child = i),
              (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ce()),
            (t.sibling = null),
            (n = ye.current),
            ce(ye, r ? (n & 1) | 2 : n & 1),
            t)
          : (He(t), null);
      case 22:
      case 23:
        return (
          xi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (nt & 1073741824) !== 0 &&
              (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : He(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function If(e, t) {
    switch ((Lo(t), t.tag)) {
      case 1:
        return (
          Ye(t.type) && qr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Rn(),
          me(Ge),
          me(Ue),
          Qo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Wo(t), null);
      case 13:
        if (
          (me(ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          Pn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (me(ye), null);
      case 4:
        return (Rn(), null);
      case 10:
        return (Fo(t.type._context), null);
      case 22:
      case 23:
        return (xi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hl = !1,
    We = !1,
    Df = typeof WeakSet == "function" ? WeakSet : Set,
    T = null;
  function Mn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Se(e, t, r);
        }
      else n.current = null;
  }
  function ci(e, t, n) {
    try {
      n();
    } catch (r) {
      Se(e, t, r);
    }
  }
  var as = !1;
  function Ff(e, t) {
    if (((xo = Ir), (e = Bu()), mo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              u = -1,
              a = -1,
              m = 0,
              k = 0,
              S = e,
              w = null;
            t: for (;;) {
              for (
                var _;
                S !== n || (l !== 0 && S.nodeType !== 3) || (u = i + l),
                  S !== o || (r !== 0 && S.nodeType !== 3) || (a = i + r),
                  S.nodeType === 3 && (i += S.nodeValue.length),
                  (_ = S.firstChild) !== null;
              )
                ((w = S), (S = _));
              for (;;) {
                if (S === e) break t;
                if (
                  (w === n && ++m === l && (u = i),
                  w === o && ++k === r && (a = i),
                  (_ = S.nextSibling) !== null)
                )
                  break;
                ((S = w), (w = S.parentNode));
              }
              S = _;
            }
            n = u === -1 || a === -1 ? null : { start: u, end: a };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Eo = { focusedElem: e, selectionRange: n }, Ir = !1, T = t;
      T !== null;
    )
      if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (T = e));
      else
        for (; T !== null; ) {
          t = T;
          try {
            var z = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (z !== null) {
                    var L = z.memoizedProps,
                      Ne = z.memoizedState,
                      d = t.stateNode,
                      s = d.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? L : dt(t.type, L),
                        Ne
                      );
                    d.__reactInternalSnapshotBeforeUpdate = s;
                  }
                  break;
                case 3:
                  var p = t.stateNode.containerInfo;
                  p.nodeType === 1
                    ? (p.textContent = "")
                    : p.nodeType === 9 &&
                      p.documentElement &&
                      p.removeChild(p.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(c(163));
              }
          } catch (x) {
            Se(t, t.return, x);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (T = e));
            break;
          }
          T = t.return;
        }
    return ((z = as), (as = !1), z);
  }
  function yr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && ci(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function vl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function fi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function ss(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ss(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[gt],
          delete t[ur],
          delete t[jo],
          delete t[wf],
          delete t[kf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function cs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function fs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || cs(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function di(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Gr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (di(e, t, n), e = e.sibling; e !== null; )
        (di(e, t, n), (e = e.sibling));
  }
  function pi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (pi(e, t, n), e = e.sibling; e !== null; )
        (pi(e, t, n), (e = e.sibling));
  }
  var Ie = null,
    pt = !1;
  function Wt(e, t, n) {
    for (n = n.child; n !== null; ) (ds(e, t, n), (n = n.sibling));
  }
  function ds(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
      try {
        vt.onCommitFiberUnmount(Tr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        We || Mn(n, t);
      case 6:
        var r = Ie,
          l = pt;
        ((Ie = null),
          Wt(e, t, n),
          (Ie = r),
          (pt = l),
          Ie !== null &&
            (pt
              ? ((e = Ie),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ie.removeChild(n.stateNode)));
        break;
      case 18:
        Ie !== null &&
          (pt
            ? ((e = Ie),
              (n = n.stateNode),
              e.nodeType === 8
                ? _o(e.parentNode, n)
                : e.nodeType === 1 && _o(e, n),
              Jn(e))
            : _o(Ie, n.stateNode));
        break;
      case 4:
        ((r = Ie),
          (l = pt),
          (Ie = n.stateNode.containerInfo),
          (pt = !0),
          Wt(e, t, n),
          (Ie = r),
          (pt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !We &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            ((o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && ci(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Wt(e, t, n);
        break;
      case 1:
        if (
          !We &&
          (Mn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (u) {
            Se(n, t, u);
          }
        Wt(e, t, n);
        break;
      case 21:
        Wt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((We = (r = We) || n.memoizedState !== null), Wt(e, t, n), (We = r))
          : Wt(e, t, n);
        break;
      default:
        Wt(e, t, n);
    }
  }
  function ps(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Df()),
        t.forEach(function (r) {
          var l = Kf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            i = t,
            u = i;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                ((Ie = u.stateNode), (pt = !1));
                break e;
              case 3:
                ((Ie = u.stateNode.containerInfo), (pt = !0));
                break e;
              case 4:
                ((Ie = u.stateNode.containerInfo), (pt = !0));
                break e;
            }
            u = u.return;
          }
          if (Ie === null) throw Error(c(160));
          (ds(o, i, l), (Ie = null), (pt = !1));
          var a = l.alternate;
          (a !== null && (a.return = null), (l.return = null));
        } catch (m) {
          Se(l, t, m);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (ms(t, e), (t = t.sibling));
  }
  function ms(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((mt(t, e), kt(e), r & 4)) {
          try {
            (yr(3, e, e.return), vl(3, e));
          } catch (L) {
            Se(e, e.return, L);
          }
          try {
            yr(5, e, e.return);
          } catch (L) {
            Se(e, e.return, L);
          }
        }
        break;
      case 1:
        (mt(t, e), kt(e), r & 512 && n !== null && Mn(n, n.return));
        break;
      case 5:
        if (
          (mt(t, e),
          kt(e),
          r & 512 && n !== null && Mn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Un(l, "");
          } catch (L) {
            Se(e, e.return, L);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            a = e.updateQueue;
          if (((e.updateQueue = null), a !== null))
            try {
              (u === "input" &&
                o.type === "radio" &&
                o.name != null &&
                Wi(l, o),
                Vl(u, i));
              var m = Vl(u, o);
              for (i = 0; i < a.length; i += 2) {
                var k = a[i],
                  S = a[i + 1];
                k === "style"
                  ? Ji(l, S)
                  : k === "dangerouslySetInnerHTML"
                    ? Yi(l, S)
                    : k === "children"
                      ? Un(l, S)
                      : Qe(l, k, S, m);
              }
              switch (u) {
                case "input":
                  Al(l, o);
                  break;
                case "textarea":
                  $i(l, o);
                  break;
                case "select":
                  var w = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var _ = o.value;
                  _ != null
                    ? pn(l, !!o.multiple, _, !1)
                    : w !== !!o.multiple &&
                      (o.defaultValue != null
                        ? pn(l, !!o.multiple, o.defaultValue, !0)
                        : pn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[ur] = o;
            } catch (L) {
              Se(e, e.return, L);
            }
        }
        break;
      case 6:
        if ((mt(t, e), kt(e), r & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (L) {
            Se(e, e.return, L);
          }
        }
        break;
      case 3:
        if (
          (mt(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Jn(t.containerInfo);
          } catch (L) {
            Se(e, e.return, L);
          }
        break;
      case 4:
        (mt(t, e), kt(e));
        break;
      case 13:
        (mt(t, e),
          kt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (vi = Ce())),
          r & 4 && ps(e));
        break;
      case 22:
        if (
          ((k = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((We = (m = We) || k), mt(t, e), (We = m)) : mt(t, e),
          kt(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null),
            (e.stateNode.isHidden = m) && !k && (e.mode & 1) !== 0)
          )
            for (T = e, k = e.child; k !== null; ) {
              for (S = T = k; T !== null; ) {
                switch (((w = T), (_ = w.child), w.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    yr(4, w, w.return);
                    break;
                  case 1:
                    Mn(w, w.return);
                    var z = w.stateNode;
                    if (typeof z.componentWillUnmount == "function") {
                      ((r = w), (n = w.return));
                      try {
                        ((t = r),
                          (z.props = t.memoizedProps),
                          (z.state = t.memoizedState),
                          z.componentWillUnmount());
                      } catch (L) {
                        Se(r, n, L);
                      }
                    }
                    break;
                  case 5:
                    Mn(w, w.return);
                    break;
                  case 22:
                    if (w.memoizedState !== null) {
                      gs(S);
                      continue;
                    }
                }
                _ !== null ? ((_.return = w), (T = _)) : gs(S);
              }
              k = k.sibling;
            }
          e: for (k = null, S = e; ; ) {
            if (S.tag === 5) {
              if (k === null) {
                k = S;
                try {
                  ((l = S.stateNode),
                    m
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((u = S.stateNode),
                        (a = S.memoizedProps.style),
                        (i =
                          a != null && a.hasOwnProperty("display")
                            ? a.display
                            : null),
                        (u.style.display = qi("display", i))));
                } catch (L) {
                  Se(e, e.return, L);
                }
              }
            } else if (S.tag === 6) {
              if (k === null)
                try {
                  S.stateNode.nodeValue = m ? "" : S.memoizedProps;
                } catch (L) {
                  Se(e, e.return, L);
                }
            } else if (
              ((S.tag !== 22 && S.tag !== 23) ||
                S.memoizedState === null ||
                S === e) &&
              S.child !== null
            ) {
              ((S.child.return = S), (S = S.child));
              continue;
            }
            if (S === e) break e;
            for (; S.sibling === null; ) {
              if (S.return === null || S.return === e) break e;
              (k === S && (k = null), (S = S.return));
            }
            (k === S && (k = null),
              (S.sibling.return = S.return),
              (S = S.sibling));
          }
        }
        break;
      case 19:
        (mt(t, e), kt(e), r & 4 && ps(e));
        break;
      case 21:
        break;
      default:
        (mt(t, e), kt(e));
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (cs(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(c(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Un(l, ""), (r.flags &= -33));
            var o = fs(e);
            pi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = fs(e);
            di(e, u, i);
            break;
          default:
            throw Error(c(161));
        }
      } catch (a) {
        Se(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Af(e, t, n) {
    ((T = e), hs(e));
  }
  function hs(e, t, n) {
    for (var r = (e.mode & 1) !== 0; T !== null; ) {
      var l = T,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || hl;
        if (!i) {
          var u = l.alternate,
            a = (u !== null && u.memoizedState !== null) || We;
          u = hl;
          var m = We;
          if (((hl = i), (We = a) && !m))
            for (T = l; T !== null; )
              ((i = T),
                (a = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? ys(l)
                  : a !== null
                    ? ((a.return = i), (T = a))
                    : ys(l));
          for (; o !== null; ) ((T = o), hs(o), (o = o.sibling));
          ((T = l), (hl = u), (We = m));
        }
        vs(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && o !== null
          ? ((o.return = l), (T = o))
          : vs(e);
    }
  }
  function vs(e) {
    for (; T !== null; ) {
      var t = T;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                We || vl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !We)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : dt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && ga(t, o, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ga(t, i, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var a = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      a.autoFocus && n.focus();
                      break;
                    case "img":
                      a.src && (n.src = a.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var m = t.alternate;
                  if (m !== null) {
                    var k = m.memoizedState;
                    if (k !== null) {
                      var S = k.dehydrated;
                      S !== null && Jn(S);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(c(163));
            }
          We || (t.flags & 512 && fi(t));
        } catch (w) {
          Se(t, t.return, w);
        }
      }
      if (t === e) {
        T = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (T = n));
        break;
      }
      T = t.return;
    }
  }
  function gs(e) {
    for (; T !== null; ) {
      var t = T;
      if (t === e) {
        T = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (T = n));
        break;
      }
      T = t.return;
    }
  }
  function ys(e) {
    for (; T !== null; ) {
      var t = T;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              vl(4, t);
            } catch (a) {
              Se(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                Se(t, l, a);
              }
            }
            var o = t.return;
            try {
              fi(t);
            } catch (a) {
              Se(t, o, a);
            }
            break;
          case 5:
            var i = t.return;
            try {
              fi(t);
            } catch (a) {
              Se(t, i, a);
            }
        }
      } catch (a) {
        Se(t, t.return, a);
      }
      if (t === e) {
        T = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (T = u));
        break;
      }
      T = t.return;
    }
  }
  var Uf = Math.ceil,
    gl = Ee.ReactCurrentDispatcher,
    mi = Ee.ReactCurrentOwner,
    ut = Ee.ReactCurrentBatchConfig,
    Z = 0,
    Re = null,
    _e = null,
    De = 0,
    nt = 0,
    In = Ft(0),
    ze = 0,
    wr = null,
    un = 0,
    yl = 0,
    hi = 0,
    kr = null,
    Je = null,
    vi = 0,
    Dn = 1 / 0,
    Pt = null,
    wl = !1,
    gi = null,
    Vt = null,
    kl = !1,
    Qt = null,
    Sl = 0,
    Sr = 0,
    yi = null,
    xl = -1,
    El = 0;
  function Ke() {
    return (Z & 6) !== 0 ? Ce() : xl !== -1 ? xl : (xl = Ce());
  }
  function $t(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Z & 2) !== 0 && De !== 0
        ? De & -De
        : xf.transition !== null
          ? (El === 0 && (El = fu()), El)
          : ((e = ue),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ku(e.type))),
            e);
  }
  function ht(e, t, n, r) {
    if (50 < Sr) throw ((Sr = 0), (yi = null), Error(c(185)));
    ($n(e, n, r),
      ((Z & 2) === 0 || e !== Re) &&
        (e === Re && ((Z & 2) === 0 && (yl |= n), ze === 4 && Kt(e, De)),
        Xe(e, r),
        n === 1 &&
          Z === 0 &&
          (t.mode & 1) === 0 &&
          ((Dn = Ce() + 500), Xr && Ut())));
  }
  function Xe(e, t) {
    var n = e.callbackNode;
    Sc(e, t);
    var r = Rr(e, e === Re ? De : 0);
    if (r === 0)
      (n !== null && au(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && au(n), t === 1))
        (e.tag === 0 ? Sf(ks.bind(null, e)) : oa(ks.bind(null, e)),
          gf(function () {
            (Z & 6) === 0 && Ut();
          }),
          (n = null));
      else {
        switch (du(r)) {
          case 1:
            n = Jl;
            break;
          case 4:
            n = su;
            break;
          case 16:
            n = Pr;
            break;
          case 536870912:
            n = cu;
            break;
          default:
            n = Pr;
        }
        n = Ps(n, ws.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function ws(e, t) {
    if (((xl = -1), (El = 0), (Z & 6) !== 0)) throw Error(c(327));
    var n = e.callbackNode;
    if (Fn() && e.callbackNode !== n) return null;
    var r = Rr(e, e === Re ? De : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Cl(e, r);
    else {
      t = r;
      var l = Z;
      Z |= 2;
      var o = xs();
      (Re !== e || De !== t) && ((Pt = null), (Dn = Ce() + 500), sn(e, t));
      do
        try {
          Wf();
          break;
        } catch (u) {
          Ss(e, u);
        }
      while (!0);
      (Do(),
        (gl.current = o),
        (Z = l),
        _e !== null ? (t = 0) : ((Re = null), (De = 0), (t = ze)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Xl(e)), l !== 0 && ((r = l), (t = wi(e, l)))),
        t === 1)
      )
        throw ((n = wr), sn(e, 0), Kt(e, r), Xe(e, Ce()), n);
      if (t === 6) Kt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Bf(l) &&
            ((t = Cl(e, r)),
            t === 2 && ((o = Xl(e)), o !== 0 && ((r = o), (t = wi(e, o)))),
            t === 1))
        )
          throw ((n = wr), sn(e, 0), Kt(e, r), Xe(e, Ce()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            cn(e, Je, Pt);
            break;
          case 3:
            if (
              (Kt(e, r),
              (r & 130023424) === r && ((t = vi + 500 - Ce()), 10 < t))
            ) {
              if (Rr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ke(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = No(cn.bind(null, e, Je, Pt), t);
              break;
            }
            cn(e, Je, Pt);
            break;
          case 4:
            if ((Kt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - st(r);
              ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
            }
            if (
              ((r = l),
              (r = Ce() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Uf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = No(cn.bind(null, e, Je, Pt), r);
              break;
            }
            cn(e, Je, Pt);
            break;
          case 5:
            cn(e, Je, Pt);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return (Xe(e, Ce()), e.callbackNode === n ? ws.bind(null, e) : null);
  }
  function wi(e, t) {
    var n = kr;
    return (
      e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
      (e = Cl(e, t)),
      e !== 2 && ((t = Je), (Je = n), t !== null && ki(t)),
      e
    );
  }
  function ki(e) {
    Je === null ? (Je = e) : Je.push.apply(Je, e);
  }
  function Bf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!ct(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Kt(e, t) {
    for (
      t &= ~hi,
        t &= ~yl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - st(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ks(e) {
    if ((Z & 6) !== 0) throw Error(c(327));
    Fn();
    var t = Rr(e, 0);
    if ((t & 1) === 0) return (Xe(e, Ce()), null);
    var n = Cl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Xl(e);
      r !== 0 && ((t = r), (n = wi(e, r)));
    }
    if (n === 1) throw ((n = wr), sn(e, 0), Kt(e, t), Xe(e, Ce()), n);
    if (n === 6) throw Error(c(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      cn(e, Je, Pt),
      Xe(e, Ce()),
      null
    );
  }
  function Si(e, t) {
    var n = Z;
    Z |= 1;
    try {
      return e(t);
    } finally {
      ((Z = n), Z === 0 && ((Dn = Ce() + 500), Xr && Ut()));
    }
  }
  function an(e) {
    Qt !== null && Qt.tag === 0 && (Z & 6) === 0 && Fn();
    var t = Z;
    Z |= 1;
    var n = ut.transition,
      r = ue;
    try {
      if (((ut.transition = null), (ue = 1), e)) return e();
    } finally {
      ((ue = r), (ut.transition = n), (Z = t), (Z & 6) === 0 && Ut());
    }
  }
  function xi() {
    ((nt = In.current), me(In));
  }
  function sn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), vf(n)), _e !== null))
      for (n = _e.return; n !== null; ) {
        var r = n;
        switch ((Lo(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && qr());
            break;
          case 3:
            (Rn(), me(Ge), me(Ue), Qo());
            break;
          case 5:
            Wo(r);
            break;
          case 4:
            Rn();
            break;
          case 13:
            me(ye);
            break;
          case 19:
            me(ye);
            break;
          case 10:
            Fo(r.type._context);
            break;
          case 22:
          case 23:
            xi();
        }
        n = n.return;
      }
    if (
      ((Re = e),
      (_e = e = Gt(e.current, null)),
      (De = nt = t),
      (ze = 0),
      (wr = null),
      (hi = yl = un = 0),
      (Je = kr = null),
      rn !== null)
    ) {
      for (t = 0; t < rn.length; t++)
        if (((n = rn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            ((o.next = l), (r.next = i));
          }
          n.pending = r;
        }
      rn = null;
    }
    return e;
  }
  function Ss(e, t) {
    do {
      var n = _e;
      try {
        if ((Do(), (ul.current = fl), al)) {
          for (var r = we.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          al = !1;
        }
        if (
          ((on = 0),
          (Le = Te = we = null),
          (pr = !1),
          (mr = 0),
          (mi.current = null),
          n === null || n.return === null)
        ) {
          ((ze = 1), (wr = t), (_e = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            a = t;
          if (
            ((t = De),
            (u.flags |= 32768),
            a !== null && typeof a == "object" && typeof a.then == "function")
          ) {
            var m = a,
              k = u,
              S = k.tag;
            if ((k.mode & 1) === 0 && (S === 0 || S === 11 || S === 15)) {
              var w = k.alternate;
              w
                ? ((k.updateQueue = w.updateQueue),
                  (k.memoizedState = w.memoizedState),
                  (k.lanes = w.lanes))
                : ((k.updateQueue = null), (k.memoizedState = null));
            }
            var _ = Ka(i);
            if (_ !== null) {
              ((_.flags &= -257),
                Ga(_, i, u, o, t),
                _.mode & 1 && $a(o, m, t),
                (t = _),
                (a = m));
              var z = t.updateQueue;
              if (z === null) {
                var L = new Set();
                (L.add(a), (t.updateQueue = L));
              } else z.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                ($a(o, m, t), Ei());
                break e;
              }
              a = Error(c(426));
            }
          } else if (ve && u.mode & 1) {
            var Ne = Ka(i);
            if (Ne !== null) {
              ((Ne.flags & 65536) === 0 && (Ne.flags |= 256),
                Ga(Ne, i, u, o, t),
                Mo(On(a, u)));
              break e;
            }
          }
          ((o = a = On(a, u)),
            ze !== 4 && (ze = 2),
            kr === null ? (kr = [o]) : kr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var d = Va(o, a, t);
                va(o, d);
                break e;
              case 1:
                u = a;
                var s = o.type,
                  p = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof s.getDerivedStateFromError == "function" ||
                    (p !== null &&
                      typeof p.componentDidCatch == "function" &&
                      (Vt === null || !Vt.has(p))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var x = Qa(o, u, t);
                  va(o, x);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Cs(n);
      } catch (R) {
        ((t = R), _e === n && n !== null && (_e = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function xs() {
    var e = gl.current;
    return ((gl.current = fl), e === null ? fl : e);
  }
  function Ei() {
    ((ze === 0 || ze === 3 || ze === 2) && (ze = 4),
      Re === null ||
        ((un & 268435455) === 0 && (yl & 268435455) === 0) ||
        Kt(Re, De));
  }
  function Cl(e, t) {
    var n = Z;
    Z |= 2;
    var r = xs();
    (Re !== e || De !== t) && ((Pt = null), sn(e, t));
    do
      try {
        Hf();
        break;
      } catch (l) {
        Ss(e, l);
      }
    while (!0);
    if ((Do(), (Z = n), (gl.current = r), _e !== null)) throw Error(c(261));
    return ((Re = null), (De = 0), ze);
  }
  function Hf() {
    for (; _e !== null; ) Es(_e);
  }
  function Wf() {
    for (; _e !== null && !dc(); ) Es(_e);
  }
  function Es(e) {
    var t = js(e.alternate, e, nt);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Cs(e) : (_e = t),
      (mi.current = null));
  }
  function Cs(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Mf(n, t, nt)), n !== null)) {
          _e = n;
          return;
        }
      } else {
        if (((n = If(n, t)), n !== null)) {
          ((n.flags &= 32767), (_e = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ze = 6), (_e = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function cn(e, t, n) {
    var r = ue,
      l = ut.transition;
    try {
      ((ut.transition = null), (ue = 1), Vf(e, t, n, r));
    } finally {
      ((ut.transition = l), (ue = r));
    }
    return null;
  }
  function Vf(e, t, n, r) {
    do Fn();
    while (Qt !== null);
    if ((Z & 6) !== 0) throw Error(c(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(c(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (xc(e, o),
      e === Re && ((_e = Re = null), (De = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        kl ||
        ((kl = !0),
        Ps(Pr, function () {
          return (Fn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = ut.transition), (ut.transition = null));
      var i = ue;
      ue = 1;
      var u = Z;
      ((Z |= 4),
        (mi.current = null),
        Ff(e, n),
        ms(n, e),
        sf(Eo),
        (Ir = !!xo),
        (Eo = xo = null),
        (e.current = n),
        Af(n),
        pc(),
        (Z = u),
        (ue = i),
        (ut.transition = o));
    } else e.current = n;
    if (
      (kl && ((kl = !1), (Qt = e), (Sl = l)),
      (o = e.pendingLanes),
      o === 0 && (Vt = null),
      vc(n.stateNode),
      Xe(e, Ce()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (wl) throw ((wl = !1), (e = gi), (gi = null), e);
    return (
      (Sl & 1) !== 0 && e.tag !== 0 && Fn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === yi ? Sr++ : ((Sr = 0), (yi = e))) : (Sr = 0),
      Ut(),
      null
    );
  }
  function Fn() {
    if (Qt !== null) {
      var e = du(Sl),
        t = ut.transition,
        n = ue;
      try {
        if (((ut.transition = null), (ue = 16 > e ? 16 : e), Qt === null))
          var r = !1;
        else {
          if (((e = Qt), (Qt = null), (Sl = 0), (Z & 6) !== 0))
            throw Error(c(331));
          var l = Z;
          for (Z |= 4, T = e.current; T !== null; ) {
            var o = T,
              i = o.child;
            if ((T.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var a = 0; a < u.length; a++) {
                  var m = u[a];
                  for (T = m; T !== null; ) {
                    var k = T;
                    switch (k.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yr(8, k, o);
                    }
                    var S = k.child;
                    if (S !== null) ((S.return = k), (T = S));
                    else
                      for (; T !== null; ) {
                        k = T;
                        var w = k.sibling,
                          _ = k.return;
                        if ((ss(k), k === m)) {
                          T = null;
                          break;
                        }
                        if (w !== null) {
                          ((w.return = _), (T = w));
                          break;
                        }
                        T = _;
                      }
                  }
                }
                var z = o.alternate;
                if (z !== null) {
                  var L = z.child;
                  if (L !== null) {
                    z.child = null;
                    do {
                      var Ne = L.sibling;
                      ((L.sibling = null), (L = Ne));
                    } while (L !== null);
                  }
                }
                T = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null)
              ((i.return = o), (T = i));
            else
              e: for (; T !== null; ) {
                if (((o = T), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yr(9, o, o.return);
                  }
                var d = o.sibling;
                if (d !== null) {
                  ((d.return = o.return), (T = d));
                  break e;
                }
                T = o.return;
              }
          }
          var s = e.current;
          for (T = s; T !== null; ) {
            i = T;
            var p = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && p !== null)
              ((p.return = i), (T = p));
            else
              e: for (i = s; T !== null; ) {
                if (((u = T), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vl(9, u);
                    }
                  } catch (R) {
                    Se(u, u.return, R);
                  }
                if (u === i) {
                  T = null;
                  break e;
                }
                var x = u.sibling;
                if (x !== null) {
                  ((x.return = u.return), (T = x));
                  break e;
                }
                T = u.return;
              }
          }
          if (
            ((Z = l), Ut(), vt && typeof vt.onPostCommitFiberRoot == "function")
          )
            try {
              vt.onPostCommitFiberRoot(Tr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ue = n), (ut.transition = t));
      }
    }
    return !1;
  }
  function Ns(e, t, n) {
    ((t = On(n, t)),
      (t = Va(e, t, 1)),
      (e = Ht(e, t, 1)),
      (t = Ke()),
      e !== null && ($n(e, 1, t), Xe(e, t)));
  }
  function Se(e, t, n) {
    if (e.tag === 3) Ns(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ns(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Vt === null || !Vt.has(r)))
          ) {
            ((e = On(n, e)),
              (e = Qa(t, e, 1)),
              (t = Ht(t, e, 1)),
              (e = Ke()),
              t !== null && ($n(t, 1, e), Xe(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Qf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ke()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Re === e &&
        (De & n) === n &&
        (ze === 4 || (ze === 3 && (De & 130023424) === De && 500 > Ce() - vi)
          ? sn(e, 0)
          : (hi |= n)),
      Xe(e, t));
  }
  function _s(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Lr), (Lr <<= 1), (Lr & 130023424) === 0 && (Lr = 4194304)));
    var n = Ke();
    ((e = Nt(e, t)), e !== null && ($n(e, t, n), Xe(e, n)));
  }
  function $f(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), _s(e, n));
  }
  function Kf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    (r !== null && r.delete(t), _s(e, n));
  }
  var js;
  js = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ge.current) qe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((qe = !1), Of(e, t, n));
        qe = (e.flags & 131072) !== 0;
      }
    else ((qe = !1), ve && (t.flags & 1048576) !== 0 && ia(t, br, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (ml(e, t), (e = t.pendingProps));
        var l = Nn(t, Ue.current);
        (Ln(t, n), (l = Go(null, t, r, e, l, n)));
        var o = Yo();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ye(r) ? ((o = !0), Jr(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Bo(t),
              (l.updater = dl),
              (t.stateNode = l),
              (l._reactInternals = t),
              ei(t, r, e, n),
              (t = li(null, t, r, !0, o, n)))
            : ((t.tag = 0), ve && o && zo(t), $e(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (ml(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Yf(r)),
            (e = dt(r, e)),
            l)
          ) {
            case 0:
              t = ri(null, t, r, e, n);
              break e;
            case 1:
              t = ba(null, t, r, e, n);
              break e;
            case 11:
              t = Ya(null, t, r, e, n);
              break e;
            case 14:
              t = qa(null, t, r, dt(r.type, e), n);
              break e;
          }
          throw Error(c(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          ri(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          ba(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((es(t), e === null)) throw Error(c(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            ha(e, t),
            ol(t, r, null, n));
          var i = t.memoizedState;
          if (((r = i.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              ((l = On(Error(c(423)), t)), (t = ts(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = On(Error(c(424)), t)), (t = ts(e, t, r, n, l)));
              break e;
            } else
              for (
                tt = Dt(t.stateNode.containerInfo.firstChild),
                  et = t,
                  ve = !0,
                  ft = null,
                  n = pa(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Pn(), r === l)) {
              t = jt(e, t, n);
              break e;
            }
            $e(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ya(t),
          e === null && Oo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Co(r, l) ? (i = null) : o !== null && Co(r, o) && (t.flags |= 32),
          Za(e, t),
          $e(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Oo(t), null);
      case 13:
        return ns(e, t, n);
      case 4:
        return (
          Ho(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Tn(t, null, r, n)) : $e(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          Ya(e, t, r, l, n)
        );
      case 7:
        return ($e(e, t, t.pendingProps, n), t.child);
      case 8:
        return ($e(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return ($e(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            ce(nl, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (ct(o.value, i)) {
              if (o.children === l.children && !Ge.current) {
                t = jt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var a = u.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (o.tag === 1) {
                        ((a = _t(-1, n & -n)), (a.tag = 2));
                        var m = o.updateQueue;
                        if (m !== null) {
                          m = m.shared;
                          var k = m.pending;
                          (k === null
                            ? (a.next = a)
                            : ((a.next = k.next), (k.next = a)),
                            (m.pending = a));
                        }
                      }
                      ((o.lanes |= n),
                        (a = o.alternate),
                        a !== null && (a.lanes |= n),
                        Ao(o.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    a = a.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(c(341));
                  ((i.lanes |= n),
                    (u = i.alternate),
                    u !== null && (u.lanes |= n),
                    Ao(i, n, t),
                    (i = o.sibling));
                } else i = o.child;
                if (i !== null) i.return = o;
                else
                  for (i = o; i !== null; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((o = i.sibling), o !== null)) {
                      ((o.return = i.return), (i = o));
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          ($e(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Ln(t, n),
          (l = ot(l)),
          (r = r(l)),
          (t.flags |= 1),
          $e(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = dt(r, t.pendingProps)),
          (l = dt(r.type, l)),
          qa(e, t, r, l, n)
        );
      case 15:
        return Ja(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          ml(e, t),
          (t.tag = 1),
          Ye(r) ? ((e = !0), Jr(t)) : (e = !1),
          Ln(t, n),
          Ha(t, r, l),
          ei(t, r, l, n),
          li(null, t, r, !0, e, n)
        );
      case 19:
        return ls(e, t, n);
      case 22:
        return Xa(e, t, n);
    }
    throw Error(c(156, t.tag));
  };
  function Ps(e, t) {
    return uu(e, t);
  }
  function Gf(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function at(e, t, n, r) {
    return new Gf(e, t, n, r);
  }
  function Ci(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Yf(e) {
    if (typeof e == "function") return Ci(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ie)) return 11;
      if (e === Pe) return 14;
    }
    return 2;
  }
  function Gt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = at(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Nl(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) Ci(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case W:
          return fn(n.children, l, o, t);
        case J:
          ((i = 8), (l |= 8));
          break;
        case fe:
          return (
            (e = at(12, n, t, l | 2)),
            (e.elementType = fe),
            (e.lanes = o),
            e
          );
        case X:
          return ((e = at(13, n, t, l)), (e.elementType = X), (e.lanes = o), e);
        case de:
          return (
            (e = at(19, n, t, l)),
            (e.elementType = de),
            (e.lanes = o),
            e
          );
        case te:
          return _l(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case he:
                i = 10;
                break e;
              case je:
                i = 9;
                break e;
              case ie:
                i = 11;
                break e;
              case Pe:
                i = 14;
                break e;
              case ge:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(c(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = at(i, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = o),
      t
    );
  }
  function fn(e, t, n, r) {
    return ((e = at(7, e, r, t)), (e.lanes = n), e);
  }
  function _l(e, t, n, r) {
    return (
      (e = at(22, e, r, t)),
      (e.elementType = te),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ni(e, t, n) {
    return ((e = at(6, e, null, t)), (e.lanes = n), e);
  }
  function _i(e, t, n) {
    return (
      (t = at(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function qf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Zl(0)),
      (this.expirationTimes = Zl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ji(e, t, n, r, l, o, i, u, a) {
    return (
      (e = new qf(e, t, n, u, a)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = at(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Bo(o),
      e
    );
  }
  function Jf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: P,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Ts(e) {
    if (!e) return At;
    e = e._reactInternals;
    e: {
      if (Zt(e) !== e || e.tag !== 1) throw Error(c(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ye(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(c(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ye(n)) return ra(e, n, t);
    }
    return t;
  }
  function zs(e, t, n, r, l, o, i, u, a) {
    return (
      (e = ji(n, r, !0, e, l, o, i, u, a)),
      (e.context = Ts(null)),
      (n = e.current),
      (r = Ke()),
      (l = $t(n)),
      (o = _t(r, l)),
      (o.callback = t ?? null),
      Ht(n, o, l),
      (e.current.lanes = l),
      $n(e, l, r),
      Xe(e, r),
      e
    );
  }
  function jl(e, t, n, r) {
    var l = t.current,
      o = Ke(),
      i = $t(l);
    return (
      (n = Ts(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = _t(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ht(l, t, i)),
      e !== null && (ht(e, l, i, o), ll(e, l, i)),
      i
    );
  }
  function Pl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ls(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Pi(e, t) {
    (Ls(e, t), (e = e.alternate) && Ls(e, t));
  }
  function Xf() {
    return null;
  }
  var Rs =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ti(e) {
    this._internalRoot = e;
  }
  ((Tl.prototype.render = Ti.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      jl(e, t, null, null);
    }),
    (Tl.prototype.unmount = Ti.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (an(function () {
            jl(null, e, null, null);
          }),
            (t[St] = null));
        }
      }));
  function Tl(e) {
    this._internalRoot = e;
  }
  Tl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = hu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
      (Ot.splice(n, 0, e), n === 0 && yu(e));
    }
  };
  function zi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function zl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Os() {}
  function Zf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var m = Pl(i);
          o.call(m);
        };
      }
      var i = zs(t, r, e, 0, null, !1, !1, "", Os);
      return (
        (e._reactRootContainer = i),
        (e[St] = i.current),
        or(e.nodeType === 8 ? e.parentNode : e),
        an(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var m = Pl(a);
        u.call(m);
      };
    }
    var a = ji(e, 0, !1, null, null, !1, !1, "", Os);
    return (
      (e._reactRootContainer = a),
      (e[St] = a.current),
      or(e.nodeType === 8 ? e.parentNode : e),
      an(function () {
        jl(t, a, n, r);
      }),
      a
    );
  }
  function Ll(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var a = Pl(i);
          u.call(a);
        };
      }
      jl(t, i, e, l);
    } else i = Zf(n, t, e, l, r);
    return Pl(i);
  }
  ((pu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Qn(t.pendingLanes);
          n !== 0 &&
            (bl(t, n | 1),
            Xe(t, Ce()),
            (Z & 6) === 0 && ((Dn = Ce() + 500), Ut()));
        }
        break;
      case 13:
        (an(function () {
          var r = Nt(e, 1);
          if (r !== null) {
            var l = Ke();
            ht(r, e, 1, l);
          }
        }),
          Pi(e, 1));
    }
  }),
    (eo = function (e) {
      if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
          var n = Ke();
          ht(t, e, 134217728, n);
        }
        Pi(e, 134217728);
      }
    }),
    (mu = function (e) {
      if (e.tag === 13) {
        var t = $t(e),
          n = Nt(e, t);
        if (n !== null) {
          var r = Ke();
          ht(n, e, t, r);
        }
        Pi(e, t);
      }
    }),
    (hu = function () {
      return ue;
    }),
    (vu = function (e, t) {
      var n = ue;
      try {
        return ((ue = e), t());
      } finally {
        ue = n;
      }
    }),
    (Kl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Al(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Yr(r);
                if (!l) throw Error(c(90));
                (Bi(r), Al(r, l));
              }
            }
          }
          break;
        case "textarea":
          $i(e, n);
          break;
        case "select":
          ((t = n.value), t != null && pn(e, !!n.multiple, t, !1));
      }
    }),
    (eu = Si),
    (tu = an));
  var bf = { usingClientEntryPoint: !1, Events: [ar, En, Yr, Zi, bi, Si] },
    xr = {
      findFiberByHostInstance: bt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    ed = {
      bundleType: xr.bundleType,
      version: xr.version,
      rendererPackageName: xr.rendererPackageName,
      rendererConfig: xr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Ee.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = ou(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: xr.findFiberByHostInstance || Xf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rl.isDisabled && Rl.supportsFiber)
      try {
        ((Tr = Rl.inject(ed)), (vt = Rl));
      } catch {}
  }
  return (
    (Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bf),
    (Ze.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zi(t)) throw Error(c(200));
      return Jf(e, t, null, n);
    }),
    (Ze.createRoot = function (e, t) {
      if (!zi(e)) throw Error(c(299));
      var n = !1,
        r = "",
        l = Rs;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ji(e, 1, !1, null, null, n, !1, r, l)),
        (e[St] = t.current),
        or(e.nodeType === 8 ? e.parentNode : e),
        new Ti(t)
      );
    }),
    (Ze.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(c(188))
          : ((e = Object.keys(e).join(",")), Error(c(268, e)));
      return ((e = ou(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ze.flushSync = function (e) {
      return an(e);
    }),
    (Ze.hydrate = function (e, t, n) {
      if (!zl(t)) throw Error(c(200));
      return Ll(null, e, t, !0, n);
    }),
    (Ze.hydrateRoot = function (e, t, n) {
      if (!zi(e)) throw Error(c(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        i = Rs;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = zs(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[St] = t.current),
        or(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Tl(t);
    }),
    (Ze.render = function (e, t, n) {
      if (!zl(t)) throw Error(c(200));
      return Ll(null, e, t, !1, n);
    }),
    (Ze.unmountComponentAtNode = function (e) {
      if (!zl(e)) throw Error(c(40));
      return e._reactRootContainer
        ? (an(function () {
            Ll(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[St] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ze.unstable_batchedUpdates = Si),
    (Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!zl(n)) throw Error(c(200));
      if (e == null || e._reactInternals === void 0) throw Error(c(38));
      return Ll(e, t, n, !1, r);
    }),
    (Ze.version = "18.3.1-next-f1338f8080-20240426"),
    Ze
  );
}
var Hs;
function cd() {
  if (Hs) return Oi.exports;
  Hs = 1;
  function h() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (v) {
        console.error(v);
      }
  }
  return (h(), (Oi.exports = sd()), Oi.exports);
}
var Ws;
function fd() {
  if (Ws) return Ol;
  Ws = 1;
  var h = cd();
  return ((Ol.createRoot = h.createRoot), (Ol.hydrateRoot = h.hydrateRoot), Ol);
}
var dd = fd();
const pd = Dl(dd),
  md = function () {
    const h = (c) => {
        var M;
        c.preventDefault();
        const E =
            (M = c.currentTarget.getAttribute("href")) == null
              ? void 0
              : M.substring(1),
          N = document.getElementById(E || "");
        if (N) {
          const V = window.innerHeight / 3 - N.offsetHeight / 3;
          window.scrollTo({ top: N.offsetTop - V, behavior: "smooth" });
        }
      },
      v = () =>
        g.jsx("nav", {
          className: `
          mt-0 flex min-h-full w-8/12 flex-row justify-end gap-5 px-3 text-lg font-normal
        `,
          children: [
            { href: "#stack", label: "Tecnologias" },
            { href: "#trajetoria", label: "Minha História" },
            { href: "#experiencia", label: "Experiência" },
            { href: "#formacao", label: "Formação" },
            { href: "#frontend", label: "Projetos" },
          ].map((c) =>
            g.jsx(
              "a",
              {
                href: c.href,
                onClick: h,
                className:
                  "my-[0.30rem] rounded p-[0.35rem] font-semibold tracking-wider hover:bg-[#383838]/50",
                children: c.label,
              },
              c.href
            )
          ),
        });
    return g.jsxs("header", {
      className:
        "top-0 z-10 hidden md:sticky md:mx-auto md:flex md:w-8/12 md:items-center md:justify-between md:px-0 md:py-4 md:align-middle md:backdrop-blur-sm",
      children: [
        g.jsx("div", {
          className: "flex justify-between",
          children: g.jsx("a", {
            href: "#inicio",
            className: `
						flex gap-3
						text-4xl font-bold
					`,
            children: "Henrik Santos",
          }),
        }),
        g.jsx(v, {}),
      ],
    });
  };
function hd() {
  return g.jsxs("section", {
    className: "py-20",
    id: "inicio",
    "data-aos": "flip-right",
    children: [
      g.jsx("h1", {
        className: "text-center text-4xl font-thin",
        children: "BEM-VINDO AO MEU",
      }),
      g.jsx("h1", {
        className:
          "emphasis mx-auto my-4 text-center text-[4.2rem] font-medium italic underline",
        children: "PORTFÓLIO",
      }),
    ],
  });
}
function vd() {
  return g.jsx("aside", {
    id: "sobre",
    className: `
				primary top-[26rem] mx-auto my-5 flex flex-col
				justify-center md:sticky md:m-0 lg:w-6/12`,
    "data-aos": "flip-up",
    children: g.jsxs("div", {
      className: "mx-8 flex flex-col md:mx-0",
      children: [
        g.jsx("h1", {
          className: "text-4xl font-bold",
          children: "Henrik Santos",
        }),
        g.jsx("h2", {
          className: "text-xl font-light",
          children: g.jsx("span", {
            className: "emphasis",
            children: "Desenvolvedor Web",
          }),
        }),
        g.jsxs("div", {
          className: "my-3 space-y-2 font-thin",
          children: [
            g.jsxs("p", {
              children: [
                "- 👋 Meu nome é Henrik, tenho ",
                `${new Date().getFullYear() - 2001}`,
                " anos, sou desenvolvedor Full Stack e Backend Pleno. Já prestei serviços para empresas nacionais e internacionais, sendo responsável pela prototipação, modelagem de banco de dados, arquitetura, implementação de APIs REST, Cron Jobs e integração com APIs externas.",
              ],
            }),
            g.jsx("p", {
              children:
                "- Foco em desenvolvimento web, tenho experiência com React, TypeScript, Nestjs, Prisma, TypeORM, Mysql, MongoDB, Swagger, AWS e Google Cloud Platform.",
            }),
            g.jsx("p", {
              children: "- Estou aberto a novas oportunidades 🚀.",
            }),
            g.jsx("p", {
              children:
                "- Sou uma pessoa organizada, calma e resiliente, com facilidade para aprender.",
            }),
            g.jsx("p", {
              children:
                "- Meus hobbies são: programação, arte 2D/3D, jogos, IA 🤖 e tecnologia.",
            }),
            g.jsxs("p", {
              children: [
                "E-mail:",
                " ",
                g.jsx("a", {
                  href: "mailto:henrik.ruan4@gmail.com?subject=Olá, Henrik!&body=Gostaria de conversar sobre [insira o assunto aqui].",
                  className:
                    "underline font-semibold text-blue-600 hover:text-blue-800",
                  children: "henrik.ruan4@gmail.com",
                }),
              ],
            }),
          ],
        }),
        g.jsxs("ul", {
          className: "mt-3 flex items-stretch",
          children: [
            g.jsx("li", {
              className: "mr-3 text-xs",
              children: g.jsxs("a", {
                href: "https://github.com/HenrikSantos",
                target: "_blank",
                rel: "noreferrer",
                children: [
                  g.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    fill: "#d5f6ff",
                    className: "size-6",
                    "aria-hidden": "true",
                    children: g.jsx("path", {
                      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
                    }),
                  }),
                  g.jsx("span", { className: "sr-only" }),
                ],
              }),
            }),
            g.jsx("li", {
              className: "mr-3 text-xs",
              children: g.jsxs("a", {
                href: "https://www.linkedin.com/in/henrik-santos-dev/",
                target: "_blank",
                rel: "noreferrer",
                children: [
                  g.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "#d5f6ff",
                    className: "size-6",
                    "aria-hidden": "true",
                    children: g.jsx("path", {
                      d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",
                    }),
                  }),
                  g.jsx("span", { className: "sr-only" }),
                ],
              }),
            }),
            g.jsx("li", {
              className: "mr-3 text-xs",
              children: g.jsxs("a", {
                href: "https://www.youtube.com/@gimmicodando730",
                target: "_blank",
                rel: "noreferrer",
                children: [
                  g.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "800",
                    width: "1200",
                    fill: "#d5f6ff",
                    className: "size-7",
                    viewBox: "-35.20005 -41.33325 305.0671 247.9995",
                    children: g.jsx("path", {
                      d: "M93.333 117.559V47.775l61.334 34.893zm136.43-91.742c-2.699-10.162-10.651-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.555 7.652 7.603 15.655 4.904 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.904 56.849c2.699 10.163 10.65 18.165 20.747 20.883 18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.683-4.934c10.096-2.718 18.048-10.72 20.747-20.883 4.904-18.42 4.904-56.85 4.904-56.85s0-38.43-4.904-56.849",
                    }),
                  }),
                  g.jsx("span", { className: "sr-only" }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function gd() {
  return g.jsxs("section", {
    id: "stack",
    className: "flex flex-col justify-center",
    children: [
      g.jsx("h1", {
        className: "mb-1",
        children: g.jsx("span", {
          className: "text-4xl font-semibold",
          children: "Tecnologias:",
        }),
      }),
      g.jsxs("ul", {
        className: "ml-3 flex flex-col space-y-1 font-thin",
        children: [
          g.jsxs("li", {
            children: [
              "- ",
              g.jsx("span", {
                className: "text-lg underline",
                children: "Backend",
              }),
              ": Node.js, NestJS, Express, JWT/AUTH, APIs REST, WebSocket, SSE, Cron Jobs;",
            ],
          }),
          g.jsxs("li", {
            children: [
              "- ",
              g.jsx("span", {
                className: "text-lg underline",
                children: "Frontend",
              }),
              ": React, TypeScript, Tailwind, CSS;",
            ],
          }),
          g.jsxs("li", {
            children: [
              "- ",
              g.jsx("span", {
                className: "text-lg underline",
                children: "Databases",
              }),
              ": Postgres, MySQL, MariaDB, MongoDB, Firestore, Prisma, TypeORM;",
            ],
          }),
          g.jsxs("li", {
            children: [
              "- ",
              g.jsx("span", {
                className: "text-lg underline",
                children: "Cloud Computing",
              }),
              ": GCP (Firebase, Cloud Storage, Cloud Functions), AWS (EC2, S3, RDS);",
            ],
          }),
          g.jsxs("li", {
            children: [
              "- ",
              g.jsx("span", {
                className: "text-lg underline",
                children: "Ferramentas",
              }),
              ": Git, GitHub, Swagger, Postman, Docker;",
            ],
          }),
          g.jsxs("li", {
            children: [
              "- ",
              g.jsx("span", {
                className: "text-lg underline",
                children: "Integrações",
              }),
              ": Gateways de pagamento (Stripe, Pagar.me, Asaas), e-mail (SendGrid, Brevo);",
            ],
          }),
          g.jsxs("li", {
            children: [
              "- ",
              g.jsx("span", {
                className: "text-lg underline",
                children: "Boas Práticas",
              }),
              ": SOLID, Clean Code, Arquitetura de Software;",
            ],
          }),
        ],
      }),
    ],
  });
}
function yd() {
  return g.jsxs("section", {
    id: "trajetoria",
    "data-aos": "fade-up",
    children: [
      g.jsx("h1", {
        className: "mb-1",
        children: g.jsx("span", {
          className: "text-4xl font-semibold",
          children: "Minha História:",
        }),
      }),
      g.jsxs("div", {
        className: "ml-3 space-y-4 font-light leading-relaxed",
        children: [
          g.jsx("p", {
            children:
              "Minha trajetória com tecnologia começou no ensino médio, quando cursei o técnico integrado em programação e computação. Ao concluir essa etapa, não consegui ingressar de imediato no mercado de desenvolvimento, principalmente pelo contexto da época, em que o trabalho remoto ainda não era comum e havia poucas oportunidades na minha cidade.",
          }),
          g.jsx("p", {
            children:
              "Diante disso, iniciei minha vida profissional em outras áreas, atuando como assistente administrativo, onde desenvolvi organização, noções de processo e responsabilidade profissional. Com a chegada da pandemia, deixei esse trabalho, pois minha família se mudou para ficar mais próxima da minha avó. Na nova cidade, novamente não havia oportunidades na área de tecnologia.",
          }),
          g.jsx("p", {
            children:
              "Nesse período, trabalhei no varejo, atuando com atendimento ao público e operação de loja, o que contribuiu para o desenvolvimento de comunicação, adaptação e trabalho em equipe.",
          }),
          g.jsx("p", {
            children:
              "Em 2022, retomei de forma estruturada minha carreira em tecnologia. Iniciei um curso profissionalizante em desenvolvimento web e, em seguida, comecei a graduação em Análise e Desenvolvimento de Sistemas, voltando a focar integralmente em programação.",
          }),
          g.jsx("p", {
            children:
              "Com a evolução dos estudos, conquistei minha primeira oportunidade na área como estagiário full stack em uma startup, atuando com React, TypeScript, Firebase e serviços da Google Cloud, além do desenvolvimento de chatbots e integração com soluções de IA.",
          }),
          g.jsx("p", {
            children:
              "Atualmente, atuo como desenvolvedor backend, trabalhando com TypeScript, NestJS, Prisma e Express no desenvolvimento de APIs REST. Atuo na modelagem de banco de dados, implementação de regras de negócio, rotinas agendadas e integrações com APIs externas, utilizando PostgreSQL, MySQL, MongoDB e serviços em nuvem como AWS e GCP, enquanto sigo em formação acadêmica e evolução técnica.",
          }),
        ],
      }),
    ],
  });
}
function Ui({
  img: h,
  nome: v,
  descricao: c,
  repositorio: E,
  stacks: N,
  link: M,
}) {
  return g.jsxs("div", {
    className: "secundary ml-3 mt-8 rounded shadow",
    "data-aos": "fade-left",
    "data-aos-anchor-placement": "top-bottom",
    "data-aos-duration": "1500",
    children: [
      h &&
        g.jsx("img", {
          src: `/static/images/${h}`,
          alt: `${v}`,
          className: "mx-auto w-auto rounded-t-md md:w-full",
        }),
      g.jsxs("div", {
        className: "px-5 pb-5 pt-3",
        children: [
          g.jsxs("h1", {
            className: "emphasis text-2xl font-semibold",
            children: [v, ":"],
          }),
          g.jsx("p", { className: "my-2 tracking-tight", children: c }),
          g.jsx("div", {
            className: "flex flex-wrap gap-2",
            children: N.map((V) =>
              g.jsx(
                "span",
                {
                  className:
                    "rounded-xl border border-[var(--emphasis)] px-2 text-sm font-extralight hover:cursor-pointer hover:bg-[var(--primary)]",
                  children: V,
                },
                V
              )
            ),
          }),
          g.jsxs("p", {
            className: "mt-5 flex gap-3",
            children: [
              E &&
                g.jsx("a", {
                  href: E,
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "primary rounded border border-white/60 p-2 px-5 font-semibold hover:bg-[var(--emphasis)]",
                  children: "Repositório",
                }),
              M &&
                g.jsx("a", {
                  href: M,
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "primary rounded border border-white/60 p-2 px-5 font-semibold hover:bg-[var(--emphasis)]",
                  children: "Acessar",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
const wd = [
  {
    nome: "AR Pinda",
    descricao: "SPA para uma assistencia tecnica de ar condicionados.",
    repositorio: "",
    link: "https://ar-pinda-b2e46.firebaseapp.com/",
    img: "arPinda.webp",
    stacks: [
      "React",
      "Tailwind",
      "Firebase",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    id: 0,
  },
  {
    nome: "Clone do reddit",
    descricao: "Um clone do reddit feito com angular.",
    repositorio: "https://github.com/HenrikSantos/angular-reddit-clone",
    link: "https://angular-reddit-clone-green.vercel.app",
    img: "redditClone.webp",
    stacks: ["Angular", "Tailwind"],
    id: 1,
  },
  {
    nome: "Gerador de currículo",
    descricao: "Um gerador de currículo.",
    repositorio: "https://github.com/HenrikSantos/next-gerador-de-curriculo",
    link: "https://next-gerador-de-curriculo.vercel.app/",
    img: "curriculo.webp",
    stacks: ["Next.js", "Tailwind", "Shadcn", "Zustand", "Zod", "Jest", "Bun"],
    id: 2,
  },
  {
    nome: "Firebase Twitter Clone",
    descricao:
      "Clone do Twitter utilizando Firestore. O objetivo principal deste projeto é replicar algumas das funcionalidades básicas do Twitter, permitindo aos usuários criar postagens, comentar postagens e dar 'like'.",
    repositorio: "https://github.com/HenrikSantos/js-firebase-twitter-clone",
    link: "https://js-firebase-twitter-clone.vercel.app/",
    img: "twitterClone.webp",
    stacks: [
      "Next.js",
      "Firestore",
      "Tailwind",
      "Zustand",
      "Jest",
      "Firebase Authentication",
    ],
    id: 3,
  },
  {
    nome: "Todo List",
    descricao:
      "É uma lista de fazeres, é possível adicionar tarefa, marcar como completa, editar e excluir, além disso, as tarefas são salvas no navegador usando local storage.",
    repositorio: "https://github.com/HenrikSantos/todo-app-with-TypeScript",
    link: "https://todo-app-with-typescript-one.vercel.app/",
    img: "todolistcomtypescript.webp",
    stacks: ["React", "Context", "TypeScript", "Bootstrap"],
    id: 5,
  },
  {
    nome: "Portal De Noticias",
    descricao:
      "Desafio técnico para a vaga de software developer voluntário na Tech Pro Bem.",
    repositorio: "https://github.com/HenrikSantos/portal-de-noticias",
    link: "https://portal-de-noticias-two.vercel.app/",
    img: "portaldenoticias.webp",
    stacks: ["React", "Next.js", "Tailwind"],
    id: 7,
  },
  {
    nome: "Leadster SPA",
    descricao: "Desafio técnico para a vaga de frontend developer na Leadster.",
    repositorio: "https://github.com/HenrikSantos/leadster-test-spa",
    link: "https://leadster-test-spa.vercel.app/",
    img: "leadster.webp",
    stacks: ["React", "Next.js", "Tailwind"],
    id: 9,
  },
];
function kd() {
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx("h1", {
        className: "mb-1 text-4xl font-bold",
        id: "frontend",
        children: "Projetos Frontend:",
      }),
      wd.map((h) =>
        g.jsx(
          Ui,
          {
            img: h.img,
            nome: h.nome,
            descricao: h.descricao,
            repositorio: h.repositorio,
            stacks: h.stacks,
            link: h.link,
          },
          h.id
        )
      ),
    ],
  });
}
const Sd = [
  {
    nome: "Java-restful-api-springboot-3",
    descricao: "API restful para Posts.",
    repositorio:
      "https://github.com/HenrikSantos/java-restful-api-springboot-3",
    stacks: ["Java", "Springboot 3", "Swagger", "Postgres", "Mermaid"],
    id: 1,
  },
  {
    nome: "Api-express",
    descricao: "API para gerenciar uma loja de celulares.",
    repositorio: "https://github.com/HenrikSantos/lexart-cellphone-backend",
    link: "https://lexart-cellphone-frontend.vercel.app/",
    stacks: [
      "Express",
      "Typescript",
      "Sequelize",
      "Json Web Token",
      "Joi",
      "Helmet",
      "bcrypt",
      "Sqlite",
      "Postgres",
      "Vercel",
    ],
    id: 2,
  },
  {
    nome: "C-sharp-todo-api",
    descricao: "API para um aplicativo de todo list.",
    repositorio: "https://github.com/HenrikSantos/C-sharp-todo-api/",
    stacks: [".NET", "Entity Framework", "Sql Server"],
    id: 3,
  },
];
function xd() {
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx("h1", {
        className: "mb-1 text-4xl font-bold",
        id: "backend",
        children: "Projetos Backend:",
      }),
      Sd.map((h) =>
        g.jsx(
          Ui,
          {
            nome: h.nome,
            link: h.link,
            descricao: h.descricao,
            repositorio: h.repositorio,
            stacks: h.stacks,
          },
          h.id
        )
      ),
    ],
  });
}
const Ed = [
  {
    nome: "RC Commands",
    descricao:
      "rc-commands é uma ferramenta de interface de linha de comando (CLI) projetada para simplificar o processo de criação de componentes no React. Inspirada no ng do Angular, esta CLI agiliza a geração e organização de componentes em projetos React.",
    repositorio: "https://github.com/HenrikSantos/rc-commands",
    link: "https://www.npmjs.com/package/rc-commands",
    stacks: ["Javascript", "Jest", "npm", "fs"],
    id: 1,
  },
];
function Cd() {
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx("h1", {
        className: "mb-1 text-4xl font-bold",
        id: "outros",
        children: "Outros Projetos:",
      }),
      Ed.map((h) =>
        g.jsx(
          Ui,
          {
            nome: h.nome,
            link: h.link,
            descricao: h.descricao,
            repositorio: h.repositorio,
            stacks: h.stacks,
          },
          h.id
        )
      ),
    ],
  });
}
function Nd() {
  return g.jsxs("section", {
    className: "space-y-5",
    children: [g.jsx(kd, {}), g.jsx(xd, {}), g.jsx(Cd, {})],
  });
}
function _d({
  nomeInstituicao: h,
  diploma: v,
  areaDeEstudo: c,
  competencias: E,
  dataInicio: N,
  dataFim: M,
}) {
  return g.jsxs("div", {
    "data-aos": "fade-left",
    "data-aos-anchor-placement": "top-bottom",
    "data-aos-duration": "1500",
    children: [
      g.jsx("h1", { className: "emphasis text-2xl", children: h }),
      g.jsx("h2", { children: `${v}, ${c}` }),
      g.jsx("p", {
        className: "text-sm font-extralight",
        children: `${N} - ${M}`,
      }),
      g.jsx("div", {
        className: "mt-3 flex flex-wrap gap-2",
        children: E.map((V) =>
          g.jsx(
            "span",
            {
              className:
                "rounded-xl border border-[var(--emphasis)] px-2 text-sm font-extralight hover:cursor-pointer hover:bg-[var(--primary)]",
              children: V,
            },
            V
          )
        ),
      }),
    ],
  });
}
const jd = [
  {
    nomeInstituicao: "Fatec Taubaté",
    areaDeEstudo: "Análise e Desenvolvimento de Sistemas",
    diploma: "Tecnólogo",
    dataInicio: "jan de 2024",
    dataFim: "dez de 2026",
    competencias: [
      "Modelagem de Dados",
      "Técnicas de Desenvolvimento de Algoritmos",
      "Conjuntos Numéricos",
      "Frontend",
      "Backend",
      "Banco de dados",
    ],
  },
  {
    nomeInstituicao: "Trybe",
    areaDeEstudo: "Desenvolvimento Web Full Stack",
    diploma: "Técnico",
    dataInicio: "mai de 2022",
    dataFim: "jun de 2023",
    competencias: [
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Jest",
      "React",
      "Python",
      "Express.js",
      "Linux",
      "JSON",
      "Automação de testes",
      "Kanban",
      "NoSQL",
      "Scrum",
      "Bancos de dados relacionais",
      "Banco de dados",
      "SQL",
      "API REST",
      "Web design",
      "Web Design Responsivo",
      "Teste de integração",
      "HTML5",
      "HTML semântico",
      "Git",
      "JavaScript",
      "Sequelize.js",
      "Bootstrap",
      "MySQL",
      "HTML",
      "CSS",
      "Redux.js",
    ],
  },
  {
    nomeInstituicao:
      "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP",
    areaDeEstudo:
      "Curso Técnico Integrado, Ciências da Computação e Informática",
    diploma: "Técnico",
    dataInicio: "2017",
    dataFim: "2019",
    competencias: [
      ".NET Framework",
      "Kanban",
      "Scrum",
      "Banco de dados",
      "SQL",
      "Web design",
      "Git",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
];
function Pd() {
  return g.jsxs("section", {
    id: "formacao",
    children: [
      g.jsx("h1", {
        className: "mb-1 text-4xl font-bold",
        children: "Formação:",
      }),
      g.jsx("div", {
        className: "ml-3 flex flex-col space-y-5",
        children: jd.map((h) =>
          g.jsx(
            _d,
            {
              areaDeEstudo: h.areaDeEstudo,
              nomeInstituicao: h.nomeInstituicao,
              diploma: h.diploma,
              dataInicio: h.dataInicio,
              dataFim: h.dataFim,
              competencias: h.competencias,
            },
            `${h.nomeInstituicao + h.diploma}`
          )
        ),
      }),
    ],
  });
}
function Td({
  nomeDaEmpresa: h,
  cargo: v,
  nivel: c,
  dataInicio: E,
  dataFim: N,
  descricao: M,
  competencias: V,
}) {
  return g.jsxs("div", {
    "data-aos": "fade-left",
    "data-aos-anchor-placement": "top-bottom",
    "data-aos-duration": "1500",
    children: [
      g.jsx("h1", { className: "emphasis text-2xl", children: h }),
      g.jsx("h2", { children: `${v}${c ? `, ${c}` : ""}` }),
      g.jsx("p", {
        className: "text-sm font-extralight",
        children: `${E} - ${N || "Presente"}`,
      }),
      g.jsx("p", { children: M }),
      g.jsx("div", {
        className: "mt-3 flex flex-wrap gap-2",
        children: V.map((re) =>
          g.jsx(
            "span",
            {
              className:
                "rounded-xl border border-[var(--emphasis)] px-2 text-sm font-extralight hover:cursor-pointer hover:bg-[var(--primary)]",
              children: re,
            },
            re
          )
        ),
      }),
    ],
  });
}
const zd = [
  {
    nomeDaEmpresa: "CroSoften",
    cargo: "Backend Developer",
    nivel: "Pleno",
    dataInicio: "mar de 2025",
    dataFim: "o momento",
    descricao:
      "Desenvolvedor Backend especializado na construção e manutenção de APIs RESTful e Gateways WebSocket de alta performance para diversos clientes. Foco em código limpo, escalável e de fácil manutenção, aplicando os princípios SOLID e Clean Code. As principais tecnologias utilizadas são: Node.js, TypeScript, NestJS, Express, Prisma, TypeORM, MySQL, MongoDB, Postman, Swagger e AWS.",
    competencias: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Express",
      "Prisma",
      "TypeORM",
      "MySQL",
      "MongoDB",
      "Postman",
      "Swagger",
      "S3",
    ],
  },
  {
    nomeDaEmpresa: "Pode Perguntar",
    cargo: "Full Stack Developer",
    nivel: "Júnior",
    dataInicio: "jun de 2024",
    dataFim: "jan de 2025",
    descricao:
      "Atuei como programador no desenvolvimento e manutenção de sistemas frontend, backend e chatbot utilizando React, TypeScript, Tailwind, CSS, Firebase, e tecnologias de computação em nuvem da Google Cloud Platform, como Cloud Functions, além de integrar IA generativa e Dialogflow para criar chatbots inteligentes em plataformas como WhatsApp, Facebook Messenger e Telegram.",
    competencias: [
      "React",
      "Firebase",
      "Google Cloud",
      "TypeScript",
      "Node",
      "GCP",
      "Frontend",
      "Backend",
      "Banco de dados",
      "Tailwind",
      "Kanban",
    ],
  },
  {
    nomeDaEmpresa: "Americanas S.A",
    cargo: "Assistente de loja",
    nivel: "Tempo integral",
    dataInicio: "nov de 2021",
    dataFim: "fev de 2022",
    descricao:
      "Responsável por atender clientes, fechamento do caixa, organizar produtos nas prateleiras, manter a loja limpa, execução de promoções e campanhas, conferência de estoque e no recebimento de mercadorias.",
    competencias: [
      "Atendimento ao cliente",
      "Organização",
      "Trabalho em equipe",
    ],
  },
  {
    nomeDaEmpresa: "Litoral MED",
    cargo: "Assistente administrativo",
    nivel: "Aprendiz",
    dataInicio: "mar de 2020",
    dataFim: "out de 2020",
    descricao:
      "Responsável por realizar o suporte administrativo, incluindo controle e organização de documentos, arquivos e planilhas, atendimento por telefone e e-mail, lançamentos financeiros, emissão de notas fiscais, preparar relatórios gerenciais e acompanhar prazos e pendências para garantir o bom funcionamento do setor.",
    competencias: [
      "Administração",
      "Organização",
      "Atendimento ao cliente",
      "Finanças",
    ],
  },
];
function Ld() {
  return g.jsxs("section", {
    id: "experiencia",
    children: [
      g.jsx("h1", {
        className: "mb-1 text-4xl font-bold",
        children: "Experiência profissional:",
      }),
      g.jsx("div", {
        className: "ml-3 flex flex-col space-y-5",
        children: zd.map((h) =>
          g.jsx(Td, { ...h }, `${h.nomeDaEmpresa}-${h.cargo}`)
        ),
      }),
    ],
  });
}
function Rd() {
  return g.jsxs("main", {
    children: [
      g.jsx(hd, {}),
      g.jsxs("div", {
        className: "mx-auto md:flex md:items-start md:gap-16 lg:w-8/12",
        children: [
          g.jsx(vd, {}),
          g.jsxs("div", {
            className:
              "flex w-full flex-col space-y-5 border-[var(--emphasis)] px-10 pb-6 md:border-l",
            children: [
              g.jsx(gd, {}),
              g.jsx(yd, {}),
              g.jsx(Ld, {}),
              g.jsx(Pd, {}),
              g.jsx(Nd, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
function Od() {
  return g.jsx("footer", {
    className: "primary",
    children: g.jsxs("h1", {
      className: "text-center",
      children: [
        "© 2025 Copyright: ",
        g.jsx("span", { children: "Henrik Ruan Santos de Souza" }),
      ],
    }),
  });
}
var Di, Vs;
function Md() {
  if (Vs) return Di;
  Vs = 1;
  var h = "Expected a function",
    v = NaN,
    c = "[object Symbol]",
    E = /^\s+|\s+$/g,
    N = /^[-+]0x[0-9a-f]+$/i,
    M = /^0b[01]+$/i,
    V = /^0o[0-7]+$/i,
    re = parseInt,
    K = typeof qt == "object" && qt && qt.Object === Object && qt,
    oe = typeof self == "object" && self && self.Object === Object && self,
    b = K || oe || Function("return this")(),
    se = Object.prototype,
    ae = se.toString,
    Fe = Math.max,
    Ae = Math.min,
    ee = function () {
      return b.Date.now();
    };
  function le(P, W, J) {
    var fe,
      he,
      je,
      ie,
      X,
      de,
      Pe = 0,
      ge = !1,
      te = !1,
      C = !0;
    if (typeof P != "function") throw new TypeError(h);
    ((W = U(W) || 0),
      Me(J) &&
        ((ge = !!J.leading),
        (te = "maxWait" in J),
        (je = te ? Fe(U(J.maxWait) || 0, W) : je),
        (C = "trailing" in J ? !!J.trailing : C)));
    function I(O) {
      var $ = fe,
        ke = he;
      return ((fe = he = void 0), (Pe = O), (ie = P.apply(ke, $)), ie);
    }
    function j(O) {
      return ((Pe = O), (X = setTimeout(B, W)), ge ? I(O) : ie);
    }
    function f(O) {
      var $ = O - de,
        ke = O - Pe,
        Xt = W - $;
      return te ? Ae(Xt, je - ke) : Xt;
    }
    function y(O) {
      var $ = O - de,
        ke = O - Pe;
      return de === void 0 || $ >= W || $ < 0 || (te && ke >= je);
    }
    function B() {
      var O = ee();
      if (y(O)) return Q(O);
      X = setTimeout(B, f(O));
    }
    function Q(O) {
      return ((X = void 0), C && fe ? I(O) : ((fe = he = void 0), ie));
    }
    function q() {
      (X !== void 0 && clearTimeout(X), (Pe = 0), (fe = de = he = X = void 0));
    }
    function G() {
      return X === void 0 ? ie : Q(ee());
    }
    function A() {
      var O = ee(),
        $ = y(O);
      if (((fe = arguments), (he = this), (de = O), $)) {
        if (X === void 0) return j(de);
        if (te) return ((X = setTimeout(B, W)), I(de));
      }
      return (X === void 0 && (X = setTimeout(B, W)), ie);
    }
    return ((A.cancel = q), (A.flush = G), A);
  }
  function Ve(P, W, J) {
    var fe = !0,
      he = !0;
    if (typeof P != "function") throw new TypeError(h);
    return (
      Me(J) &&
        ((fe = "leading" in J ? !!J.leading : fe),
        (he = "trailing" in J ? !!J.trailing : he)),
      le(P, W, { leading: fe, maxWait: W, trailing: he })
    );
  }
  function Me(P) {
    var W = typeof P;
    return !!P && (W == "object" || W == "function");
  }
  function Qe(P) {
    return !!P && typeof P == "object";
  }
  function Ee(P) {
    return typeof P == "symbol" || (Qe(P) && ae.call(P) == c);
  }
  function U(P) {
    if (typeof P == "number") return P;
    if (Ee(P)) return v;
    if (Me(P)) {
      var W = typeof P.valueOf == "function" ? P.valueOf() : P;
      P = Me(W) ? W + "" : W;
    }
    if (typeof P != "string") return P === 0 ? P : +P;
    P = P.replace(E, "");
    var J = M.test(P);
    return J || V.test(P) ? re(P.slice(2), J ? 2 : 8) : N.test(P) ? v : +P;
  }
  return ((Di = Ve), Di);
}
var Id = Md();
const Dd = Dl(Id);
var Fi, Qs;
function Fd() {
  if (Qs) return Fi;
  Qs = 1;
  var h = "Expected a function",
    v = NaN,
    c = "[object Symbol]",
    E = /^\s+|\s+$/g,
    N = /^[-+]0x[0-9a-f]+$/i,
    M = /^0b[01]+$/i,
    V = /^0o[0-7]+$/i,
    re = parseInt,
    K = typeof qt == "object" && qt && qt.Object === Object && qt,
    oe = typeof self == "object" && self && self.Object === Object && self,
    b = K || oe || Function("return this")(),
    se = Object.prototype,
    ae = se.toString,
    Fe = Math.max,
    Ae = Math.min,
    ee = function () {
      return b.Date.now();
    };
  function le(U, P, W) {
    var J,
      fe,
      he,
      je,
      ie,
      X,
      de = 0,
      Pe = !1,
      ge = !1,
      te = !0;
    if (typeof U != "function") throw new TypeError(h);
    ((P = Ee(P) || 0),
      Ve(W) &&
        ((Pe = !!W.leading),
        (ge = "maxWait" in W),
        (he = ge ? Fe(Ee(W.maxWait) || 0, P) : he),
        (te = "trailing" in W ? !!W.trailing : te)));
    function C(A) {
      var O = J,
        $ = fe;
      return ((J = fe = void 0), (de = A), (je = U.apply($, O)), je);
    }
    function I(A) {
      return ((de = A), (ie = setTimeout(y, P)), Pe ? C(A) : je);
    }
    function j(A) {
      var O = A - X,
        $ = A - de,
        ke = P - O;
      return ge ? Ae(ke, he - $) : ke;
    }
    function f(A) {
      var O = A - X,
        $ = A - de;
      return X === void 0 || O >= P || O < 0 || (ge && $ >= he);
    }
    function y() {
      var A = ee();
      if (f(A)) return B(A);
      ie = setTimeout(y, j(A));
    }
    function B(A) {
      return ((ie = void 0), te && J ? C(A) : ((J = fe = void 0), je));
    }
    function Q() {
      (ie !== void 0 && clearTimeout(ie), (de = 0), (J = X = fe = ie = void 0));
    }
    function q() {
      return ie === void 0 ? je : B(ee());
    }
    function G() {
      var A = ee(),
        O = f(A);
      if (((J = arguments), (fe = this), (X = A), O)) {
        if (ie === void 0) return I(X);
        if (ge) return ((ie = setTimeout(y, P)), C(X));
      }
      return (ie === void 0 && (ie = setTimeout(y, P)), je);
    }
    return ((G.cancel = Q), (G.flush = q), G);
  }
  function Ve(U) {
    var P = typeof U;
    return !!U && (P == "object" || P == "function");
  }
  function Me(U) {
    return !!U && typeof U == "object";
  }
  function Qe(U) {
    return typeof U == "symbol" || (Me(U) && ae.call(U) == c);
  }
  function Ee(U) {
    if (typeof U == "number") return U;
    if (Qe(U)) return v;
    if (Ve(U)) {
      var P = typeof U.valueOf == "function" ? U.valueOf() : U;
      U = Ve(P) ? P + "" : P;
    }
    if (typeof U != "string") return U === 0 ? U : +U;
    U = U.replace(E, "");
    var W = M.test(U);
    return W || V.test(U) ? re(U.slice(2), W ? 2 : 8) : N.test(U) ? v : +U;
  }
  return ((Fi = le), Fi);
}
var Ad = Fd();
const $s = Dl(Ad);
var Js = function () {};
function Xs(h) {
  var v = void 0,
    c = void 0,
    E = void 0;
  for (v = 0; v < h.length; v += 1)
    if (
      ((c = h[v]),
      (c.dataset && c.dataset.aos) || ((E = c.children && Xs(c.children)), E))
    )
      return !0;
  return !1;
}
function Ud(h) {
  h &&
    h.forEach(function (v) {
      var c = Array.prototype.slice.call(v.addedNodes),
        E = Array.prototype.slice.call(v.removedNodes),
        N = c.concat(E);
      if (Xs(N)) return Js();
    });
}
function Zs() {
  return (
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver
  );
}
function Bd() {
  return !!Zs();
}
function Hd(h, v) {
  var c = window.document,
    E = Zs(),
    N = new E(Ud);
  ((Js = v),
    N.observe(c.documentElement, {
      childList: !0,
      subtree: !0,
      removedNodes: !0,
    }));
}
var Ks = { isSupported: Bd, ready: Hd },
  Wd = function (h, v) {
    if (!(h instanceof v))
      throw new TypeError("Cannot call a class as a function");
  },
  Vd = (function () {
    function h(v, c) {
      for (var E = 0; E < c.length; E++) {
        var N = c[E];
        ((N.enumerable = N.enumerable || !1),
          (N.configurable = !0),
          "value" in N && (N.writable = !0),
          Object.defineProperty(v, N.key, N));
      }
    }
    return function (v, c, E) {
      return (c && h(v.prototype, c), E && h(v, E), v);
    };
  })(),
  Qd =
    Object.assign ||
    function (h) {
      for (var v = 1; v < arguments.length; v++) {
        var c = arguments[v];
        for (var E in c)
          Object.prototype.hasOwnProperty.call(c, E) && (h[E] = c[E]);
      }
      return h;
    },
  $d =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
  Kd =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
  Gd =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
  Yd =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function Gs() {
  return navigator.userAgent || navigator.vendor || window.opera || "";
}
var qd = (function () {
    function h() {
      Wd(this, h);
    }
    return (
      Vd(h, [
        {
          key: "phone",
          value: function () {
            var c = Gs();
            return !!($d.test(c) || Kd.test(c.substr(0, 4)));
          },
        },
        {
          key: "mobile",
          value: function () {
            var c = Gs();
            return !!(Gd.test(c) || Yd.test(c.substr(0, 4)));
          },
        },
        {
          key: "tablet",
          value: function () {
            return this.mobile() && !this.phone();
          },
        },
        {
          key: "ie11",
          value: function () {
            return (
              "-ms-scroll-limit" in document.documentElement.style &&
              "-ms-ime-align" in document.documentElement.style
            );
          },
        },
      ]),
      h
    );
  })(),
  Il = new qd(),
  Jd = function (v, c) {
    return (
      c &&
      c.forEach(function (E) {
        return v.classList.add(E);
      })
    );
  },
  Xd = function (v, c) {
    return (
      c &&
      c.forEach(function (E) {
        return v.classList.remove(E);
      })
    );
  },
  Ml = function (v, c) {
    var E = void 0;
    return (
      Il.ie11()
        ? ((E = document.createEvent("CustomEvent")),
          E.initCustomEvent(v, !0, !0, { detail: c }))
        : (E = new CustomEvent(v, { detail: c })),
      document.dispatchEvent(E)
    );
  },
  Zd = function (v, c) {
    var E = v.options,
      N = v.position,
      M = v.node;
    v.data;
    var V = function () {
        v.animated &&
          (Xd(M, E.animatedClassNames),
          Ml("aos:out", M),
          v.options.id && Ml("aos:in:" + v.options.id, M),
          (v.animated = !1));
      },
      re = function () {
        v.animated ||
          (Jd(M, E.animatedClassNames),
          Ml("aos:in", M),
          v.options.id && Ml("aos:in:" + v.options.id, M),
          (v.animated = !0));
      };
    E.mirror && c >= N.out && !E.once
      ? V()
      : c >= N.in
        ? re()
        : v.animated && !E.once && V();
  },
  Ys = function (v) {
    return v.forEach(function (c, E) {
      return Zd(c, window.pageYOffset);
    });
  },
  bs = function (v) {
    for (var c = 0, E = 0; v && !isNaN(v.offsetLeft) && !isNaN(v.offsetTop); )
      ((c += v.offsetLeft - (v.tagName != "BODY" ? v.scrollLeft : 0)),
        (E += v.offsetTop - (v.tagName != "BODY" ? v.scrollTop : 0)),
        (v = v.offsetParent));
    return { top: E, left: c };
  },
  Jt = function (h, v, c) {
    var E = h.getAttribute("data-aos-" + v);
    if (typeof E < "u") {
      if (E === "true") return !0;
      if (E === "false") return !1;
    }
    return E || c;
  },
  bd = function (v, c, E) {
    var N = window.innerHeight,
      M = Jt(v, "anchor"),
      V = Jt(v, "anchor-placement"),
      re = Number(Jt(v, "offset", V ? 0 : c)),
      K = V || E,
      oe = v;
    M && document.querySelectorAll(M) && (oe = document.querySelectorAll(M)[0]);
    var b = bs(oe).top - N;
    switch (K) {
      case "top-bottom":
        break;
      case "center-bottom":
        b += oe.offsetHeight / 2;
        break;
      case "bottom-bottom":
        b += oe.offsetHeight;
        break;
      case "top-center":
        b += N / 2;
        break;
      case "center-center":
        b += N / 2 + oe.offsetHeight / 2;
        break;
      case "bottom-center":
        b += N / 2 + oe.offsetHeight;
        break;
      case "top-top":
        b += N;
        break;
      case "bottom-top":
        b += N + oe.offsetHeight;
        break;
      case "center-top":
        b += N + oe.offsetHeight / 2;
        break;
    }
    return b + re;
  },
  ep = function (v, c) {
    var E = Jt(v, "anchor"),
      N = Jt(v, "offset", c),
      M = v;
    E && document.querySelectorAll(E) && (M = document.querySelectorAll(E)[0]);
    var V = bs(M).top;
    return V + M.offsetHeight - N;
  },
  tp = function (v, c) {
    return (
      v.forEach(function (E, N) {
        var M = Jt(E.node, "mirror", c.mirror),
          V = Jt(E.node, "once", c.once),
          re = Jt(E.node, "id"),
          K = c.useClassNames && E.node.getAttribute("data-aos"),
          oe = [c.animatedClassName]
            .concat(K ? K.split(" ") : [])
            .filter(function (b) {
              return typeof b == "string";
            });
        (c.initClassName && E.node.classList.add(c.initClassName),
          (E.position = {
            in: bd(E.node, c.offset, c.anchorPlacement),
            out: M && ep(E.node, c.offset),
          }),
          (E.options = { once: V, mirror: M, animatedClassNames: oe, id: re }));
      }),
      v
    );
  },
  ec = function () {
    var h = document.querySelectorAll("[data-aos]");
    return Array.prototype.map.call(h, function (v) {
      return { node: v };
    });
  },
  Tt = [],
  qs = !1,
  xe = {
    offset: 120,
    delay: 0,
    easing: "ease",
    duration: 400,
    disable: !1,
    once: !1,
    mirror: !1,
    anchorPlacement: "top-bottom",
    startEvent: "DOMContentLoaded",
    animatedClassName: "aos-animate",
    initClassName: "aos-init",
    useClassNames: !1,
    disableMutationObserver: !1,
    throttleDelay: 99,
    debounceDelay: 50,
  },
  tc = function () {
    return document.all && !window.atob;
  },
  np = function () {
    return (
      (Tt = tp(Tt, xe)),
      Ys(Tt),
      window.addEventListener(
        "scroll",
        Dd(function () {
          Ys(Tt, xe.once);
        }, xe.throttleDelay)
      ),
      Tt
    );
  },
  dn = function () {
    var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    (v && (qs = !0), qs && np());
  },
  nc = function () {
    if (((Tt = ec()), lc(xe.disable) || tc())) return rc();
    dn();
  },
  rc = function () {
    Tt.forEach(function (v, c) {
      (v.node.removeAttribute("data-aos"),
        v.node.removeAttribute("data-aos-easing"),
        v.node.removeAttribute("data-aos-duration"),
        v.node.removeAttribute("data-aos-delay"),
        xe.initClassName && v.node.classList.remove(xe.initClassName),
        xe.animatedClassName && v.node.classList.remove(xe.animatedClassName));
    });
  },
  lc = function (v) {
    return (
      v === !0 ||
      (v === "mobile" && Il.mobile()) ||
      (v === "phone" && Il.phone()) ||
      (v === "tablet" && Il.tablet()) ||
      (typeof v == "function" && v() === !0)
    );
  },
  rp = function (v) {
    return (
      (xe = Qd(xe, v)),
      (Tt = ec()),
      !xe.disableMutationObserver &&
        !Ks.isSupported() &&
        (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
        (xe.disableMutationObserver = !0)),
      xe.disableMutationObserver || Ks.ready("[data-aos]", nc),
      lc(xe.disable) || tc()
        ? rc()
        : (document
            .querySelector("body")
            .setAttribute("data-aos-easing", xe.easing),
          document
            .querySelector("body")
            .setAttribute("data-aos-duration", xe.duration),
          document
            .querySelector("body")
            .setAttribute("data-aos-delay", xe.delay),
          ["DOMContentLoaded", "load"].indexOf(xe.startEvent) === -1
            ? document.addEventListener(xe.startEvent, function () {
                dn(!0);
              })
            : window.addEventListener("load", function () {
                dn(!0);
              }),
          xe.startEvent === "DOMContentLoaded" &&
            ["complete", "interactive"].indexOf(document.readyState) > -1 &&
            dn(!0),
          window.addEventListener("resize", $s(dn, xe.debounceDelay, !0)),
          window.addEventListener(
            "orientationchange",
            $s(dn, xe.debounceDelay, !0)
          ),
          Tt)
    );
  },
  lp = { init: rp, refresh: dn, refreshHard: nc };
lp.init({ once: !0 });
function op() {
  return g.jsxs(g.Fragment, {
    children: [g.jsx(md, {}), g.jsx(Rd, {}), g.jsx(Od, {})],
  });
}
pd.createRoot(document.getElementById("root")).render(
  g.jsx(id.StrictMode, { children: g.jsx(op, {}) })
);

!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var a = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) ||
        Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 3));
})([
  function (t, e) {
    t.exports = function (t) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var n = (function (t, e) {
              var n = t[1] || "",
                r = t[3];
              if (!r) return n;
              if (e && "function" == typeof btoa) {
                var a =
                    ((o = r),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                      " */"),
                  s = r.sources.map(function (t) {
                    return "/*# sourceURL=" + r.sourceRoot + t + " */";
                  });
                return [n].concat(s).concat([a]).join("\n");
              }
              var o;
              return [n].join("\n");
            })(e, t);
            return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
          }).join("");
        }),
        (e.i = function (t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var r = {}, a = 0; a < this.length; a++) {
            var s = this[a][0];
            "number" == typeof s && (r[s] = !0);
          }
          for (a = 0; a < t.length; a++) {
            var o = t[a];
            ("number" == typeof o[0] && r[o[0]]) ||
              (n && !o[2]
                ? (o[2] = n)
                : n && (o[2] = "(" + o[2] + ") and (" + n + ")"),
              e.push(o));
          }
        }),
        e
      );
    };
  },
  function (t, e, n) {
    var r = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !r)
      throw new Error(
        "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
      );
    var a = n(8),
      s = {},
      o = r && (document.head || document.getElementsByTagName("head")[0]),
      i = null,
      l = 0,
      u = !1,
      c = function () {},
      d = null,
      f = "data-vue-ssr-id",
      p =
        "undefined" != typeof navigator &&
        /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    function v(t) {
      for (var e = 0; e < t.length; e++) {
        var n = t[e],
          r = s[n.id];
        if (r) {
          r.refs++;
          for (var a = 0; a < r.parts.length; a++) r.parts[a](n.parts[a]);
          for (; a < n.parts.length; a++) r.parts.push(m(n.parts[a]));
          r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
        } else {
          var o = [];
          for (a = 0; a < n.parts.length; a++) o.push(m(n.parts[a]));
          s[n.id] = { id: n.id, refs: 1, parts: o };
        }
      }
    }
    function h() {
      var t = document.createElement("style");
      return (t.type = "text/css"), o.appendChild(t), t;
    }
    function m(t) {
      var e,
        n,
        r = document.querySelector("style[" + f + '~="' + t.id + '"]');
      if (r) {
        if (u) return c;
        r.parentNode.removeChild(r);
      }
      if (p) {
        var a = l++;
        (r = i || (i = h())),
          (e = b.bind(null, r, a, !1)),
          (n = b.bind(null, r, a, !0));
      } else
        (r = h()),
          (e = function (t, e) {
            var n = e.css,
              r = e.media,
              a = e.sourceMap;
            r && t.setAttribute("media", r);
            d.ssrId && t.setAttribute(f, e.id);
            a &&
              ((n += "\n/*# sourceURL=" + a.sources[0] + " */"),
              (n +=
                "\n/*# sourceMappingURL=data:application/json;base64," +
                btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                " */"));
            if (t.styleSheet) t.styleSheet.cssText = n;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(n));
            }
          }.bind(null, r)),
          (n = function () {
            r.parentNode.removeChild(r);
          });
      return (
        e(t),
        function (r) {
          if (r) {
            if (
              r.css === t.css &&
              r.media === t.media &&
              r.sourceMap === t.sourceMap
            )
              return;
            e((t = r));
          } else n();
        }
      );
    }
    t.exports = function (t, e, n, r) {
      (u = n), (d = r || {});
      var o = a(t, e);
      return (
        v(o),
        function (e) {
          for (var n = [], r = 0; r < o.length; r++) {
            var i = o[r];
            (l = s[i.id]).refs--, n.push(l);
          }
          e ? v((o = a(t, e))) : (o = []);
          for (r = 0; r < n.length; r++) {
            var l;
            if (0 === (l = n[r]).refs) {
              for (var u = 0; u < l.parts.length; u++) l.parts[u]();
              delete s[l.id];
            }
          }
        }
      );
    };
    var g,
      _ =
        ((g = []),
        function (t, e) {
          return (g[t] = e), g.filter(Boolean).join("\n");
        });
    function b(t, e, n, r) {
      var a = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = _(e, a);
      else {
        var s = document.createTextNode(a),
          o = t.childNodes;
        o[e] && t.removeChild(o[e]),
          o.length ? t.insertBefore(s, o[e]) : t.appendChild(s);
      }
    }
  },
  function (t, e) {
    t.exports = function (t, e, n, r, a, s) {
      var o,
        i = (t = t || {}),
        l = typeof t.default;
      ("object" !== l && "function" !== l) || ((o = t), (i = t.default));
      var u,
        c = "function" == typeof i ? i.options : i;
      if (
        (e &&
          ((c.render = e.render),
          (c.staticRenderFns = e.staticRenderFns),
          (c._compiled = !0)),
        n && (c.functional = !0),
        a && (c._scopeId = a),
        s
          ? ((u = function (t) {
              (t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (t = __VUE_SSR_CONTEXT__),
                r && r.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(s);
            }),
            (c._ssrRegister = u))
          : r && (u = r),
        u)
      ) {
        var d = c.functional,
          f = d ? c.render : c.beforeCreate;
        d
          ? ((c._injectStyles = u),
            (c.render = function (t, e) {
              return u.call(e), f(t, e);
            }))
          : (c.beforeCreate = f ? [].concat(f, u) : [u]);
      }
      return { esModule: o, exports: i, options: c };
    };
  },
  function (t, e, n) {
    t.exports = n(4);
  },
  function (t, e, n) {
    Nova.booting(function (t, e, r) {
      e.addRoutes([
        {
          name: "translation-editor",
          path: "/translation-editor",
          component: n(5),
        },
      ]);
    });
  },
  function (t, e, n) {
    var r = n(2)(
      n(9),
      n(15),
      !1,
      function (t) {
        n(6);
      },
      "data-v-2581b840",
      null
    );
    t.exports = r.exports;
  },
  function (t, e, n) {
    var r = n(7);
    "string" == typeof r && (r = [[t.i, r, ""]]),
      r.locals && (t.exports = r.locals);
    n(1)("6d4af70c", r, !0, {});
  },
  function (t, e, n) {
    (t.exports = n(0)(!1)).push([
      t.i,
      ".clear-filter-icon[data-v-2581b840]{right:2.5rem;top:1rem}textarea[data-v-2581b840]{min-width:220px}.whitespace-nowrap[data-v-2581b840]{white-space:nowrap}",
      "",
    ]);
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = [], r = {}, a = 0; a < e.length; a++) {
        var s = e[a],
          o = s[0],
          i = { id: t + ":" + a, css: s[1], media: s[2], sourceMap: s[3] };
        r[o] ? r[o].parts.push(i) : n.push((r[o] = { id: o, parts: [i] }));
      }
      return n;
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(10),
      a = n.n(r),
      s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            };
    e.default = {
      components: { AddRowModal: a.a },
      metaInfo: function () {
        return { title: this.title + " - " + this.currentGroup };
      },
      data: function () {
        return {
          title: 'تعديل اللغات',
          apiUrl: "/nova-vendor/translation-editor/",
          translations: null,
          changedTranslations: [],
          currentGroup: null,
          showNewModal: !1,
          loaded: !1,
          languages: [],
          useTabs: !0,
          filterString: "",
        };
      },
      mounted: function () {
        this.getData();
      },
      computed: {
        existingKeys: function () {
          return Object.keys(this.translations[this.currentGroup]);
        },
        showTable: function () {
          return this.translations && Object.keys(this.translations).length > 0;
        },
        filterdTranslations: function () {
          var t = {};
          if (this.filterString)
            for (var e in this.translations) {
              var n = this.translations[e];
              for (var r in ((t[e] = {}), n))
                for (var a in n[r]) {
                  var s = n[r][a],
                    o = new RegExp(this.filterString, "i");
                  (s.match(o) || r.match(o)) && (t[e][r] = n[r]);
                }
            }
          else t = this.translations;
          return t;
        },
      },
      methods: {
        getData: function () {
          var t = this;
          Nova.request()
            .get(this.apiUrl + "index")
            .then(function (e) {
              (t.loaded = !0),
                e.data &&
                  e.data.translations &&
                  ((t.translations = e.data.translations),
                  (t.languages = e.data.languages),
                  (t.currentGroup = Object.keys(t.translations)[0]));
            });
        },
        search: function (t, e) {
          if (e && e.search(this.filterString) >= 0) return t;
          for (var n in t) {
            var r = t[n];
            if ("string" != typeof r) return this.search(r, n);
            if (r.search(this.filterString) >= 0) return t;
          }
          return null;
        },
        addRow: function (t) {
          var e = {};
          for (var n in this.languages) e[this.languages[n]] = "";
          "object" === s(this.translations[this.currentGroup]) &&
            (this.translations[this.currentGroup] = {}),
            this.$set(this.translations[this.currentGroup], t, e),
            (this.showNewModal = !1);
        },
        save: function (t) {
          var e = this,
            n = {};
          if (t) n[t] = this.changedTranslations[t];
          else
            for (var r in this.changedTranslations)
              n[r] = this.changedTranslations[r];
          Nova.request()
            .post(this.apiUrl + "save", { data: n })
            .then(function (t) {
              e.$toasted.show("Saved", { type: "success" });
            })
            .catch(function (t) {
              e.$toasted.show(t, { type: "error" });
            });
        },
        translationChanged: function (t, e, n, r) {
          (this.changedTranslations[t] = this.changedTranslations[t] || {}),
            (this.changedTranslations[t][e] =
              this.changedTranslations[t][e] || this.translations[t][e]),
            (this.changedTranslations[t][e][n] = r.target.value);
        },
      },
    };
  },
  function (t, e, n) {
    var r = n(2)(
      n(13),
      n(14),
      !1,
      function (t) {
        n(11);
      },
      "data-v-082c0d10",
      null
    );
    t.exports = r.exports;
  },
  function (t, e, n) {
    var r = n(12);
    "string" == typeof r && (r = [[t.i, r, ""]]),
      r.locals && (t.exports = r.locals);
    n(1)("da8a3e94", r, !0, {});
  },
  function (t, e, n) {
    (t.exports = n(0)(!1)).push([t.i, "", ""]);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = {
        name: "AddRowModal",
        props: { group: {}, existingKeys: {} },
        data: function () {
          return { keyName: "" };
        },
        methods: {
          handleClose: function () {
            this.$emit("close");
          },
          handleSubmit: function () {
            (this.keyName = this.keyName.trim()),
              -1 != this.existingKeys.indexOf(this.keyName)
                ? this.$toasted.show("This key is already in use", {
                    type: "error",
                  })
                : this.$emit("create", this.keyName);
          },
        },
        mounted: function () {
          this.$refs.keyNameInput.focus();
        },
      });
  },
  function (t, e) {
    t.exports = {
      render: function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("modal", [
          n(
            "form",
            {
              staticClass: "bg-white rounded-lg shadow-lg overflow-hidden",
              attrs: { autocomplete: "off" },
              on: {
                submit: function (e) {
                  return e.preventDefault(), t.handleSubmit(e);
                },
              },
            },
            [
              n(
                "div",
                [
                  n(
                    "heading",
                    {
                      staticClass: "border-b border-40 py-4 px-2",
                      attrs: { level: 2 },
                    },
                    [t._v(t._s(t.__("Create")) + ' "' + t._s(t.group) + '"')]
                  ),
                  t._v(" "),
                  n("div", { staticClass: "p-3" }, [
                    n(
                      "label",
                      {
                        staticClass:
                          "inline-block text-80 mb-2 leading-tight nova-form-label",
                      },
                      [t._v(t._s(t.__("Key of new translation")))]
                    ),
                    n("br"),
                    t._v(" "),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.keyName,
                          expression: "keyName",
                        },
                      ],
                      ref: "keyNameInput",
                      staticClass:
                        "w-full form-control form-input form-input-bordered",
                      attrs: { type: "text", required: "" },
                      domProps: { value: t.keyName },
                      on: {
                        input: function (e) {
                          e.target.composing || (t.keyName = e.target.value);
                        },
                      },
                    }),
                  ]),
                ],
                1
              ),
              t._v(" "),
              n("div", { staticClass: "bg-30 px-6 py-3 flex" }, [
                n("div", { staticClass: "flex items-center ml-auto" }, [
                  n(
                    "button",
                    {
                      staticClass:
                        "btn text-80 font-normal h-9 px-3 mr-3 btn-link",
                      attrs: { type: "button" },
                      on: { click: t.handleClose },
                    },
                    [t._v("\n          " + t._s(t.__("Cancel")) + "\n        ")]
                  ),
                  t._v(" "),
                  n(
                    "button",
                    {
                      staticClass: "btn btn-default btn-primary",
                      attrs: { type: "submit" },
                    },
                    [n("span", [t._v(t._s(t.__("Create")))])]
                  ),
                ]),
              ]),
            ]
          ),
        ]);
      },
      staticRenderFns: [],
    };
  },
  function (t, e) {
    t.exports = {
      render: function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          [
            n("heading", { staticClass: "mb-6" }, [t._v(t._s(t.title))]),
            t._v(" "),
            n("div", { staticClass: "flex border-b-2 border-50" }, [
              n("div", { staticClass: "w-1/5 px-8 py-2" }, [
                n(
                  "label",
                  { staticClass: "inline-block text-80 pt-2 leading-tight" },
                  [t._v(t._s(t.__("Filter")))]
                ),
              ]),
              t._v(" "),
              n("div", { staticClass: "w-4/5 py-2 px-8 relative" }, [
                t.filterString
                  ? n(
                      "span",
                      {
                        staticClass:
                          "cursor-pointer text-primary absolute clear-filter-icon",
                        attrs: { title: t.__("Clear filter") },
                        on: {
                          click: function (e) {
                            t.filterString = "";
                          },
                        },
                      },
                      [
                        n(
                          "svg",
                          {
                            staticClass: "w-6 h-6",
                            attrs: {
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
                              },
                            }),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
                t._v(" "),
                n("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.filterString,
                      expression: "filterString",
                    },
                  ],
                  staticClass:
                    "w-full form-control form-input form-input-bordered",
                  attrs: {
                    type: "text",
                    placeholder: t.__("Filter") + ": By key or translation",
                  },
                  domProps: { value: t.filterString },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.filterString = e.target.value);
                    },
                  },
                }),
              ]),
            ]),
            t._v(" "),
            t.showTable
              ? n(
                  "card",
                  { staticClass: "my-6" },
                  [
                    n(
                      "nav",
                      {
                        staticClass:
                          "bg-white px-8 pt-2 border-b-2 border-50 overflow-x-auto overflow-y-hidden text-center cursor-pointer whitespace-nowrap",
                      },
                      t._l(t.filterdTranslations, function (e, r) {
                        return n(
                          "a",
                          {
                            key: r,
                            staticClass:
                              "no-underline border-b-2 uppercase tracking-wide font-bold text-s py-3 mx-2 px-3 inline-block",
                            class:
                              t.currentGroup === r
                                ? "text-primary border-primary"
                                : " text-grey border-transparent",
                            on: {
                              click: function (e) {
                                t.currentGroup = r;
                              },
                            },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(r) +
                                " (" +
                                t._s(Object.keys(e).length) +
                                ")\n        "
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                    t._v(" "),
                    t._l(t.filterdTranslations, function (e, r) {
                      return t.currentGroup === r
                        ? n(
                            "div",
                            { key: r + "tab", staticClass: "overflow-x-auto" },
                            [
                              n("table", { staticClass: "table w-full" }, [
                                n("thead", [
                                  n(
                                    "tr",
                                    [
                                      n("th", { staticClass: "text-left" }, [
                                        t._v("Key"),
                                      ]),
                                      t._v(" "),
                                      t._l(t.languages, function (e) {
                                        return n(
                                          "th",
                                          { staticClass: "text-left" },
                                          [t._v("Translation " + t._s(e))]
                                        );
                                      }),
                                    ],
                                    2
                                  ),
                                ]),
                                t._v(" "),
                                n(
                                  "tbody",
                                  t._l(e, function (e, a) {
                                    return n(
                                      "tr",
                                      [
                                        n(
                                          "td",
                                          { staticClass: "text-left py-2" },
                                          [
                                            t._v(
                                              "\n            " +
                                                t._s(a) +
                                                "\n            "
                                            ),
                                            n(
                                              "p",
                                              {
                                                staticClass:
                                                  "text-xs\tmt-2 text-dark-grey",
                                              },
                                              [t._v(t._s(r) + "." + t._s(a))]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        t._l(t.languages, function (s) {
                                          return n(
                                            "td",
                                            { staticClass: "text-left" },
                                            [
                                              n("textarea", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: e[s],
                                                    expression: "trans[lang]",
                                                  },
                                                ],
                                                staticClass:
                                                  "w-full form-input form-input-bordered py-3 m-1 h-auto",
                                                domProps: { value: e[s] },
                                                on: {
                                                  input: [
                                                    function (n) {
                                                      n.target.composing ||
                                                        t.$set(
                                                          e,
                                                          s,
                                                          n.target.value
                                                        );
                                                    },
                                                    function (e) {
                                                      return t.translationChanged(
                                                        r,
                                                        a,
                                                        s,
                                                        e
                                                      );
                                                    },
                                                  ],
                                                },
                                              }),
                                            ]
                                          );
                                        }),
                                      ],
                                      2
                                    );
                                  }),
                                  0
                                ),
                              ]),
                              t._v(" "),
                              n("div", { staticClass: "text-center p-3" }, [
                                n(
                                  "button",
                                  {
                                    staticClass: "btn btn-default btn-primary",
                                    on: {
                                      click: function (e) {
                                        t.showNewModal = !0;
                                      },
                                    },
                                  },
                                  [t._v("Add row")]
                                ),
                                t._v(" "),
                                n(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-default btn-primary mr-3",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function (e) {
                                        return t.save(t.currentGroup);
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      t._s(t.__("Save")) +
                                        ' "' +
                                        t._s(t.currentGroup) +
                                        '"'
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          )
                        : t._e();
                    }),
                  ],
                  2
                )
              : t._e(),
            t._v(" "),
            t.showTable
              ? n("div", { staticClass: "text-right my-2" }, [
                  n(
                    "a",
                    {
                      staticClass:
                        "btn btn-link dim cursor-pointer text-80 ml-auto mr-6 router-link-active nova-router-link nova-cancel-button",
                      on: {
                        click: function (e) {
                          return t.$router.go();
                        },
                      },
                    },
                    [t._v("\n      " + t._s(t.__("Cancel")) + "\n    ")]
                  ),
                  t._v(" "),
                  n(
                    "button",
                    {
                      staticClass: "btn btn-default btn-primary",
                      attrs: { type: "button" },
                      on: {
                        click: function (e) {
                          return t.save();
                        },
                      },
                    },
                    [t._v(t._s(t.__("Save all")))]
                  ),
                ])
              : t._e(),
            t._v(" "),
            t.showNewModal
              ? n("add-row-modal", {
                  attrs: {
                    group: t.currentGroup,
                    "existing-keys": t.existingKeys,
                  },
                  on: {
                    close: function (e) {
                      t.showNewModal = !1;
                    },
                    create: t.addRow,
                  },
                })
              : t._e(),
            t._v(" "),
            !t.showTable && t.loaded
              ? n("div", { staticClass: "toasted nova error" }, [
                  n("p", { staticClass: "mb-2" }, [
                    t._v(
                      "You have not translation groups (aka translation file) activated in your `config/translation-editor.php` config file."
                    ),
                  ]),
                  t._v(" "),
                  n("p", [
                    t._v(
                      "Please add at least one group to the `groups` array element (for example `auth`, `validation`, etc.)."
                    ),
                  ]),
                ])
              : t._e(),
          ],
          1
        );
      },
      staticRenderFns: [],
    };
  },
]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{178:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"希尔排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#希尔排序","aria-hidden":"true"}},[t._v("#")]),t._v(" 希尔排序")]),t._v(" "),s("h2",{attrs:{id:"_1-算法描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-算法描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 算法描述")]),t._v(" "),s("p",[t._v("1959年Shell发明，第一个突破O(n2)的排序算法，是简单插入排序的改进版。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。")]),t._v(" "),s("p",[t._v("先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：")]),t._v(" "),s("ul",[s("li",[t._v("选择一个增量序列t1,t2,…,tk，其中ti>tj，tk=1")]),t._v(" "),s("li",[t._v("按增量序列个数k，对序列进行k趟排序")]),t._v(" "),s("li",[t._v("每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1时，整个序列作为一个表来处理，表长度即为整个序列的长度")])]),t._v(" "),s("h2",{attrs:{id:"_2-算法图示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-算法图示","aria-hidden":"true"}},[t._v("#")]),t._v(" 2 算法图示")]),t._v(" "),s("p",[s("img",{attrs:{src:"/sort/shellSort.png",alt:"希尔排序图示"}})]),t._v(" "),s("h2",{attrs:{id:"_3-代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 3 代码实现")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("shellSort")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" len "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" temp"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gap "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 增量的计算公式 1 4 13")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gap "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" len "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    gap "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" gap "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gap"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" gap "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" gap "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("floor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gap "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" gap"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      temp "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" j "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" gap"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" temp"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{attrs:{class:"token operator"}},[t._v("-=")]),t._v(" gap"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" gap"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" gap"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);r.options.__file="shellSort.md";a.default=r.exports}}]);
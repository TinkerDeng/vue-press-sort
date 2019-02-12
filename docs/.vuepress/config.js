/**
 * 主要配置包括网站的标题 描述等基本信息 以及主题的配置
 */
module.exports = {
  // 标题
  title: 'JS排序',
  // 网站描述
  description: 'vue press sort document',
  // 额外的需要被注入到当前页面的head中的标签 其中路径的/就是public资源目录
  head: [

  ],

  themeConfig: {
    // 导航栏配置
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '排序介绍',
        link: '/sort/'
      },
      {
        text: 'leetcode-cn',
        link: 'https://leetcode-cn.com'
      },
      {
        text: '关于',
        link: '/about/'
      }
    ],
    // 侧边栏配置 可以省略.md拓展名
    sidebar: [
      {
        title: 'JS排序',
        collapsable: true,
        children: [
          '/sort/bubbleSort',
          '/sort/selectSort',
          '/sort/insertSort',
          '/sort/quickSort',
          '/sort/shellSort',
          '/sort/mergeSort',
          '/sort/heapSort',
          '/sort/countingSort',
          '/sort/bucketSort',
          '/sort/radixSort',
        ]
      }, {
        title: 'Array中的sort',
        collapsable: true,
        children: [
          '/sourceCode/sort'
        ]
      }
    ],
    // 嵌套标题链接深度 默认是1
    sidebarDepth: 2,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 
    repo: 'http://gitlab.renrenche.com/liuguangsen/vue-press-sort',
    editLinks: true,
    editLinkText: '在gitlab上编辑此页',
  }
}
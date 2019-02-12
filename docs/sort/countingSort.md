# 计数排序

## 1 算法描述

计数排序不是基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。

计数排序本质上是一种特殊的桶排序，当桶的个数最大的时候，就是计数排序。

* 找出待排序的数组中最大和最小的元素
* 统计数组中每个值为i的元素出现的次数，存入数组C的第i项
* 对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）
* 反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1

## 2 算法图示

![计数排序图示](/sort/countingSort.gif)

## 3 代码实现

```js
function countingSort (arr) {
  const len = arr.length
  let count = [], res = []
  // countLen 获取数组最大元素
  const countLen = Math.max(...arr)
  // const countLen = Math.max.apply(null, arr)
  for (let i = 0; i < countLen; i++) {
    count[i] = 0
  }
  for (let i = 0; i < len; i++) {
    count[arr[i]]++
  }
  for (let i = 0; i < countLen; i++) {
    for (let j = 1; j <= count[i]; j++) {
      res.push(i)
    }
  }
  return res
}
```
# 归并排序

## 1 算法描述

归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并。

* 把长度为n的输入序列分成两个长度为n/2的子序列
* 对这两个子序列分别采用归并排序
* 将两个排序好的子序列合并成一个最终的排序序列

## 2 算法图示

![归并排序图示](/sort/mergeSort.gif)

## 3 代码实现

```js
function mergeSort (arr) {
  const len = arr.length
  if (len === 1) {
    return arr
  }
  // 把arr一分为二
  var middle = Math.floor(len / 2), left = arr.slice(0, middle), right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  let result = [], il = 0, ir = 0
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++])
    } else {
      result.push(right[ir++])
    }
  }
  while (il < left.length) {
    result.push(left[il++])
  }
  while (ir < right.length) {
    result.push(right[ir++])
  }
  return result
}
```
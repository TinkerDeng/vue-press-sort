# 快速排序

## 1 算法描述

快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。快排的最好情况，每次正好中分。快排的最坏情况，已排序或数值全部相等。

快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：

* 从数列中挑出一个元素，称为“基准”
* 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区操作
* 递归地把小于基准值元素的子数列和大于基准值元素的子数列排序

## 2 算法图示

![快速排序图示](/sort/quickSort.gif)

## 3 代码实现

```js
function quickSort (arr, left, right) {
  const len = arr.length
  // base 表示基准数
  let base = arr[left], i = left, j = right, temp
  // 一定要有这个判断，因为有递归left和i-1，若没有这个判断条件，该函数会进入无限死错位递归
  if (i > j) {
    return
  }
  while (i != j) {
    while (arr[j] >= base && i < j) {
      j--
    }
    while (arr[i] <= base && i < j) {
      i++
    }
    if (i < j) {
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }

  // i == j 表示左右标兵相遇，与基准数互换位置
  arr[left] = arr[i]
  arr[i] = base

  quickSort(arr, left, i - 1)
  quickSort(arr, i + 1, right)
  return arr
}
```
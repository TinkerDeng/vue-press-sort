# 堆排序

## 1 算法描述

堆排序是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。

* 将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区
* 将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,…,Rn-1)和新的有序区(Rn),且满足R[1,2,…,n-1]<=r[n]
* 由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,…,Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2,…,Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成

## 2 算法图示

![堆排序图示](/sort/heapSort.gif)

## 3 代码实现

```js
var len
function buildMaxHeap (arr) {
  len = arr.length
  // len / 2 - 1表示最后一个有子节点的节点
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    // 对每一个非叶子结点做调整
    maxHeapify(arr, i)
  }
}

function maxHeapify (arr, i) {
  let left = 2 * i + 1, right = 2 * i + 2, largest = i
  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }
  // 即上面有一个if生效
  if (largest !== i) {
    // 交换最大的父节点
    swap(arr, i, largest)
    // 继续调整
    maxHeapify(arr, largest)
  }
}

function swap (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function heapSort (arr) {
  buildMaxHeap(arr)
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i)
    len--
    maxHeapify(arr, 0)
  }
  return arr
}
```
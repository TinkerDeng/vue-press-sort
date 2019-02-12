# 基数排序

## 1 算法描述

基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。

* 取得数组中的最大数，并取得位数
* arr为原始数组，从最低位开始取每个位组成radix数组，然后按照先进先出的顺序还原arr
* 对radix进行计数排序（利用计数排序适用于小范围数的特点）

## 2 算法图示

![基数排序图示](/sort/radixSort.gif)

## 3 代码实现

```js
function radixSort (arr) {
  // times表示最大数的位数 也为基数排序循环的次数
  const len = arr.length,
    max = Math.max(...arr),
    times = (max + '').length

  for (let radix = 0, mod = 10, dev = 1, counter = []; radix < times;
    radix++, dev *= 10, mod *= 10) {
    for (let i = 0; i < len; i++) {
      // 按个十百千取每个数的位数值
      let bucket = parseInt((arr[i] % mod) / dev)
      if (counter[bucket] === undefined) {
        // 初始化队列
        counter[bucket] = []
      }
      // 入队
      counter[bucket].push(arr[i])
    }

    let pos = 0
    // counter的长度是10 是因为上面循环中有counter[9] = xx 这样使得counter的长度是10
    for (let i = 0; i < counter.length; i++) {
      let value = null
      // 判队空
      if (counter[i]) {
        // 出队
        while ((value = counter[i].shift()) != null) {
          arr[pos++] = value
        }
      }
    }
  }
  return arr
}
```
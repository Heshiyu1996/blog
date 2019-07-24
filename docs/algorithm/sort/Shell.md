# 希尔排序（稳定）
时间复杂度：O(nlog2n) ~ O(n²)

思想：是简单插入排序的改进版。会优先比较距离较远的元素，又叫缩小增量排序

```js
 function shellSort(arr) {
    let temp,
       gap = 1
    while (gap < arr.length / 3) {
      gap = gap * 3 + 1
    }
    for(gap; gap > 0; gap = Math.floor(gap / 3)) {
      for (let i = gap; i < arr.length; i++) {
        temp = arr[i]
        // 注意，对于j是var
        for(var j = i - gap; j > 0 && arr[j] > temp; j -= gap) {
          arr[j + gap] = arr[j]
        }
        arr[j + gap] = temp
      }
    }
    return arr
 }
```

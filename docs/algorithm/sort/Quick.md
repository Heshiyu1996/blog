# 快速排序（稳定）

时间复杂度：O(nlog2n)

思想：
  - 选择一个元素作为“基准”（pivot），记录其值、下标
  - 所有小于“基准”的元素，移到“基准”的左边；所有大于“基准”的元素，都移到“基准”的右边
  - 对“基准”左、右两个子集，不断重复第一、二步，直到所有子集`只剩下一个元素`为止
 
代码：
```js
const quickSort = arr => arr.length <= 1 ? arr :
      quickSort(arr.filter(x => x < arr[0]))
      .concat(arr.filter(x => x == arr[0]))
      .concat(quickSort(arr.filter(x => x > arr[0])))
```

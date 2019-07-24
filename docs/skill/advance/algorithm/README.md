# 简单算法

## 八大排序
 [八大排序](./../Algorithm/Sort.md)

## 二分查找
 思想：在一个`有序序列`当中，把要`查找的值`，与`中间值`比较：
 
 若大于中间值，则在右边进行`相同查找`；否则在左边进行查找。找到后返回索引值，否则返回`-1`

  - 利用递归（数据量较少时）
  ```js
  function binary_search(arr, key) {
      var low = 0 // 最左端
      var high = arr.length - 1 // 最右端
      
      while(low < high) {
          var mid = Math.floor((low + high) / 2)
          if (key === arr[mid]) {
              return mid
          } else if (key > arr[mid]) {
              low = mid + 1
          } else if (key < arr[mid]) {
              high = mid - 1
          } else {
              return - 1
          }
      }
  }

  var arr = [1, 9, 7, 6]
  binary_search(arr, 7)
  ```
 #### 时间复杂度的计算
 `时间复杂度 = while的循环次数`
 
 - 算法的基本操作执行次数是问题规模n的某一个函数，记作T(n)；
 - 存在一个辅助函数f(n)，使得T(n)/f(n)当n趋向于无穷大时，他们的值是个不为零的常数，那f(n)就是T(n)的同数量级函数
 - 这个算法的时间复杂度是O(f(n))

 > 同数量级函数有：1、log2n、n、nlog2n、n平方、n三次方、2的n次方、n的阶乘

 #### 例子：
 假设共n个数，那下一轮是n/2，再下一轮是n/4（即n/2²）...最后是n/(2的k次方)。其中`k`是`循环的次数`
 故，要计算：n/(2的k次方) >= 1
 
 解，得：n = (2的k次方)

 **k = logn**
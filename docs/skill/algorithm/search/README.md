# 二分查找
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
  
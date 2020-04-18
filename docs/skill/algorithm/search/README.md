# 二分查找

## 思想
 - 在一个`有序序列`当中，把要`查找的值`，与`中间值`比较：
 - 若大于中间值，则在右边进行`相同查找`；
 - 否则在左边进行查找。找到后返回索引值，否则返回`-1`

### 非递归（左闭右闭）
```js
const binarySearch = (arr, key) => {
    let low = 0,
        high = arr.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (key === arr[mid]) {
            return mid
        } else if (key > arr[mid]) {
            low = mid + 1
        } else if (key < arr[mid]) {
            high = mid - 1
        }
    }

    return - 1
}

let arr = [1, 6, 7, 9]
binarySearch(arr, 7); // 2
```


### 递归（数据量较少时）
和 `非递归` 的区别：每次递归需传入`low`、`high`。

```js
    const binarySearch = (arr, key, low = 0, high = 0) => {
        if (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === key) return mid;

            if (arr[mid] < key) return binarySearch(arr, key, mid + 1, high);
            
            return binarySearch(arr, key, low, mid - 1);
        }

        return -1;
    }

    let arr = [1, 6, 7, 9]
    binarySearch(arr, 7, 0, arr.length - 1); // 2
```
  
# 快速排序（不稳定）
> 时间复杂度：O(nlogn)

## 思想
通过 `分治思想` 把 待排数组 分为 两个子序列，然后递归地排序两个子序列。

## 步骤
1. 选中一个 `基准(pivot)` 值；
2. 遍历数组，所有比基准值小的元素放左边，大的元素放后面；分割结束后，**对基准值的排序就已经完成**（即 `pivot` 排序后的下标）；
3. 递归排序两个子序列

```js
var quickSort = (list, low = 0, high = list.length - 1) => {
    if (low >= high) return;

    // 1/2. 挑选基准值，并找出 基准值 排序后的下标
    let pivotIndex = partition(list, low, high);
    // 3. 递归排序两个子序列
    quickSort(list, low, pivotIndex - 1);
    quickSort(list, pivotIndex + 1, high);
}

var partition = (list, low, high) => {
    // 1. 随机挑选pivot
    // 在 low 和 high 之间随机选择，然后与 high 元素交换
    // if (high > low) {
    //    let random = Math.random() * (high - low) + low;
    //    swap(list, high, random);
    // }

    // i 代表 “已处理区间” 的尾部，最后状态即为 pivot 的排序后下标
    let i = low;
    // 假设将最后一位作为基准（也可以将上方注释打开以随机选取pivot）
    let pivot = list[high];
    
    // 利用 j 从 [low, high) 进行遍历
    for (let j = low; j < high; j++) {
        // 若当前元素 < pivot，将其放置“已处理区间”的尾部，即 i
        if (list[j] < pivot) {
            swap(list, i, j);
            i++; // “已处理区间”尾部+1
        }
        // 无需处理比 pivot 大的元素，因为此时 j++，但 i 并未增加。
    }
    // 将 pivot 放置 i（pivot本应该出现的位置）
    swap(list, i, high);
    
    // 最终返回排好后的 pivot 的下标（即 i ）
    return i;
}

var swap = (list, i, high) => {
    [list[i], list[high]] = [list[high], list[i]];
}
```
<!-- 
```js
const quickSort = arr => arr.length <= 1 ? arr :
      quickSort(arr.filter(x => x < arr[0]))
      .concat(arr.filter(x => x === arr[0]))
      .concat(quickSort(arr.filter(x => x > arr[0])))
``` -->

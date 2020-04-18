# 归并排序（不稳定）
> 时间复杂度：O(nlog2n)

## 思想
先 **“分”**：`mergeSort`，将原数组分成两个组数，再各自分两个数组……直到分出只剩一个元素为止

后 **“治”**：`merge`，将两个数组进行排序，最后合并成一个数组

```js
function mergeSort(arr) {
    let len = arr.length;
    if (len <= 1) return arr;

    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while (left.length > 0 && right.length > 0) { // 注意此处条件为 left.length > 0 && right.length > 0
        result.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    return result.concat(left).concat(right);
}
```

## 大致步骤
利用`分治策略`，把待排序列递归划分为多个子序列，再将子序列的各项进行比较、合并，从而得到有序子序列。以此类推，直至得到最终有序序列。

## 具体步骤
例子：[1, 9, 7, 6]
  - 把数组[1, 9, 7, 6]划分为[1, 9]、[7, 6]
  - 对于[1, 9]会划分为[1]、[9]
  - 对于[1]、[9]不能再往下划分，该分支开始合并
  - 【合并】对于[1]、[9]两个子数组进行合并（result=[]）
  - 【合并】1和9比，1小，所以1从[1]里shift出去（result=[1]），剩下[9]、[]
  - 【合并】由于第二个子数组长度为0，直接concat。（result.concat(left）.concat(right)，即[1, 9]）
  - 【合并】同理，[7]、[6]合并为[6, 7]
  - 【合并】对于[1, 9]和[6, 7]两个子数组进行合并（result=[]）
  - 【合并】1和6比，1小，所以1从[1, 9]里shift出去（result=[1]），剩下[9]、[6, 7]
  - 【合并】9和6比，6小，所以6从[6, 7]里shift出去（result=[1, 6]），剩下[9]、[7]
  - 【合并】9和7比，7小，所以7从[7]里shift出去（result=[1, 6, 7]），剩下[9]、[]
  - 【合并】由于第二个子数组长度为0，直接concat。（result.concat(left）.concat(right)，即[1, 6, 7, 9）
  - 最终数组[1, 6, 7, 9]

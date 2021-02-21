# Array.prototype.sort
> MDN定义：`sort()`方法用原地算法对数组的元素进行排序，并返回数组。
> 
> 默认排序顺序是: 将元素转换为字符串，然后比较它们每个字符的Unicode位点进行排序。

## 日常使用
### 语法
```js
arr.sort([compareFunction]);
// compareFunction是可选的。
// 如果 `compareFunction(a, b)` < 0，那么 a 会在 b 之前
// 如果 `compareFunction(a, b)` > 0，那么 b 会在 a 之前
// 如果 `compareFunction(a, b)` === 0，那么 a和b的相对位置不变
```

```js
// 根据数字 从小到大 排序:
arr.sort((a, b) => a - b);

// 根据对象的某个属性 从小到大 排序:
arr.sort((a, b) => a.value - b.value);
```

## 各浏览器的算法实现
ECMAScript并没有对`Array.prototype.sort`要求用哪种的排序算法实现，也没有要求其稳定性。

因此，各浏览器的算法实现不一：

|           浏览器        |   使用的 JS 引擎  |       排序算法   | 
| -----------------------|:----------------|:----------------|
| Google Chrome          |   V8            | 插入排序、快速排序 |
| Mozilla Firefox        |  SpiderMonkey   | 归并排序          |
| Safari                 |  JavaScriptCore | 归并排序、桶排序   |
| Microsoft Edge、IE(9+) |      Chakra     | 快速排序          |

其中，Chrome 对 `sort` 做了特殊处理：
 - 对于长度 ` <= 10` 的数组使用了“插入排序(稳定性)”；
 - 对于长度` > 10` 则使用了“快速排序(不稳定)”

## 常见排序算法
由上常见的排序算法有: 快速排序、归并排序、插入排序。

### 时间复杂度总结
|           排序方法          |     平均时间   |  最好时间  |  最坏时间 | 稳定性 |
| ---------------------------|:--------------|:---------|:---------|:------|
| [快速排序](/skill/algorithm/sort/Quick.html)      |     O(nlogn)  | O(nlogn) |  O(n^2)  |   ✔️   |
| [归并排序](/skill/algorithm/sort/Merge.html)      |    O(nlogn)   | O(nlogn) | O(nlogn) |   ✖   |
| [插入排序](/skill/algorithm/sort/Insertion.html)  |      O(n^2)   |   O(n)   |  O(n^2)  |   ✖   |

## 稳定性
在待排序中，存在 **多条相同的记录**。如果排序后，这些相同记录的 **相对次序** 没有发生改变，则称这种排序算法是稳定的；
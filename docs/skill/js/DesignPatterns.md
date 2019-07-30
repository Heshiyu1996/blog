# JS设计模式
> JS设计模式

[[toc]]

## 观察者模式
观察者模式，是一个对象，维护一个依赖列表。当任何状态发生改变时，去通知每一个观察者。

![alt](./img/DesignPatterns-1.png)

## 发布-订阅模式
和观察者模式非常相似，但是最大的区别在于：
> 在发布-订阅模式，发布者（publishers）不会直接将消息发送给特定的订阅者

`发布者和订阅者`之间不知道对方的存在，需要通过`消息代理`来通信

|观察者模式|发布订阅模式|
|--|--|
|观察者、被观察者可以直接联系|无直接依赖关系，要通过消息代理（例微信公众号平台）|
|紧耦合|松耦合|
|同步|异步|
|当组件之间依赖关系简单时|当组件之间依赖关系复杂时|

![alt](./img/DesignPatterns-2.png)

## 中介者模式
现实中的中介者：博彩公司
 - 如果没有博彩公司，上千万的人一起计算赔率、输赢是非常困难
 - 有了博彩公司作为中介者对象，每个人只需跟博彩公司发生关联，由博彩公司来根据每个人的投注情况计算好赔率（彩民赢了，找博彩公司拿；输了就把钱交给博彩公司）

### 一个购买商品的例子：
 ![alt](./img/DesignPatterns-3.png)
 
 如图，如果没有使用任何设计模式，这里应该是在`select`、`input`的各自onchange事件里，去获取`当前用户所选的条件下`的库存情况。

 如果使用了中介者模式，只需增加一个`中介者对象`
 ```js
 var goods = {
     'red': 3
 }

 var mediator = (function() {
    var colorSelect = document.getElementById('colorSelect'),
        numberInput = document.getElementById('numberInput')
        nextBtn = document.getElementById('nextBtn')
    
    return {
        changed (obj) {
            var color = colorSelect.value,
                number = numberInput.value,
                stock = good[color]
                
                if (obj === colorSelect) { // 如果选择的是颜色下拉框
                    // ...
                } else if (obj === numberInput) { // 如果选择的是数量输入框
                    // ...
                }

                nextBtn.innerHTML = '购买'
        }
    }
 })()
 ```
 可见，所有的对象会和`中介者对象`通信。当这些对象发生改变时，通知`中介者对象`，同时告诉`中介者对象`自己的身份，以便中介者辨别是谁发生了改变，剩下的事情就交给了中介者来完成。

 **好处**：降低各个对象之间的耦合度

 **缺点**：中介者对象自身往往难以维护
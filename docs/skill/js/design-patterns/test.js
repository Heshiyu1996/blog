// 发布-订阅模式

var Event = (function() {
    let clientList = {},
        listen,
        trigger,
        remove;
    
    return function () {
        listen = function (type, fn) {
            if (!clientList[type]) {
                clientList[type] = []
            }
            clientList[type].push(fn)
        }

        trigger = function () {
            let type = Array.prototype.shift.call(arguments);
            let fns = clientList[type];
            if (!fns || !fns.length) return false;
            for (let i = 0; i< fns.length; i++) {
                fns[i].apply(this, arguments);
            }
        }

        return {
            clientList,
            listen,
            trigger,
            remove
        }
    }
})()



Event.listen('sport', msg => console.log(msg));


Event.trigger('sport', 'I am sport')
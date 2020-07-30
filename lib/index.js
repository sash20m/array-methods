"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
module.exports = {
    filter: function (ArrOrCallback, callback) {
        if (Array.isArray(ArrOrCallback)) {
            var newArr = [];
            var j = 0;
            for (var i = 0; i < ArrOrCallback.length; i++) {
                if (callback(ArrOrCallback[i])) {
                    newArr[j] = ArrOrCallback[i];
                    j++;
                }
            }
            return newArr;
        }
        function execute(arr) {
            var newArr = [];
            var j = 0;
            for (var i = 0; i < arr.length; i++) {
                if (ArrOrCallback(arr[i])) {
                    newArr[j] = arr[i];
                    j++;
                }
            }
            return newArr;
        }
        return {
            // return the object ready to execute
            execute: execute,
        };
    },
    map: function (ArrOrCallback, callback) {
        if (Array.isArray(ArrOrCallback)) {
            var newArr = [];
            for (var i = 0; i < ArrOrCallback.length; i++) {
                newArr[i] = callback(ArrOrCallback[i], i);
            }
            return newArr;
        }
        function execute(arr) {
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                newArr[i] = ArrOrCallback(arr[i], i);
            }
            return newArr;
        }
        return {
            execute: execute,
        };
    },
    find: function (ArrOrCallback, callback) {
        if (Array.isArray(ArrOrCallback)) {
            for (var i = 0; i < ArrOrCallback.length; i++) {
                if (callback(ArrOrCallback[i]))
                    return ArrOrCallback[i];
            }
        }
        function execute(arr) {
            for (var i = 0; i < arr.length; i++) {
                if (ArrOrCallback(arr[i]))
                    return arr[i];
            }
        }
        return {
            execute: execute,
        };
    },
    concat: function (arr1, arr2) {
        return __spreadArrays(arr1, arr2);
    },
    pipe: function (arr, callbacks) {
        var newArr = arr;
        for (var i = 0; i < callbacks.length; i++) {
            newArr = callbacks[i].execute(newArr);
        }
        return newArr;
    },
};
// const arr = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const callback = (item: any) => {
//   return item.length > 6;
// };
// const answer = filter(arr, callback);
// console.log(answer, "shh");
//# sourceMappingURL=index.js.map
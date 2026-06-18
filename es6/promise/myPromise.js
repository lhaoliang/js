(function (w) {
  // 手诺
  // 状态常量
  const PENDING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';

  // 手诺
  function MyPromise(executor) {
    // 执行器函数 同步执行

    function resolve(value) {
      if (this.status !== PENDING) {
        return;
      }
      this.status = RESOLVED;
      this.value = value;
    }

    function reject(reason) {
      if (this.status !== PENDING) {
        return;
      }
      this.status = REJECTED;
      this.reason = reason;
    }

    executor(resolve, reject);
  }

  // Promise 原型对象的 then 方法
  /*
    then 方法 用于处理 Promise 成功和失败的情况
    @param {*} onResolved 成功回调函数
    @param {*} onRejected 失败回调函数
    @returns 新的 Promise 实例
  */
  MyPromise.prototype.then = function (onResolved, onRejected) {

  }

  // Promise 函数对象的 catch 方法
  /*
    catch 方法 用于处理 Promise 失败的情况
    @param {*} onRejected 失败回调函数
    @returns 新的 Promise 实例
  */
  MyPromise.catch = function (onRejected) {
  }

  // Promise 函数对象的 resolve 方法
  /*
    resolve 方法 用于创建一个已成功状态的 Promise 实例
    @param {*} value 成功的值
    @returns 已成功状态的 Promise 实例
  */
  MyPromise.resolve = function (value) {
    return new MyPromise((resolve, reject) => {
      resolve(value);
    })
  }

  // Promise 函数对象的 reject 方法
  /*
    reject 方法 用于创建一个已失败状态的 Promise 实例
    @param {*} reason 失败的值
    @returns 已失败状态的 Promise 实例
  */
  MyPromise.reject = function (reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    })
  }

  // Promise 函数对象的 all 方法
  /*
    all 方法 用于并行执行多个 Promise 实例
    @param {*} promiseList Promise 实例数组
    @returns 新的 Promise 实例 只有当 Promise 实例数组中的所有 Promise 都成功时才会成功
  */
  MyPromise.all = function (promiseList) {

  }

  // Promise 函数对象的 race 方法
  /*
    race 方法 用于并行执行多个 Promise 实例
    @param {*} promiseList Promise 实例数组
    @returns 新的 Promise 实例 只有当 Promise 实例数组中的第一个 Promise 完成时才会成功
  */
  MyPromise.race = function (promiseList) {

  }

  // Promise 函数对象的 allSettled 方法
  /*
    allSettled 方法 用于并行执行多个 Promise 实例
    @param {*} promiseList Promise 实例数组
    @returns 新的 Promise 实例 只有当 Promise 实例数组中的所有 Promise 都完成时才会成功
  */
  MyPromise.allSettled = function (promiseList) {

  }

  // Promise 函数对象的 any 方法
  /*
    any 方法 用于并行执行多个 Promise 实例
    @param {*} promiseList Promise 实例数组
    @returns 新的 Promise 实例 只有当 Promise 实例数组中的至少有一个 Promise 成功时才会成功
  */
  MyPromise.any = function (promiseList) {

  }

  // 暴露
  w.MyPromise = MyPromise;
})(window)

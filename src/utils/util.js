// 1.查看数组中是否存在key值中的value相同的情况
export const filterOwnArrayKey = (arr, name) => {
  // 传入arr以及需要查询的keyName
  const newArray = []
  arr.forEach((item, index) => {
    // 当前数组中的第n个下标keyname是否与其它数据中的keyname相同
    if (
      index !==
      arr.findIndex((items) => {
        return items[name] === item[name]
      })
    ) {
      newArray.push(index)
    }
  })
  return newArray // 根据处理后返回的数据生成一个相同value的数组, 数组内有值说明有重复
}

// 2. 判断当前字符串中是否含有指定字符串(字符串大写自动转化为小写)
export const determineString = (start, end) => {
  /**
   * determineString('hbase11', 'redis') // false
   * determineString('hbase11', 'hbase') // true
   */
  if (start && end) {
    const startString = start.toLocaleLowerCase()
    const endString = end.toLocaleLowerCase()
    return startString.indexOf(endString) !== -1
  }
  return false
}

let newobj = {}
let oldobj = {
  a: {
    aa: {
      aaa: {},
    },
  },
  b: [{ b: [{ bb: ['bb', 'aa'] }] }],
}
// 深拷贝
export const deepCopy = (newobj, oldobj) => {
  for (let k in oldobj) {
    // 判断我们的属性值属于哪种数据类型
    // 1.获取属性值 oldobj[k]
    let item = oldobj[k]
    // 2.判断这个值是否是数组
    if (item instanceof Array) {
      newobj[k] = []
      deepCopy(newobj[k], item)
      // 3.判断这个值是否是对象
    } else if (item instanceof Object) {
      newobj[k] = {}
      deepCopy(newobj[k], item)
    } else {
      // 4.属于简单数据类型
      newobj[k] = item
    }
  }
}
// deepCopy(newobj, oldobj)
// console.log('newobj', newobj.b[0].b)

// 快速生成mock数据
export const generateArray = () => {
  return Array.from(new Array(1000)).map(
    (item, index) => `mock列表数据${index}`
  )
}

// 参数是一组有次数的值
// function f ([x, y, z]) {
//     console.log(x, y, z)
// }
// f([1, 2, 3])

// // 参数是一组无次序的值
// function f ({ x, y, z }) {
//     console.log(x, y, z)
// }
// f({ x: 1, y: 2, z: 32 })
// let jsonData = {
//     id: 22,
//     status: "ok",
//     data: [123, 456]
// }
// let { id, status, data: number } = jsonData
// console.log(id, status, number)

// let arr = [[11, 12], [21, 22], [31, 32]]
// for (let [a, b] of arr) {
//     console.log('a', a)
//     console.log('b', b)
// }

/* 根据某个值确定需要的信息 */
/**
 *
 * @param {*} type 选择的值
 * @param {*} obj 原始数据 对象{type:value}
 * @param {*} defaultVal 没有匹配返回的默认值
 * @returns 返回的数据 filterStatus(2, { 1: '疫情防控', 2: '宣传科普', 3: '工作动态' })
 */
export const filterStatus = (type, obj, defaultVal = '暂无') => {
  // 只寻找对象自身的属性(不包括原型链)。 不然会返回undefined
  if (obj.hasOwnProperty(type)) {
    return obj[type]
  } else {
    return defaultVal
  }
}

/**
 * 节流函数
 * @param {*} func 节流执行函数
 * @param {*} wait 等待时间
 * @param {*} options { leading:false 表示禁用第一次执行 , trailing:false 表示禁用停止触发的回调 }
 */
export const throttle = (func, wait, options) => {
  var timeout, context, args, result
  var previous = 0
  if (!options) options = {}

  var later = function () {
    previous = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout) context = args = null
  }

  var throttled = function () {
    var now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
  }
  return throttled
}

/**
 * 防抖函数
 * @param {*} fn 防抖执行函数
 * @param {*} delay 等待时间
 * @param {String} value 传入的参数
 * @param {*} immediate  是否立即执行  true:输入第一次`就执行  false:输入完后才执行
 *
 * @returns
 */
export const debounce = (function () {
  let timer = 0
  let lastTimer = 0
  return function (fn, delay = 300, value = null, immediate = false) {
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate) {
      // 立即执行
      let callNow = !timer
      timer = setTimeout(() => {
        if (lastTimer !== timer) {
          timer = 0
          lastTimer = 0
          fn(value)
        }
      }, delay)
      if (callNow) {
        lastTimer = timer
        fn(value)
      }
    } else {
      // 非立即执行
      timer = setTimeout(() => {
        fn(value)
        timer = 0
      }, delay)
    }
  }
})()

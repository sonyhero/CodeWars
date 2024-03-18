Promise.prototype.myAll = function (promises) {
  return new Promise((res, rej) => {
    const results = []
    let doneCount = 0
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(result => {
        results[i] = result
        doneCount++
        if (doneCount === promises.length) {
          res(results)
        }
      }).catch(rej)
    }
  })
}

const promise1 = new Promise(resolve => {
  setTimeout(
    ()=>{
      console.log('1', 1)
      resolve(1)
    }
    , 1000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(
    ()=>{
      console.log('2', 2)
      reject(2)
    }
    , 4000)
})

Promise.prototype.myAll([promise1, promise2]).then((res)=>{
  console.log(res)
})
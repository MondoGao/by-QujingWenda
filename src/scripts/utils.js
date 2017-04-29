/**
 * 处理 Promise 失败函数
 * @param err
 */
export const promiseCatch = err => {
  alert('网络有问题！请刷新重试')
  console.log(err)
}
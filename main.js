function hellodz() {
  return {
    sleep: sleep
  }
}
function sleep(long) {
  var start = Date.now()
  while (Date.now() - start < long) {}
  console.log('finish!')
}
module.exports = hellodz()

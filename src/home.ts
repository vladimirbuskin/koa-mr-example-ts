import * as Koa from 'koa-mr'
const app = new Koa()

app.get('/', function (ctx) {
  ctx.body = 'home'
})

// app.get('/slow', async function () {
//   var p = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000)
//   })
//   await p
//   this.body = 'slow'
// })

export default app
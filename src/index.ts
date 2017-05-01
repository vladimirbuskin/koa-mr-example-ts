import * as Koa from 'koa-mr'

import users from './users'
import home from './home'

const app = new Koa()

app.mount('/', home)
app.mount('/users', users)

app.listen(3000)
console.log('listen port 3000')
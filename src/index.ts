import { Hono } from 'hono'

const app = new Hono()
// c is an obejct that have request, response
async function authMiddleware(c:any, next : any) {
  if(c.req.headers("Authorization")){
    // do the logic
    next()
  }
  else{
    return c.text("you dont have access")
  }
  
}

app.post('/',authMiddleware, async (c) => {
  const body = await c.req.json()
  const headers = c.req.header("Authorization")
  const param = c.req.query("param")

  console.log(body);
  console.log(headers);
  console.log(param);

  return c.text('Hello Hono!')
})

export default app

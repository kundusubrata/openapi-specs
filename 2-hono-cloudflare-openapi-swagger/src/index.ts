import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoute, } from './route'
import { swaggerUI } from '@hono/swagger-ui'

const app = new OpenAPIHono()


app.get('/', (c) => {
  return c.text('Service is running!')
})


app.openapi(getRoute, (c) => {
  const { id } = c.req.valid('param')
  return c.json({
    id,
    age: 20,
    name: 'Subrata Kundu',
  })
})

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
})

app.get('/ui', swaggerUI({ url: '/doc' }))

export default app

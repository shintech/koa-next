const faker = require('faker')

const format = ({ title, data }) => ({
  title: `${title.charAt(0).toUpperCase()}${title.slice(1)}!!`,
  data
})

module.exports = {
  fetch: ctx => {
    ctx.status = 200
    ctx.set('Content-Type', 'application/json')
    ctx.body = format({
      data: faker.company.bs(),
      title: faker.company.bsBuzz()
    })
  }
}

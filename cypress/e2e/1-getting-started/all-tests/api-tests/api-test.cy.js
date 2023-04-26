import Chance from 'chance'
describe('api-test', () => {

  let testingData =[
    {
      description: "Max values",
      requestData: {
        name: Chance().string({lenght: 100}),
        job: Chance().string({lenght: 100})
      }
    },
    {
      description: "Min values",
      requestData: {
        name: Chance().string({lenght: 1}),
        job: Chance().string({lenght: 1})
      }
    }
  ]

  testingData.forEach(({description, requestData}) => {
    it(`Positive: create user ${description}`, () => {
        cy.request('POST', '/api/users', requestData).then(response => {
          expect(response.status).to.eq(201)
          expect(response.body).to.have.property("name", requestData.name)
          expect(response.body).to.have.property("job", requestData.job)
      })
    })
  })

  it('Positive: create user', () => {
    cy.fixture("user").then(user => {
      cy.request('POST', '/api/users', user).then(response => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property("name", user.name)
        expect(response.body).to.have.property("job", user.job)
      })
    })
  })

  it('Negative: POST request - login unsuccessful', () => {
    cy.request({method: 'POST', url: '/api/login', failOnStatusCode: false, body:
    {
      "email": "peter@kvalen"
    }}).then(response => {
      expect(response.status).to.eq(400)
    })
  })
})
	
describe("Testing protected routes", () => {
    it('test1',() => {
      cy.request("http://automationpractice.pl/index.php?controller=authentication&back=my-account", {
        email: "koseters@gmail.com",
        password: "qwerty1234",
      }).then((r) => {
        window.localStorage.setItem("token", r.body.token)
      })
    })
  })
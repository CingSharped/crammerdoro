const request = require("supertest");
const app = require("../app");

describe("API endpoints", () => {
  let API;
  const port = 5000;

  beforeAll(() => {
    api = app.listen(port, () => {
      console.log(`Test server running on port: ${port}`);
    });
  });

  afterAll((done) => {
    console.log("Test sever gracefully stopping");
    api.close(done);
  });


  it('responds to GET / with status 200', (done) => {
    request(api).get('/').expect(200, done)
  })

  it('responds to GET /flashcards/:_id with 200', (done) => {
    request(api).get("/flashcards/6474a1c91cdd56c12d8b9607").expect(200, done);
  })
});

const request = require("supertest");
const app = require("../app");

describe("API endpoints", () => {
  let API;
  const port = 3000;

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

  it('responds to GET /flashcards/:_id with wrong user _id with 400 server error', async () => {
    const response = await request(api).get("/flashcards/123456")
    expect(response.status).toBe(400);
  })

  it("responds to GET /reviews/:_id with wrong user _id with 400 server error", (done) => {
    request(api).get("/reviews/123456").expect(400, done);
  });
});

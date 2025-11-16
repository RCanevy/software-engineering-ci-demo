// Import Supertest to make HTTP requests to app
const request = require("supertest");

// Import the Express app (not the server)
const app = require("../index");

// Group tests together
describe("API Tests", () => {
  
  // Test the "/" endpoint
  it("GET / should return status ok", async () => {
    const res = await request(app).get("/");   // Make GET request
    expect(res.body.status).toBe("ok");        // Assert response value
  });

  // Test the "/hello" endpoint
  it("GET /hello should greet the user", async () => {
    const res = await request(app).get("/hello?name=John");
    expect(res.body.message).toBe("Hello John");
  });

});
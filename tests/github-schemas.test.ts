import assert from "node:assert";
import test from "node:test";
import { validateGraphQLResponse, validateRestRepo, validateRestUser } from "../src/lib/github/schemas";

test("validateGraphQLResponse correctly validates valid GraphQL payload", () => {
  const valid = {
    data: {
      user: {
        login: "MTaufikIqball00",
        name: "M Taufik Iqbal",
        pinnedItems: {
          nodes: [
            {
              name: "AutomatedGraph",
              description: "GraphRAG platform",
              stargazerCount: 2,
            },
          ],
        },
      },
    },
  };

  assert.strictEqual(validateGraphQLResponse(valid), true);
});

test("validateGraphQLResponse identifies error payloads as valid format", () => {
  const withErrors = {
    errors: [{ message: "API rate limit exceeded" }],
  };

  assert.strictEqual(validateGraphQLResponse(withErrors), true);
});

test("validateGraphQLResponse rejects invalid non-object or malformed responses", () => {
  assert.strictEqual(validateGraphQLResponse(null), false);
  assert.strictEqual(validateGraphQLResponse(123), false);
  assert.strictEqual(validateGraphQLResponse("invalid string"), false);
  assert.strictEqual(validateGraphQLResponse({ data: {} }), false);
  assert.strictEqual(validateGraphQLResponse({ data: { user: { login: 123 } } }), false);
});

test("validateRestRepo correctly validates GitHub REST repository objects", () => {
  const validRepo = {
    name: "Medchain",
    html_url: "https://github.com/MTaufikIqball00/Medchain",
    stargazers_count: 2,
    forks_count: 0,
    language: "TypeScript",
  };

  assert.strictEqual(validateRestRepo(validRepo), true);
  assert.strictEqual(validateRestRepo({ name: "Incomplete" }), false);
  assert.strictEqual(validateRestRepo(null), false);
});

test("validateRestUser correctly validates GitHub REST user objects", () => {
  const validUser = {
    login: "MTaufikIqball00",
    id: 110665394,
    avatar_url: "https://avatars.githubusercontent.com/u/110665394?v=4",
    public_repos: 39,
  };

  assert.strictEqual(validateRestUser(validUser), true);
  assert.strictEqual(validateRestUser({ login: "Incomplete" }), false);
  assert.strictEqual(validateRestUser(null), false);
});

# Task

Add a new method to the `Class` class that performs a GET request to the `/posts/2` API.

## Requirements

### Implement:
1. **Unit Tests** for the new method:
   - Mock the API to handle both successful and error responses.
2. **Integration Tests**:
   - Use the real API endpoint and validate the response.

### Update:
1. **`env.json`**:
   - Add a new field for test verification, e.g., `EXPECTED_ID_TEST_2`.
2. **GitHub Actions Workflow** (`.github/workflows/actions.yaml`):
   - Add support for a new input parameter `EXPECTED_ID_TEST_2` to update its value in `env.json`.

### Submit:
- Push the project to a **public GitHub repository** and ensure that:
  - All changes are committed.
  - The workflow runs successfully from GitHub Actions.

Good luck with the assignment!
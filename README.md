
# HR Management System Test Automation

## Project Overview

This project focuses on test automation for the HR Management System, covering various scenarios related to employee and team management. The tests are implemented using Playwright, a Node.js library for browser automation.

## Authors

- Mohammed Saber BELLAZIRI
- Bouthayna ATIK
- Theo CANARIO

## Requirements

Make sure you have the following tools installed before running the tests:

- [Node.js]: The JavaScript runtime.
- [npm]: The Node.js package manager.
- [Playwright]: A Node library to automate browsers.

## Project Structure

- `packages/tests/test-scripts`: Contains the test scripts written using Playwright.
- `packages/tests/page-objects`: Contains Page Object Model (POM) classes for better organization of test logic.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/msaber69/softwaretesting.git
   ```

2. Install dependencies:

   ```bash
   cd softwaretesting
   npm install
   ```

## Running Tests

Use the following command to run the tests:

```bash
npx playwright test packages/tests/test-scripts/employeeTests.spec.js

npx playwright test packages/tests/test-scripts/teamTests.spec.js

```


## Test Scenarios

1. **Employees Section Tests:**
   - Create a new employee.
   - Modify an existing employee's information.
   - Delete an employee.

2. **Teams Section Tests:**
   - Create a new team.
   - View team members.
   - Delete a team.
   - Handle server error when deleting a team with employees.
   - Promote an employee to a manager.


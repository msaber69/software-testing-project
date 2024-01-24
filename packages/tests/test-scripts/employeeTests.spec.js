import { test, expect } from '@playwright/test';
import { EmployeePage } from '../page-objects/EmployeePage';

test('Employees Section Tests', async ({ page }) => {
  const employeePage = new EmployeePage(page);

  // Create a new employee
  await employeePage.navigateToAddEmployee();
  await employeePage.addEmployee(
    '123456',
    'test@company.com',
    '123 Main St',
    'City123',
    '-123',
    '2030-01-01',
    '456'
  );

  // Modify the employee's information
  await employeePage.modifyEmployee('updatedName', 'updated@test.com');

  // Delete the employee
  await employeePage.deleteEmployee('updated@test.com');

  // Verify the deletion by checking if the employee's name and email do not appear
  const deletedEmployeeNameCount = await page.locator(`text="updated@test.com"`).count();
  expect(deletedEmployeeNameCount).toBe(0);
});

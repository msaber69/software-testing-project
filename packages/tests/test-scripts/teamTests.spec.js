import { test, expect } from '@playwright/test';
import { TeamPage } from '../page-objects/TeamPage'; 

test('Teams Section Tests', async ({ page }) => {
  const teamPage = new TeamPage(page);

  // Create a new team with updated .fill() calls
  await teamPage.createNewTeam('Team123');

  // List Teams and check if you can view members of a team
  await teamPage.viewTeamMembers('Team123');

  // Test functionality to delete a team
  await teamPage.deleteTeam('Team123');

  // Test server error 500 when deleting a team with employees
  await teamPage.createNewTeam('TeamWithEmployees');
  const teamWithEmployeesRow = await teamPage.page.getByRole('row', { name: 'TeamWithEmployees' });

  // Add an employee to the team
  await teamPage.addEmployeeToTeam('TeamWithEmployees', 'employee@test.com');

  // Attempt to delete the team with employees
  await teamPage.deleteTeam('TeamWithEmployees');
  // Check for server error 500

  // Promote an employee as a manager
  await this.page.getByRole('link', { name: 'Home' }).click();
  await this.page.getByRole('link', { name: 'List Employees' }).click();
  await this.page.getByRole('link', { name: 'Edit' }).first().click();
  await this.page.getByRole('link', { name: 'Promote as manager' }).click();
  await this.page.getByRole('button', { name: 'Proceed' }).click();
});

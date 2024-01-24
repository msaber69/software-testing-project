// Import statements for required modules
export class TeamPage {
    constructor(page) {
      this.page = page;
    }
  
    async navigateToCreateNewTeam() {
      await this.page.getByRole('link', { name: 'Home' }).click();
      await this.page.getByRole('link', { name: 'Create new team' }).click();
    }
  
    async createNewTeam(teamName) {
      await this.navigateToCreateNewTeam();
      await this.page.getByPlaceholder('Name').click();
      await this.page.getByPlaceholder('Name').fill(teamName);
      await this.page.getByRole('button', { name: 'Add' }).click();
    }
  
    async viewTeamMembers(teamName) {
      await this.navigateToCreateNewTeam();
      await this.page.getByRole('link', { name: 'List Teams' }).click();
      const teamRow = await this.page.getByRole('row', { name: teamName });
      await teamRow.getByRole('link', { name: 'View members' }).click();
    }
  
    async deleteTeam(teamName) {
      await this.navigateToCreateNewTeam();
      await this.page.getByRole('link', { name: 'List Teams' }).click();
      const teamRow = await this.page.getByRole('row', { name: teamName });
      await teamRow.getByRole('link', { name: 'Delete' }).click();
    }
  
    async addEmployeeToTeam(teamName, employeeEmail) {
      await this.page.getByRole('link', { name: 'Home' }).click();
      await this.page.getByRole('link', { name: 'List Teams' }).click();
      const teamRow = await this.page.getByRole('row', { name: teamName });
      await teamRow.getByRole('link', { name: 'View members' }).click();
      await this.page.getByRole('link', { name: 'Add to team' }).click();
      await this.page.getByLabel('Employee').selectOption(employeeEmail);
      await this.page.getByRole('button', { name: 'Add' }).click();
    }
  
  }
  
// Import statements for required modules
export class EmployeePage {
    constructor(page) {
      this.page = page;
    }
  
    // Define methods for interacting with the Employee page
    async navigateToAddEmployee() {
      await this.page.goto('https://j.hr.dmerej.info/');
    }
  
    async addEmployee(name, email, address, city, zipCode, hiringDate, jobTitle) {
      await this.page.getByRole('link', { name: 'Home' }).click();
      await this.page.getByRole('link', { name: 'Add new employee' }).click();
      await this.page.getByPlaceholder('Name').click();
      await this.page.getByPlaceholder('Name').fill(name); // Employee's name can't be a number
      await this.page.locator('div').filter({ hasText: 'Email' }).click();
      await this.page.getByPlaceholder('Email').click();
      await this.page.getByPlaceholder('Email').fill(email); // Valid email input
      await this.page.locator('#id_address_line1').click();
      await this.page.locator('#id_address_line1').fill(address); // Address can't contain only numbers
      await this.page.locator('#id_address_line2').click();
      await this.page.locator('#id_address_line2').fill('Apt 456');
      await this.page.locator('div').filter({ hasText: 'City' }).click();
      await this.page.getByPlaceholder('City').click();
      await this.page.getByPlaceholder('City').fill(city); // City can't be a number
      await this.page.getByPlaceholder('Zip code').click();
      await this.page.getByPlaceholder('Zip code').fill(zipCode); // ZIP code can't be negative
      await this.page.getByPlaceholder('Hiring date').press('ArrowLeft');
      await this.page.getByPlaceholder('Hiring date').press('ArrowLeft');
      await this.page.getByPlaceholder('Hiring date').fill(hiringDate); // Hiring date can't be in the future
      await this.page.getByPlaceholder('Job title').click();
      await this.page.getByPlaceholder('Job title').fill(jobTitle); // Job title can't be a number
      await this.page.getByRole('button', { name: 'Add' }).click();
    }
  
    async modifyEmployee(name, email) {
      await this.page.getByRole('link', { name: 'Home' }).click();
      await this.page.getByRole('link', { name: 'List Employees' }).click();
      await this.page.getByRole('link', { name: 'Edit' }).first().click();
      await this.page.getByRole('link', { name: 'Update basic info' }).click();
      await this.page.getByPlaceholder('Name').click();
      await this.page.getByPlaceholder('Name').fill(name);
      await this.page.getByPlaceholder('Email').click();
      await this.page.getByPlaceholder('Email').fill(email);
      await this.page.getByRole('button', { name: 'Update' }).click();
    }
  
    async deleteEmployee(email) {
        await this.page.getByRole('link', { name: 'Home' }).click();
        await this.page.getByRole('link', { name: 'List Employees' }).click();
    
        // Locate the employee row with the specified email
        const employeeRow = await this.page.locator(`//td[text()="${email}"]/parent::tr`);
        
        // Click the delete link for the located employee
        await employeeRow.getByRole('link', { name: 'Delete' }).click();
    
        // Confirm the deletion
        await this.page.getByRole('button', { name: 'Proceed' }).click();
    }
    
  
  }
  
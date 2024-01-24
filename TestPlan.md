

# Test Description

## Overview
This document outlines the test plan for verifying the functionality and reliability of the "Employees" and "Teams" sections of the 'HR DB' website accessible at https://j.hr.dmerej.info.

## Test Steps

### Employees Section

1. **Add New Employees & List Employees:**  
      *failed tests ❌*
   - Emplyee's name can be a number.
   - Adress can contain only numbers.
   - ZIP code can be negatif or nul.
   - Can't modify hiring date after creating the employee.
   - Job title can be a number.
   - City can be a number.
   - Hiring date can be in the futur (depends if the website is supposed to offer this functionality of adding hired employees starting working in the futur).
   - Fields content can be symbols (< > / !..) or sql/code commands.
   - Promote as manager button still appear even if the user is already a manager.
   - Employee sucessfully created even if day-month input is over 30 -no warning-.
   - Employee's name and email does not appear when deleting an employee.
   - Can create multiple employees with the same exact infos.

      *successed tests ✅*
   - Created an employee successfully.
   - All fields are required when creating a new employee.
   - Zip code can't be a large number.
   - Zip code can't contain symbols.
   - Email input should be valid.
   - Editing employee information succesful.
   - Deleting a user succesful.
   - Promoting an employee as a manager successful.
   - Adding an employee to a team successful.
   - 

### Teams Section

2. **List Teams & Create New Team:**
      *failed tests ❌*
   - Server erreur 500 when deleting a team with employees (no empty team).
   - An employee can't be in multiple teams at the same time.
   - Check if you can view members of a team.
   - Test functionality to edit or delete a team.
   - Can't undo promoting an employee as a manager.

      *successed tests ✅*
   - A team can contain multiple managers.
   - 




# Tasktracker - Part 2

Design Choices:

1. User will see dropdown to select his manager from existing users when he registers. User can register without selecting the manager also, he can add manager later.  User can add/change the manager by going to Edit Account Page.

2. If User is Deleted,tasks created by that user will not be deleted. user_id in task will be set to null. On tasks show page, Created By will be displayed as "Deleted User" for such tasks.

3. Since User name can be same , AssignedTo Dropdown for tasks will refer to unique email of User's Underlings (Email has unique constraint).

4. If User don't have Underlings, AssignedTo Dropdown will be empty. User can create task but assigned_to will be set as null in database.

5. If user is deleted , Assigned_To Field for tasks assigned to that user will be displayed as "Not Assigned" on task index page and show Page.

6. If a user tries to visit tasks index page without login, he will be able to see existing tasks, but will not see options to create, modify or delete tasks.

7. User can manually add/Edit timeblocks on Task Show Page Or can use Start/Stop Button on List Task Page. 

8. If user logins with email "admin@gmail.com" , he will see additional button to list all users. Admin can view all users and delete any user.

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix

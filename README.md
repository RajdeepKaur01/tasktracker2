# Tasktracker

Assumptions:
1. If User is Deleted,tasks created by that user will not be deleted. user_id in task will be set to null. On tasks show page, Created By will be displayed as "Deleted User" for such tasks.

2. Since User name can be same , AssignedTo Dropdown for tasks will refer to unique email of all users. Email has unique constraint.

3. If user is deleted , Assigned_To Field for tasks assigned to that user will be displayed as "Reassign(User Deleted)" on task index page and show Page.

4. If a user tries to visit tasks index page without login, he will be able to see existing tasks, but will not see options to create, modify or delete tasks.

5. If user logins with email "admin@gmail.com" , he will see additional button to list all users. Admin can view all users and delete any user.

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

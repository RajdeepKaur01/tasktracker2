defmodule Tasktracker.Repo.Migrations.RemoveWorktime do
  use Ecto.Migration

  def change do
    alter table(:tasks) do
      remove :worktime
    end
  end
end

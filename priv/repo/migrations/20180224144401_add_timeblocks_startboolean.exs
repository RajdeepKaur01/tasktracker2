defmodule Tasktracker.Repo.Migrations.AddTimeblocksStartboolean do
  use Ecto.Migration

  def change do
    alter table(:timeblocks) do
      add :start, :boolean, default: false
    end
  end
end

defmodule Tasktracker.Repo.Migrations.ChangeUtcNaive do
  use Ecto.Migration

  def change do
    alter table(:timeblocks) do
      modify :start_time, :naive_datetime
      modify :end_time, :naive_datetime
    end
  end
end

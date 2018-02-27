defmodule Tasktracker.Repo.Migrations.TimeConstraint do
  use Ecto.Migration

  def change do
    create constraint("timeblocks", :end_time_must_be_greater, check: "start_time <= end_time")
  end
end

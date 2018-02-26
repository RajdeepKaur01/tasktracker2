defmodule Tasktracker.Tracker.Timeblocks do
  use Ecto.Schema
  import Ecto.Changeset
  alias Tasktracker.Tracker.Timeblocks


  schema "timeblocks" do
    field :end_time, :naive_datetime
    field :start_time, :naive_datetime
    field :start, :boolean, default: false
    belongs_to :task, Tasktracker.Tracker.Task

    timestamps()
  end

  @doc false
  def changeset(%Timeblocks{} = timeblocks, attrs) do
    timeblocks
    |> cast(attrs, [:start_time, :end_time, :task_id, :start])
    |> validate_required([:start_time, :task_id, :end_time, :start])
  end
end

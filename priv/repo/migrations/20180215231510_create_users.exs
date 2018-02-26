defmodule Tasktracker.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :email, :string, null: false
      add :name, :string, null: false
      add :manager, references(:users, on_delete: :nothing)

      timestamps()
    end
    create unique_index(:users, [:email])
    create index(:users, [:manager])
  end
end

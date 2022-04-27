class AddDeleteAtToResume < ActiveRecord::Migration[6.1]
  def change
    add_column :resumes, :deleted_at, :datetime
  end
end

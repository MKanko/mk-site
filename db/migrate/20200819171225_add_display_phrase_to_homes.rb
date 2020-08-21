class AddDisplayPhraseToHomes < ActiveRecord::Migration[6.0]
  def change
    add_column :homes, :display_phrases, :string, array: true, default: []
  end
end



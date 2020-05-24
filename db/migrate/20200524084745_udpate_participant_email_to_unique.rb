class UdpateParticipantEmailToUnique < ActiveRecord::Migration[6.0]
  def change
    change_column :participants, :email, :string, unique: true
  end
end

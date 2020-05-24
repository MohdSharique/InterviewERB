class Participant < ApplicationRecord
    has_many :sessions
    has_many :interviews, through: :sessions, dependent: :delete_all
end

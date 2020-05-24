class Interview < ApplicationRecord
    has_many :sessions, dependent: :destroy
    has_many :participants, through: :sessions
end

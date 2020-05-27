class Interview < ApplicationRecord
    has_many :sessions, dependent: :destroy
    has_many :participants, through: :sessions
    has_attached_file :resume

    validates_attachment :resume, presence: true,
    content_type: { content_type: ["application/pdf"] }
end

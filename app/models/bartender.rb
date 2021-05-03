class Bartender < ApplicationRecord
  has_secure_password
  has_many :jobs, dependent: :delete_all

  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :intro, presence: true
  validates :bio, presence: true
  validates :skills, presence: true
  validates :rate, presence: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end

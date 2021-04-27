class Bartender < ApplicationRecord
  has_secure_password
  has_and_belongs_to_many :jobs

  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :category, presence: true
  validates :intro, presence: true
  validates :bio, presence: true 
  validates :skills, presence: true
  validates :rate, presence: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end

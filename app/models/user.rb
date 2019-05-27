class User < ApplicationRecord
  ROLES = [
    "ADMIN",
    "USER"
  ]
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable

  attr_accessor :login

  validates :username, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true

  validates :role, presence: true, inclusion: {in: ROLES }

  before_validation :load_defaults

  def load_defaults
    if self.new_record?
      self.role = "USER" if self.role.nil?
    end

    self.first_name = first_name.try(:upcase)
    self.last_name  = last_name.try(:upcase)
  end

  def admin?
    role == "ADMIN"
  end

  def to_s
    email
  end

  def full_name
    "#{last_name}, #{first_name}"
  end

  def login=(login)
    @login = login
  end

  def login
    @login || self.username || self.email
  end

  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["lower(username) = :value OR lower(email) = :value", {:value => login.downcase }]).first
    else
      if conditions[:username].nil?
        where(conditions).first
      else
        where(username: conditions[:username]).first
      end
    end    
  end
end

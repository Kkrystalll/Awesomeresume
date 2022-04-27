class Order < ApplicationRecord
  include Slugable
  

  belongs_to :resume
  belongs_to :user


  
end

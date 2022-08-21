import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, ForeignKey, Integer, Unicode
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy_imageattach.entity import Image, image_attachment

engine = sqlalchemy.create_engine(
  "mariadb+mariadbconnector://bingo_game:bingogn@127.0.0.1:3306/jogo_dobingo")


Base = declarative_base()

class Usuarios(Base):
  __tablename__ = 'Users'
   id = Column(Integer, primary_key=True)
    name = Column(Unicode, nullable=False)
    picture = image_attachment('UserPicture')
    
  # id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True)
  # name = sqlalchemy.Column(sqlalchemy.String(length=100))
  # email = sqlalchemy.Column(sqlalchemy.String(length=100))
  # password = sqlalchemy.Column(sqlalchemy.String, default=True)

  def __init__(self, name, email, password):
    self.name = name
    self.email = email
    self.password = password #generate_password_hash(password)

    class UserPicture(Base, Image):
      """User picture model."""

      user_id = Column(Integer, ForeignKey('user.id'), primary_key=True)
      user = relationship('User')
      __tablename__ = 'user_picture'
  # def verify_password(self, pwd):
  #   return check_password_hash(self.password, pwd)
@property 
def  object_id ( self ): 
    a  =  self . id_a 
    b  =  self . id_b 
    return  ( a  +  b )  *  ( a  +  b )  +  a 
      
Base.metadata.create_all(engine)
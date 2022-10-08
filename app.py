from flask import Flask, render_template, request, redirect, Response, url_for
from flask_sqlalchemy  import SQLAlchemy
from flask_login import UserMixin 
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash
import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base

app = Flask(__name__)

# criando banco de dados
engine = sqlalchemy.create_engine(
  "mariadb+mariadbconnector://bingo_game:bingogn@127.0.0.1:3306/jogo_dobingo")
 
Base = declarative_base()
 
class Usuarios(Base):
    __tablename__ = 'Users'
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True)
    name = sqlalchemy.Column(sqlalchemy.String(length=100))
    email = sqlalchemy.Column(sqlalchemy.String(length=100), unique=True,nullable=False)
    password = sqlalchemy.Column(sqlalchemy.String(length=1000), default=True)

    def __init__(self, name, email, password):
      self.name = name
      self.email = email
      self.password = password #generate_password_hash

  
    # def verify_password(self, pwd):
    #   return check_password_hash(self.password, pwd)

class Cartela(Base):
    __tablename__ = 'user_cartelas'
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True)
    name = sqlalchemy.Column(sqlalchemy.String(length=100))

    def __init__(self, name):
      self.name = name
    
class Bolas_Cartela(Base):
    __tablename__ = 'bolas_cartelas'
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True)
    bolas1 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas2 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas3 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas4 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas5 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas6 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas7 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas8 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas9 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas10 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas11 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas12 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas13 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas14 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas15 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas16 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas17 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas18 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas19 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas20 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas21 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas22 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas23 = sqlalchemy.Column(sqlalchemy.String(length=100))
    bolas24 = sqlalchemy.Column(sqlalchemy.String(length=100))

    def __init__(self, bolas1, bolas2, bolas3, bolas4, bolas5, bolas6, bolas7, bolas8, bolas9, bolas10, bolas11, bolas12, bolas13, bolas14, bolas15, bolas16, bolas17, bolas18, bolas19, bolas20, bolas21, bolas22, bolas23, bolas24,):
      self.bolas1 = bolas1
      self.bolas2 = bolas2
      self.bolas3 = bolas3
      self.bolas4 = bolas4
      self.bolas5 = bolas5
      self.bolas6 = bolas6
      self.bolas7 = bolas7
      self.bolas8 = bolas8
      self.bolas9 = bolas9 
      self.bolas10 = bolas10
      self.bolas11 = bolas11
      self.bolas12 = bolas12 
      self.bolas13 = bolas13
      self.bolas14 = bolas14
      self.bolas15 = bolas15
      self.bolas16 = bolas16
      self.bolas17 = bolas17
      self.bolas18 = bolas18
      self.bolas19 = bolas19
      self.bolas20 = bolas20
      self.bolas21 = bolas21
      self.bolas22 = bolas22
      self.bolas23 = bolas23
      self.bolas24 = bolas24
   
Base.metadata.create_all(engine)



# Tela de cadastro
@app.route('/register', methods=['GET','POST'])
def register():
    # Se o metodo for igual a post pega as variaveis
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        pwd = request.form['password']
            
      # Criando uma sessao no bonco de dados 
        Session = sqlalchemy.orm.sessionmaker()
        Session.configure(bind=engine)
        Session = Session()
 
      # Adicionando variaveis no banco de dados 
        user = Usuarios(name, email, pwd)
        Session.add(user)
        Session.commit()
        
    return render_template('register.html')

# Tela de login
@app.route('/login', methods=['GET','POST'])
def login():
    return render_template('login.html')


# Tela Iniciarl
@app.route("/", methods=["GET","POST"])
def index():
    return render_template('index.html') 

@app.route("/cartela/", methods=["GET","POST"])
def cartela():
   # Se o metodo for igual a post pega as variaveis
    if request.method == 'POST':
      nome = request.form['name']
      # usuario = name

      # Criando uma sessao no bonco de dados 
      Session = sqlalchemy.orm.sessionmaker()
      Session.configure(bind=engine)
      Session = Session()

    # Adicionando variaveis no banco de dados 
      user = Cartela(nome)
      Session.add(user)
      Session.commit()     
    return render_template("/cartela.html",nome=nome.upper())


# Tela do jogo da velha 
@app.route("/jogodavelha/", methods=["GET","POST"])
def velha():
    usuarios1 = request.form.get('name')
    return render_template("/indexx.html",nome1=usuarios1.upper())


# Tela do narrador 
@app.route("/narrador/")
def narrador():
    return render_template('/narrador.html')


# iniciar Servidor
if __name__=='__main__':
    app.run(debug=True)
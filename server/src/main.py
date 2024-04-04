from flask import Flask, request, jsonify
from psycopg2 import connect 
from dotenv import load_dotenv
from os import environ

load_dotenv()


#Crendenciales de postgres
host =  environ.get('DB_HOST')
port = environ.get('DB_PORT')
dbname = environ.get('DB_DATABASE')
user = environ.get('DB_USER')
password = environ.get('DB_PASSWORD')

def get_connection():
    conn = connect(host=host, port=port, dbname=dbname, user=user, password=password)
    return conn 


app = Flask(__name__)

@app.route("/")
def home():
    connection = get_connection()
    cur = conn.cursor()
    
    result = cur.execute("SELECT * FROM empresas")
    print(result)

    return "Hola"



@app.route("/api")
def root():
    return "First Server in Python"


@app.post("/api/empresas")
def create_empresa():
    new_empresa = request.get_json()

    name = new_empresa['name']
    direccion = new_empresa['direccion']    
    nit = new_empresa['nit']
    phone = new_empresa['phone']
    email = new_empresa['email']

    print(name , direccion , nit , phone , email) 
    return jsonify(new_empresa)



if __name__ == "__main__":
    app.run(debug=True)


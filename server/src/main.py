from flask import Flask, request, jsonify
from psycopg2 import connect , extras
from dotenv import load_dotenv
from os import environ

load_dotenv()

#Crendenciales de postgres
host =  environ.get('DB_HOST')
port = environ.get('DB_PORT')
dbname = environ.get('DB_DATABASE')
username = environ.get('DB_USER')
password = environ.get('DB_PASSWORD')

#Funcion para conectar a la base de datos 
def get_connection():
    try:
        conn = connect(
            host=host,
            user=username,
            password=password,
            database = dbname,
            port=port
        )

        print("Conexion exitosa")
        return conn 
    
    except Exception as ex:
        print("Error de conexion")
        print(ex)


app = Flask(__name__)

# metodo post para guardar datos en la base de datos
@app.post("/api/empresas")
def create_empresa():
    new_empresa = request.get_json()

    nombre_empresa  = new_empresa['nombre_empresa']
    direccion = new_empresa['direccion']
    nit = new_empresa['nit']
    telefono = new_empresa['telefono']
    correo = new_empresa['correo']
    
    conn = get_connection()
    cur = conn.cursor()
    
    cur.execute("INSERT INTO empresas (nombre_empresa, direccion, nit, telefono, correo) VALUES (%s, %s, %s, %s, %s)", 
                (nombre_empresa, direccion, nit , telefono, correo) )
    
    conn.commit()
    cur.close()
 
    return 'Datos Gurardados'

# metodo get para obtener datos de la base de datos
@app.get("/api/empresas")
def get_empresas():
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    cur.execute("SELECT * FROM empresas")
    empresas = cur.fetchall()

    cur.close()
    return jsonify(empresas)

# metodo put para actualizar datos de la base de datos
@app.put('/api/empresas/<id>')
def update_empresa(id):

    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor) 
    empresa = request.get_json()

    
    nombre_empresa  = empresa['nombre_empresa']
    direccion =  empresa['direccion']
    nit =   empresa['nit']
    telefono =  empresa['telefono']
    correo =    empresa['correo']

    cur.execute("UPDATE empresas SET nombre_empresa=%s, direccion=%s, nit=%s, telefono=%s, correo=%s WHERE id=%s RETURNING * ",
                (nombre_empresa, direccion, nit, telefono, correo, id))

    update_empresa = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    if  update_empresa is None:
        return jsonify({'message': 'No se encontro la empresa'})   , 404  
    
    return jsonify(update_empresa)

#metodo get  para obter el dato da la id 
@app.get('/api/empresas/<id>')
def get_empresa(id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    cur.execute("SELECT * FROM empresas WHERE id=%s", (id,))
    empresa = cur.fetchone()

    cur.close()
    return jsonify(empresa)


# metodo delete para eliminar datos de la base de datos
@app.delete('/api/empresas/<id>')
def delete_empresa(id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    cur.execute("SELECT * FROM empresas WHERE id=%s", (id,))
    id_exist = cur.fetchall()

    if  len(id_exist) == 0:
        return jsonify({'message': 'No se encontro la empresa'}) , 404

    cur.execute("DELETE FROM empresas WHERE id=%s", (id, ))

    conn.commit()
    cur.close()
    conn.close()

    return 'Datos eliminados'


if __name__ == "__main__":
    app.run(debug=True)


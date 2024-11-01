import mysql.connector
from mysql.connector import Error

# Defina suas credenciais de conexão e informações do banco de dados
DB_HOST = "172.18.0.216"     # IP do host do banco de dados MySQL
DB_PORT = "3306"             # Porta padrão do MySQL
DB_NAME = "Miranha"          # Nome do banco de dados
DB_USER = "admin"            # Usuário do banco de dados
DB_PASSWORD = "admin123"     # Senha do banco de dados

conn = None

try:
    # Tente conectar ao banco de dados
    conn = mysql.connector.connect(
        host=DB_HOST,
        port=DB_PORT,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )

    if conn.is_connected():
        print("Conexão com o banco de dados realizada com sucesso!")

        # Crie um cursor para executar comandos SQL
        cursor = conn.cursor()

        # Exemplo de criação de tabela (caso ainda não exista)
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS exemplo (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(50),
                idade INT
            );
        """)

        # Exemplo de inserção de dados
        insert_query = """
            INSERT INTO exemplo (nome, idade) VALUES (%s, %s);
        """
        data = [
            ('Alice', 30),
            ('Bob', 25),
            ('Carol', 28)
        ]
        cursor.executemany(insert_query, data)
        conn.commit()  # Confirma as mudanças no banco de dados
        print("Dados inseridos com sucesso!")

except Error as e:
    print(f"Erro ao conectar ou inserir dados: {e}")

finally:
    if conn and conn.is_connected():
        cursor.close()
        conn.close()
        print("Conexão com o banco de dados encerrada.")

import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="scott",
  password="tiger"
)

print(mydb)

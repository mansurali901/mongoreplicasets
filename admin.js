admin = db.getSiblingDB("admin")// creation of the admin user
admin.createUser(
  {
    user: "nodeadmin",
    pwd: "NodePasswordKiT3",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)// let's authenticate to create the other user
db.getSiblingDB("admin").auth("nodeadmin", "NodePasswordKiT3" )// creation of the replica set admin user
db.getSiblingDB("admin").createUser(
  {
    "user" : "replicaAdmin",
    "pwd" : "NodePasswordKiT3",
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)

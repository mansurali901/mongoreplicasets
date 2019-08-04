# MongoDB Replicasets with Docker Containers 
Setup Mongo Replica Set on single node using docker container 
Setup brief 


        MasterNode
      ______|_______
     |              |
   Node-1         Node-2
   
#### To init Master using Docker container 
        mansoor@LARC-MANSOOR ~ $ ./masterInit --master
#### Init Worker Node 
        mansoor@LARC-MANSOOR ~ $ ./masterInit --slavesetup
#### Add workers to mongo Pool
        mansoor@LARC-MANSOOR ~ $ ./masterInit --member
#### Check Pool Status
        mansoor@LARC-MANSOOR ~ $ ./masterInit --status



<!-- Commands to run server on docker -->

<!-- Build docker image -->
docker build . -t "exp-manager-server:v1.0"

<!-- Commnad to run docker image -->
docker run -d -p 5000:5000 -v C:\Users\parik\projects\exp-manager\server\expenses.db:/app/expenses.db  exp-manager-server:v1.0
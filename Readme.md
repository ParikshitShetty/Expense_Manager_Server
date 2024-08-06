### The Frontned for this server is hosted on vercel and can be accessed using this link `https://expense-manager-frontend-wine.vercel.app/`

### Tech Stack used
- express.js
- node.js
- jwt
- sqlite3

<!-- Commands to run server on docker -->

### To run the app on docker please run the below commands
<!-- Build docker image -->
docker build . -t "exp-manager-server:v1.0"

<!-- Commnad to run docker image -->
docker run -d -p 5000:5000 -v app's root path\exp-manager\server\expenses.db:/app/expenses.db  exp-manager-server:v1.0

# Queue Api

### Restfull API for ticket queue management system

<br/>

### This api uses socket-io for real-time call management, using priority level criteria. The routes have been structured to allow viewing of the ticket called and the last calls

<br/>
<br/>

## Installation:

<br/>

<h3>Clone the repository: </h3>

```
git clone https://github.com/roberto-pg/queue-back.git
```

```
cd queue-back
```

```
yarn
```

```
touch .env
```

</br>

<h3>Enter static values into the .env file:</h3>

```
# Node js application port
PORT=<choose a port>

# Prisma URL
DATABASE_URL="postgresql://<username>:<password>@<container_name>:5432/<database_name>?schema=public"

# Postgres environment variables
DB_PASS_ROOT=<root password for bitnami postgres container>
DB_NAME=<database_name>
DB_USER=<username>
DB_PASS=<password>
```

<br/>
<br/>
<br/>

## Create Docker Containers:

<br/>
<h3>Run the command at the root of the project:</h3>

```
docker-compose up -d
```

```
docker ps -a
```

<br/>
<br/>

<br/>
<h3>If all goes well, there are now four docker containers running.</h3>
<h3>To verify, type in the terminal: </h3>

```
docker ps -a
```

<br/>
<h3>To run migrations you have to find out the address of the care-postgres container on the Docker network:</h3>

```
docker network ls
```

```
docker network inspect <network id>
```

<br/>
<h3>Change the DATABASE_URL in the .env file, replace the container_name with the IPv4 address of the postgres container. For example: "172.18.0.3".</h3>
<h3>Run Prisma Migrations at the root of the project:</h3>

```
yarn prisma migrate dev
```

<br/>
<br/>

## Okay, it's working!

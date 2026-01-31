
## FOR THE IMPATIENT:
clone the repository to a linux system, and simply type "./run.sh" which will build the docker containers and launch the application.

TODO: The run script does do a bunch of 'sudo' to make sure permissions work, so yeah, just do that.

This database is 'seeded' with test data.  pretty much that's it

to shut it down `sudo docker-compose stop`

The "Nuclear" Option (Wipe everything)

If you want to reset the database completely (wipe the seed data and start fresh), add the -v flag to remove the volumes.

`sudo docker-compose down -v`

## Issues?  Need logs?
 sudo docker-compose up --build  (don't detach `-d`)


## Quick Tour:

### Backend:
http://localhost:8080/api/users
http://localhost:8080/api/issues
http://localhost:8080/api/projects

### Frontend:

http://localhost:4200/signup  (not very functional)
http://localhost:4200/   (the main dashboard)



# CP_CRice Issue Tracker MVP

A full-stack issue tracking application built with **Spring Boot 3 (Java 17)**, **PostgreSQL**, and **Angular 20**. This project features server-side pagination, filtering, and real-time updates.

## 🛠 Prerequisites for dev build

Ensure you have the following installed on your Ubuntu system:
* **Java 17 JDK**
* **Maven 3.x**
* **Node.js 20+ & npm**
* **PostgreSQL 14+**
* **Angular CLI** (`npm install -g @angular/cli`)

---

## 🚀 Getting Started

### 1. Database Setup
The application expects a PostgreSQL database named `cp_crice_db`.
```bash
# Connect to Postgres
sudo -u postgres psql -d cp_crice_db

```

### 2. Backend Setup (Spring Boot)

1. Navigate to the backend folder:
```bash
cd backend

```


2. Build and run the application:
```bash
./mvnw clean spring-boot:run

```


*The backend will automatically create the database schema and seed initial test data via the `DataInitializer` class.*
*API will be available at: `http://localhost:8080/api*`

### 3. Frontend Setup (Angular)

1. Open a new terminal and navigate to the frontend folder:
```bash
cd frontend

```


2. Install dependencies:
```bash
npm install

```


3. Start the development server:
```bash
npm start

```


*The UI will be available at: `http://localhost:4200*`

---

## 📝 Features & Tech Stack

### Backend

* **Spring Data JPA**: Hibernate-managed PostgreSQL schema.
* **Criteria API/Specifications**: Advanced server-side filtering by Status, Priority, and Assignee.
* **Lombok**: Reduced boilerplate for Models and DTOs.
* **REST API**: Standardized JSON endpoints for CRUD operations.

### Frontend

* **Angular 19 Signals**: Modern, reactive state management.
* **Standalone Components**: Modular and lightweight architecture.
* **SCSS**: Structured and maintainable styling.  (not really)

### Developer

* **Michael (flipmcf)**
* **Sprint Duration**: 6-Hour MVP


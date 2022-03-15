# Infinit tech Task

Tasks:

    1. Simple user registration:
    - Username => character length should be 6 to more and required field.
    - Password => minimum 8 character and required field. - First name => required field. - Last name => required field.

    2. Simple login using registration credentials for user. Must use JWT Token to complete login.
    - Username => required field
    - Password => required field

    3. Simple customer registration (should be protected routes authenticated by JWT Token)
    - First name => required field
    - Last name => required field
    - Address => required field
    - Postcode => required field
    - Mobile => Length should be 10 to 12, only number allowed, required field

```
NODE_ENV = development
PORT = 5000
JWT_SECRET = abc123

DB_NAME = mydb
DB_USER = postgres
DB_PASSWORD = 1234
DB_HOST = 127.0.0.1
DB_DIALECT = postgres
```

### Install Dependencies

```
npm install

```

### Run

```
# Run (:5000)
npm run dev

```

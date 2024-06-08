# README.md

## CrewBot API

This is a simple Express.js API for managing crew members in different roles. The API provides two main endpoints: `/CrewBot` and `/user`.

The API is hosted at: [https://crewbotdummy.vercel.app/](https://crewbotdummy.vercel.app/)

### Setup

1. Clone the repository.
2. Run `npm install` to install all dependencies.
3. Run `node index.js` to start the server.

### Endpoints

#### 1. GET /CrewBot

This endpoint returns a list of random crew members from different roles.

**Parameters:**

- `numEntries` (required): The number of random crew members to return.

**Example:**

Request: `GET https://crewbotdummy.vercel.app/CrewBot?numEntries=5`

Response:
```json
[
  {
    "userid": "user1",
    "role": "Producer",
    "name": "John Doe"
  },
  ...
]
```


#### 2. GET /user

This endpoint returns the details of a specific user based on their role and user ID.

**Parameters:**

- `role` (required): The role of the user.
- `userId` (required): The ID of the user.

**Example:**

Request: `GET https://crewbotdummy.vercel.app/user?role=Producer&userId=michael.johnson@gmail.com`

Response:
```json
{
  "userid": "user1",
  "role": "Producer",
  "name": "John Doe"
}
```


**Error Responses:**

- If the role is not valid, it returns a 400 status code with the error message "Invalid role".
- If no data is found for the role, it returns a 404 status code with the error message "No data found for this role".
- If no user is found with the given ID for the role, it returns a 404 status code with the error message "No user found with this ID for the given role".

### Data

The data for the API is stored in `RoleWiseCrewData.json`. Each role has an array of users, and each user has a `userid`, `role`, and `name`.

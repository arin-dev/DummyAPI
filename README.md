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
  "Producer": [
            {
                "name": "Wei Zhang",
                "yoe": 8,
                "minRatePerDay": 700,
                "maxRatePerDay": 1050,
                "location": "Dubai",
                "preferred_because": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget."
            },
            {
                "name": "Michael Johnson",
                "yoe": 12,
                "minRatePerDay": 800,
                "maxRatePerDay": 1200,
                "location": "Dubai",
                "preferred_because": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget."
            }
        ]
}
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
    "name": "Michael Johnson",
    "userid": "michael.johnson@gmail.com",
    "crewType": "Film Crew",
    "roleJobTitle": "Producer",
    "services": [
        "Production Management",
        "Budgeting"
    ],
    "tags": [
        "Film",
        "Production",
        "Budgeting"
    ],
    "expertise": [
        "Project Management",
        "Budgeting",
        "Scheduling"
    ],
    "yoe": 12,
    "minRatePerDay": 800,
    "maxRatePerDay": 1200,
    "location": "Dubai"
}
```


**Error Responses:**

- If the role is not valid, it returns a 400 status code with the error message "Invalid role".
- If no data is found for the role, it returns a 404 status code with the error message "No data found for this role".
- If no user is found with the given ID for the role, it returns a 404 status code with the error message "No user found with this ID for the given role".

### Data

The data for the API is stored in `RoleWiseCrewData.json`. Each role is represented as a key in the JSON object, with its value being an array of users. Each user object includes properties such as `userid`, `name`, `crewType`, `roleJobTitle`, `services`, `tags`, `expertise`, `yoe`, `minRatePerDay`, `maxRatePerDay`, and `location`.

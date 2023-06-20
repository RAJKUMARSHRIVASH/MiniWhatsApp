# Mini Whatsapp

## `**Instructions**`

- Read the entire question carefully for at least 15 mins, understand it and then code it.
- Don’t jump directly into the code.
- Commit your code every hour with a proper commit message to your repository (we will monitor every commit)
- Use **Node, Express, MongoDB** for the backend.
- Use **HTML, CSS, JavaScript** for the frontend.
- Use **Socket.io** for real-time chat functionality.

---

## `**Problem Statement**`

- The goal is to create a real-time messaging application like WhatsApp that can support fast and reliable communication between users.
- The application will be built using modern web technologies such as **HTML, CSS, and JavaScript** for the frontend,  **NEM** as the backend.
- The application will use **Socket.io** to enable real-time communication between the server and clients.

---

## `**Features**`

The application will have the following features:

1. **User Authentication**: The application should have a user authentication system that ensures that only registered users can access the application. Users should be able to sign up and log in using their email and password.
2. **Contact Management**: The application should allow users to manage their contacts by adding, and removing users. Users should be able to view the list of their contacts and see their online/offline status.
3. **Real-Time Messaging**: The application should support real-time messaging, allowing users to send and receive messages instantly.
4. **Group Messaging**: The application should also support group messaging, allowing users to create and join groups. Users should be able to add and remove members from groups, and the application should support real-time messaging within the group.
5. **Notifications**: The application should notify users of new messages and group activities, even when the chat is not in focus.
6. **Search**: The application should allow users to search for other users and groups.

### `**Database Schema**`

The database schema for this application will be based on a NoSQL database such as MongoDB. The following collections will be created:

1. **Users Collection**: This collection will store user information, including the user's ID, name, email, password, profile picture, and contact list.
2. **Groups Collection**: This collection will store information about the groups created by users, including the group's ID, name, members, and messages.
3. **Messages Collection**: This collection will store all the messages sent by users. The collection will include the message's ID, sender ID, recipient ID, message content, timestamp, and any attachments.
4. **Contacts Collection**: This collection will store the relationship between users and their contacts. It will include the user's ID and the IDs of their contacts.

**Note : You have the freedom to modify the schema and relationships as you see fit. You are free to make your own decisions on any aspects that are not mentioned in the problem statement. You are free to experiment various designs for frontend, could also use Whatsapp design as a reference.**

---

## **`Submission`**

- Please submit deployed link and Github link of code.
- **Deploy backend**.
- Please double check if deployed version works or not (run deployed version on your laptop and then submit it).
- Any issues in deployed link, will be considered null and void.
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- Submit before deadline.

## **`Rubrics`**

- Code Structure
- Design Patterns
- Real time chat using Socket.io
- Backend API’s
- UI / UX
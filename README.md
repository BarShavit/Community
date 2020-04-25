# Community
Forum system, including a Java stateless server and Angular client.

The server expose a REST API and a SocketIO listener.<br/>
The SocketIO server broadcast updates to all client.<br/>
All the data is saved in MySQL, or any other DB that interface to JPA.

The system including managing several categories of forums.<br/>
The user can watch topics on a forum, publish a new topic or response to an existing one.<br/>
Also, there is a conversation system, like a basic whatsapp, that allows the user to communicate fast with other users.

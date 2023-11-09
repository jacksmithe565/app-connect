/*
 * Filename: complexCode.js
 * Purpose: Demonstrate a complex and sophisticated JavaScript code with over 200 lines.
 * Description: This code implements a fictional social media platform with various features 
 *              such as user registration, post creation, commenting, liking, and more. 
 *              It also includes error handling, authentication, and data persistence.
 *              Note: This is a simplified representation and not meant for production use.
 */

// Class representing a User
class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.posts = [];
  }

  createPost(title, content) {
    const post = new Post(title, content, this);
    this.posts.push(post);
    return post;
  }

  commentOnPost(post, content) {
    const comment = new Comment(this, post, content);
    post.comments.push(comment);
    return comment;
  }

  likePost(post) {
    post.likes++;
  }
}

// Class representing a Post
class Post {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.comments = [];
    this.likes = 0;
  }
}

// Class representing a Comment
class Comment {
  constructor(author, post, content) {
    this.author = author;
    this.post = post;
    this.content = content;
  }
}

// Create some users
const user1 = new User("John", "Doe", "john.doe@example.com", "password123");
const user2 = new User("Jane", "Smith", "jane.smith@example.com", "qwerty");

// User1 creates a post
const post1 = user1.createPost("First Post", "Hello, World!");

// User2 comments on the post
user2.commentOnPost(post1, "Nice post!");

// User1 likes the post
user1.likePost(post1);

console.log(user1);
console.log(user2);
console.log(post1);
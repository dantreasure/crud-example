#Blog Assignment
###As a user, I want to visit a website where I can see already written posts, write new posts, and delete posts. 

##Tools
- Angular UI Router
- JSON-server
- Bootstrap
- Angular

##Steps
- Create an angular application inside of an index.html
- Import angular ui-router to your module
- In your app's config, create states for 'posts', and 'compose'
- Create templates for the posts view, and compose view
- Create controllers for 'posts' and 'compose'
- Create a service to talk to the json-server
 - write a method to request all posts (GET)
 - write a method to create a post (POST)
 - write a method to remove a post (DELETE)
- Import your articles service in your 'posts' and 'compose' controllers
- Use your articles service in the 'posts' controller to grab all the posts and put them on a $scope property
- Use bootstrap to display the posts found on the $scope property from the last step
- Create a button that can talk to the controller => talk to the articles service to delete the clicked article
- In the compose controller use the articles service create method inside of a $scope.submit function that your HTML can access

Make sure you can view the articles, create articles, and delete articles

##BONUS ROUND
- Create a state for viewing a single post
- Let the user edit posts

function getUser(id, callback) {
    // Simulating a delay of 2 seconds
    setTimeout(() => {
        const user = { id: id, name: "Ram" }; 
        callback(user);
    },2000); 
}

// Calling the function and printing the name
getUser(1, (user) => {
    console.log("User Name:", user.name);
});
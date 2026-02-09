function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched"); 
        callback({ id: id,name:"Ram" });
    }, 2000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log("Posts fetched"); 
        callback(["post1","post2"]); 
    }, 2000);
}

function getComments(post, callback) {
    setTimeout(() => {
        console.log("Comments fetched"); 
        callback(["nice","good"]); 
    }, 2000);
}

// Callback Hell - Nested structure
getUser(1, (user) => {
    getPosts(user.id, (posts) => {
        getComments(posts[0], (comments) => {
            console.log("User:", user);
            console.log("Posts:", posts);
            console.log("Comments:", comments);
        });
    });
});
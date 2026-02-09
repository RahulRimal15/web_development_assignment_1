function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: id, name: "Ram" });
        }, 2000);
    });
}

function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 2000);
    });
}

function getComments(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Comments fetched");
            resolve(["nice", "good"]);
        }, 2000);
    });
}

// Chaining with .then()
getUser(1)
    .then((user) => {
        console.log("User:", user);
        return getPosts(user.id);
    })
    .then((posts) => {
        console.log("Posts:", posts);
        return getComments(posts[0]);
    })
    .then((comments) => {
        console.log("Comments:", comments);
    })
    .catch((error) => { 
        console.log("Error:", error);
    }); 
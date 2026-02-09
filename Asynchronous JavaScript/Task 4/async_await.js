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
async function showData() 
{ 
    try 
    {
        const user = await getUser(1);
        console.log("User fetched:", user);

        const posts = await getPosts(user.id);
        console.log("Posts fetched:", posts);

        const comments = await getComments(posts[0]);
        console.log("Comments fetched:", comments);
        
    } 
    catch (error) 
    {
        console.log("Error fetching data", error);
    }
}
showData();
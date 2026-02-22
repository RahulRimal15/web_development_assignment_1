const status = document.getElementById("status");
const postList = document.getElementById("postList");
async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const postList = document.getElementById("postList");
        data.forEach((post) => {
            const li = document.createElement("li");
            li.textContent = post.title + " - " + post.body;
            postList.appendChild(li);
        });
        const status = document.getElementById("status");
        status.style.display = "none";

    } catch (error) {
        const status = document.getElementById("status");
        status.textContent = "Failed to load data";
    }
}

fetchPosts();

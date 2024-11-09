// Simulate data fetching using Promises
function fetchUserProfile() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("User profile data"), 1000);
    });
}

function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Posts data"), 2000);
    });
}

function fetchComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5
                ? resolve("Comments data")
                : reject(new Error("Failed to fetch comments"));
        }, 1500);
    });
}

// Sequential data fetching using Promises
function fetchSequentially() {
    console.log("Running fetchSequentially...");
    fetchUserProfile()
        .then((user) => {
            console.log("User profile retrieved:", user);
            return fetchPosts();
        })
        .then((posts) => {
            console.log("Posts retrieved:", posts);
            return fetchComments();
        })
        .then((comments) => {
            console.log("Comments retrieved:", comments);
        })
        .catch((error) => {
            console.error("Error during sequential fetching:", error.message);
        });
}

// Parallel data fetching using Promise.all
function fetchInParallel() {
    console.log("\nRunning fetchInParallel...");
    Promise.all([fetchUserProfile(), fetchPosts(), fetchComments()])
        .then(([user, posts, comments]) => {
            console.log("User profile:", user);
            console.log("Posts:", posts);
            console.log("Comments:", comments);
        })
        .catch((error) => {
            console.error("Error during parallel fetching:", error.message);
        });
}

// Refactor sequential fetching with async/await
async function fetchSequentiallyWithAsyncAwait() {
    try {
        console.log("\nRunning fetchSequentiallyWithAsyncAwait...");
        const user = await fetchUserProfile();
        console.log("User profile retrieved:", user);

        const posts = await fetchPosts();
        console.log("Posts retrieved:", posts);

        const comments = await fetchComments();
        console.log("Comments retrieved:", comments);
    } catch (error) {
        console.error("Error during sequential fetching with async/await:", error.message);
    }
}

// Chaining async functions (getUserContent)
async function getUserContent() {
    try {
        console.log("\nRunning getUserContent...");
        
        console.log("Step 1: Fetching user profile...");
        const user = await fetchUserProfile();
        console.log("User profile retrieved:", user);

        console.log("Step 2: Fetching posts...");
        const posts = await fetchPosts();
        console.log("Posts retrieved:", posts);

        console.log("Step 3: Fetching comments...");
        const comments = await fetchComments();
        console.log("Comments retrieved:", comments);

        console.log("All data retrieved successfully!");
    } catch (error) {
        console.error("Error in getUserContent:", error.message);
    }
}

// Execute functions
fetchSequentially();
fetchInParallel();
fetchSequentiallyWithAsyncAwait();
getUserContent();
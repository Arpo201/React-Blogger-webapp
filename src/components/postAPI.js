export function PostAPI(postJson, author, content) {
    var post = postJson.id
    var URL = "https://fswd-wp.devnss.com/wp-json/wp/v2/comments"
    var blog = {post, author, content}
    fetch(URL, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log("new comment added")
    })
}
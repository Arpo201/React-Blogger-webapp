import axios from "axios"

export async function PostAPI(postJson, author, content) {
    var postID = postJson.id
    var URL = "https://fswd-wp.devnss.com/wp-json/wp/v2/comments"
    var param = {
        post: postID,
        author_name: author,
        content: content
    }
    var header = {
        "Content-Type": "application/json",
        Authorization: 'Basic ZnN3ZDpmc3dkLWNtcw=='
    }

    var addCommment = await axios.post(URL, param, {headers: header})
    return addCommment.data

    // fetch(URL, {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: 'Basic ZnN3ZDpmc3dkLWNtcw=='
    //     },
    //     body: JSON.stringify(param)
    // }).then((response) => {
    //     console.log("new comment added")
    //     console.log(response)
    // })
}
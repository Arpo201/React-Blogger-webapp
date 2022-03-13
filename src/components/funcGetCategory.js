// Category(3), Style(20), Runner(75), Classic(77), Life(78), Uncategorized(1)
export function getCategory(cateID, post) {
    if (cateID === 0) return post
    return post.filter(postID => postID.categories.includes(cateID))
}


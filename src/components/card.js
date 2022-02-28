import Parser from 'html-react-parser'
import { useState } from 'react'
import { Button, Card } from "react-bootstrap"
import {Link} from "react-router-dom"
import { ShowComment } from './comment'

export const ShowCart = ({post, cateList, authorList}) => {
    var title, modifiedDate, content, categories, authorName
    title = post.title.rendered
    modifiedDate = post.modified
    content = post.content.rendered
    categories = GetCategory(post.categories, cateList).join(", ")
    authorName = GetAuthor(post.author, authorList)

    const [commentList, setCommentList] = useState([])
    const [click, setClick] = useState(false)
    const [text, setText] = useState("")
    function postComment() {
        setCommentList([...commentList, text])
        setClick(false)
    }
    return (
        <>
            <Card border="secondary">
                <Card.Header style={{backgroundColor:"#253363", color: "#FFF", fontWeight: "bold", fontSize: "larger"}}>
                    {title}
                </Card.Header>
                <Card.Footer className="text-muted"><b>Categories: </b>{categories}</Card.Footer>
                <Card.Body bg="Light">
                    {Parser(content)}
                    <p className='modified'>Modified: {modifiedDate} by {authorName}</p>
                </Card.Body>
            </Card>
            <div style={{backgroundColor: "white", marginTop: "1vh"}}>
                <textarea className='commentArea' placeholder="What do you think?" onChange={(val) => setText(val.target.value)}></textarea>
                <Button onClick={() =>setClick(true)}>Comment</Button>
                {click?postComment():null}
            </div>
            <ShowComment commentList={commentList}></ShowComment>
        </>
    )
}

export const ShowShortCart = ({post, cateList, authorList}) => {
    var title, modifiedDate, excerpt, categories, authorName
    title = post.title.rendered
    modifiedDate = post.modified
    excerpt = post.excerpt.rendered
    categories = GetCategory(post.categories, cateList).join(", ")
    authorName = GetAuthor(post.author, authorList)

    return (
        <Card border="secondary">
            <Card.Header style={{backgroundColor:"#253363", color: "#FFF", fontWeight: "bold", fontSize: "larger"}}>
                {title}
            </Card.Header>
            <Card.Footer className="text-muted"><b>Categories: </b>{categories}</Card.Footer>
            <Card.Body bg="Light">
                {Parser(excerpt)}
                <p className='modified'>Modified: {modifiedDate} by {authorName}</p>
            </Card.Body>
            <Link to={{pathname : `/Post/${post.id}`}}>
                <Button style={{width:"100%"}}>Show</Button>
            </Link>
        </Card>
    )
}

function GetCategory(cateIDList, cateList) {
    var cateStr = cateIDList.map(id => cateList.filter(cateID => id === cateID.id))
    cateStr = cateStr.map(cateID => cateID[0].name)
    return cateStr
}

function GetAuthor(author, authorList) {
    var authorName = authorList.filter(authorID => author === authorID.id)
    authorName = authorName[0].name
    return authorName
}

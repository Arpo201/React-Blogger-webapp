import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowAuthorPage = () => {
    const [post, setPost] = useState([])
    const [user, setUser] = useState([])
    const GetPost = async () => {
        const apost = await axios.get('https://fswd-wp.devnss.com/wp-json/wp/v2/posts/')
        setPost(apost.data)
      }
    const GetUser = async () => {
        const user = await axios.get('https://fswd-wp.devnss.com/wp-json/wp/v2/users')
        setUser(user.data)
    }
    useEffect(
        () => {
            GetPost()
            GetUser()
        },
        [],
      )

    return (
        <>
            <Container>
                <Row  style={{justifyContent: "center"}}>
                {
                    user.map(person => {
                        return (
                            
                            <Col key={person.id} md={3} style={{ marginTop: 20 }}>
                                <Card.Header className="text-center" style={{backgroundColor:"#253363", color: "#FFF", fontWeight: "bold", fontSize: "larger"}}>
                                    {person.name}
                                </Card.Header>
                                <Card.Img variant="top" src={person.avatar_urls[96]} />
                                <Card.Body className="text-left" style={{backgroundColor: "white", textAlign: "center"}}>
                                    <h5>{post.filter(postID => postID.author === person.id).length} Posts</h5>
                                    <Link to={{pathname : `/Author/${person.id}`}}>
                                        <Button variant="outline-primary" style={{width:"90%", marginLeft: "5%", marginBottom: "3%"}}>Show posts</Button>
                                    </Link>
                                </Card.Body>
                            </Col>
                        )
                    })
                }
                </Row>
            </Container>
        </>
    );

}

export default ShowAuthorPage
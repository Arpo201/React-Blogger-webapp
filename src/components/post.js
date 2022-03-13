import { useEffect, useState } from "react"
import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ShowShortCart } from "./card"
import axios from "axios"
import { getCategory } from "./funcGetCategory"

export const ShowPost = () => {
    const [post, setPost] = useState([])
    const [cate, setCate] = useState([])
    const [user, setUser] = useState([])
    const [currentPost, setCurrentPost] = useState([])

    const GetPost = async () => {
      const post = await axios.get('https://fswd-wp.devnss.com/wp-json/wp/v2/posts')
      setPost(post.data)
      setCurrentPost(post.data)
    }
    const GetCategory = async () => {
      const cate = await axios.get('https://fswd-wp.devnss.com/wp-json/wp/v2/categories/')
      setCate(cate.data)
    }
  
    const GetUser = async () => {
      const user = await axios.get('https://fswd-wp.devnss.com/wp-json/wp/v2/users')
      setUser(user.data)
    }

    useEffect(
      () => {
          GetPost()
          GetCategory()
          GetUser()
      },
      [],
    )

    function GetTotalPost() {
    return (
      currentPost.map((value) => {
        return (
          <Col key={value.id} md={6} style={{ marginTop: 20}}>
            <ShowShortCart post={value} cateList={cate} authorList={user} />
          </Col>
        )
      })
    )
  }
  

    return (
      <> 
        <Container style={{backgroundColor:"#f0f0f0AA", paddingBottom: "1%", marginTop: "1%", borderRadius: 5}}>
          <Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="All">
              {/* // Category(3), Style(20), Runner(75), Classic(77), Life(78), Uncategorized(1) */}
              <Nav className="RowTab">
                <Col md={1} style={{padding: 0}}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link className="tab" eventKey="All" onClick={() => setCurrentPost(getCategory(0, post))}>All</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={1} style={{padding: 0}}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link className="tab" eventKey="Category" onClick={() => setCurrentPost(getCategory(3, post))}>Category</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={1} style={{padding: 0}}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link className="tab" eventKey="Style" onClick={() => setCurrentPost(getCategory(20, post))}>Style</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={1} style={{padding: 0}}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link className="tab" eventKey="Runner" onClick={() => setCurrentPost(getCategory(75, post))}>Runner</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={1} style={{padding: 0}}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link className="tab" eventKey="Classic" onClick={() => setCurrentPost(getCategory(77, post))}>Classic</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={1} style={{padding: 0}}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link className="tab" eventKey="Life" onClick={() => setCurrentPost(getCategory(78, post))}>Life</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={2} style={{padding: 0}}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link className="tab" eventKey="Uncategorized" onClick={() => setCurrentPost(getCategory(1, post))}>Uncategorized</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Nav>
            </Tab.Container>
              <GetTotalPost></GetTotalPost>
          </Row>
        </Container>
      </>
    )
}

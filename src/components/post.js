import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ShowShortCart } from "./card"
import axios from "axios"

export const ShowPost = () => {
    const [post, setPost] = useState([])
    const [cate, setCate] = useState([])
    const [user, setUser] = useState([])

    const GetPost = async () => {
      const post = await axios.get('https://fswd-wp.devnss.com/wp-json/wp/v2/posts')
      setPost(post.data)
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
      post.map((value) => {
        return (
          <Col key={value.id} md={12} style={{ marginTop: 20 }}>
            <ShowShortCart post={value} cateList={cate} authorList={user} />
          </Col>
        )
      })
    )
  }

    return (
      <> 
        <Container>
            <Row>
              <GetTotalPost></GetTotalPost>
            </Row>
        </Container>
      </>
    )
}

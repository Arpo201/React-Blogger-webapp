import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Container, Row, Col } from "react-bootstrap"
import { ShowShortCart } from "./card"

const ShowAuthorArticle = () => {
    const {id} = useParams()
    const [post, setPost] = useState([])
    const [cate, setCate] = useState([])
    const [user, setUser] = useState([])
    const [currentPost, setCurrentPost] = useState([])


    const GetPost = async () => {
        const apost = await axios.get('https://fswd-wp.devnss.com/wp-json/wp/v2/posts/')
        setPost(apost.data)
        setCurrentPost(apost.data)
      }
    const GetCategory = async () => {
        const cate = await axios.get('https://fswd-wp.devnss.com/wp-json/wp/v2/categories/')
        setCate(cate.data)
    }

    const GetUser = async () => {
        const user = await axios.get('https://fswd-wp.devnss.com/wp-json/wp/v2/users/')
        setUser(user.data)
    }

    useEffect(
        () => {
            const getResult = async () => {
              await GetPost()
              await GetCategory()
              await GetUser()
            }
            getResult()
        },
        []
      )

    function GetTotalPost() {
        
        return (
          currentPost.map((value) => {
              if (value.author === parseInt(id)) {
                return (
                    <Col key={value.id} md={6} style={{ marginTop: 20}}>
                      <ShowShortCart post={value} cateList={cate} authorList={user} />
                    </Col>
                  )
              }
          })
        )
    }

    if (post.length === 0 | cate.length === 0 | user.length === 0) return <div></div>
    return (
        <>
            <Container style={{backgroundColor:"#f0f0f0AA", paddingBottom: "1%", marginTop: "1%", borderRadius: 5}}>
                <Row>
                    <GetTotalPost></GetTotalPost>
                </Row>
            </Container>
        </>
    )
}


export default ShowAuthorArticle
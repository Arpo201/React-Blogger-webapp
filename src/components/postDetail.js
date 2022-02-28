import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ShowCart } from "./card"
import { Container, Col, Row } from "react-bootstrap"

export const ShowPostDetail = () => {
    const {id} = useParams()
    const [post, setPost] = useState({
        id: 383,
        modified: "2022-02-10T03:56:10",
        title: {
            "rendered": "Dolor distinctio et consectetur nam voluptatibus"
        },
        content: {
            "rendered": "<p>Quod nulla animi.</p>\n<div class=\"more-link-wrapper\"><a class=\"more-link\" href=\"https://fswd-wp.devnss.com/page5/\">Continue reading<span class=\"screen-reader-text\">Dolor distinctio et consectetur nam voluptatibus</span></a></div>\n",
            "protected": false
        },
        author: 2,
        categories: [3,77,75]
    })
    const [cate, setCate] = useState([])
    const [user, setUser] = useState([])

    const GetPost = async () => {
      const apost = await axios.get('https://fswd-wp.devnss.com/wp-json/wp/v2/posts/'+id)
      setPost(apost.data)
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

    function GetPostDetail() {
        if (cate.length !== 0 && user.length !== 0){
            return (
                <Col md={12} style={{ marginTop: 20 }}>
                    <ShowCart key={post.id} post={post} cateList={cate} authorList={user} />
                </Col>
            )
        }else{
            return <div></div>
        }
    }

    return (
        <> 
            <Container>
                <Row>
                    <GetPostDetail></GetPostDetail>
                </Row>
            </Container>
        </>
    )
  }
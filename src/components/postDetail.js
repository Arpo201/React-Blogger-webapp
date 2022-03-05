import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ShowCart } from "./card"
import { Container, Col, Row } from "react-bootstrap"

export const ShowPostDetail = () => {
    const {id} = useParams()
    const [post, setPost] = useState({})
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
          const getResult = async () => {
            await GetPost()
            await GetCategory()
            await GetUser()
          }
          getResult()
      },
      []
    )

    function GetPostDetail() {
        if (cate.length !== 0 && user.length !== 0 && Object.keys(post).length !== 0){
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
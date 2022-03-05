import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col } from "react-bootstrap"

export const ShowComment = ({commentLink}) => {
    const [comment, setComment] = useState([])

    const GetComment = async () => {
        const comment = await axios.get(commentLink)
        setComment(comment.data)
      }

    useEffect(
        () => {
            const getResult = async () => {
              await GetComment()
            }
            getResult()
        },
        []
      )
    
    var num = 0
    if (comment.length === 0) return <div></div>
    return (
        comment.map(data => {
            num++
            return (
                <Col key={num-1} md={12} style={{ marginTop: 20 }}>
                    <Card>
                        <Card.Header style={{backgroundColor:"#637fad", color: "#FFF", fontWeight: "bold", fontSize: "medium"}}>
                            {data.author_name + " "}
                            <span className='modified' style={{color: "white"}}>{data.date}</span>
                        </Card.Header>
                        <Card.Body dangerouslySetInnerHTML={{__html:data.content.rendered}}>
                        </Card.Body>
                    </Card>
                    {console.log(data.id)}

                </Col>
            )

        })
    )
}
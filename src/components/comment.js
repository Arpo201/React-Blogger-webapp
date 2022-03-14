import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"

export const ShowComment = ({commentLink, addComment}) => {
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
        [addComment]
      )
    
    var num = 0
    if (comment.length === 0) return <div></div>
    return (
        comment.map(data => {
            num++
            return (
                <Row key={num-1} style={{ marginTop: 20, backgroundColor:"#fffe", width: "100%", marginLeft: "auto", marginRight: "auto", padding:"2%"}}>
                    <Col md={2} style={{textAlign: "center"}}>
                        <img src={data.author_avatar_urls[96]} className="img-fluid rounded-circle" alt=""/>
                        <br></br>
                        {data.author_name + " "}
                    </Col>
                    <Col md={10}>
                        <span className='modified'>Commented: {data.date.replace("T", " ")}</span>
                        <p dangerouslySetInnerHTML={{__html:data.content.rendered}}></p>
                    </Col>
                </Row>
            )

        })
    )
}
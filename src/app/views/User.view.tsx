import { useEffect } from "react"
import { useParams } from "react-router"

export default function UserView () {
  const params = useParams()
  
  useEffect(() => {
    console.log(params)
  }, []) //eslint-disable-line

  return <div>
    <h1>Usuário - { params.userId }</h1>
  </div>
}
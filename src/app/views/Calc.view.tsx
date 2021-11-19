import { useEffect } from "react"
import { useLocation, useParams } from "react-router"

function useQuery () {
  return new URLSearchParams(useLocation().search)
}

export default function CalcView () {
  const {a,b} = useParams()
  const query = useQuery()
  
  useEffect(() => {
    console.log(query.get('operation'))
  }, []) //eslint-disable-line

  return <div>
    <h1>Soma - { Number(a) + Number(b) }</h1>
  </div>
}
import { useQuery } from "@apollo/client/react"
import { GET_DETAIL_POKEMON } from "../../graphql/queries/pokemon"
import {  useParams } from "react-router-dom"
export default function PokemonDetail () {
  const {name} = useParams()
  const {data, error, loading} = useQuery(GET_DETAIL_POKEMON, {variables: {name}})
  return (
    <div className="d-flex justify-content-center">
      <div className="col-4 mb-2">
        <div className="card mx-auto my-2" style={{width: 350}}>
              {/* <img
                src={data?.pokemon?.}
                style={{width: 200}}
                className="rounded mx-auto d-block"
                alt=''
              /> */}
            <div className="card-body card-body">
              <h5 className="card-title text-center">{data?.pokemon?.name}</h5>
              <p className="card-text">Abilities: {data?.pokemon?.moves?.map(el => {
                return el.name
              })}</p>  
            </div>
        </div>
      </div>
    </div>
  )
}
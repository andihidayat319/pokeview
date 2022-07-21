import { GET_LIST_POKEMON } from "../../graphql/queries/pokemon";
import { useQuery } from "@apollo/client/react";
import { Link } from "react-router-dom"
export default function PokomenList () {
  const { data, loading, error } = useQuery(GET_LIST_POKEMON)
  return (
    <div className="container-fluid">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {data?.pokemons?.results.map(el => {
          return (
            <div className="col" >
              <div className="card h-100">
                <img src={el.image} className="card-img-top" alt="..." style={{maxWidth : 280}}/>
                <div className="card-body">
                <Link to={{
                      pathname: `/detail/${el.name}`
                }}>
                  <h5 className="card-title">{el.name}</h5>
                </Link>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Owned: 0</small>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    
  )
}

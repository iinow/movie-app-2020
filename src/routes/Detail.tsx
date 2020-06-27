import React, {useEffect} from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { MovieProps } from '../components/Movie'

const Detail: React.FC<RouteComponentProps<{}, {}, MovieProps>> = (props) => {
  useEffect(() => {
    const { location, history } = props
    if(location.state === undefined) {
      history.push('/')
    }
  })

  return (
    <span>
      {
        props.location.state.title
      }
    </span>
  )
}

export default Detail

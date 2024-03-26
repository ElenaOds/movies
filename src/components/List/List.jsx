import Card from '../Card/Card'

const List = ({video}) => {
  return (
    <ul>
      <Card key={video.id} video={video}/>
    </ul>
  )
}

export default List

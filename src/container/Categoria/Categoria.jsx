import { useParams } from 'react-router-dom';

const Categoria = () => {
  const { categoria } = useParams(); 

  return (
    <div>{categoria}</div>
  )
}

export default Categoria
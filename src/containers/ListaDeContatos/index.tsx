import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import store, { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { lista } = useSelector((state: RootReducer) => state.contatos)

  return (
    <ul>
      {lista.map((c) => (
        <li key={c.nome}>
          <Contato
            nome={c.nome}
            telefone={c.telefone}
            email={c.email}
            id={c.id}
          />
        </li>
      ))}
    </ul>
  )
}

export default ListaDeContatos

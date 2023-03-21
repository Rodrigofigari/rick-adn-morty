import Card from '../Card/Card.jsx'
import style from './Cards.module.css'

function Cards(props) {
   const { characters, onClose } = props;

   return <div className={style.listItem}>
      {characters.map((character) => 
       <Card
         id = {character.id}
         key = {character.id}
         name = {character.name}
         species = {character.species}
         gender = {character.gender}
         image = {character.image}
         onClose = {onClose}
      />)}
   </div>;  
}

export default Cards;
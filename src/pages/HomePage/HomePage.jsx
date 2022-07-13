import React from 'react';
import GameItem from '../../components/GameItem/GameItem';
import s from './HomePage.module.css'

const DUMMYDATA = [
  {
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305',
    title: 'Red Dead Redemption 2',
    genres: ['Приключенческие игры', 'Экшены'],
    price: 699,
    video: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256768371/movie480.webm?t=1574881352',
    id: 'G1',
    description: "Артур Морган и другие подручные Датча ван дер Линде вынуждены пуститься в бега. Их банде предстоит участвовать в кражах, грабежах и перестрелках в самом сердце Америки. За ними по пятам идут федеральные агенты и лучшие в стране охотники за головами, а саму банду разрывают внутренние противоречия. Артуру предстоит выбрать, что для него важнее: его собственные идеалы или же верность людям, которые его взрастили.",
},
{
  image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/275850/capsule_616x353.jpg?t=1653577357',
  title: "No man's sky",
  genres: ['Приключенческие игры', 'Экшены'],
  price: 749,
  video: 'https://www.youtube.com/embed/BoLNSRUOwjI',
  id: 'G2',
  description: "Созданная по мотивам столь любимых нами приключений и идей из классической научной фантастики, игра No Man's Sky познакомит вас с галактикой, полной уникальных планет и форм жизни, а также постоянных угроз и экшена.",
},
{
  image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1030840/header.jpg?t=1632420251',
  title: "Mafia: Definitive Edition",
  genres: ['Приключенческие игры', 'Экшены'],
  price: 899,
  video: 'https://www.youtube.com/embed/vfwfA_iTOng',
  id: 'G3',
  description: "Первая часть криминальной саги Mafia — 30-е годы, Лост-Хэвен, Иллинойc. Ремейк культовой игры, воссозданной с нуля. Постройте карьеру мафиози во времена сухого закона. После случайной встречи с мафией таксист Томми Анджело попадает в мир организованной преступности. Сначала он настороженно относится к семье Сальери, но большие деньги меняют его отношение…",
},
]

function HomePage() {
  return (
    <div className={s.home}>
      {DUMMYDATA.map(data => <GameItem game={data} key={data.id}/>)}
    </div>
  )
}

export default HomePage
import Router, {useRouter} from 'next/router';
export default function Header() {
    const items= ['home','essentials', 'itpeases', 'custom'],
          location = useRouter();
    return (
        <header className="header">
            <div className="header__inner">
                <img src="img/logo.svg" alt="logo"/>
                <button className="header__burger">
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="header__wrapper">
               {
                   items.map((item, i) => (
                       <button className={location.asPath === `/${items[i]}` ? 'header__item active': 'header__item'} 
                       onClick={() => Router.push(item.replace(/\s/g, ''))} 
                       key={`${item}__${i}`}
                       >{item}</button>
                   ))
               }
            </div>
        </header>
    )
}
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
                       <button className={`header__item ${location.asPath === '/'+items[i] ? 'active' : ''}`} 
                       onClick={() => Router.push(item)} 
                       key={`${item}__${i}`}
                       >{item}</button>
                   ))
               }
            </div>
        </header>
    )
}
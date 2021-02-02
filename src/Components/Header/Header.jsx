import s from './Header.module.css';

const Header = ({title, descr, onClickButton}) => {
const handleClick =() =>{
    console.log('####: <Header/>');
    onClickButton && onClickButton();
}

 return <header className={s.root}>
    <div className={s.forest}></div>
    <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button onClick={handleClick}>
            Start Game
        </button>
    </div>
</header>
}

export default  Header;
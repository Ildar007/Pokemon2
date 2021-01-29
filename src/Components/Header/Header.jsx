import s from './Header.module.css';

const Header = () => {
 return <header className={s.root}>
    <div className={s.forest}></div>
    <div className={s.container}>
        <h1>Pocemon game</h1>
        <p>My first game</p>
    </div>
</header>
}

export default  Header;
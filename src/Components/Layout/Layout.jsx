import s from  './Layout.module.css';

 



const Layout = ({id=0, title='Title',desc,bgImage,colorBg}) => {
    const sectionStyle = bgImage
       ?{ backgroundImage:  `url(${bgImage})`}
       :{ backgroundColor: colorBg}
    
    return <section className={s.root} id= {id } style={sectionStyle}>
    <div className={s.wrapper}>
        <article>
            <div className={s.title}>
                <h3> {  title}</h3>
                <span className={s.separator}></span>
            </div>
            <div className={s.desc+ '' + s.full}>
                <p> { desc }</p>
            </div>
        </article>
    </div>
</section>
}
export default Layout;
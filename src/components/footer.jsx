function Footer () {
    return (
        
        <footer className="page-footer purple darken-1">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">MyRestRecipes</h5>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://t.me/liarwithoutsouls">Сontact the developer</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Kovrizhkina Arina
                </div>
            </div>
        </footer>
    );
}
export {Footer};
// import comemat_logo from '/assets/comemat_logo.png'

export function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">
                    {/* <img style={{width:"50px", height:"50px"}} classNameName="p-1" src="https://scontent.fntr1-1.fna.fbcdn.net/v/t39.30808-6/302731382_1033681557457711_9046163542782411527_n.png?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEM0El_m5CcfSs9bqaM-MblGnAo6AAPQhQacCjoAA9CFGCtjm6bGG-hbZfij2dntnb5e_Ft_MeDjg-sbVTMqqdW&_nc_ohc=JYG14cxITU0Q7kNvgHWBaCm&_nc_ht=scontent.fntr1-1.fna&oh=00_AYCkpZdUiPks2rzH2D_V9xxUB8kRREmDsWAsi8mCzvN4Cw&oe=66E31C1A"></img> */}
                    COMEMAT
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav text-light">
                    <li className="nav-item ms-2">
                        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item ms-2">
                        <a className="nav-link text-light" href="#">Noticias</a>
                    </li>
                    <li className="nav-item ms-2">
                        <a className="nav-link text-light" href="#">Cursos</a>
                    </li>
                    <li className="nav-item ms-2">
                        <a className="nav-link text-light" href="#">Olimpiadas</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

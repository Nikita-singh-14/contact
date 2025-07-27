import styles from './Navbar.module.css';

const NAvbar = () => {
    console.log(styles);
    return (
        <nav className={`${styles.navigation} container`}>
            <div className="logo"><h1>Nikita Singh</h1></div>
            <div className="page">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Project</li>
                    <li>Experience</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default NAvbar;
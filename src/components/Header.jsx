import M from 'materialize-css';
import { Navbar, Icon} from 'react-materialize';

function Header() {
    return (
        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="!#">Organizer</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        />
    )
}

export default Header;
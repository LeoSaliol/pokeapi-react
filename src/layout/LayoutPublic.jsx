import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';
import Logo from '../components/Nav/Logo';

import SearchPokemon from '../components/Nav/SearchPokemon';

import '../sass/index.scss';

const LayoutPublic = () => {
    const navigation = useNavigation();
    return (
        <>
            <div className="container text-center ">
                <Logo />

                <SearchPokemon />
            </div>
            <section>
                {navigation.state === 'loading' ? <Loading /> : <Outlet />}
            </section>
            <Footer />
        </>
    );
};

export default LayoutPublic;

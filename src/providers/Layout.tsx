import { Provider as ReduxProvider } from 'react-redux';

import { Link, Outlet } from 'react-router-dom';
import { store } from '../store/store';
import { SocketHelper } from '../components/socket-helper/SocketHelper';

const Layout = () => {
    return (
        <div>
            <ReduxProvider store={store}>
                {import.meta.env.VITE_MODE === 'dev' && (
                    <div
                        style={{
                            backgroundColor: 'white',
                            position: 'fixed',
                            left: 20,
                            top: 20,
                            padding: 20,
                            zIndex: 200,
                        }}
                    >
                        <Link to="/">Auth and select</Link>
                    </div>
                )}
                <SocketHelper />
                <Outlet />
            </ReduxProvider>
        </div>
    );
};

export default Layout;

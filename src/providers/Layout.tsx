import { Provider as ReduxProvider } from 'react-redux';

import { Outlet } from 'react-router-dom';
import { store } from '../store/store';
import { SocketHelper } from '../components/socket-helper/SocketHelper';

const Layout = () => {
    return (
        <div>
            <ReduxProvider store={store}>
                <SocketHelper />
                <Outlet />
            </ReduxProvider>
        </div>
    );
};

export default Layout;

import { Provider as ReduxProvider } from 'react-redux'

import { Outlet } from 'react-router-dom'
import { store } from '../store/store'

const Layout = () => {
	return (
		<div>
			<ReduxProvider store={store}>
				<Outlet />
			</ReduxProvider>
		</div>
	)
}

export default Layout

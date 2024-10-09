import { FC, PropsWithChildren } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../pages/main-page/MainPage'
import Layout from '../providers/Layout'

const Router: FC<PropsWithChildren> = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path={`/`} element={<MainPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router

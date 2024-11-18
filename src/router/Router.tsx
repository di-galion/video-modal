import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page/MainPage';
import Layout from '../providers/Layout';
import { GamesPage } from '../pages/games/GamesPage';

const Router: FC<PropsWithChildren> = () => {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={`/test/:role/:token`} element={<MainPage />} />
                    <Route
                        path={`/games/:name/:role/:token`}
                        element={<GamesPage />}
                    />
                    <Route path={`/games/:name`} element={<GamesPage />} />
                    <Route path={`/`} element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

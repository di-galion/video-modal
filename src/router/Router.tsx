import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page/MainPage';
import Layout from '../providers/Layout';
import { GamesPage } from '../pages/games/GamesPage';
import { SelectPage } from '../pages/select-page/SelectPage';

const Router: FC<PropsWithChildren> = () => {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={`/games/:name`} element={<GamesPage />} />
                    <Route
                        path={`/video-module/:name/:section`}
                        element={<MainPage />}
                    />
                    <Route
                        path={`/video-module/:name`}
                        element={<MainPage />}
                    />
                    <Route path={'/'} element={<SelectPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {routeConfig} from "shared/config/routeConfig/routeConfig";


const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes key={location.pathname}>
                {
                    Object.values(routeConfig).map(({path, element}) =>  (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    )
}
export default AppRouter

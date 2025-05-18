import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexLayout from './layouts/IndexLayout'
import Index from './pages/Index'
import Start from './pages/Start'
import LayoutDoc from './layouts/LayoutDoc'
export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexLayout/>}>
                    <Route element={<Index/>} index={true} /> 
                </Route>

                <Route path='/start' element={<LayoutDoc />}>
                    <Route index element={<Start/>}  /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

import Header from '../Components/Header'
import Aside from '../Components/Menu/Aside'
import { Outlet } from 'react-router-dom'

export default function LayoutDoc() {
    return (
        <>
            <Header />
            <div className='max-w-7xl py-3 px-12 mx-auto flex gap-10 mt-12 mb-4'>
                <Aside />
                <Outlet />
            </div>
        </>
    )
}

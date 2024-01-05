import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import Navbar from './layouts/Navbar'
import Hero from './Hero'
import AppList from './AppList'
import Footer from './layouts/Footer'

const WrapperComponent = React.memo((props: any) => {
    return (
        <MDBContainer fluid style={{height: 100}} className='px-0 m-0'>
            {/* <Navbar /> */}
            <Hero />
            <AppList />
            <Footer />
        </MDBContainer>
    )
})

export default WrapperComponent
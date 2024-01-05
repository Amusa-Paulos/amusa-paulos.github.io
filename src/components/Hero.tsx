import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";

const Hero = React.memo((props: any) => {
    return (
        <MDBRow className="hero m-0 d-flex align-items-center">
            <MDBCol xs={12} className='d-flex flex-column'>
                <div className="text-center welcome-text">
                    Welcome to
                </div>
                <div className="glitch-font hero-title-text text-center">
                    Pryxy
                </div>
            </MDBCol>

        </MDBRow>
    )
})

export default Hero;
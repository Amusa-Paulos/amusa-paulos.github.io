import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';



const AppList = React.memo((props: any) => {
    return (
        <MDBRow className="m-0 app-list-container">
            <MDBCol xs={12} className="py-3">
                <div className="list-text text-center">Apps & Libraries</div>
            </MDBCol>

            <MDBCol xs={12} className="my-5 d-flex justify-content-center">
                <a href="https://custup.pryxy.com" target="_blank" className="card app-list-card">
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                        <MDBCardImage src={require('../assets/custup logo.png')} alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='8' className="d-flex align-items-center">
                            <MDBCardBody className="">
                                <MDBCardTitle className="card-title">CustUp</MDBCardTitle>
                                <MDBCardText className="card-desc text-white">
                                    Highly customizable JavaScript file upload library with zero dependencies.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </a>
            </MDBCol>

            <MDBCol xs={12} className="my-5 d-flex justify-content-center">
                <a href="https://pryxy.com/tick-tak-toe" target="_blank" className="card app-list-card">
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                        <MDBCardImage src={require('../assets/tic-tak-toe-game.png')} alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='8' className="d-flex align-items-center">
                            <MDBCardBody className="">
                                <MDBCardTitle className="card-title">Remote Multiplayer Tic-tak-toe game</MDBCardTitle>
                                <MDBCardText className="card-desc text-white">
                                    Play multiplayer tic-tak-toe game remotely with anyone anywhere in the world
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </a>
            </MDBCol>

            <MDBCol xs={12} className="my-5 d-flex justify-content-center">
                <a href="https://pryxy.com/about-me" className="card app-list-card">
                    <MDBRow className='g-0 d-flex justify-content-center'>
                        <MDBCol md='8' className="d-flex align-items-center">
                            <MDBCardBody className="">
                                <MDBCardTitle className="card-title">About me</MDBCardTitle>
                                <MDBCardText className="card-desc text-white">
                                    About me, my tech stack and what I've worked on
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </a>
            </MDBCol>

        </MDBRow>
    )
})

export default AppList;
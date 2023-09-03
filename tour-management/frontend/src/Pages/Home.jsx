import React from "react";
import '../styles/home.css';
import {Container, Row,Col} from "reactstrap";
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg2 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";
const Home = ()=>{
    return <div>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Must Know before trip'}/>
                                <img src={worldImg} alt="" />
                            </div>
                            <h1> Travel as YOU LIVE ONLY ONCE!!! <span className="highlight">memories</span></h1>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nihil excepturi, dolor ut ab minus ducimus ea nesciunt, cum officiis esse corporis, voluptatibus quas rem dolorem molestias nisi blanditiis ullam.</p>    

                        </div>
                    </Col>
                    {/* start images*/ }
                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImg} alt=""/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-4">
                            <img src={heroImg2} alt=""/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <video src={heroVideo} alt=""/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <SearchBar></SearchBar>
                </Row>
            </Container>
        </section>
        {/* hero section starts from here */}
        <section>
        <Container>
            <Row>
                <Col lg='3'>
                <h5 className="services__subtitle"> What we serve</h5>
                <h2 className="services__title"> we offer best services</h2>
                </Col>
                    <ServiceList></ServiceList>
            </Row>
        </Container>
        </section>
        {/* Featured TOURS*/}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <Subtitle subtitle={"Explore"}></Subtitle>
                        <h2 className="featured__tours-title"> Featured Tours</h2>
                    </Col>
                </Row>
                <Row>
                <FeaturedTourList/>
                </Row>
            </Container>
        </section>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="experience__content">
                        <Subtitle subtitle={'Experience'}/>
                        <h2>With all our experience <br/> we will serve you</h2>
                        <p></p>

                    </div>
                    <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                        <span>12k+</span>
                        <h6> Successful trips</h6>
                    </div>
                    <div className="counter__box">
                        <span>2k+</span>
                        <h6> Regular clients</h6>
                    </div>
                    <div className="counter__box">
                        <span>15+</span>
                        <h6> Years of experience</h6>
                    </div>
                    </div>
                </Col>
                <Col lg='6'>
                </Col>
            </Row>
        </Container>
    </section>
    {/* === gallery section===*/}
   <section>
        <Container>
            <Row>
                <Col lg="12">
                    <Subtitle subtitle={"Gallery"} />
                    <h2 className="gallery__title">
                        Visit our customers tour gallery
                    </h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
   </section>
   {/* Testimonial Section*/}
   <section>
    <Container>
        <Row>
            <Col lg="12">
                <Subtitle subtitle={"Fans Love"} />
                <h2 className="testimonial__title"> What our fans say about us </h2>
            </Col>
            <Col lg="12">
            <Testimonials/>
            </Col>

        </Row>
    </Container>
   </section>
   <section>
    <Newsletter/>
   </section>
</div>
};

export default Home;
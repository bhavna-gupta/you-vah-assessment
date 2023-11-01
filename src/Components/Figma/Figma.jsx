import styles from '../Figma/Figma.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import cw2 from '../../images/CW 2.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cw1 from '../../images/CW 1.png';
import visual from '../../images/visual-3 1.png';

import graphic from '../../images/GRAHPIC ELEMENT.svg'

import frame2img2 from '../../images/Frame 30479.png';
import frame2img1 from '../../images/See where our students are interning.png';

import g1 from '../../images/Group 1.png';
import g2 from '../../images/Group 2.png';
import g3 from '../../images/Group 3.png';




function Figma() {
    return (
        <Container fluid style={{
            width: '100%', heigth: '100vh', backgroundColor: '#15202B',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/*Other Devices */}
            <Row className={`${styles.hideM} ${styles.hideL}`} style={{ width: '80%', heigth: '276px', backgroundColor: '#202C38', justifyContent: 'center', marginTop: '60px' }}>
                <Col style={{
                    margin: 'unset',
                    padding: 'unset'
                }}><Image src={cw2} style={{
                    width: '100%', height: '100%', backgroundColor: '#202C38',
                    border: 'unset'
                }} thumbnail /></Col>
                <Col>
                    <Card className="text-center" style={{
                        width: '100%', height: '100%', backgroundColor: '#202C38',
                        border: 'unset'
                    }}>

                        <Card.Body style={{ padding: '20px 0 10px 0' }}>

                            <Card.Title style={{ fontFamily: 'Gilroy-Bold', color: '#FFFFFF' }}>Ace Our Sigle Shot Challenge !
                        {/* <img src={graphic} alt='graphic' className={styles.graphics} /> */}

                            </Card.Title>

                            <Card.Text style={{ fontFamily: 'Gilroy-Medium', color: '#FFFFFF' }}>
                                Jumpstart Your Career with Our Free Assessment Test: Prove Your <br />Skills and Secure an Internship Today!
                            </Card.Text>
                            <Button variant="primary" style={{
                                background: 'linear-gradient(90deg, #B25AFF 0%, #7A27CA 100%)',
                                fontFamily: 'Gilroy-Bold', color: '#FDFBFF', margingTop: '15px', border: 'blueviolet'
                            }}>Take A Free Assessment</Button>
                        </Card.Body>

                    </Card>
                </Col>
                <Col style={{
                    margin: 'unset',
                    padding: 'unset'
                }}><Image src={cw1} style={{
                    width: '100%', height: '100%', backgroundColor: '#202C38',
                    border: 'unset'
                }} thumbnail /></Col>
            </Row>

            {/*Mobile view */}
            <Row className={`${styles.showL} ${styles.showM}`} style={{ width: '80%', heigth: '276px', backgroundColor: '#202C38', justifyContent: 'center', marginTop: '60px' }}>
                <Card className="text-center" style={{
                    width: '18rem', height: '100%', backgroundColor: '#202C38',
                    border: 'unset'
                }}>
                    <Card.Img variant="top" src={visual} />
                    <Card.Body style={{ padding: '20px 0 10px 0' }}>

                        <Card.Title style={{ fontFamily: 'Gilroy-Bold', color: '#FFFFFF' }}>Ace Our Sigle Shot Challenge !
                        {/* <img src={graphic} alt='graphic' className={styles.graphics} /> */}
                        </Card.Title>
                        <Card.Text style={{ fontFamily: 'Gilroy-Medium', color: '#FFFFFF' }}>
                            Jumpstart Your Career with Our Free Assessment Test: Prove Your <br />Skills and Secure an Internship Today!
                        </Card.Text>
                        <Button variant="primary" style={{
                            background: 'linear-gradient(90deg, #B25AFF 0%, #7A27CA 100%)',
                            fontFamily: 'Gilroy-Bold', color: '#FDFBFF', margingTop: '15px', border: 'blueviolet'
                        }}>Take A Test</Button>
                    </Card.Body>
                </Card>
            </Row>

            <Row style={{ width: '60%', heigth: '220px', justifyContent: 'center', marginTop: '40px', marginBottom: '10px', padding: '10px', border: '1px solid black' }}>
                <Row><Image src={frame2img1} fluid /></Row>
                <Row><Image src={frame2img2} fluid /></Row>

            </Row>

            <Row className={styles.change} style={{ width: '100%', justifyContent: 'center', marginTop: '60px' }}>
                <Col className={styles.change}>
                <Card style={{  backgroundColor: '#15202B', border:'unset'}}>
                <div className={styles.frame3}>
                    <div style={{ width: '159px', height: "74px" }}>
                        <div style={{
                            width: '156px', height: '54px', fontFamily: 'Gilroy-Bold', fontSize: '36px', textAlign: 'center', color: '#FDFBFF'
                        }}><p>Content:</p></div>
                        <div style={{
                            width: '156px', height: '16px', fontFamily: 'Segoe UI', fontSize: '16px', textAlign: 'center', color: '#FDFBFF', fontWeight: '400', marginTop: '-1px'
                        }}>
                            <p>12 lessons. 2hr 3min.</p>
                        </div>

                    </div>

                    <div className={styles.secondbox}>
                        <div className={styles.row}>
                            <div className={styles.part1}>
                                <div className={styles.databox}>
                                    <div className={styles.sno}>
                                        <p className={styles.no}>1
                                        </p>
                                    </div>

                                    <div className={styles.data}>Introduction Session (Live class)
                                    </div>
                                </div>
                            </div>
                            <div className={styles.part2}><p className={styles.timing}>2hr 3min.</p></div>
                        </div>

                        <hr style={{ width: '100%', border: '0.5px dashed #FDFBFF' }} />

                        <div className={styles.row}>
                            <div className={styles.part1}>
                                <div className={styles.databox}>
                                    <div className={styles.sno}>
                                        <p className={styles.no}>2
                                        </p>
                                    </div>

                                    <div className={styles.data}>Getting in the Fundamenitals
                                    </div>
                                </div>
                            </div>
                            <div className={styles.part2}><p className={styles.timing}>2hr 3min.</p></div>
                        </div>

                        <hr style={{ width: '100%', border: '0.5px dashed #FDFBFF' }} />

                        <div className={styles.row}>
                            <div className={styles.part1}>
                                <div className={styles.databox}>
                                    <div className={styles.sno}>
                                        <p className={styles.no}>3
                                        </p>
                                    </div>

                                    <div className={styles.data}>Know your niche
                                    </div>
                                </div>
                            </div>
                            <div className={styles.part2}><p className={styles.timing}>2hr 3min.</p></div>
                        </div>

                        <hr style={{ width: '100%', border: '0.5px dashed #FDFBFF' }} />

                        <div className={styles.row}>
                            <div className={styles.part1}>
                                <div className={styles.databox}>
                                    <div className={styles.sno} style={{ width: '46px' }}>
                                        <p className={styles.no}>4
                                        </p>
                                    </div>

                                    <div className={styles.data} style={{ width: '335px', height: '40px' }}>The iCrux of Search Engine Optimization (SEO) What is SEO?
                                    </div>
                                </div>
                            </div>
                            <div className={styles.part2}><p className={styles.timing}>2hr 3min.</p></div>
                        </div>

                        <hr style={{ width: '100%', border: '0.5px dashed #FDFBFF' }} />

                        <div className={styles.row}>
                            <div className={styles.part1}>
                                <div className={styles.databox}>
                                    <div className={styles.sno}>
                                        <p className={styles.no}>5
                                        </p>
                                    </div>

                                    <div className={styles.data}>The Key to Keywords
                                    </div>
                                </div>
                            </div>
                            <div className={styles.part2}><p className={styles.timing}>2hr 3min.</p></div>
                        </div>

                        <hr style={{ width: '100%', border: '0.5px dashed #FDFBFF' }} />

                        <div className={styles.row}>
                            <div className={styles.part1}>
                                <div className={styles.databox}>
                                    <div className={styles.sno}>
                                        <p className={styles.no}>6
                                        </p>
                                    </div>

                                    <div className={styles.data}>Content Marketing- Enisuring the Reach
                                    </div>
                                </div>
                            </div>
                            <div className={styles.part2}><p className={styles.timing}>2hr 3min.</p></div>
                        </div>

                        <button style={{
                            width: '30%', height: '56px', borderRadius: '8px',
                            border: '3px solid blueviolet',
                            backgroundColor: '#15202B', fontFamily: 'Roboto-Regular', fontSize: '18px', textAlign: 'center', color: "#FDFBFF", margin:'20px'
                        }}>View All</button>
                    </div>

                </div>
                </Card>
                </Col>
                <Col className={styles.change} style={{padding:'0 0 0 10px'}}>
                <Card style={{  backgroundColor: '#15202B',border:'unset'}}>
                <div className={styles.frame4}>
                    <div className={styles.subframe1}>
                        <img src={g1} alt='g1' className={styles.groupimg} />
                        <p>Career Opportunities</p>
                        <ul>
                            <li>Life time access</li>
                            <li>Life time access</li>
                            <li>Life time access</li>
                        </ul>
                    </div>

                    <div className={styles.subframe2}>
                        <img src={g2} alt='g2' className={styles.groupimg} />
                        <h1>Skills You Will Learn</h1>
                        <ul>
                            <li>Cionitent Designing</li>
                            <li>Content Adapatation</li>
                            <li>Content Writing as a Career</li>
                            <li>SEO: Understanding search engine</li>
                        </ul>
                    </div>

                    <div className={styles.subframe3}>
                        <img src={g3} alt='g3' className={styles.groupimg} />
                        <h1>Course Includes</h1>
                        <ul>
                            <li>Life time access</li>
                            <li>Certifiicate of completion</li>
                            <li>Life time access</li>
                        </ul>
                    </div>

                    <div className={styles.subframe4}>
                        <div style={{
                            height: '68px',
                            display: 'flex',
                            flexDirection: 'column',
                            width: '150px'
                        }}>

                            <p style={{ fontFamily: 'Poppins-SemiBold', fontSize: '32px', color: '#FDFBFF', margin: '0px' }}>₹1000</p>
                            <p style={{ fontFamily: 'Poppins-SemiBold', fontSize: '16px', color: '#FDFBFF', margin: '0px' }}><s>₹2000</s> 50% offf</p>

                        </div>
                        <div>
                            <button style={{
                                width: '200px', height: '56px', borderRadius: '8px', padding: '12px 15px 8px 15px', background: 'linear-gradient(90deg, #B25AFF 0%, #7A27CA 100%)', fontFamily: 'Gilroy-Bold', fontSize: '18px', textAlign: 'center', color: '#FDFBFF', marginTop:'15px'
                            }}>Buy Now</button>
                        </div>
                    </div>


                </div>
                </Card>
                </Col>
            </Row>

            
        </Container>
    );
}

export default Figma;
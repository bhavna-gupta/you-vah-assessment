import cw2 from '../../images/CW 2.png';
import cw1 from '../../images/CW 1.png';
import graphic from '../../images/GRAHPIC ELEMENT.svg';
import styles from '../Home/Home.module.css';

import frame2img1 from '../../images/Frame 30479.png';
import frame2img2 from '../../images/See where our students are interning.png';


import g1 from '../../images/Group 1.png';
import g2 from '../../images/Group 2.png';
import g3 from '../../images/Group 3.png';

import visual from '../../images/visual-3 1.png'

const Home = () => {
    return (
        <>
            <div className={styles.frame1}>
                <div className={styles.leftbox}>
                    <img src={cw2} alt="cw2" style={{width:'100%', height:'100%'}} />
                </div>

                <div className={styles.centerbox}>
                    <div style={{ width: "484px", height: "96px" }}>
                        <h1 className={styles.centerboxh1}>Ace Our Sigle Shot Challenge !</h1>
                        <p className={styles.centerboxpra}>Jumpstart Your Career with Our Free Assessment Test: Prove Your <br />Skills and Secure an Internship Today!</p>
                    </div>
                    <button className={styles.centreboxBtn}>Take A Free Assessment</button>
                </div>
                <img src={graphic} alt='graphic' className={styles.graphic} />

                <div className={styles.rigthbox}>
                    <img src={cw1} alt="cw" style={{width:'100%', height:'100%'}} />
                </div>

            </div>

<div className={styles.mobileframe}>
<img src={visual} alt='visual' style={{width:'95vw'}}/>
<div className={styles.centerbox}>
                    <div style={{ width: "90vw", height: "96px" }}>
                        <h1 className={styles.centerboxh1}>Ace Our Sigle Shot Challenge !</h1>
                        {/* <img src={graphic} alt='graphic' className={styles.graphic} /> */}
                        <p className={styles.centerboxpra}>Jumpstart Your Career with Our Free <br/>Assessment Test: Prove Your Skills and Secure an <br/>Internship Today!</p>
                    </div>
                    <button className={styles.centreboxBtn}>Take A Test</button> 
                </div>
                
</div>
          
            <div className={styles.frame2}>
                <img className={styles.frame2img2} src={frame2img2} alt="frame2img1" style={{width:'90%'}}/>

                <img src={frame2img1} alt="frame2img1" style={{width:'99%'}} />

            </div>

            <div className={styles.fr3andfr4}>
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

                        <hr style={{ width: '540px', border: '0.5px dashed #FDFBFF' }} />

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

                        <hr style={{ width: '540px', border: '0.5px dashed #FDFBFF' }} />

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

                        <hr style={{ width: '540px', border: '0.5px dashed #FDFBFF' }} />

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

                        <hr style={{ width: '540px', border: '0.5px dashed #FDFBFF' }} />

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

                        <hr style={{ width: '540px', border: '0.5px dashed #FDFBFF' }} />

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
                            width: '164px', height: '56px', marginTop: '60px',  borderRadius: '8px', 
                            border: '3px solid blueviolet', 
                            backgroundColor: '#15202B', fontFamily: 'Roboto-Regular', fontSize: '18px', textAlign: 'center', color: "#FDFBFF"
                        }}>View All</button>
                    </div>

                </div>

                <div className={styles.frame4}>
                    <div className={styles.subframe1}>
                        <img src={g1} alt='g1' className={styles.groupimg}/>
                        <h1>Career Opportunities</h1>
                        <ul>
                            <li>Life time access</li>
                            <li>Life time access</li>
                            <li>Life time access</li>
                        </ul>
                    </div>

                    <div className={styles.subframe2}>
                    <img src={g2} alt='g2' className={styles.groupimg}/>
                        <h1>Skills You Will Learn</h1>
                        <ul>
                            <li>Cionitent Designing</li>
                            <li>Content Adapatation</li>
                            <li>Content Writing as a Career</li>
                            <li>SEO: Understanding search engine optimization (SEO)</li>
                        </ul>
                    </div>

                    <div className={styles.subframe3}>
                    <img src={g3} alt='g3' className={styles.groupimg}/>
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
                                width: '310px', height: '56px', borderRadius: '8px', padding: '12px 115px 8px 115px', background: 'linear-gradient(90deg, #B25AFF 0%, #7A27CA 100%)', fontFamily: 'Gilroy-Bold', fontSize: '18px', textAlign: 'center', color: '#FDFBFF'
                            }}>Buy Now</button>
                        </div>
                    </div>


                </div>

            </div>
          
        </>
    );
};

export default Home;
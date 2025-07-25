'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import styles from './Resume.module.scss';

import Image from "next/image";
import Container from "@/components/UI/Layout/Layout";
import FancyButton from "@/components/UI/Elements/Button/Button";
import commonConfig from "@/database/config/metadata.json";
import Link from "next/link";

const config=require('../../../next.config.js');

export default function Resume() {
    const container = useRef();
    const cardGroup = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // CV Card
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardGroup.current,
                start: 'top 75%',
                end: 'top top',
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
        tl.to(`.${styles.cardV1}`, {
            rotate: '-6deg',
            scale: 1.05,
        }, 0);
        tl.to(`.${styles.cardV2}`, {
            rotate: '6deg',
            scale: 1.05,
            x: '5%'
        }, 0);

    }, { scope: container })


    return (
        <section className={styles.section} ref={container} id={'resume'}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.cardGroup} ref={cardGroup}>
                        <div className={`${styles.card} ${styles.cardV1}`}>
                            <div className={styles.cardInner}>
                                <div className={styles.cardTitle}>EDUARDO REYES</div>
                                <div className={styles.cardDesc}>Jefe de Proyectos TI</div>
                                <hr/>
                                <p>Soy Eduardo, desarrollador de proyectos frontend/backend senior con más de 15 años de experiencia profesional.
He creado con éxito sitios web intuitivos con ReactJS/TS, Angular y NextJS. Presto atención a los pequeños detalles, disfruto resolviendo problemas técnicos y trabajo bien en equipo. Me gusta aprender nuevas tecnologías y siempre busco mejorar mis habilidades.
                                </p>
                                <div>
                                    <Link href={`mailto:${commonConfig.personal.email}`} target={'_blank'}>
                                        {commonConfig.personal.email}
                                    </Link>
                                    <span>{commonConfig.personal.city}, {commonConfig.personal.state}</span>
                                </div>
                                <hr/>
                                <div className={styles.cardSectionTitle}>EXPERIENCIA LABORAL</div>
                                <p>
                                    Jefe de Proyectos TI | Consorcio MADI <br/>
                                    Jefe de Proyectos TI | HYBRIDE IT  <br/>
                                    Jefe de Proyectos TI | TECFLEX
                                </p>
                            </div>
                            <figure className={styles.figure}>
                                <Image src={config.basePath + "/eduardo-reyes-photo.jpg"} alt="Eduardo Reyes" width={150} height={150}/>
                            </figure>
                        </div>
                        <div className={`${styles.card} ${styles.cardV2}`}>
                            <div className={styles.cardInner}>
                                <Image src={config.basePath + "/code-snippet.svg"} alt="Code Snippet" width={330} height={480}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <FancyButton theme='button-1' target={'_blank'} link={commonConfig.personal.resumeURL}>Ver
                            Resume</FancyButton>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FancyButton theme='button-1' target={'_blank'} link={commonConfig.personal.cvURL}>Ver
                            C.Vitae</FancyButton>
                    </div>
                    <div className={styles.links}>
                        <Link href={`${commonConfig.social.linkedin}`} target={'_blank'}>LinkedIn</Link>
                        <Link href={`${commonConfig.social.github}`} target={'_blank'}>GitHub</Link>
                        {/* <Link href={`${commonConfig.social.codepen}`} target={'_blank'}>CodePen</Link> */}
                    </div>
                </div>
            </Container>
        </section>
    )
}
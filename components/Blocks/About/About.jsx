"use client";

import React from 'react';
import styles from './About.module.scss';
import Title from "@/components/UI/Elements/Title/Title";
import TextReveal from "@/components/UI/Elements/TextReveal/TextReveal";
import SeattleMap from "@/components/UI/Cards/SeattleMap/SeattleMap";
import Stats from "@/components/UI/Cards/Stats/Stats";
import ParallaxImage from "@/components/UI/ParallaxImage/ParallaxImage";

export default function About() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>

                <header className={styles.header}>
                    <Title heading={'h3'} color="black"><span>Soy un</span> <br/>
                        Desarrollador Proyectos TI Web y Móvil
                    </Title>
                    <TextReveal className={styles.description}>
                        Me describiría como un desarrollador de proyectos web/móvil/windows proactivo con más de 15 años de experiencia en Tecnologias de Información.
                    </TextReveal>
                </header>

                <ParallaxImage src={"/gallery/IMG-20190712-WA0010.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20210713_103018.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />

                <Stats className={styles.stats} />

            </div>

            <div className={styles.grid}>
                <header className={styles.header}>
                    <TextReveal className={styles.description}>
                        Ingeniero de Sistemas con +15 años de experiencia en gestión de proyectos TI en el sector Retail, Médico, Logístico, RRHH, Educación, Agro y Seguros.
                    </TextReveal>
                </header>
                <ParallaxImage src={"/gallery/IMG_20230325_154428.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/G0062517.JPG"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20220129_133838.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20220821_193826.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
            </div>

            <div className={styles.grid}>
                <header className={styles.header}>
                    <TextReveal className={styles.description}>
                        Actualmente vivo en Lima - Perú. En mi vida personal, me encanta viajar, ver documentales, ver deportes de aventuras y explorar las nuevas tecnologías.
                    </TextReveal>
                </header>
                <ParallaxImage src={"/gallery/IMG_20231225_165326.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <SeattleMap className={styles.map} />
                <ParallaxImage src={"/gallery/IMG_20231210_140134.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20230420_161256.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
            </div>
        </section>
    );
}
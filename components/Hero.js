import styles from '../styles/Hero.module.scss'
import Image from 'next/image'

const Hero = ({ hero }) => {
    return (
        <section id="hero">
            <div className="desktop-only">
                <div style={{ position: 'relative', width: '100%', height: '658px' }}>
                    <Image
                        src={hero.DesktopHeroImage}
                        alt={hero.heroTitle}
                        layout="fill"
                        objectFit='cover'
                        objectPosition='center'
                        quality={100}
                    />
                </div>
            </div>
            <div
                style={{ position: 'relative', width: '100%', height: '270px' }}
                className="mobile-only">
                <Image
                    src={hero.MobileHeroImage}
                    alt={hero.heroTitle}
                    layout="fill"
                    objectFit='cover'
                    objectPosition='center'
                    quality={100}
                />
            </div>
            {hero.DisplayElectionNumber && (
                <div className={styles.circleWrapper}>
                    <figure className={styles.circle}>
                        <div className={styles.textWrapper}>
                            <span className={styles.circleText}>{hero.ElectionNumber}</span>
                        </div>
                    </figure>
                </div>
            )}
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>{hero.HeroTitle}</h1>
                    <h3>{hero.HeroSubtitle}</h3>
                    {hero.CTA && (
                        <div className="buttonWrapper">
                            <a className={`btn ${styles.heroBTN}`}
                                href={hero.CTALink}
                            >
                                {hero.CTA}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section >
    )
}

export default Hero
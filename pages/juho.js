import Meta from "@components/Meta"
import Hero from "@components/Hero"
import ThemeBlock from "@components/ThemeBlock"

const aboutMe = ({ meta, hero, themes, contact }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="Juho">
                <Hero hero={hero} />
                <ThemeBlock
                    themes={themes}
                />
            </main>
        </>
    )
}

export default aboutMe

export async function getStaticProps() {
    const aboutMe = await import(`../content/aboutMe.json`)

    return {
        props: {
            meta: {
                title: aboutMe.meta.title,
                description: aboutMe.meta.description,
                url: aboutMe.meta.url,
                image: aboutMe.meta.image
            },
            hero: {
                HeroTitle: aboutMe.Hero.HeroTitle,
                HeroSubtitle: aboutMe.Hero.HeroSubtitle,
                DesktopHeroImage: aboutMe.Hero.DesktopHeroImage,
                MobileHeroImage: aboutMe.Hero.MobileHeroImage,
            },
            themes: {
                themes: aboutMe.TextImageSection.themes
            },
        }
    }
}
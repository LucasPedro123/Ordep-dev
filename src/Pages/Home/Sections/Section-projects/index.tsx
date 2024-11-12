import { CardVariants } from '../../../../animations/animations.motion'
import { Button2 } from '../../../../Components/Button'
import * as S from './style'

export const SectionProjects = () => {
    const projectInfo = [
        {
            title: 'Hazel - Clean Minimalist Multi-Pu...',
            label: 'app',
            image: 'https://lirp.cdn-website.com/1984fff8/dms3rep/multi/opt/Captura+de+Tela+2022-02-04+a-s+11.18.01-640w.png',
        },
        {
            title: 'Hazel - Clean Minimalist Multi-Pu...',
            label: 'app',
            image: 'https://lirp.cdn-website.com/1984fff8/dms3rep/multi/opt/Captura+de+Tela+2022-02-04+a-s+11.18.01-640w.png',
        },
        {
            title: 'Hazel - Clean Minimalist Multi-Pu...',
            label: 'app',
            image: 'https://lirp.cdn-website.com/1984fff8/dms3rep/multi/opt/Captura+de+Tela+2022-02-04+a-s+11.18.01-640w.png',
        }
    ]


    return (
        <S.Container>
            <S.Title>Projects</S.Title>
            <S.Wrapper>
                <S.Cards>
                    {
                        projectInfo.map((e, i) => (
                            <S.Card
                                variants={CardVariants}
                                initial={CardVariants.initial}
                                whileInView={CardVariants.animate}
                                exit={CardVariants.exit}
                                transition={{duration: 0.3 * i, delay: 0.1 * i}}
                                key={i}
                            >
                                <S.CardWrapper>
                                    <S.CardImage src={e.image} />
                                    <S.CardTitle>{e.title}</S.CardTitle>
                                </S.CardWrapper>
                                <S.CardLabel>{e.label}</S.CardLabel>
                            </S.Card>
                        ))
                    }
                </S.Cards>
                <Button2 link='/' content='Saiba Mais' />
            </S.Wrapper>
        </S.Container>
    )
}
import { fadeInImage, fadeInUp } from '../../../../animations/animations.motion';
import { SectionImage1 } from '../../../../assets/Images';
import { Title } from '../../../../Components';
import {Button2} from '../../../../Components/Button';
import * as S from './style';

const SectionWebSolution: React.FC = () => {
    return (
        <S.Container
            variants={fadeInUp}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            exit={fadeInUp.exit}
            transition={fadeInUp.transition}
        >
            <S.Wrapper>
                <S.Content>
                    <Title content='Soluções  para Impulsionar Seu Negócio'/>
                    <S.Description>Cada projeto é único. Desenvolvido em soluções sob medida, criadas exclusivamente para atender às suas necessidades e as do seu público. Com foco na eficiência e inovação, entregamos resultados que fazem a diferença no seu dia a dia.</S.Description>
                </S.Content>
                <Button2 link='/#contact' content='Saiba Mais'/>
            </S.Wrapper>
            <S.ImageContainer
                initial={fadeInImage.initial}
                whileInView={fadeInImage.animate}
                exit={fadeInImage.exit}
                transition={fadeInImage.transition}
            >
                <S.Image src={ SectionImage1} alt='Imagem de pessoas com telas de navegadores atrás'  loading="lazy"/>
            </S.ImageContainer>
        </S.Container>
    )
}

export default SectionWebSolution;
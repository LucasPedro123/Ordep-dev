import styled from "styled-components";
import {Link} from 'react-router-dom'
import { IconPapperSubmit } from "../../assets/Images";

export const Container = styled.footer`
    padding-top: 140px;
    padding-bottom: 32px;
    gap: 80px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme})=> theme.colors.secondary500};
`

export const Title = styled.h1`
    font-weight: ${({theme})=> theme.fontWeight.bold};
    font-size: ${({theme})=> theme.fontSizes.headline500};
    color:  ${({theme})=> theme.colors.white};
    line-height: 34px;
`
export const Description = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.regular};
    font-size: ${({theme})=> theme.fontSizes.paragraphP2};
    color:  ${({theme})=> theme.colors.white};
    line-height: 30px;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 169px;
`

export const WrapperText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 240px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const ColumnName = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.bold};
    font-size: ${({theme})=> theme.fontSizes.paragraphP2};
    line-height: 22px;
    color:  ${({theme})=> theme.colors.white};
`

export const Value = styled(Link)`
    font-weight: ${({theme})=> theme.fontWeight.regular};
    font-size: ${({theme})=> theme.fontSizes.paragraphP3};
    color:  ${({theme})=> theme.colors.white};
    line-height: 20px;
`
export const Description2 = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.regular};
    font-size: ${({theme})=> theme.fontSizes.paragraphP3};
    color:  ${({theme})=> theme.colors.white};
    line-height: 20px;
`

export const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;
`

export const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    width: 247px;
    height: 49px;
    background: ${({theme})=> theme.colors.white};
    border-radius: 8px;
`
export const Input = styled.input`
    width: 90%;
    height: 100%;
    padding-inline-start: 20px;
    padding-block: 16px;
    border: none;
    border-radius: 8px;
    font-weight: ${({theme}) => theme.fontWeight.medium};
    font-size: ${({theme}) => theme.fontSizes.paragraphP3};
    line-height: 19px;
    color: ${({theme}) => theme.colors.gray};

    &:focus{
        outline: none;
    }

    &::placeholder {
        font-weight: ${({theme}) => theme.fontWeight.medium};
        font-size: ${({theme}) => theme.fontSizes.paragraphP3};
        line-height: 19px;
        color: ${({theme}) => theme.colors.gray};
    }
`

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-inline-end: 20px;
    width: 20%;
    height: 40px;

    background: ${({theme})=> theme.colors.primary500};
    border-radius: 5px;
`

export const ImagePaper = styled.div`
    background-image: url(${IconPapperSubmit});
    background-repeat: none;
    background-size: 100%;
    width: 20px;
    height: 20px;
`

export const Wrapper = styled.div`
    padding-top: 20px;
    border-top: 1px solid ${({theme})=> theme.colors.secondary400};
    width: 100%;
`
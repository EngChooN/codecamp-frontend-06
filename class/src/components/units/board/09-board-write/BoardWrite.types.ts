import { ChangeEvent } from 'react'

export interface IBoardWriteProps{
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    callGraphqlApi:  () => void
    onCLickUpdate: () => void
    isActive: boolean
    isEdit: boolean
    data?: any
}

export interface ISubmitButtonProps{
    isActive: boolean
}

export interface IMyVariables {
            number: number
            writer?: string
            title?: string
            contents?: string
}
        
export interface IBoardWriteProps {
    isEdit: boolean
    data?: any
}

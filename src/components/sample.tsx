import React, { FC } from 'react'

export interface SampleProps {
    message: string
}

export const Sample:FC<SampleProps> = ({message}) => {
    return (
        <div>Sample: {message}</div>
    )
}
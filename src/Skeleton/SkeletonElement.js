import React from 'react'
import { Shimmer } from './Shimmer'
import './Skeleton.css'

const SkeletonElement = ({ type }) => {
    const elementClassName = `skeleton ${type}`
    
    return (
        <div className={elementClassName}>
            <Shimmer />
        </div>
    )
}

export { SkeletonElement }
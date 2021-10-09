import React from 'react'
import { SkeletonElement } from './SkeletonElement'

const SkeletonUserProfile = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-user">
                <div className="skeleton-picture">
                    <SkeletonElement type="profile" />
                </div>
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
        </div>
    )
}

export { SkeletonUserProfile }
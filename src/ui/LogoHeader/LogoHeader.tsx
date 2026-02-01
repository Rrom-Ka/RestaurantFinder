import LogoIcon from '../../assets/stair.svg?react'
import './logoHeader.css'

export const LogoHeader = () => {
    return (
        <div className="logo">
            <LogoIcon width={16} height={16} className="logo__icon" />
            <span>Eats</span>
        </div>
    )
}


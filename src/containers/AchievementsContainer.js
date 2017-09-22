import { connect } from 'react-redux'

import Achievements from '../components/Achievements'


const mapStateToProps = state => {
    return {
        achievements: state.achievements,
    }
}

const AchievementsContainer = connect(mapStateToProps)(Achievements)

export default AchievementsContainer
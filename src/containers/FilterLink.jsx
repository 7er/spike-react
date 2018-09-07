import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import PropTypes from 'prop-types'


const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

function mapDispatchToProps(dispatch, ownProps) {
  return ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  })
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

component.propTypes = {
  filter: PropTypes.string
}

export default component

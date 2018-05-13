import React from  'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
  let input

  return (
    <section>
      <span>
      <input id="new-message"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.dispatch(input.value, 'Me')
            input.value = ''
          }
        }}
        type="text"
        ref={(node) => {
          input = node
        }}
      />
    </span>
    </section>
  )
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage
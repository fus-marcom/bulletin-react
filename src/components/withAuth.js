import React from 'react'
import { Redirect } from 'react-router-dom'

const withAuth = Comp => {
  return class AuthWrapped extends React.Component {
    state = {
      auth: true
    }
    componentWillReceiveProps (newProps) {
      const { data } = newProps
      if (
        data &&
        data.error &&
        data.error.networkError &&
        data.error.networkError.message === 'Unauthorized'
      ) {
        this.setState({
          auth: false
        })
      }
    }
    render () {
      return (
        <div>
          {this.state.auth ? (
            <Comp {...this.props} />
          ) : (
            <Redirect to={{ pathname: '/login' }} />
          )}
        </div>
      )
    }
  }
}

export default withAuth

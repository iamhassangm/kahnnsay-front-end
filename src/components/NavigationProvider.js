import React, { useState, useEffect, createContext } from 'react';

export const NavigationContext = createContext()

// export default function NavigationProvider(props) {
//   const [ state, setState ] = useState({})
//   useEffect(() => {
//     setState({
//       pathname: window.location.pathname,
//       navigate: navigate
//     });
//   },[])
//
//   const navigate = (pathname) => {
//     setState({pathname})
//
//     window.history.pushState(null, null, pathname)
//   }
//
//   return (
//     <NavigationContext.Provider value={state}>
//       {props.childern}
//     </NavigationContext.Provider>
//   )
// }

export default class NavigationProvider extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      pathname: window.location.pathname,
      navigate: this.navigate,
    }


    window.onpopstate = () => {
      this.setState({ pathname: window.location.pathname })
    }
  }

  render() {

    return (
      <NavigationContext.Provider value={this.state}>
        {this.props.children}
      </NavigationContext.Provider>
    )
  }


  navigate = (pathname) => {
    this.setState({ pathname })


    window.history.pushState(null, null, pathname)
  }
}
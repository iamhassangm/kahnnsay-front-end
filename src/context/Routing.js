import React, { useState, useEffect, useMemo, createContext } from 'react'
/* Simple object which we use to set and 
 * identify the pages in our router 
 */
export const pagesMapping = { 
  home: "home",
  library: "library"
}

export const RoutingContext = createContext({ page: pagesMapping.home, payload: null })

export default function Router({ children }) {
  const uriParams = (uri) => {
    let params = uri.pathname.slice(1).split("/")
    const urlPath = params[0] 
    const id = params[1]
    return [urlPath, id]
  }
  /* Read the urlPath, e.g. '/about' or '/' */
  const [urlPath, id] = uriParams(window.location)
  // let params = window.location.pathname.slice(1).split("/")
  // const urlPath = params[0]
  // const id = params[1]
  /* Set the default page to Home if not specified otherwise in the URL */
  
  const [page, setPage] = useState(urlPath || pagesMapping.home)
  const [payload, setPayload] = useState({id: id}|| null)
  
  const value = useMemo(
    () => {
      if (page != window.location.pathname.slice(1)) {
         window.history.pushState(null, null, `./${page}`)
      }
     
     return { page, setPage, payload, setPayload } 
    }, 
    [page, setPage, payload, setPayload]
  )

  useEffect(() => {
    window.onpopstate = () => {
      setPage(window.location.pathname.slice(1))
    }
  }, [])
  
  return (
    <RoutingContext.Provider value={value}>
      {children}
    </RoutingContext.Provider>
  )
}
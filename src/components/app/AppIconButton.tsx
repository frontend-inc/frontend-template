import React, { useState, useEffect } from 'react'
import { useApps } from 'hooks'
import { useMenu } from 'frontend-mui/hooks'
import { Menu, MenuItem, ListItemIcon, IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import AppIcon from 'containers/common/apps/AppIcon'

const AppSelect: React.FC = () => {

  const router = useRouter()

  const { apps, findApps } = useApps()
  const { app_id: appId } = router?.query 
  
  const [activeApp, setActiveApp] = useState(null)

  const {
    open,
    anchorEl,
    closeMenu,
    toggleMenu 
  } = useMenu()

  const handleClick = (app) => {    
    closeMenu()
    router.push(`/editor/${app?.handle}`)
  }

  useEffect(() => {
    if(appId){
      findApps()
    }
  }, [appId])

  useEffect(() => {
    if(appId && apps?.length > 0){
      setActiveApp(apps.find(app => app.handle == appId))
    }
  }, [appId, apps])
  
  return(
    <>
      <IconButton
        onClick={ toggleMenu }
        sx={ sx.root }  
      >
        <AppIcon app={ activeApp } />
      </IconButton>
      <Menu 
        anchorEl={ anchorEl }
        open={ open }
        onClose={ closeMenu }        
      >
        { apps.map((app) => (
          <MenuItem 
            key={ app.id } 
            onClick={() => handleClick(app) }             
          >
            <ListItemIcon>
              <AppIcon app={ app } />
            </ListItemIcon>
            { app.name }
          </MenuItem>
        )) }
      </Menu>
    </>
  )
}

export default AppSelect

const sx = {
  root: {
    p: '4px',
    justifyContent: {
			xs: 'center',
			lg: 'flex-start',
		},
		minWidth: '30px',
		borderRadius: (theme) => theme.shape.borderRadius,
  }
}
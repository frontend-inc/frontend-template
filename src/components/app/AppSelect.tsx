import React, { useContext, useEffect } from 'react'
import { useApps } from 'hooks'
import { Select, MenuItem, ListItemIcon } from '@mui/material'
import { useRouter } from 'next/router'
import AppIcon from 'containers/common/apps/AppIcon'

const AppSelect: React.FC = () => {

  const router = useRouter()

  const { loading, apps, findApps } = useApps()

  const { app_id: appId } = router?.query 

  const handleChange = (ev) => {
    const { value } = ev.target
    router.push(`/editor/${value}`)
  }

  useEffect(() => {
    if(appId){
      findApps()
    }
  }, [appId])
  
  return(    
    <Select 
      disableUnderline
      sx={ sx.root } 
      value={ appId } 
      onChange={ handleChange }        
    >
      { apps.map((app) => (
        <MenuItem key={ app.id } value={ app.handle }>
          <ListItemIcon>
            <AppIcon app={ app } />
          </ListItemIcon>
          { app.name }
        </MenuItem>
      ))}
    </Select>    
  )
}

export default AppSelect

const sx = {
  root: {
    width: "100%",
    minWidth: '160px',
    height: "50px",  
    '.MuiSvgIcon-root ': {
      fill: theme => theme.palette.text.primary,
    },    
    boxShadow: "none",
    ".MuiOutlinedInput-notchedOutline": { border: 0 },
    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
      {
        border: 0,
      },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        border: 0,
      },
  }
}
import React from 'react'
import SettingSec1 from '../components/settings/sec1'
import ThemeButton from '../components/settings/ThemeButton'

function SettingsPage() {
  return (
    <div className='flex flex-col  justify-center items-center p-8'>
      <SettingSec1/>
      <ThemeButton/>
    </div>
  )
}

export default SettingsPage
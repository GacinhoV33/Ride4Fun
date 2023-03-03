import React from 'react'
import { useTheme } from '@mui/material';
import { tokens } from "../../theme";

const OurTeam: React.FC = () => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '1.5vh'}}>
      <h1 style={{color: colors.primary[100]}}> Poznaj naszą kadrę </h1>
    </div>
  )
}

export default OurTeam;
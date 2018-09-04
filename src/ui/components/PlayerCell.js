import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

const PlayerCell = ({ 
  player, 
  inProgress, 
  blend 
}) => (
  <TableRow key={player.pseudo}>
    <TableCell>
      {player.pseudo}
    </TableCell>
    <TableCell style={{}}>
      <div style={{ display: 'flex', flexDirection:'row'}}>
        <span>RGB({player.token.color.r}, {player.token.color.g}, {player.token.color.b})</span>
        <span style={{ display:'inline-block', marginLeft: '1em', width: '15px', background: `rgb(${player.token.color.r}, ${player.token.color.g}, ${player.token.color.b})`, borderRadius:'50%' }}></span>
      </div>
    </TableCell>
    <TableCell>
      {player.score || 400}
    </TableCell>
    <TableCell>
      <Button
        variant='contained'
        color='primary'
        disabled={inProgress}
        onClick={e => {e.preventDault(); blend(player.address, player.token);}}
      >
        { player.token.blendingPrice }
      </Button>
    </TableCell>
  </TableRow>
)

export default PlayerCell;
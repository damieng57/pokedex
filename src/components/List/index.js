import React from 'react';
import clsx from 'clsx';
import List from 'react-virtualized/dist/commonjs/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import useStyles from './style';
import pikachuDizzy from '../../../assets/pikachu_dizzy.png';


const listWidth = 240;

const CustomList = (props) => {
  const classes = useStyles();

  const _rowRenderer = () => {
    return props.items.length === 0 
      ? null
      : props.items.map((val) => <ListItem key={val.name} button>
        <ListItemText primary={val.name} />
      </ListItem>
    );
  };

  const _noRowsRenderer = () => {
    return <div>
        <img src={pikachuDizzy} alt="Pikachu is dizzy - No pokemon in the list" width="300" />
      </div>

    };

  return <div className={classes.list}>
    <List
    component="nav"
    height={400} width={300}
      noRowsRenderer={_noRowsRenderer}
      rowCount={50}
      rowHeight={46}
      rowRenderer={_rowRenderer}
    />
  </div>
}

export default CustomList;
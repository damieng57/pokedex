import { makeStyles } from '@material-ui/core/styles';

const listWidth = 240;

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  item: {}
}));

export default useStyles;
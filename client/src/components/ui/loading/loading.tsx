import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { If } from 'react-haiku';

type LoadingTypeProps = {
  open: boolean;
};

function Loading({ open }: LoadingTypeProps) {
  return (
    <If isTrue={open}>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </If>
  );
}

export default Loading;

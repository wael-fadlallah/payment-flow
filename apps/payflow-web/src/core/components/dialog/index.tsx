'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface AlertDialogProps {
  text: string;
  title: string;
  open: boolean;
  onClose: () => void;
  onPrimaryButtonPress: () => void;
  onSecondaryButtonPress?: () => void;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  onClose,
  onPrimaryButtonPress,
  onSecondaryButtonPress = () => {},
  primaryButtonLabel = 'Confirm',
  secondaryButtonLabel = 'cancel',
  title,
  text,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onSecondaryButtonPress();
            onClose();
          }}
        >
          {secondaryButtonLabel}
        </Button>
        <Button onClick={onPrimaryButtonPress} autoFocus>
          {primaryButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;

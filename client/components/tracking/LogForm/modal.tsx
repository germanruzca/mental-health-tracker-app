'use client';

import { toast } from 'sonner';
import TrackingForm from './';
import { Overlay, Modal, ModalHeader, ModalTitle, CloseButton } from './styled';

interface Props {
  onClose: () => void;
}

export default function TrackingFormModal({ onClose }: Props) {
  const handleOnSucess = () => {
    toast.success('Log saved successfully!');
    onClose();
  }
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>How are you doing today?</ModalTitle>
          <CloseButton onClick={onClose}>x</CloseButton>
        </ModalHeader>
        <TrackingForm onSuccess={handleOnSucess} onCancel={onClose} />
      </Modal>
    </Overlay>
  );
}
'use client';

import TrackingForm from './';
import { Overlay, Modal, ModalHeader, ModalTitle, CloseButton } from './styled';

interface Props {
  onClose: () => void;
}

export default function TrackingFormModal({ onClose }: Props) {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>How are you doing today?</ModalTitle>
          <CloseButton onClick={onClose}>x</CloseButton>
        </ModalHeader>
        <TrackingForm onCancel={onClose} />
      </Modal>
    </Overlay>
  );
}
import React, { useState } from "react";
import OverlayModal from "./OverlayModal";

function App() {
  const [overlayModalIsOpen, setOverlayModalIsOpen] = useState(false);

  const openOverlayModal = () => {
    setOverlayModalIsOpen(true);
  };

  const closeOverlayModal = () => {
    setOverlayModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openOverlayModal}>Open Overlay Modal</button>
      <OverlayModal isOpen={overlayModalIsOpen} onClose={closeOverlayModal}>
        <h2>Overlay Modal Content</h2>
      </OverlayModal>
    </div>
  );
}

export default App;

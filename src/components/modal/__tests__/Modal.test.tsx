import { render, screen } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal', () => {
  it('does not render when closed', () => {
    const { container } = render(
      <Modal isOpen={false}>
        <div>Modal content</div>
      </Modal>
    );
    expect(container.querySelector('.modal-overlay')).not.toBeInTheDocument();
  });

  it('renders when open', () => {
    render(
      <Modal isOpen={true}>
        <div>Modal content</div>
      </Modal>
    );
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });
});

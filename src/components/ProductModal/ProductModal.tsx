import { Modal } from '..'
import { FooterContent } from './FooterContent';

import { ProductContent } from './ProductContent';

export const ProductModal = ({ open, updateModalState }: { open: boolean, updateModalState: (newState: boolean) => void }) => {
    return (
        <Modal title="Pizza Especial de Calabresa"
            updateModalState={updateModalState}
            open={open} content={<ProductContent />}
            footerContent={<FooterContent />}

        />
    )
}
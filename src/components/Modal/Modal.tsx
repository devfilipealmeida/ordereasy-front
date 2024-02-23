import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export const Modal = ({
    open, title, content, footerContent, updateModalState
}: {
    open: boolean,
    updateModalState: (newState: boolean) => void,
    title: string,
    content: React.ReactNode,
    footerContent: React.ReactNode
}) => {
    return (
        <div className={`fixed inset-0 overflow-y-auto ${open ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
                <div className="relative bg-bg-gray-main rounded-sm w-screen sm:w-2/4 mx-auto">
                    <div className="flex bg-primary-color rounded-lg mb-2 items-center justify-start pt-3 px-3">
                        <ArrowLeftIcon onClick={() => updateModalState(false)} width={15} height={15} className='stroke-[0.25rem]' />
                        <h2 className="text-base font-semibold text-black ml-1">{title}</h2>
                        <div className="border-b border-black border-solid">
                            {/* Linha */}
                        </div>
                    </div>
                    <div className='overflow-auto h-5/6 sm:max-h-80'>
                        {content}
                    </div>
                    <footer>
                        {footerContent}
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Modal;

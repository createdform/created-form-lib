import {FC, ReactNode} from 'react';

type Props = {
    children: ReactNode
}


const WrappedForm: FC<Props> = ({children}: Props) => {
    return (<div className="p-8 h-screen bg-orange-300">
                {children}
            </div>
    )
}

export default WrappedForm;

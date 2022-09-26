import {FC, ReactNode} from 'react';

type Props = {
    children: ReactNode
}


const WrappedForm: FC<Props> = ({children}: Props) => {
    return (<div className="p-8 h-full bg-orange-200">
            <form method="post" action="https://createdform.com/api/submission/create">
                {children}
            </form>
        </div>
    );
};

export default WrappedForm;

import {FC, ReactNode} from 'react';

type Props = {
    children: ReactNode
}


const WrappedForm: FC<Props> = ({children}: Props) => {
    return (<div className="p-8 h-screen bg-orange-500">
                <form method="post" action="http://localhost:3000/api/submission/create">
                    {children}
                    <button type="submit">Submit</button>
                </form>
            </div>
    )
}

export default WrappedForm;

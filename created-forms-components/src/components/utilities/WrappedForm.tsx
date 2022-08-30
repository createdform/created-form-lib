import {FC, ReactNode} from 'react';

type Props = {
    children: ReactNode
}


const WrappedForm: FC<Props> = ({children}: Props) => {
    return (<div className="p-8 h-screen bg-orange-200">
            <form method="post" action="https://createdform.com/api/submission/create">
                {children}
                <div className="bg-white p-4 rounded flex justify-center w-full">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-300 text-white p-2 px-6 rounded">
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
};

export default WrappedForm;

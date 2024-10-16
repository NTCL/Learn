import {useEffect, useRef} from 'react';

const RefToDom = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <input type='text' ref={inputRef}/>
        </div>
    );
};

export default RefToDom;
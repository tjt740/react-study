import React, {
    forwardRef,
    useImperativeHandle,
    useState,
    useCallback,
    useRef,
} from 'react';
import { createRoot } from 'react-dom/client';

// Before

// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

//  After
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

const div = document.createElement('div');
div.id = 'message-id-dom';
document.body.appendChild(div);
let onClose;
let onShow;
function Message({ root }) {
    const [config, setConfig] = useState({
        hide: true,
        message: '内容为空哦~',
    });

    console.log(onClose, root);

    onClose = useCallback(() => {
        setConfig({
            hide: true,
        });
    }, []);

    onShow = useCallback(() => {
        setConfig({
            hide: false,
        });
    }, []);

    const message = useCallback((value) => {
        setConfig({
            hide: false,
            message: value,
        });
    }, []);

    const DOM = !config.hide ? <h1> {config.message}</h1> : <></>;
    return DOM;
}

// Before
// const ReactMessage = ReactDOM.render(<Message />, div);

// After
// const root = document.getElementById('root');

// 塞入app节点中
const ReactMessage = createRoot(div);
ReactMessage.render(<Message root={ReactMessage} />);
// 销毁
// ReactMessage.unmount();
export default ReactMessage;

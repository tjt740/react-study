import './App.css';

const name = '谭金涛';
const flag = false;
const arr = [1, 2, 3, 4];
const json = {
    a: 1,
    b: 2,
    c: 3,
};
const fn = () => '箭头函数';
function fn2() {
    return '有名函数';
}
function App() {
    return (
        /* JSX中规范注释(1) */
        /* { 变量 } ←插值表达式标准写法  */
        <div>
            {/* JSX中规范注释(2) */}

            {/* 1.渲染字符串 */}
            {name}
            {/* 2.渲染三目运算符 */}
            {flag ? '对' : '错'}
            {/* 3.渲染Array,必须取下标,无法直接渲染 */}
            {arr[2]}
            {/* 4.渲染JSON对象,必须取下标,无法直接渲染 */}
            {json.a}
            {/* 5.渲染箭头函数 */}
            {fn()}
            {/* 6.渲染自执行函数 */}
            {(function fun() {
                return '自执行函数';
            })()}
            {/* 7.有名函数 需要用call改变this指向*/}
            {fn2.call(this)}

            {/* 8.逻辑运算符 */}
            {1 + 2}
            {/* 9.操作符*/}
            {name.slice(0, 1)}
        {arr.join()}
        
        

        </div>
    );
}

export default App;

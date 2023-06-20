import React, { useEffect, useRef } from 'react';
// 测试localForage
import localforage from 'localforage';

import Message from './message';
import './index.css';

import {
    BetaSchemaForm, // schema表单
    ProFormDependency, // 联动表单
    ProCard,
    ProForm,
    ProFormGroup,
    ProFormList,
    ProFormText,
    ProFormSelect,
    ProFormRadio,
} from '@ant-design/pro-components';

import { Button, Collapse, Input } from 'antd';
import { schema } from './schema';

const itemRenderProps = {
    input: <Input />,
};

const { Panel } = Collapse;

export default function MessageCom() {
    // useEffect(() => {
    //     window.Message = Message;

    //     // 回调API形式设置数据，获取数据。
    //     localforage.setItem('name', '谭金涛', function (err) {
    //         localforage.getItem('name', function (err, value) {
    //             console.log(value); // '谭金涛'
    //         });
    //     });

    //     // ES6 Promises 形式
    //     localforage
    //         .setItem('info', {
    //             age: '24',
    //             work: 'IT',
    //         })
    //         .then(function () {
    //             return localforage.getItem('info');
    //         })
    //         .then(function (value) {
    //             console.log('value：', value); // {age: '24', work: 'IT'}
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //         });
    // }, []);

    const formRef = useRef(null);
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <div className="form-container">
                {/* <BetaSchemaForm
                    shouldUpdate={false}
                    layoutType="Form"
                    onFinish={async (values) => {
                        console.log(values);
                    }}
                    columns={schema(itemRenderProps)}
                /> */}
                <Collapse defaultActiveKey={['a']} onChange={onChange}>
                    <Panel header="是否有效" key="a">
                        <ProForm
                            layout="horizontal"
                            formRef={formRef}
                            onFinish={async (e) => console.log(e)}
                            initialValues={{ 'radio-group': 'a' }}
                            onValuesChange={(form, values) => {
                                // console.log(form, values);
                            }}
                        >
                            <ProFormRadio.Group
                                name="radio-group"
                                label=""
                                options={[
                                    {
                                        label: '有效',
                                        value: 'a',
                                    },
                                    {
                                        label: '无效',
                                        value: 'b',
                                    },
                                ]}
                            />
                            <ProFormList
                                name="users"
                                label=""
                                min={1}
                                copyIconProps={false} // 显隐copy图标
                                // itemContainerRender={(doms) => {
                                //     return <ProForm.Group>{doms}</ProForm.Group>;
                                // }}
                                itemRender={(
                                    { listDom, action },
                                    { index }
                                ) => {
                                    return (
                                        <ProCard
                                            // bordered
                                            key={index + 1}
                                            extra={action}
                                            // title={record?.name}
                                            style={{ marginBlockEnd: 8 }}
                                            // title={`子级${index + 1}`}
                                            // bodyStyle={{ paddingBlockEnd: 0 }}
                                        >
                                            <Collapse
                                                // defaultActiveKey={[index + 1]}
                                                // onChange={(key) => {
                                                //     console.log(key);
                                                // }}
                                                style={{ marginBottom: 16 }}
                                                // collapsible={'disabled'}
                                            >
                                                <Panel
                                                    header={`子级${index + 1}`}
                                                    key={index + 1}
                                                    extra={
                                                        <ProFormSelect
                                                            placeholder="请选择类型"
                                                            options={[
                                                                {
                                                                    value: 'select',
                                                                    label: '选择框',
                                                                },
                                                                {
                                                                    value: 'input',
                                                                    label: '输入框',
                                                                },
                                                                {
                                                                    value: 'radio',
                                                                    label: '单选框',
                                                                },
                                                                {
                                                                    value: 'checkbox',
                                                                    label: '多选框',
                                                                },
                                                            ]}
                                                            width="sm"
                                                            name="useMode"
                                                            label="生效方式组件的类型"
                                                            onChange={(
                                                                value,
                                                                form
                                                            ) => {
                                                                console.log(
                                                                    value,
                                                                    form
                                                                );
                                                            }}
                                                        />
                                                    }
                                                >
                                                    {listDom}
                                                </Panel>
                                            </Collapse>
                                            {/* // </ProCard> */}
                                        </ProCard>
                                    );
                                }}
                                creatorButtonProps={{
                                    creatorButtonText: '添加子级数据',
                                }}
                                alwaysShowItemLabel
                            >
                                {/* {(f, index, action) => {
                                    console.log(f, index, action);
                                }} */}
                                {/* {(f, index, action) => {
                            console.log(f, index, action);
                            return (
                                <>
                                    <ProFormText
                                        initialValue={index}
                                        name="rowKey"
                                        label={`第 ${index} 配置`}
                                    />
                                    <ProFormText
                                        name="name"
                                        key="name"
                                        label="姓名"
                                    />
                                    <ProFormDependency
                                        key="remark"
                                        name={['name']}
                                    >
                                        {({ name }) => {
                                            if (!name) {
                                                return (
                                                    <span
                                                        style={{
                                                            lineHeight: '92px',
                                                        }}
                                                    >
                                                        输入姓名展示
                                                    </span>
                                                );
                                            }
                                            return (
                                                <ProFormText
                                                    name="remark"
                                                    label="昵称详情"
                                                />
                                            );
                                        }}
                                    </ProFormDependency>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            gap: '8px',
                                            height: 60,
                                        }}
                                    >
                                        <Button
                                            type="primary"
                                            key="SET"
                                            onClick={() => {
                                                action.setCurrentRowData({
                                                    name: 'New Name' + index,
                                                    remark:
                                                        'New Remark' + index,
                                                });
                                            }}
                                        >
                                            设置此行
                                        </Button>

                                        <Button
                                            type="dashed"
                                            key="clear"
                                            onClick={() => {
                                                action.setCurrentRowData({
                                                    name: undefined,
                                                    remark: undefined,
                                                });
                                            }}
                                        >
                                            清空此行
                                        </Button>
                                    </div>
                                </>
                            );
                        }} */}

                                <ProFormDependency name={['useMode']}>
                                    {({ useMode }) => {
                                        if (useMode === 'select') {
                                            return (
                                                <ProFormSelect
                                                    options={[
                                                        {
                                                            value: 'chapter',
                                                            label: '盖章后生效',
                                                        },
                                                    ]}
                                                    width="md"
                                                    name="function"
                                                    label="生效方式"
                                                />
                                            );
                                        }
                                        // 默认方式
                                        return (
                                            <ProFormText
                                                width="md"
                                                name="function"
                                                label="生效方式"
                                            />
                                        );
                                    }}
                                </ProFormDependency>
                                {/* <ProFormRadio.Group
                            name="radio-group"
                            label="Radio.Group"
                            options={[
                                {
                                    label: 'item 1',
                                    value: 'a',
                                },
                                {
                                    label: 'item 2',
                                    value: 'b',
                                },
                                {
                                    label: 'item 3',
                                    value: 'c',
                                },
                            ]}
                        /> */}
                                {/* <ProFormList
                            name="labels"
                            label="用户信息"
                            key="labels"
                            initialValue={[
                                {
                                    value: '333',
                                    label: '333',
                                },
                            ]}
                            copyIconProps={{
                                tooltipText: '复制此行到末尾',
                            }}
                            deleteIconProps={{
                                tooltipText: '不需要这行了',
                            }}
                        >
                            <ProFormGroup key="group">
                                <ProFormText name="value" label="值" />
                                <ProFormText name="label" label="显示名称" />
                            </ProFormGroup>
                        </ProFormList> */}
                            </ProFormList>
                        </ProForm>
                    </Panel>
                </Collapse>
            </div>

            {/* <button
                onClick={() => {
                    Message.onShow();
                }}
            >
                出现
            </button>
            <br />
            <button>消失</button> */}
        </>
    );
}

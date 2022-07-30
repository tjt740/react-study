import React, { useEffect } from 'react';
// import * as tools from './customize';
// console.log(tools)
import '../../index.css';
import { UseMount } from './customize';

const FnComponent = React.memo(() => {
    const url =
        'https://search.heweather.com/find?key=bc08513d63c749aab3761f77d74fe820';
    let location = '杭州';

    return (
        <>
            <div>
                {UseMount(url, location)?.HeWeather6[0].basic.map((value) => {
                    return <h3 key={value.cid}>{value.location}</h3>;
                })}
                <hr />
                {UseMount(url, '扬州')?.HeWeather6[0].basic.map((value) => {
                    return <h3 key={value.cid}>{value.location}</h3>;
                })}
            </div>
        </>
    );
});

const dataList = [
    {
        itemList: [
            {
                itemName: '红',
                securityCategoryId: 'WF3mmIka-dJHYiPD9l4MAw',
                securityId: 'JiFe3sDRvtGZXKm9sQRsCw',
                securityProductIdList: [
                    'Of3m9Adl2F-j7OSusipuxQ',
                    '-lUq8n52JTcf_zVXUeOcVg',
                    '_rc1XHOt_dhdbUt-g3F7iQ',
                    'TbH9vKmXybdFU-f4MmPWCQ',
                    'cWuHkPJUWf_L64s2gregDQ',
                    '_aXbgqSod0OQDjaBcu_Njg',
                ],
                securityPropertyId: 'rppWAnMtCpooVFUyAnlgpQ',
            },
            {
                itemName: '白',
                securityCategoryId: 'WF3mmIka-dJHYiPD9l4MAw',
                securityId: 'SKY3XjOvoW_-CPFXTV7lJA',
                securityProductIdList: [
                    'mqZPaNKiLoyiAxboAhQO5A',
                    '4Pl6Hd7JqbAeazPyZtxg5A',
                    'PS37Y_1TCy1E4t48Kg9LrQ',
                    'NJt83GheHI-LvUcRrjrZxg',
                    'aTSSk6oEn3TM02DEU3jPuA',
                    '2PkMJOTIz-KxEcoUHwTEvA',
                ],
                securityPropertyId: 'rppWAnMtCpooVFUyAnlgpQ',
            },
            {
                itemName: '蓝',
                securityCategoryId: 'WF3mmIka-dJHYiPD9l4MAw',
                securityId: '8_G7wANDba7naOo-gr4RWA',
                securityProductIdList: [
                    'YDVxsy7-npw2kIjXwWYqXA',
                    'yIAQj5MS8DTBYQYVApwwNA',
                    'ajygfh8S5R0rzwSffds2OA',
                    'DCeoYwvtnJtaqlWK84a9Mw',
                    'wsf0Vn2mGxtzXgHOS2vjkg',
                    'nHP3mZmOvVyZti5CUVbucw',
                ],
                securityPropertyId: 'rppWAnMtCpooVFUyAnlgpQ',
            },
        ],
        propertyName: '颜色',
        securityCategoryId: 'vm4mMvF-shwa6c3qjwfutw',
        securityId: 'rppWAnMtCpooVFUyAnlgpQ',
        securityProductInfoId: 'CPrZLDfzqLkP0vmgxzCnYA',
    },
    {
        itemList: [
            {
                itemName: '6g',
                securityCategoryId: 'WF3mmIka-dJHYiPD9l4MAw',
                securityId: '5sKemxic8gVLv4JBkYxAjg',
                securityProductIdList: [
                    'Of3m9Adl2F-j7OSusipuxQ',
                    '-lUq8n52JTcf_zVXUeOcVg',
                    'mqZPaNKiLoyiAxboAhQO5A',
                    '4Pl6Hd7JqbAeazPyZtxg5A',
                    'YDVxsy7-npw2kIjXwWYqXA',
                    'yIAQj5MS8DTBYQYVApwwNA',
                ],
                securityPropertyId: 'Lz3w10jJFVRDme8hIkSocg',
            },
            {
                itemName: '8g',
                securityCategoryId: 'WF3mmIka-dJHYiPD9l4MAw',
                securityId: '-KfCrUM6Pug4YgCSagCdHg',
                securityProductIdList: [
                    '_rc1XHOt_dhdbUt-g3F7iQ',
                    'TbH9vKmXybdFU-f4MmPWCQ',
                    'PS37Y_1TCy1E4t48Kg9LrQ',
                    'NJt83GheHI-LvUcRrjrZxg',
                    'ajygfh8S5R0rzwSffds2OA',
                    'DCeoYwvtnJtaqlWK84a9Mw',
                ],
                securityPropertyId: 'Lz3w10jJFVRDme8hIkSocg',
            },
            {
                itemName: '12g',
                securityCategoryId: 'WF3mmIka-dJHYiPD9l4MAw',
                securityId: 'pw-B_3gLZcxcy5YaI6u8bA',
                securityProductIdList: [
                    'cWuHkPJUWf_L64s2gregDQ',
                    '_aXbgqSod0OQDjaBcu_Njg',
                    'aTSSk6oEn3TM02DEU3jPuA',
                    '2PkMJOTIz-KxEcoUHwTEvA',
                    'wsf0Vn2mGxtzXgHOS2vjkg',
                    'nHP3mZmOvVyZti5CUVbucw',
                ],
                securityPropertyId: 'Lz3w10jJFVRDme8hIkSocg',
            },
        ],
        propertyName: '内存',
        securityCategoryId: 'vm4mMvF-shwa6c3qjwfutw',
        securityId: 'Lz3w10jJFVRDme8hIkSocg',
        securityProductInfoId: 'CPrZLDfzqLkP0vmgxzCnYA',
    },
    {
        itemList: [
            {
                itemName: '6寸',
                securityCategoryId: 'WF3mmIka-dJHYiPD9l4MAw',
                securityId: 'JxCc84TAsWhnbynO9vahhQ',
                securityProductIdList: [
                    'Of3m9Adl2F-j7OSusipuxQ',
                    '_rc1XHOt_dhdbUt-g3F7iQ',
                    'cWuHkPJUWf_L64s2gregDQ',
                    'mqZPaNKiLoyiAxboAhQO5A',
                    'PS37Y_1TCy1E4t48Kg9LrQ',
                    'aTSSk6oEn3TM02DEU3jPuA',
                    'YDVxsy7-npw2kIjXwWYqXA',
                    'ajygfh8S5R0rzwSffds2OA',
                    'wsf0Vn2mGxtzXgHOS2vjkg',
                ],
                securityPropertyId: 'o2NiJO-Vk3YAIMHXL-nvCg',
            },
            {
                itemName: '12寸',
                securityCategoryId: 'WF3mmIka-dJHYiPD9l4MAw',
                securityId: 'bJvrxbwNzFyC5eHbeFWFVQ',
                securityProductIdList: [
                    '-lUq8n52JTcf_zVXUeOcVg',
                    'TbH9vKmXybdFU-f4MmPWCQ',
                    '_aXbgqSod0OQDjaBcu_Njg',
                    '4Pl6Hd7JqbAeazPyZtxg5A',
                    'NJt83GheHI-LvUcRrjrZxg',
                    '2PkMJOTIz-KxEcoUHwTEvA',
                    'yIAQj5MS8DTBYQYVApwwNA',
                    'DCeoYwvtnJtaqlWK84a9Mw',
                    'nHP3mZmOvVyZti5CUVbucw',
                ],
                securityPropertyId: 'o2NiJO-Vk3YAIMHXL-nvCg',
            },
        ],
        propertyName: '尺寸',
        securityCategoryId: 'vm4mMvF-shwa6c3qjwfutw',
        securityId: 'o2NiJO-Vk3YAIMHXL-nvCg',
        securityProductInfoId: 'CPrZLDfzqLkP0vmgxzCnYA',
    },
];
class UseXxx extends React.Component {
    state = {
        mockDataList: [],
    };

    

    componentDidMount() {
   
        
        const result = dataList.reduce((prev, cur) => {
            return prev.concat({...cur,activeBtn:null})
        }, []);
        this.setState({ mockDataList: result });
    }

    fn = (v, i, _i) => {
        // console.log(v, i, _i)

        let changeDataList = [...dataList];

        changeDataList[i].itemList.forEach((item) => (item.activeBtn = false));

        changeDataList[i].hhhhhhhhhhhhhhhhhhhhValuehhhhhhhhhhhhhhh = v.itemName;

        changeDataList[i].itemList[_i].activeBtn = true;

        console.log(changeDataList);

        this.setState({ mockDataList: changeDataList });
    };

    render() {
        return (
            <div>
                <h1>👨‍👦 自定义hook</h1>
                {/* <FnComponent /> */}

                {/* {console.log('mock:', this.state.mockDataList)} */}
                {this.state.mockDataList.map((v, idx) => {
                    return (
                        <p key={v.securityId}> 
                            {v.propertyName}
                            {this.state.mockDataList[idx].itemList.map((value,index) => {
                                return <button className={this.state.mockDataList[idx].itemList[index].activeBtn ? 'active' : ''} onClick={() => {                 
                                    this.fn(value,idx,index);
                                } }>{value.itemName}</button>;
                            })}
                         </p> 
                    );
                })}
            </div>
        );
    }
}

export default UseXxx;

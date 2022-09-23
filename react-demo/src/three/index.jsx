import React, { useEffect, useRef } from 'react';

// 导入动画库
import gsap from 'gsap';
import { resData } from './taskDTO';

// 导入gui
import * as dat from 'dat.gui';
const THREE = window.THREE;
const gui = new dat.GUI();

var defaults = {
    result: [],
    detailList: [],
    dataList: [],
    detailNum: 0,
    cartonNum: 0,
    taskNum: 0,
    cartonList: [],
};
var detailIndex = 0;

// 创建场景
const scene = new THREE.Scene();
// 初始化相机
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    5000
);

//初始化网格
const grid = new THREE.GridHelper(1500, 10, 0xffffff, 0x333333);

const raycaster = new THREE.Raycaster();
// 初始化渲染器
const renderer = new THREE.WebGLRenderer({
    antialias: true, //开启锯齿
    alpha: true, //透明度
});
// 初始化轨道控制器
const controls = new window.OrbitControls(camera, renderer.domElement);

// 纸箱三维尺寸
var cartonWidth, cartonHeight, cartonLength;

export default function ThreeComponent() {
    // 容器
    const container = useRef(null);

    // 初始化纸箱
    const initBox = (xLen, yLen, zLen) => {
        cartonWidth = xLen;
        cartonHeight = yLen;
        cartonLength = zLen;

        // 声明几何体
        const geometry = new THREE.BoxGeometry(xLen, yLen, zLen);
        // 声明材质;
        const edges = new THREE.EdgesGeometry(geometry);

        // 几何体+ 材质 = 物体
        const cube = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({ color: 0xffffff })
        );

        cube.position.set(0, 0, 0);

        // 将物体添加到场景中
        scene.add(cube);

        // 添加网格
        grid.position.y = -cartonHeight / 2 - 50;
        scene.add(grid);

        return cube;
    };

    // 设置每个子级盒子
    const initObject = (width, height, length, x, y, z, cubeName) => {
        const mesh = new THREE.Object3D();
        const geometry = new THREE.BoxGeometry(width, height, length);
        // 设置随机颜色
        const color = new THREE.Color(
            Math.random(),
            Math.random(),
            Math.random()
        );
        // 设置子级盒子材质
        const material = new THREE.MeshBasicMaterial({
            color,
            // 开启透明度
            transparent: true,
            opacity: 0.7,
        });
        // 几何体 + 材质 = 物体
        const cube = new THREE.Mesh(geometry, material);

        // 子级盒子添加文字
        // const sprite= new THREE.TextSprite({
        //     textSize: 0.02,
        //     material: {
        //         color: 0x000000,
        //         transparent: true,
        //         opacity: 0.8,
        //         depthTest: false,
        //     },
        //     texture: {
        //         text: Math.random()
        //     },
        //     redrawInterval: 0,
        // });
        // cube.add(sprite);
        window.cube = cube;

        // 3D模型添加 材质和几何体
        mesh.add(cube);

        // 设置子级盒子边框
        const wideFrame = new THREE.BoxGeometry(width, height, length);
        const materialBorder = new THREE.EdgesGeometry(wideFrame);
        const lineFrame = new THREE.LineSegments(
            materialBorder,
            new THREE.LineBasicMaterial({ color: 0x000000 })
        );

        // todo: 子级盒子样式+ 动画

        mesh.add(lineFrame);
        // 装箱复位
        mesh.position.set(
            0,
            z + height / 2 - cartonHeight / 2,
            x + length / 2 - cartonLength / 2,
            'XYZ'
        );

        scene.add(mesh);
        return mesh;
    };

    const getInfoDetail = () => {
        // 获取详情
        defaults['result'] = resData;
        console.log('resData:', resData);
        for (var i = 0; i < resData.length; i++) {
            defaults['dataList'][i] = resData[i];
        }

        defaults['detailList'] = [];

        const dataList = resData.at(0).cartonDTOList.at(0);

        // 获取初始化纸箱
        const { carton } = dataList;
        const cartonMesh = initBox(carton.width, carton.height, carton.length);

        defaults['cartonList'].push(cartonMesh);
        defaults['cartonNum'] = defaults['result'].at(0).cartonDTOList.length;
        // 单个详情
        detailIndex = defaults['detailNum'] = dataList.detailList.length;

        // 渲染单个子级盒子
        for (let i = 0; i < defaults['detailNum']; i++) {
            const detail = dataList.detailList[i];
            defaults['detailList'].push(
                initObject(
                    detail.width,
                    detail.height,
                    detail.length,
                    detail.partX,
                    detail.partY,
                    detail.partZ,
                    detail.partName
                )
            );
        }
    };

    const init = () => {
        // 场景颜色
        scene.background = new THREE.Color(0x999999);

        // 调整相机位置
        camera.position.set(1200, 150, 650);
        camera.up.x = 0;
        camera.up.y = 1;
        camera.up.z = 0;
        camera.lookAt({
            x: 0,
            y: 0,
            z: 200,
        });

        const cameraGui = gui.addFolder('调整相机视角');
        cameraGui.add(camera.position, 'x').min(1).max(10000).step(10);
        cameraGui.add(camera.position, 'y').min(1).max(10000).step(10);
        cameraGui.add(camera.position, 'z').min(1).max(10000).step(10);

        scene.add(camera);
        raycaster.intersectObjects(scene.children);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.setSize(window.innerWidth, window.innerHeight);

        // 渲染函数
        function render(t) {
            controls.update();
            renderer.render(scene, camera);
            // 动画帧
            requestAnimationFrame(render);
        }

        // 控制器阻尼
        controls.enableDamping = true;

        // 渲染
        render();

        // DOM承载渲染器
        container.current.appendChild(renderer.domElement);
    };

    const exportCurrentCanvas = () => {
        const a = document.createElement('a');
        a.href = renderer.domElement.toDataURL('image/png');
        a.download = 'image.png';
        generateGif();
        console.log('下载:',a);
        // a.click()
    };

    // 生成gif
    const generateGif  =() => {
        let gif = new window.GIF({
            workers: 2,
            quality: 10,
            width: 500,
            height: 500,
            workerScript: '../../worker.js',
        });
        console.log(gif);
        console.log(renderer.domElement);
        for (let i = 0; i < 10; i++) {
            //  new Promise((resolve) => {
                setTimeout(() => {
                    console.log(i);
                    gif.addFrame(renderer.domElement, { delay: 200 });
                    // resolve();
                }, 200);
            // });
        }
        gif.on('finished', function (blob) {
            window.open(URL.createObjectURL(blob));
        });
        gif.render();
    };

    useEffect(() => {
        // 1. 初始化
        init();
        // 2. 获取详情
        getInfoDetail();
        // 3. 加载canvas
        exportCurrentCanvas();
    }, []);

    return (
        <>
            <div id="operate">
                <button
                    id="first"
                    onClick={() => {
                        for (let i = 0; i < defaults['detailNum']; i++) {
                            scene.remove(defaults['detailList'][i]);
                        }
                    }}
                >
                    清空
                </button>
                <button
                    id="prev"
                    onClick={() => {
                        if (detailIndex <= 0) {
                            return;
                        }
                        detailIndex -= 1;
                        console.log(detailIndex);
                        scene.remove(defaults['detailList'][detailIndex]);
                    }}
                >
                    上一步
                </button>
                <button
                    id="next"
                    onClick={() => {
                        if (detailIndex >= defaults['detailNum']) {
                            return;
                        }
                        scene.add(defaults['detailList'][detailIndex]);
                        detailIndex += 1;
                    }}
                >
                    下一步
                </button>
                <button
                    id="last"
                    onClick={() => {
                        detailIndex = defaults['detailNum'];
                        for (var i = 0; i < defaults['detailNum']; i++) {
                            scene.add(defaults['detailList'][i]);
                        }
                    }}
                >
                    回填
                </button>
            </div>
            <div id="container" ref={container}></div>
        </>
    );
}

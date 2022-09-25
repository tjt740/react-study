import React, { useEffect, useRef } from 'react';

// 导入动画库
// import gsap from 'gsap';
import { resData } from './taskDTO';

// 导入gui
import * as dat from 'dat.gui';

export default function ThreeComponent() {
    // 容器
    const container = useRef(null);
    // three
    const THREE = window.THREE;
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
    const grid = new THREE.GridHelper(1500, 15, 0x333333, 0x333333);
    // 选中子级盒子
    const mouse = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();
    // 初始化渲染器
    const renderer = new THREE.WebGLRenderer({
        antialias: true, //开启锯齿
        alpha: true, //透明度
    });
    // 初始化轨道控制器
    const controls = new window.OrbitControls(camera, renderer.domElement);

    // gui
    const gui = new dat.GUI();

    let defaults = {
        result: [],
        detailList: [],
        dataList: [],
        detailNum: 0,
        cartonNum: 0,
        taskNum: 0,
        cartonList: [],
    };

    let cartonWidth,
        cartonHeight,
        cartonLength,
        detailIndex = 0,
        angle = 0,
        intersected,
        boxArr = [];

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
        const containerBox = new THREE.LineSegments(
            edges
            // new THREE.LineBasicMaterial({ color: 0xffffff })
        );
        console.log(1);
        containerBox.position.set(0, 0, 0);

        // 将物体添加到场景中
        scene.add(containerBox);

        // 添加网格
        grid.position.y = -cartonHeight / 2 - 30;
        scene.add(grid);

        return containerBox;
    };

    // 设置每个子级盒子
    const initObject = (width, height, length, x, y, z, cubeName) => {
        const mesh = new THREE.Object3D();
        const geometry = new THREE.BoxGeometry(width, height, length);
        // 设置随机颜色
        const color = new THREE.Color(
            // Math.random(),
            // Math.random(),
            // Math.random()
            // 0xFFF73434
            0xffc5d951
        );
        // 设置子级盒子材质
        const material = new THREE.MeshBasicMaterial({
            color,
            // 开启透明度
            transparent: true,
            opacity: 0.9,
        });
        // 几何体 + 材质 = 物体
        const cube = new THREE.Mesh(geometry, material);

        // 子级盒子添加文字
        // todo: 子级盒子样式+ 动画

        // 3D模型添加 材质和几何体
        mesh.add(cube);

        // 设置子级盒子边框
        const wideFrame = new THREE.BoxGeometry(width, height, length);
        const materialBorder = new THREE.EdgesGeometry(wideFrame);
        const lineFrame = new THREE.LineSegments(
            materialBorder,
            new THREE.LineBasicMaterial({ color: 0x000000 })
        );

        mesh.add(lineFrame);

        // 装箱复位
        mesh.position.set(
            y + width / 2 - cartonWidth / 2 + 5,
            z + height / 2 - cartonHeight / 2 + 4,
            x + length / 2 - cartonLength / 2 + 3,
            'XYZ'
        );
        scene.add(mesh);
        boxArr.push(cube);
        return mesh;
    };

    // 获取详细数据
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
        boxArr = [];
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

    // 选中盒子
    const onMouseClick = (e) => {
        e.preventDefault();
        // 修改e精度
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersections = raycaster.intersectObjects(boxArr);
        if (intersections.length > 0) {
            if (intersected) {
                // 上一次选中的盒子
                // const { r, g, b } = intersected.material.color;
                boxArr.find((v) => v.uuid === intersected.uuid).material.color =
                    new THREE.Color(0xffc5d951);
                intersections.at(0).object.material.color = new THREE.Color(
                    0xfff04b4b
                );
                intersected = intersections[0].object;
                return;
            }

            intersected = intersections[0].object;
            intersections.at(0).object.material.color = new THREE.Color(
                0xfff04b4b
            );
        }
    };

    // 渲染函数
    const render = (t) => {
        controls.update();

        // 每次执行渲染函数render时候，角度累加0.005
        angle += 0.005;
        // 圆周运动网格模型x坐标计算  绕转半径400
        var x = 900 * Math.sin(angle);
        // 圆周运动网格模型y坐标计算  绕转半径400
        var z = 400 * Math.cos(angle);
        // 每次执行render函数，更新需要做圆周运动网格模型Mesh的位置属性
        controls.object.position.z = x;
        // controls.object.position.y =  x;
        renderer.render(scene, camera);
        // 动画帧
        requestAnimationFrame(render);
    };

    const init = () => {
        // 场景颜色
        scene.background = new THREE.Color(0x999999);

        // 调整相机位置
        camera.position.set(1200, 180, 650);

        camera.position.set(window.innerHeight >= 900 ? 1800 : 1200, 180, 650);
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

        // 控制器阻尼
        controls.enableDamping = true;
        // 动态阻尼系数
        controls.dampingFactor = 0.1;
        // 旋转中心点
        controls.target.set(0, 0, 0);
        // 是否允许控制
        // controls.enabled  = false;
        // 是否允许转动
        // controls.rotate = false;
        // 渲染
        render();

        // DOM承载渲染器
        container.current.appendChild(renderer.domElement);

        // 子级盒子选中
        document.addEventListener('click', onMouseClick, false);

        // 根据页面大小变化，更新渲染
        window.addEventListener('resize', () => {
            // 更新camera 宽高比;
            camera.aspect = window.innerWidth / window.innerHeight;
            /* 
            更新camera 投影矩阵
            .updateProjectionMatrix () : undefined
            更新摄像机投影矩阵。在任何参数被改变以后必须被调用。
            */
            camera.updateProjectionMatrix();

            // 更新渲染器
            renderer.setSize(window.innerWidth, window.innerHeight);
            // 设置渲染器像素比:
            renderer.setPixelRatio(window.devicePixelRatio);
        });
    };

    var gifImgArr = [];

    const exportCurrentCanvas = () => {
        const a = document.createElement('a');

        for (let i = 0; i < 20; i++) {
            gifImgArr.push(renderer.domElement.toDataURL('image/png'));
        }
        a.href = renderer.domElement.toDataURL('image/png');
        document.getElementById('root').appendChild(a);
        console.log(a);
        window.gifshot.createGIF(
            {
                gifWidth: 500,
                gifHeight: 500,
                interval: 1,
                image: ['../images/1.jpg','../images/avatar.png'],
                // 提供当前进度的回调函数当前图像的
                progressCallback: function (captureProgress) {
                    console.log(captureProgress);
                    // document.getElementById('img3').getElementsByTagName('span')[0].innerHTML = parseInt(captureProgress * 100) + '%';
                },
                // 当前图像完成时调用的回调函数
                completeCallback: function () {
                    console.log('当前图像完成时调用的回调函数');
                },
            },
            (obj) => {
                console.log('obj:', obj);
            }
        );
        // a.href = renderer.domElement.toDataURL('image/png');
        // a.download = 'image.png';

        // document.getElementById('root').appendChild(a);
        // a.click()
        // console.log(gifImgArr);
    };

    // 生成gif
    const generateGif = async () => {
        // setTimeout(async () => {
        let gif = new window.GIF({
            workers: 2,
            quality: 10,
            width: 500,
            height: 500,
            // workerScript: './worker.js'
        });

        for (let i = 0; i < 10; i++) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    // console.log(i);
                    gif.addFrame(renderer.domElement, {
                        copy: false,
                        delay: 200,
                    });
                    resolve();
                }, 200);
            });
        }
        console.log(gif);
        gif.on('finished', (blob) => {
            console.log('finished', blob);
            window.open(URL.createObjectURL(blob));
        });
        gif.render();

        // }, 3000)
    };

    useEffect(() => {
        // 1. 初始化
        init();
        // 2. 获取详情
        getInfoDetail();
        // 3. 加载canvas
        generateGif();
        // exportCurrentCanvas();
    }, []);

    return (
        <>
            <div id="operate">
                <button
                    onClick={() => {
                        exportCurrentCanvas();
                    }}
                >
                    导出gif
                </button>
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

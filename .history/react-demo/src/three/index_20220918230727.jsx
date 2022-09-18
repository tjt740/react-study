import React, { useEffect,useRef} from 'react';
// import OrbitControls from 'three-orbitcontrols';
import * as THREE from 'three';

// 导入轨道控制器 只能通过这种方法
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ThreeComponent() { 
    const container = useRef(null);
    
    
    const init = () => { 
        // Step1 创建场景
        const scene = new THREE.Scene();
        
        /* Step2 创建透视相机 (
            视野角度,
            宽高比 宽/高:,
            近截面: 距离小于多少不渲染,
            远截面: 距离远于多少不渲染, 
            )
        */
        const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // Step3 设置相机位置
        camera.position.set(0, 0, 10);        

        // Step4 场景中添加相机
        scene.add(camera);
  
        // Step5 创建几何体  http://localhost:8080/docs/index.html#api/zh/geometries/BoxGeometry
        const geometry = new THREE.BoxGeometry( 2, 3, 4 );
        const material = new THREE.MeshBasicMaterial({ color: 0xFFE5CD61 });
        // Step6 根据几何体和材质创建物体
        const cube = new THREE.Mesh(geometry, material);
        // Step7 场景添加 物体
        scene.add(cube);

        
        // Step8 初始化<渲染器>
        const renderer = new THREE.WebGLRenderer();

        // Step9 设置渲染器大小
        renderer.setSize(window.innerWidth, window.innerHeight);
        console.log(renderer);
        
        // Step10 将WebGL 渲染的内容添加到dom上
        container.current.appendChild(renderer.domElement);

        // Step11 使用渲染器，将<场景>和<相机>渲染
        function render() {
            // cube 每次加0.01
            cube.position.x += 0.01;
            if (cube.position.x >= 3) { 
                cube.position.x = 1;
            }

            renderer.render(scene, camera);
            // 动画帧
            requestAnimationFrame(render);
        };
  
        // Step12 导入轨道控制器 (可以使得相机围绕目标进行轨道运动) import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
        const controls = new OrbitControls(camera, renderer.domElement);

        // Step13 坐标  (红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.)
        const axesHelper = new THREE.AxesHelper(7);
        // 添加到场景中
        scene.add( axesHelper );


        // Step14 cube 物体的移动 
        console.log('cube:', cube);
        // cube.position.x = 1;
        cube.position.set(1, 4, 0);

        // 渲染SStep11
        render();
    }


    useEffect(() => { 
        // 1. 初始化
        init();

    },[])


    return (
        <>
            <h1> Three.js 组件 </h1>

            <div id='container' ref={ container }> </div>
        </>
    )
 }
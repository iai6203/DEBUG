// @react
import { useRef, useMemo } from 'react'
// @gsap
import { gsap } from 'gsap'
// @three
import { useFrame } from '@react-three/fiber'
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
// @mui
import { useTheme, useMediaQuery } from '@mui/material'

const Scene = ({ ...props }) => {
  const theme = useTheme()
  const camera = useRef<any>(null)
  const { nodes, materials } = useSpline(
    'https://prod.spline.design/diBIauXUFlgSE6a7/scene.splinecode',
  )

  const isSm = useMediaQuery(theme.breakpoints.up('sm'))
  const isMd = useMediaQuery(theme.breakpoints.up('md'))

  const cameraZoom = useMemo(() => {
    if (isMd) return 0.4
    else if (isSm) return 0.3
    else return 0.2
  }, [isSm, isMd])

  useFrame((state) => {
    gsap.to(camera.current.position, {
      x: 726.5 + state.pointer.x * 200,
      y: 463.8 + state.pointer.y * 200,
      z: 2065.14,
    })
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <color attach="background" args={['#727ad9']} />
      <group {...props} dispose={null}>
        <motion.mesh
          name="Text"
          geometry={nodes.Text.geometry}
          material={materials['Text Material']}
          castShadow
          receiveShadow
          initial={{
            x: 355.75,
            y: 22,
            z: -12.64,
          }}
          animate={{
            x: 355.75,
            y: -20,
            z: -12.64,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          scale={3.38}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={1.21}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1911.549}
          shadow-camera-right={1911.549}
          shadow-camera-top={1911.549}
          shadow-camera-bottom={-1911.549}
          position={[-179.1, 139.24, 320.91]}
        />
        <mesh
          name="floor"
          geometry={nodes.floor.geometry}
          material={materials.Floor}
          castShadow
          receiveShadow
          position={[-271, -359.75, 229]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="lines X"
          geometry={nodes['lines X'].geometry}
          material={materials.Floor}
          castShadow
          receiveShadow
          position={[-4000, -358.59, 447.12]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.57}
        />
        <mesh
          name="lines Z"
          geometry={nodes['lines Z'].geometry}
          material={materials.Floor}
          castShadow
          receiveShadow
          position={[449.12, -358.59, 4000]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={1.57}
        />
        <group name="Objects" position={[212.56, -139.68, 142.36]}>
          <mesh
            name="Cube 7"
            geometry={nodes['Cube 7'].geometry}
            material={materials['blue 1']}
            castShadow
            receiveShadow
            position={[-932.13, -80.11, 20.62]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.24}
          />
          <mesh
            name="Cube 8"
            geometry={nodes['Cube 8'].geometry}
            material={materials['blue 1']}
            castShadow
            receiveShadow
            position={[-1007.75, -200.19, 328.22]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.24}
          />
          <mesh
            name="Cube 71"
            geometry={nodes['Cube 71'].geometry}
            material={materials['blue 1']}
            castShadow
            receiveShadow
            position={[-300.11, 2.29, 720.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.24}
          />
          <group name="Group 3" position={[-713.58, -169.82, 427.57]}>
            <mesh
              name="Cube 11"
              geometry={nodes['Cube 11'].geometry}
              material={materials['yellow light']}
              castShadow
              receiveShadow
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="Cube 10"
              geometry={nodes['Cube 10'].geometry}
              material={materials['yellow light']}
              castShadow
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <group
            name="Group 6"
            position={[74.92, -169.82, -1065.6]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={1}
          >
            <mesh
              name="Cube 101"
              geometry={nodes['Cube 101'].geometry}
              material={materials['yellow light']}
              castShadow
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <group
            name="Group 2"
            position={[1018.34, -169.82, -753.19]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={1}
          >
            <mesh
              name="Cube 111"
              geometry={nodes['Cube 111'].geometry}
              material={materials['yellow light']}
              castShadow
              receiveShadow
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="Cube 102"
              geometry={nodes['Cube 102'].geometry}
              material={materials['yellow light']}
              castShadow
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <group name="drone" position={[386.17, -88.96, 1150]} scale={2.08}>
            <motion.group
              name="DJ"
              initial={{
                x: 0,
                y: 2.06,
                z: 0,
              }}
              animate={{
                x: 0,
                y: 62.06,
                z: 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              scale={0.8}
            >
              <mesh
                name="Cylinder 2"
                geometry={nodes['Cylinder 2'].geometry}
                material={materials['bleu 2']}
                castShadow
                receiveShadow
                position={[0.69, 19.18, 1.34]}
              />
              <mesh
                name="Cylinder"
                geometry={nodes.Cylinder.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-1.72, -7.72, -3.26]}
                scale={1}
              >
                <mesh
                  name="Cube"
                  geometry={nodes.Cube.geometry}
                  material={materials['bleu 2']}
                  castShadow
                  receiveShadow
                  position={[0.11, -10.11, 2.66]}
                  rotation={[0.17, 0, 0]}
                  scale={1}
                />
              </mesh>
              <group
                name="Group 87"
                position={[0, 9.59, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              >
                <motion.mesh
                  name="Shape 3"
                  geometry={nodes['Shape 3'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[47.65, -47.18, 7.18]}
                  scale={0.75}
                  initial={{
                    rotateZ: 0,
                  }}
                  animate={{
                    rotateZ: 6.5,
                  }}
                  transition={{
                    ease: 'linear',
                    duration: 0.5,
                    repeat: Infinity,
                  }}
                />
                <motion.mesh
                  name="Shape 4"
                  geometry={nodes['Shape 4'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-46.59, -48.21, 7.18]}
                  scale={0.75}
                  initial={{
                    rotateZ: 0,
                  }}
                  animate={{
                    rotateZ: 6.5,
                  }}
                  transition={{
                    ease: 'linear',
                    duration: 0.5,
                    repeat: Infinity,
                  }}
                />
                <motion.mesh
                  name="Shape 2"
                  geometry={nodes['Shape 2'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[47.44, 46.38, 7.18]}
                  scale={0.75}
                  initial={{
                    rotateZ: 0,
                  }}
                  animate={{
                    rotateZ: 6.5,
                  }}
                  transition={{
                    ease: 'linear',
                    duration: 0.5,
                    repeat: Infinity,
                  }}
                />
                <motion.mesh
                  name="Shape"
                  geometry={nodes.Shape.geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-47.56, 46.66, 7.18]}
                  scale={0.75}
                  initial={{
                    rotateZ: 0,
                  }}
                  animate={{
                    rotateZ: 6.5,
                  }}
                  transition={{
                    ease: 'linear',
                    duration: 0.5,
                    repeat: Infinity,
                  }}
                />
                <mesh
                  name="Ellipse 4"
                  geometry={nodes['Ellipse 4'].geometry}
                  material={materials['bleu 2']}
                  castShadow
                  receiveShadow
                  position={[47.36, -47.05, -0.15]}
                  rotation={[0, 0, Math.PI / 6]}
                  scale={1}
                />
                <mesh
                  name="Ellipse 5"
                  geometry={nodes['Ellipse 5'].geometry}
                  material={materials['bleu 2']}
                  castShadow
                  receiveShadow
                  position={[-46.53, -47.9, -0.15]}
                  rotation={[0, 0, -Math.PI / 4]}
                  scale={1}
                />
                <mesh
                  name="Ellipse 3"
                  geometry={nodes['Ellipse 3'].geometry}
                  material={materials['bleu 2']}
                  castShadow
                  receiveShadow
                  position={[47.5, 46.69, -0.15]}
                  rotation={[0, 0, -Math.PI / 4]}
                  scale={1}
                />
                <mesh
                  name="Ellipse 2"
                  geometry={nodes['Ellipse 2'].geometry}
                  material={materials['bleu 2']}
                  castShadow
                  receiveShadow
                  position={[-47.85, 46.77, -0.15]}
                  rotation={[0, 0, 0.61]}
                  scale={1}
                />
                <mesh
                  name="Ellipse 41"
                  geometry={nodes['Ellipse 41'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[47.36, -47.05, -0.88]}
                  rotation={[0, 0, Math.PI / 6]}
                  scale={1}
                />
                <mesh
                  name="Ellipse 51"
                  geometry={nodes['Ellipse 51'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-46.53, -47.9, -0.88]}
                  rotation={[0, 0, -Math.PI / 4]}
                  scale={1}
                />
                <mesh
                  name="Ellipse 31"
                  geometry={nodes['Ellipse 31'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[47.5, 46.69, -0.88]}
                  rotation={[0, 0, -Math.PI / 4]}
                  scale={1}
                />
                <mesh
                  name="Ellipse"
                  geometry={nodes.Ellipse.geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-47.85, 46.77, -0.88]}
                  rotation={[0, 0, 0.61]}
                  scale={1}
                />
                <mesh
                  name="Cylinder1"
                  geometry={nodes.Cylinder1.geometry}
                  material={materials['bleu 2']}
                  castShadow
                  receiveShadow
                  position={[0.26, -0.52, -2.71]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1}
                />
              </group>
            </motion.group>
          </group>
          <group name="cubes" position={[232.37, -140.15, 702.66]} scale={0.5}>
            <mesh
              name="Cube 6"
              geometry={nodes['Cube 6'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 61"
              geometry={nodes['Cube 61'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 72"
              geometry={nodes['Cube 72'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, 40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 62"
              geometry={nodes['Cube 62'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 3"
              geometry={nodes['Cube 3'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 63"
              geometry={nodes['Cube 63'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 64"
              geometry={nodes['Cube 64'].geometry}
              material={materials['yellow light']}
              castShadow
              receiveShadow
              position={[-118.5, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 65"
              geometry={nodes['Cube 65'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 2"
              geometry={nodes['Cube 2'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
          </group>
          <mesh
            name="Cube 13"
            geometry={nodes['Cube 13'].geometry}
            material={materials.pink}
            castShadow
            receiveShadow
            position={[603.4, -200.19, 642.73]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.24}
          />
          <mesh
            name="Cube 12"
            geometry={nodes['Cube 12'].geometry}
            material={materials.green}
            castShadow
            receiveShadow
            position={[-101.57, -200.19, 55.18]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.24}
          />
          <mesh
            name="Cube 112"
            geometry={nodes['Cube 112'].geometry}
            material={materials['blue 1']}
            castShadow
            receiveShadow
            position={[212.28, -200.19, -420.43]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.24}
          />
          <mesh
            name="Cube 131"
            geometry={nodes['Cube 131'].geometry}
            material={materials['blue 1']}
            castShadow
            receiveShadow
            position={[489.25, -200.19, 128.14]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.24}
          />
          <mesh
            name="Cube 121"
            geometry={nodes['Cube 121'].geometry}
            material={materials['blue 1']}
            castShadow
            receiveShadow
            position={[-535.23, -200.19, 54.17]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.24}
          />
          <mesh
            name="Cube 103"
            geometry={nodes['Cube 103'].geometry}
            material={materials['blue 1']}
            castShadow
            receiveShadow
            position={[-773.78, -200.19, -301.29]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.24}
          />
          <mesh
            name="Cube 9"
            geometry={nodes['Cube 9'].geometry}
            material={materials['blue 1']}
            castShadow
            receiveShadow
            position={[366.53, -200.19, 483.76]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.24}
          />
          <group
            name="cubes1"
            position={[-948.83, -140.15, 703.98]}
            scale={0.5}
          >
            <mesh
              name="Cube 66"
              geometry={nodes['Cube 66'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 67"
              geometry={nodes['Cube 67'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 68"
              geometry={nodes['Cube 68'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 31"
              geometry={nodes['Cube 31'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 5"
              geometry={nodes['Cube 5'].geometry}
              material={materials['bleu 2']}
              castShadow
              receiveShadow
              position={[38.44, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 69"
              geometry={nodes['Cube 69'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 73"
              geometry={nodes['Cube 73'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, 40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 4"
              geometry={nodes['Cube 4'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 51"
              geometry={nodes['Cube 51'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 21"
              geometry={nodes['Cube 21'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
          </group>
          <group
            name="cubes2"
            position={[1174.28, -140.15, 150.71]}
            scale={0.5}
          >
            <mesh
              name="Cube 610"
              geometry={nodes['Cube 610'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 52"
              geometry={nodes['Cube 52'].geometry}
              material={materials['yellow light']}
              castShadow
              receiveShadow
              position={[118.5, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 74"
              geometry={nodes['Cube 74'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, 40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 611"
              geometry={nodes['Cube 611'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 75"
              geometry={nodes['Cube 75'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, 40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 41"
              geometry={nodes['Cube 41'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 612"
              geometry={nodes['Cube 612'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 53"
              geometry={nodes['Cube 53'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 613"
              geometry={nodes['Cube 613'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 32"
              geometry={nodes['Cube 32'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 614"
              geometry={nodes['Cube 614'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 615"
              geometry={nodes['Cube 615'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 42"
              geometry={nodes['Cube 42'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 616"
              geometry={nodes['Cube 616'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 76"
              geometry={nodes['Cube 76'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, 120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 54"
              geometry={nodes['Cube 54'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 617"
              geometry={nodes['Cube 617'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 77"
              geometry={nodes['Cube 77'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, 40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 22"
              geometry={nodes['Cube 22'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
          </group>
          <group
            name="cubes 2"
            position={[-1184.38, -140.15, -400.21]}
            scale={0.5}
          >
            <mesh
              name="Cube 618"
              geometry={nodes['Cube 618'].geometry}
              material={materials['Cube 618 Material']}
              castShadow
              receiveShadow
              position={[-38.44, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 619"
              geometry={nodes['Cube 619'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 620"
              geometry={nodes['Cube 620'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 78"
              geometry={nodes['Cube 78'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, 40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 621"
              geometry={nodes['Cube 621'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 33"
              geometry={nodes['Cube 33'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 55"
              geometry={nodes['Cube 55'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 622"
              geometry={nodes['Cube 622'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 43"
              geometry={nodes['Cube 43'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 623"
              geometry={nodes['Cube 623'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 56"
              geometry={nodes['Cube 56'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 624"
              geometry={nodes['Cube 624'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 79"
              geometry={nodes['Cube 79'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, 40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 23"
              geometry={nodes['Cube 23'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
          </group>
          <group name="cubes3" position={[-5.6, -140.15, -1028.53]} scale={0.5}>
            <mesh
              name="Cube 625"
              geometry={nodes['Cube 625'].geometry}
              material={materials['bleu 2']}
              castShadow
              receiveShadow
              position={[-38.44, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 710"
              geometry={nodes['Cube 710'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, 120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 57"
              geometry={nodes['Cube 57'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 626"
              geometry={nodes['Cube 626'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 711"
              geometry={nodes['Cube 711'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, 40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 44"
              geometry={nodes['Cube 44'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 627"
              geometry={nodes['Cube 627'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 58"
              geometry={nodes['Cube 58'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 712"
              geometry={nodes['Cube 712'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, 40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 628"
              geometry={nodes['Cube 628'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 713"
              geometry={nodes['Cube 713'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, 40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 34"
              geometry={nodes['Cube 34'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 714"
              geometry={nodes['Cube 714'].geometry}
              material={materials['bleu 2']}
              castShadow
              receiveShadow
              position={[38.44, 120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 59"
              geometry={nodes['Cube 59'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 629"
              geometry={nodes['Cube 629'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 715"
              geometry={nodes['Cube 715'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, 40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 45"
              geometry={nodes['Cube 45'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 630"
              geometry={nodes['Cube 630'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 510"
              geometry={nodes['Cube 510'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 631"
              geometry={nodes['Cube 631'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 716"
              geometry={nodes['Cube 716'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, 40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 24"
              geometry={nodes['Cube 24'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
          </group>
          <group
            name="cubes4"
            position={[703.02, -140.15, -715.75]}
            scale={0.5}
          >
            <mesh
              name="Cube 632"
              geometry={nodes['Cube 632'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 511"
              geometry={nodes['Cube 511'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 717"
              geometry={nodes['Cube 717'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, 40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 633"
              geometry={nodes['Cube 633'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 718"
              geometry={nodes['Cube 718'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, 40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 46"
              geometry={nodes['Cube 46'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 719"
              geometry={nodes['Cube 719'].geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[-38.44, 120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 634"
              geometry={nodes['Cube 634'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 512"
              geometry={nodes['Cube 512'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 720"
              geometry={nodes['Cube 720'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, 40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 635"
              geometry={nodes['Cube 635'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-38.44, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 35"
              geometry={nodes['Cube 35'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[118.5, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 636"
              geometry={nodes['Cube 636'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 721"
              geometry={nodes['Cube 721'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, 120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 513"
              geometry={nodes['Cube 513'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 637"
              geometry={nodes['Cube 637'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 722"
              geometry={nodes['Cube 722'].geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[38.44, 40.03, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 81"
              geometry={nodes['Cube 81'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -120.09, 119.26]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 47"
              geometry={nodes['Cube 47'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -120.09, 39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 638"
              geometry={nodes['Cube 638'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 723"
              geometry={nodes['Cube 723'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, 120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 514"
              geometry={nodes['Cube 514'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 724"
              geometry={nodes['Cube 724'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, 40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 639"
              geometry={nodes['Cube 639'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[-118.5, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 725"
              geometry={nodes['Cube 725'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, 40.03, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
            <mesh
              name="Cube 25"
              geometry={nodes['Cube 25'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[38.44, -120.09, -39.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.49}
            />
          </group>
          <mesh
            name="Icosahedron"
            geometry={nodes.Icosahedron.geometry}
            material={materials['blue 1']}
            castShadow
            receiveShadow
            position={[113.08, -183.07, -717.41]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.5}
          />
          <mesh
            name="Pyramid 2"
            geometry={nodes['Pyramid 2'].geometry}
            material={materials['yellow light']}
            castShadow
            receiveShadow
            position={[820.56, -160.47, 859.24]}
            scale={0.7}
          />
          <mesh
            name="Pyramid"
            geometry={nodes.Pyramid.geometry}
            material={materials['yellow light']}
            castShadow
            receiveShadow
            position={[-675.18, -160.47, 544.03]}
            scale={0.7}
          />
          <motion.group
            name="shape"
            initial={{
              x: -1218.59,
              y: -141.08,
              z: -853.22,
            }}
            animate={{
              x: -1218.59,
              y: -121.08,
              z: -853.22,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            scale={1.12}
          >
            <mesh
              name="Helix"
              geometry={nodes.Helix.geometry}
              material={materials.pink}
              castShadow
              receiveShadow
              position={[310.2, 15.73, 18.74]}
              rotation={[-0.7, 0, 0]}
              scale={0.5}
            />
          </motion.group>
          <group
            name="shape1"
            position={[546.78, -141.08, -1031.95]}
            scale={0.5}
          >
            <mesh
              name="Helix1"
              geometry={nodes.Helix1.geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[0.02, 0, 0]}
              rotation={[-0.7, 0, 0]}
            />
          </group>
          <group name="Group 10" position={[-909.96, -157.98, 1016.64]}>
            <mesh
              name="Torus 2"
              geometry={nodes['Torus 2'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[-Math.PI / 4, 0, 0]}
              scale={0.5}
            />
          </group>
          <group name="Group 9" position={[-868.07, -157.98, -161.7]}>
            <mesh
              name="Torus 21"
              geometry={nodes['Torus 21'].geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[-Math.PI / 4, 0, 0]}
              scale={0.5}
            />
          </group>
          <group name="Group 8" position={[-161.05, -157.98, -674.72]}>
            <mesh
              name="Torus 22"
              geometry={nodes['Torus 22'].geometry}
              material={materials['yellow light']}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[-Math.PI / 4, 0, 0]}
              scale={0.5}
            />
          </group>
          <group name="Group 7" position={[-122.65, -157.98, 859.98]}>
            <mesh
              name="Torus 23"
              geometry={nodes['Torus 23'].geometry}
              material={materials['blue 1']}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[-Math.PI / 4, 0, 0]}
              scale={0.5}
            />
          </group>
          <mesh
            name="Rectangle 2"
            geometry={nodes['Rectangle 2'].geometry}
            material={materials.pink}
            castShadow
            receiveShadow
            position={[1308.64, -217.26, -671.19]}
            rotation={[-Math.PI / 2, 0, -2.18]}
            scale={1}
          />
          <mesh
            name="Rectangle 4"
            geometry={nodes['Rectangle 4'].geometry}
            material={materials.yellow}
            castShadow
            receiveShadow
            position={[-399.32, -217.26, -907.23]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1}
          />
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials.yellow}
            castShadow
            receiveShadow
            position={[779.31, -217.26, 349.44]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1}
          />
          <mesh
            name="Rectangle 21"
            geometry={nodes['Rectangle 21'].geometry}
            material={materials.pink}
            castShadow
            receiveShadow
            position={[-1304.11, -217.26, -12.34]}
            rotation={[-Math.PI / 2, 0, 0.7]}
            scale={1}
          />
          <mesh
            name="Rectangle1"
            geometry={nodes.Rectangle1.geometry}
            material={materials['Rectangle1 Material']}
            castShadow
            receiveShadow
            position={[-317.88, -217.26, 1059.1]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={1}
          />
          <mesh
            name="Rectangle 3"
            geometry={nodes['Rectangle 3'].geometry}
            material={materials.pink}
            castShadow
            receiveShadow
            position={[150.76, -215.98, 190.59]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={1}
          />
          <mesh
            name="Rectangle 22"
            geometry={nodes['Rectangle 22'].geometry}
            material={materials.pink}
            castShadow
            receiveShadow
            position={[-870.2, -215.98, -520.73]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={1}
          />
          <mesh
            name="Rectangle2"
            geometry={nodes.Rectangle2.geometry}
            material={materials['bleu 2']}
            castShadow
            receiveShadow
            position={[939.06, -215.98, 349.72]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={1}
          />
          <mesh
            name="Rectangle 23"
            geometry={nodes['Rectangle 23'].geometry}
            material={materials.pink}
            castShadow
            receiveShadow
            position={[1268.78, -217.26, -892.77]}
            rotation={[-Math.PI / 2, 0, -0.61]}
            scale={1}
          />
          <mesh
            name="Rectangle3"
            geometry={nodes.Rectangle3.geometry}
            material={materials.yellow}
            castShadow
            receiveShadow
            position={[939.06, -217.26, 508.09]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={1}
          />
          <mesh
            name="Rectangle 24"
            geometry={nodes['Rectangle 24'].geometry}
            material={materials.pink}
            castShadow
            receiveShadow
            position={[-1324.85, -217.26, 209.75]}
            rotation={[-Math.PI / 2, 0, 2.27]}
            scale={1}
          />
          <mesh
            name="Rectangle4"
            geometry={nodes.Rectangle4.geometry}
            material={materials['Rectangle4 Material']}
            castShadow
            receiveShadow
            position={[-474.67, -217.26, 900.45]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <mesh
            name="Torus 3"
            geometry={nodes['Torus 3'].geometry}
            material={materials['bleu 2']}
            castShadow
            receiveShadow
            position={[861.35, -197.66, -281.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <motion.mesh
            name="Torus"
            geometry={nodes.Torus.geometry}
            material={materials['yellow light']}
            castShadow
            receiveShadow
            initial={{
              x: -237.5,
              y: -167.66,
              z: 267.81,
              rotateX: -1,
            }}
            animate={{
              x: -237.5,
              y: -97.29,
              z: 267.81,
              rotateX: 1,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            scale={1}
          />
          <mesh
            name="Sphere"
            geometry={nodes.Sphere.geometry}
            material={materials['yellow light']}
            castShadow
            receiveShadow
            position={[-830.78, 5.76, 782.06]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={0.9}
          />
          <group name="shape 7" position={[664.18, 207.82, -636.41]}>
            <mesh
              name="Sphere 4"
              geometry={nodes['Sphere 4'].geometry}
              material={materials['yellow light']}
              castShadow
              receiveShadow
              position={[0, -138.98, 0]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={0.9}
            />
          </group>
          <group
            name="Group 13"
            position={[-830.35, -205.87, 151.15]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.5}
          >
            <group
              name="Group 4"
              rotation={[Math.PI / 2, -Math.PI / 4, 0]}
              scale={1}
            >
              <mesh
                name="Cube 113"
                geometry={nodes['Cube 113'].geometry}
                material={materials['yellow light']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Cube 104"
                geometry={nodes['Cube 104'].geometry}
                material={materials['yellow light']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
          </group>
          <group
            name="Group 12"
            position={[-516.15, -201.7, 308.48]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.5}
          >
            <group
              name="Group 41"
              rotation={[Math.PI / 2, -Math.PI / 4, 0]}
              scale={1}
            >
              <mesh
                name="Cube 114"
                geometry={nodes['Cube 114'].geometry}
                material={materials['bleu 2']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Cube 105"
                geometry={nodes['Cube 105'].geometry}
                material={materials['bleu 2']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
          </group>
          <group
            name="Group 11"
            position={[900.45, -76.17, 230.04]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.5}
          >
            <group
              name="Group 42"
              rotation={[Math.PI / 2, -Math.PI / 4, 0]}
              scale={1}
            >
              <mesh
                name="Cube 115"
                geometry={nodes['Cube 115'].geometry}
                material={materials['bleu 2']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Cube 106"
                geometry={nodes['Cube 106'].geometry}
                material={materials['bleu 2']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
          </group>
          <group name="Group 5" position={[1176.23, -76.17, -83.11]}>
            <group
              name="Group 43"
              rotation={[Math.PI / 2, -Math.PI / 4, 0]}
              scale={1}
            >
              <mesh
                name="Cube 116"
                geometry={nodes['Cube 116'].geometry}
                material={materials['yellow light']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Cube 107"
                geometry={nodes['Cube 107'].geometry}
                material={materials['yellow light']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
          </group>
        </group>
        {/* @ts-ignore */}
        <OrthographicCamera
          ref={camera}
          name="1"
          makeDefault={true}
          zoom={cameraZoom}
          far={10000}
          near={-10000}
          position={[726.5, 463.8, 2065.14]}
          rotation={[-0.37, 0.17, 0.07]}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
        />
      </group>
    </>
  )
}

export default Scene

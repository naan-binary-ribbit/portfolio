"use client";

import { useRef, useMemo, useEffect, forwardRef, Suspense } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Effect } from 'postprocessing';
import * as THREE from 'three';

// --- Dither Effect Definition (Re-using logic from Dither.tsx) ---

const ditherFragmentShader = `
precision highp float;
uniform float colorNum;
uniform float pixelSize;
uniform vec2 resolution;

const float bayerMatrix8x8[64] = float[64](
  0.0/64.0, 48.0/64.0, 12.0/64.0, 60.0/64.0,  3.0/64.0, 51.0/64.0, 15.0/64.0, 63.0/64.0,
  32.0/64.0,16.0/64.0, 44.0/64.0, 28.0/64.0, 35.0/64.0,19.0/64.0, 47.0/64.0, 31.0/64.0,
  8.0/64.0, 56.0/64.0,  4.0/64.0, 52.0/64.0, 11.0/64.0,59.0/64.0,  7.0/64.0, 55.0/64.0,
  40.0/64.0,24.0/64.0, 36.0/64.0, 20.0/64.0, 43.0/64.0,27.0/64.0, 39.0/64.0, 23.0/64.0,
  2.0/64.0, 50.0/64.0, 14.0/64.0, 62.0/64.0,  1.0/64.0,49.0/64.0, 13.0/64.0, 61.0/64.0,
  34.0/64.0,18.0/64.0, 46.0/64.0, 30.0/64.0, 33.0/64.0,17.0/64.0, 45.0/64.0, 29.0/64.0,
  10.0/64.0,58.0/64.0,  6.0/64.0, 54.0/64.0,  9.0/64.0,57.0/64.0,  5.0/64.0, 53.0/64.0,
  42.0/64.0,26.0/64.0, 38.0/64.0, 22.0/64.0, 41.0/64.0,25.0/64.0, 37.0/64.0, 21.0/64.0
);

vec3 dither(vec2 uv, vec3 color) {
  vec2 scaledCoord = floor(uv * resolution / pixelSize);
  int x = int(mod(scaledCoord.x, 8.0));
  int y = int(mod(scaledCoord.y, 8.0));
  float threshold = bayerMatrix8x8[y * 8 + x] - 0.25;
  float ditherStep = 1.0 / (colorNum - 1.0);
  color += threshold * ditherStep;
  float bias = 0.2;
  color = clamp(color - bias, 0.0, 1.0);
  return floor(color * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
}

void mainImage(in vec4 inputColor, in vec2 uv, out vec4 outputColor) {
  vec2 normalizedPixelSize = pixelSize / resolution;
  vec2 uvPixel = normalizedPixelSize * floor(uv / normalizedPixelSize);
  vec4 color = texture2D(inputBuffer, uvPixel);
  color.rgb = dither(uv, color.rgb);
  outputColor = color;
}
`;

class RetroEffectImpl extends Effect {
    constructor() {
        const uniforms = new Map<string, THREE.Uniform<any>>([
            ['colorNum', new THREE.Uniform(4.0)],
            ['pixelSize', new THREE.Uniform(2.0)],
            ['resolution', new THREE.Uniform(new THREE.Vector2(0, 0))]
        ]);
        super('RetroEffect', ditherFragmentShader, { uniforms });
    }
}

const RetroEffect = forwardRef<RetroEffectImpl, { colorNum: number; pixelSize: number }>((props, ref) => {
    const { colorNum, pixelSize } = props;
    const { size } = useThree();
    const effect = useMemo(() => new RetroEffectImpl(), []);

    useEffect(() => {
        effect.uniforms.get('colorNum')!.value = colorNum;
    }, [colorNum, effect]);

    useEffect(() => {
        effect.uniforms.get('pixelSize')!.value = pixelSize;
    }, [pixelSize, effect]);

    useEffect(() => {
        effect.uniforms.get('resolution')!.value.set(size.width, size.height);
    }, [size, effect]);

    return <primitive ref={ref} object={effect} dispose={null} />;
});

RetroEffect.displayName = 'RetroEffect';

// --- Dithered Image Component ---

interface DitheredImageProps {
    src: string;
    colorNum?: number;
    pixelSize?: number;
    className?: string;
    grayscale?: boolean;
}

export default function DitheredImage({
    src,
    colorNum = 4,
    pixelSize = 2,
    className = "",
    grayscale = true
}: DitheredImageProps) {
    return (
        <div className={`w-full h-full relative ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 2]}
                gl={{ antialias: false, alpha: true }}
            >
                <Suspense fallback={null}>
                    <ImageScene src={src} colorNum={colorNum} pixelSize={pixelSize} grayscale={grayscale} />
                </Suspense>
            </Canvas>
        </div>
    );
}

function ImageScene({ src, colorNum, pixelSize, grayscale }: any) {
    const texture = useLoader(THREE.TextureLoader, src) as THREE.Texture;
    const { viewport } = useThree();

    // Handle aspect ratio
    const scale = useMemo(() => {
        const img = texture.image as HTMLImageElement;
        const textureAspect = img.width / img.height;
        const viewportAspect = viewport.width / viewport.height;

        if (textureAspect > viewportAspect) {
            return [viewport.width, viewport.width / textureAspect, 1];
        } else {
            return [viewport.height * textureAspect, viewport.height, 1];
        }
    }, [texture, viewport]);

    return (
        <>
            <mesh scale={scale as any}>
                <planeGeometry args={[1, 1]} />
                <meshBasicMaterial
                    map={texture}
                    transparent
                    opacity={1}
                    color={grayscale ? "#ffffff" : undefined}
                // The grayscale logic can be part of the shader or just CSS, 
                // but here we keep the original texture colors and let Dither reduce them.
                />
            </mesh>
            <EffectComposer>
                <RetroEffect colorNum={colorNum} pixelSize={pixelSize} />
            </EffectComposer>
        </>
    );
}

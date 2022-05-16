import {FC, useEffect, useRef} from 'react'

export type PreviewProps = {
  files: FileList | null;
}

export const Preview: FC<PreviewProps> = ({files}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!files) {
      return;
    }
    // implement canvas renderer
  }, [files]);

  if (files === null) {
    return <span>upload image files</span>
  }

  return <canvas ref={canvasRef}></canvas>;
}
import type {FC} from 'react';
import css from './UploadList.module.css';

export type UploadListProps = {
  files: FileList | null;
  onUpload?: (files: FileList) => void;
}

type ThumbnailProps = {
  src: string;
};

const Thumbnail: FC<ThumbnailProps> = ({src}) => {
  return <img src={src} alt="thumb"/>
}

export const UploadList: FC<UploadListProps> = ({onUpload, files}) => {
  return (
    <div>
      <input type="file" multiple accept="image/jpeg" onChange={(e) => {
        const files = e.target.files;
        if (files !== null) {
          onUpload?.(files);
        }
      }}/>
      <div className={css.thumbList}>
        {(() => {
          if (files == null) return null;
          const items = [];

          for (const file of files) {
            items.push({
              name: file.name,
              src: URL.createObjectURL(file),
              type: file.type
            });
          }

          return items.map((item) => {
            return (
              <div key={item.name} className={css.thumb}>
                <Thumbnail src={item.src}/>
              </div>
            );
          })
        })()}
      </div>
    </div>
  );
}
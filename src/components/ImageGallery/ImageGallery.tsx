import { FC, PropsWithChildren } from 'react';
import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'
import { IImage } from '../../types';

interface IProps extends PropsWithChildren {
    data: IImage[],
    openModal: () =>void,
    onAfterOpen: (photo: IImage) => void
}

const  ImageGallery: FC<IProps> = ({data, openModal, onAfterOpen}) =>  {
    return (
        <ul className={css.gallery}>
            {data.map(photo => {
                return (
                    <li key={photo.id} className={css.galleryItem}>
                        <ImageCard
                            photo={photo}
                            openModal={openModal}
                            onAfterOpen={onAfterOpen}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default ImageGallery

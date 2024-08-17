import { FC, PropsWithChildren } from 'react';

import css from './ImageCard.module.css'

import { IImage } from '../../types';

interface IProps extends PropsWithChildren {
    photo: IImage
    openModal: () => void
    onAfterOpen: (photo: IImage) => void
}

const ImageCard: FC<IProps> = ({ photo, openModal, onAfterOpen }) => {

    const handleClick = () => {
        openModal();
        onAfterOpen(photo);
    }
    return (
        <div>
            <img
                onClick={handleClick}
                src={photo.urls.small}
                alt={photo.alt_description}
                className={css.image}
            />
        </div>
    );
};

export default ImageCard

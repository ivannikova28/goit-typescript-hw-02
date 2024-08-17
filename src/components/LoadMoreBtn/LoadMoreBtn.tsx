import { FC, PropsWithChildren } from 'react';
import css from './LoadMoreBtn.module.css'

interface IProps extends PropsWithChildren {
    onLoadMore: () => void
} 

const  LoadMoreBtn: FC<IProps> = ({onLoadMore}) => {
    return (
        <button className={css.button} onClick={onLoadMore}>Load more</button>
    )
};

export default LoadMoreBtn
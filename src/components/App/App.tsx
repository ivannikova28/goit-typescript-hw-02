import { FC } from 'react'

import { useState, useEffect } from 'react'
import { getPhotos } from '../unsplash-api'
import { Toaster } from 'react-hot-toast'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ImageModal from '../ImageModal/ImageModal'

import { IImage } from '../../types'

// import css from './App.module.css'

const  App: FC = () =>  {
  const [photos, setPhotos] = useState<IImage[]>([]);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
   const [modalImage, setModalImage] = useState<IImage>(null);

  useEffect(() => {
    if (!searchQuery) return;
    async function fetchPhoto() {
      try {
        setIsLoad(true);
        setIsError(false);
        const { results, total_pages } = await getPhotos(searchQuery, page);
        setPhotos(prevState => [...prevState, ...results]);
        setShowBtn(total_pages && total_pages !== page);
      } catch {
        // toast.error("Error fetching. Please try again!");
        setIsError(true);
      } finally {
        setIsLoad(false);
      }
    }
    fetchPhoto();

  }, [searchQuery, page]);

   const handleSearch = async (photo: string) => {
     setSearchQuery(photo);
     setPage(1);
     setPhotos([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal(photo: IImage) {
    setModalImage(photo);
  }

  return (
    <>
      <header>
        <SearchBar onSearch={handleSearch} />
        {isError && (<ErrorMessage />)}
      </header>
      <div>
        <Toaster containerStyle={{ position: 'relative', }} reverseOrder={true} />
        {!!photos.length && <ImageGallery data={photos} openModal={openModal} onAfterOpen={afterOpenModal}/>}
        {isLoad && (<Loader />)}
        {!!showBtn && (<LoadMoreBtn onLoadMore={handleLoadMore} />)}
        {!!modalIsOpen && <ImageModal closeModal={closeModal} modalIsOpen={modalIsOpen} photo={modalImage} />}
      </div>
    </>
  )
};

export default App

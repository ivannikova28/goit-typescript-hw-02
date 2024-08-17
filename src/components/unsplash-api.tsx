import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";

import { IImage } from "../types";

const ACCESS_KEY = 'zSMlenwZaCKdvgMJ8ji46V7MXghdrD9TLiRzWBR-6RU';

const baseURL = "https://api.unsplash.com/"

axios.defaults.baseURL = baseURL;

type IResponse<DATA> = AxiosResponse<DATA>

interface IPagination<DATA> {
    results: DATA[];
    total_pages: number;
    total: number;

}

export const getPhotos = async (searchQuery: string | number, page: number): Promise<IPagination<IImage>> => {
  try {
    const query = searchQuery;

    const {data}: IResponse<IPagination<IImage>> = await axios.get("search/photos", {
      params: {
        client_id: ACCESS_KEY,
        query: query,
        page: page,
        per_page: 10,
        orientation: 'landscape',
      },
    });

    return data
    
  } catch (error) {

    const err = error as Error;
    console.log(err)

    toast.error("Server error. Please try again!");
  }
};
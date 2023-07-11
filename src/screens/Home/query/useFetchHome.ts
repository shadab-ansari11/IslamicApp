/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @format
 */
import {useQuery} from 'react-query';
import client from '../../../utils/ApiClient';
import {QueryKeys} from '../../../utils/QueryKeys';

export interface IRoot {
    chapters: IChapter[]
  }
  
  export interface IChapter {
    id: number
    revelation_place: string
    revelation_order: number
    bismillah_pre: boolean
    name_simple: string
    name_complex: string
    name_arabic: string
    verses_count: number
    pages: number[]
    translated_name: TranslatedName
  }
  
  export interface TranslatedName {
    language_name: string
    name: string
  }

async function fetchHome(): Promise<any | undefined> {
  try {
    const url = "https://api.quran.com/api/v4/chapters?language=en";
    const response: IChapter = await client.get(url);
    return response;
  } catch (error: any) {
    return undefined;
  }
}

const useFetchHome = () => {
  const cacheKey = [QueryKeys.Suralist];
  return useQuery(cacheKey, () => fetchHome());
};

export {useFetchHome};

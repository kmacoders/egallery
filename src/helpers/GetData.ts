import { IEGallery } from '@/types';

class GetData {
  static async getDataJson(): Promise<IEGallery> {
    let data: IEGallery = {} as IEGallery;
    try {
      const res = await fetch(import.meta.env.VITE_URL);
      if (!res.ok) throw new Error('Error');
      data = await res.json();
    } catch (err) {
      alert('Bad response');
    }

    return data;
  }
}

export default GetData;

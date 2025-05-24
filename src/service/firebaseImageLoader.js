import { ref, listAll, getDownloadURL } from "firebase/storage";
import {storage} from './firebase';

export async function getImageListFromFirebase(folderPath= 'images' ){
    const listRef = ref(storage, folderPath);
    const res = await listAll(listRef);
    const urls = await Promise.all(res.items.map((itemRef => getDownloadURL(itemRef))));
    return urls.map((url, index) => ({
            img: url,
            title: `image ${index + 1}`
    }));
}
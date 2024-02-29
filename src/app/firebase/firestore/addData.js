import firebase_app from "../config";
import { getFirestore, doc, setDoc, getDocs } from "firebase/firestore";
import { collection, query, orderBy , limit } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function addData(colllection, id, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, colllection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }
    return { result, error };
}


export async function getUniqueIdofLastEntry(colllection){

let lastId ;
    const querySnapshot = await getDocs(collection(db, colllection));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      lastId = doc.id;
    });
    

return parseInt(lastId) + 1 ;
}
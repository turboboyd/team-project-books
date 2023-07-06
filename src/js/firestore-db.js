// add element ObjUser to DB
// 1. Добавить ID пользователя в ЛОКАЛ СТОРЕДЖ
// 2. Добавить данные пользователя в БАЗУ ДАННЫХ
// 3. Добавить объект книги по ID в booksUser по клику на ADD SHOP в БАЗУ ДАННЫХ
// 4. Проверить на наличие елементов в booksUser по ID
// 5. Удалить объект книги по ID из booksUser по клику на REMOVE SHOP в БАЗУ ДАННЫХ
// 6. После логинизации пользователя выполнить пунт (4)
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    getDoc,
    query,
    where,
    arrayUnion,
    arrayRemove,
} from 'firebase/firestore';
  import lsMethods from './localstorage-method'

 const firebaseConfig = {
  apiKey: "AIzaSyA5yMbzqmiZ7atqSLoo6p8776_z1r_qRCA",
  authDomain: "my-app-bookchelf-gr6.firebaseapp.com",
  projectId: "my-app-bookchelf-gr6",
  storageBucket: "my-app-bookchelf-gr6.appspot.com",
  messagingSenderId: "730775079305",
  appId: "1:730775079305:web:22a6aa554ab92270bef958"
};

const userLocalStorage = new lsMethods()

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export function addUserIdToLocalStorage(id) {
    try {
        const idUser = JSON.stringify(id);
        localStorage.setItem("idUser", idUser )
    } catch (error) {
        console.log(error);
        // Notify.error
    }
}

export async function addIdUserDocumentToLS(idUser) {
    const idUserLS = getUserIdToLocalStorage();
    const docRef = collection(db, "user");
    try {
        const q = query(docRef, where("idUser", "==", idUserLS));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if (idUserLS === idUser) {
                const userIdDocument = JSON.stringify(doc.id);
                localStorage.setItem("userIdDocument", userIdDocument )
            }
        });
    } catch (error) {
        console.log(error);
        // Notify.error 
    }
}

function getUserIdToLocalStorage() {
    try {
        const idUser =
            JSON.parse(localStorage.getItem("idUser"));
        return idUser;
    } catch (error) {
        console.log(error);
        // Notify.error
    }
}

function getIdUserDocumentFromLS() {
     try {
        const idUserDoc =
            JSON.parse(localStorage.getItem("userIdDocument"));
        return idUserDoc;
    } catch (error) {
        console.log(error);
        // Notify.error
    }
}

export async function addUserDataToDB(name, email, idUser) {
    try {
        const docRef = await addDoc(collection(db, "user"), {
            name: name,
            email: email,
            idUser: idUser,
            booksUser: [],
        });
        // Notify.success
    } catch (error) {
        console.log(error);
        // Notify.error
    }
} 

export async function addBookObjToDB(bookObject) {
    const userIdDocument = getIdUserDocumentFromLS();
    const docRef = doc(db, "user", userIdDocument);
    try {
        await updateDoc(docRef, {
            booksUser: arrayUnion(bookObject)
    });
    } catch (error) {
        console.log(error);
        // Notify.error 
    }
}

async function removeBookObjFromDB(bookObject) {
    const userIdDocument = getIdUserDocumentFromLS();
    const docRef = doc(db, "user", userIdDocument);
    try {
        await updateDoc(docRef, {
            booksUser: arrayRemove(bookObject)
        });
    } catch (error) {
        console.log(error);
        // Notify.error 
    }
    
}

export async function getBooksFromDBForRender() {
    const idUserLS = getUserIdToLocalStorage();
    const docRef = collection(db, "user");
    let arrBooksDB = [];
    try {
        const q = query(docRef, where("idUser", "==", idUserLS));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            arrBooksDB.push(doc.data().booksUser);
        });
        arrBooksDB.forEach((el) => {
        userLocalStorage.saveShoppingList(el)
        })
    } catch (error) {
        console.log(error);
        // Notify.error 
    }
}

export async function getBookInDBandBookInLocalStorage(idBook) {
    const idUserLS = getUserIdToLocalStorage();
    const docRef = collection(db, "user");
    let arrBooks = [];
    try {
        const q = query(docRef, where("idUser", "==", idUserLS));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            arrBooks.push(doc.data().booksUser);
        });
        arrBooks.forEach((el, i) => {
            if (el[i]._id === idBook) {
                removeBookObjFromDB(el[i])
            }
        })
    } catch (error) {
        console.log(error);
        // Notify.error 
    }
}

export async function getOnIncludeDBUser(user) {
    const { displayName, email, uid } = user;
    const docRef = collection(db, "user");
    try {
        let dataUser = false;
        const q = query(docRef, where("idUser", "==", uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            dataUser = true;
        });

        if (dataUser) {
            addIdUserDocumentToLS(uid)
            return;
        } else {
            addUserDataToDB(displayName, email, uid)
            }
    } catch (error) {
        console.log(error);
        // Notify.error 
    }
}

// ======= TEST TEST ================
export async function getTESTDataUserDB(idUserGet) {
    const idUserLS = getUserIdToLocalStorage();
    const docRef = collection(db, "user");
    let dataUser = null;
    try {
        const q = query(docRef, where("idUser", "==", idUserLS));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if (idUserLS === idUserGet) {
                dataUser = doc.id
            }
        });
    } catch (error) {
        console.log(error);
        // Notify.error 
    }
    console.log(dataUser);
}

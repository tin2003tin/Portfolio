import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";

export default async function Course() {
  const querySnapshot = await getDocs(collection(firestore, "archive"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
    return (
      <div id="content">
        <div className="inner">
        </div>
    </div>
    );
  }
  
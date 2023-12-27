"use server";
import styles from "./page.module.css";
import Link from "next/link";
import { FaRegPlusSquare } from "react-icons/fa";
import { GetAllPost } from "../../lib/action";
import NewPost from "../../componentes/NewPost/NewPost";

async function page() {
  const Allpost = await GetAllPost();
  return (
    <div className={styles.main}>
      <NewPost data={Allpost} />
      <Link href="/createpost">
        <FaRegPlusSquare className={styles.icon} />
      </Link>
    </div>
  );
}

export default page;

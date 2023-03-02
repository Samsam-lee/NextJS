import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return <nav>
    <Link href="/" style={{
      color: router.pathname === "/" ? "skyblue" : "black"
    }}>
      Index
    </Link>

    <Link href="/route" style={{
      color: router.pathname === "/route" ? "skyblue" : "black"
    }}>
      Route
    </Link>
  </nav>
}
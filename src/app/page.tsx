import Image from "next/image";
import RootLayout from "./layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/signin"}>
        <Button
          className="mt-4 w-40"
          variant="secondary"
        >
          Sign In Develop
        </Button>
      </Link>
    </main>
  );
}

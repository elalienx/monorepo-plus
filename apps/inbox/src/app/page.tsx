"use client";

// Node modules
import Image from "next/image";

import { Button } from "@monorepo-plus/aphrodite";
import Illustration from "./assets/credit-card.png";

export default function Index() {
  return (
    <div>
      <h1>📥 Inbox</h1>
      <Image src={Illustration} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi id
        accusantium illum natus, iure nam sint vitae error iusto alias nihil
        totam quisquam omnis ipsum! Mollitia est porro laudantium error!
      </p>
      <Button label="Click me" onClick={() => alert("Admin page")} />
    </div>
  );
}

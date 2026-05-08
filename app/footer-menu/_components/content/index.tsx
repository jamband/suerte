"use client";

import { useRef, useState } from "react";
import { useDialog } from "@/_hooks/dialog";
import { Component } from "./component";

export const Content: React.FC = () => {
  const menu = useDialog();
  const [page, setPage] = useState(0);
  const contentHeaderRef = useRef<HTMLHeadingElement | null>(null);

  const pages = [
    [
      "The old man woke before anyone else, as he always did.",
      "The house was still dark, the kind of dark that feels soft rather than heavy, and he moved through it without turning on any lights. He knew every creak of the floorboards, every corner and doorframe, the way a person knows a song they have loved for a long time.",
      "In the kitchen, he filled the kettle and set it on the stove, then stood by the window while he waited. The garden was barely visible in the early light — just shapes, really. The outline of the birdbath, the hunched form of the old apple tree, the row of lavender his wife had planted years ago and that he had never had the heart to remove.",
      "The kettle began to hiss. He measured the coffee slowly, the way she had always told him was too much, and smiled to himself.",
    ],
    [
      "He carried his mug to the porch and sat in the chair that had long since taken the shape of him.",
      "The morning was cool and smelled of damp earth. Somewhere in the garden, a bird was singing — a small, unhurried song, as if it had nowhere else to be. He watched the sky lighten by degrees, pale gray giving way to something warmer, and felt the particular peace that only comes before the rest of the world wakes up.",
      "He heard the screen door behind him and did not turn around. He recognized her shuffle — those oversized slippers she had claimed from his closet on her first night and had worn every morning since. She said nothing, only lowered herself into the chair beside him and pulled her knees up to her chest.",
      "They sat together without speaking. The bird continued its song. The lavender caught the first real light of the morning and held it there, pale and still.",
    ],
    [
      "After a while, she reached over and wrapped both hands around his mug.",
      `"Hey," he said.`,
      `She took a long sip, made a face, and handed it back. "Gross," she whispered. "Too bitter."`,
      `"That's how coffee tastes."`,
      `"Not good coffee."`,
      "He laughed — a quiet, unhurried laugh that rose and settled into the morning air like smoke. She smiled without looking at him, still watching the garden.",
      `"I like it here," she said eventually.`,
      `"I know," he said.`,
      "The apple tree stirred in a small breeze. A sparrow landed on the birdbath, considered them both with one bright eye, and flew away. His granddaughter rested her head against his shoulder, and he let her, and neither of them went inside for a very long time.",
    ],
  ];

  const switchPage = (page: number) => {
    setPage(page);
    menu.close();
    contentHeaderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Component
      page={page}
      pages={pages}
      switchPage={switchPage}
      menu={menu}
      contentHeaderRef={contentHeaderRef}
    />
  );
};

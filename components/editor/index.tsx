"use client";

import React from "react";
import { Inter } from "next/font/google";
import {
  EditorContent,
  JSONContent,
  Editor as TipTapEditor,
  useEditor,
} from "@tiptap/react";

import { Toaster } from "@/components/editor/components/toaster";

import { EditorBubbleMenu } from "./components/editor-bubble-menu";
import { EditorMenuBar } from "./components/editor-menu-bar";
import { LogoBubbleMenu } from "./components/logo-bubble-menu";
import { SpacerBubbleMenu } from "./components/spacer-bubble-menu";
import { TiptapExtensions } from "./extensions";

import "./editor.css";

const inter = Inter({
  subsets: ["latin"],
});

export type MailEditor = {
  getEditor: () => TipTapEditor;
};

export type EditorProps = {
  contentHtml?: string;
  contentJson?: JSONContent[];
  onMount?: (editor: MailEditor) => void;
  config?: {
    hasMenuBar?: boolean;
    spellCheck?: boolean;
    wrapClassName?: string;
    toolbarClassName?: string;
    contentClassName?: string;
  };
};

export default function Editor(props: EditorProps) {
  const {
    onMount,
    config: {
      wrapClassName = "",
      contentClassName = "",
      hasMenuBar = true,
      spellCheck = false,
    } = {},
    contentHtml,
    contentJson,
  } = props;

  let formattedContent: any = null;
  if (contentJson) {
    formattedContent = {
      type: "doc",
      content: contentJson,
    };
  } else if (contentHtml) {
    formattedContent = contentHtml;
  } else {
    formattedContent = {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "",
            },
          ],
        },
      ],
    };
  }

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: `prose w-full ${contentClassName}`,
        spellCheck: spellCheck ? "true" : "false",
      },
      handleDOMEvents: {
        keydown: (_view, event) => {
          // prevent default event listeners from firing when slash command is active
          if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) {
            const slashCommand = document.querySelector("#slash-command");
            if (slashCommand) {
              return true;
            }
          }
        },
      },
    },
    onCreate: ({ editor }) => {
      onMount?.({
        getEditor: () => editor as TipTapEditor,
      });
    },
    onUpdate: ({ editor }) => {
      onMount?.({
        getEditor: () => editor as TipTapEditor,
      });
    },
    extensions: TiptapExtensions,
    content: formattedContent,
  });

  if (!editor) {
    return null;
  }

  return (
    <div
      className={`mail-editor antialiased ${inter.className} ${wrapClassName}`}
      onClick={(evt) => evt.preventDefault()}
    >
      <Toaster />
      {hasMenuBar && <EditorMenuBar config={props.config} editor={editor} />}
      <div className="mt-4 rounded border bg-white p-4">
        <EditorBubbleMenu editor={editor} />
        <LogoBubbleMenu editor={editor} />
        <SpacerBubbleMenu editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

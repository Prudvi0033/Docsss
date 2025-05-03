"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TextStyle from "@tiptap/extension-text-style"
import Color from "@tiptap/extension-color"
import TextAlign from "@tiptap/extension-text-align"
import Formatter from "./Formatter"

import { io, Socket } from 'socket.io-client'
import { useEffect } from "react"

let socket: Socket | null = null

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: `
      <h3>Hello There</h3>
    `,
  })

  useEffect(() => {
    if (!editor) return;

    const initSocket = async() => {
        fetch("/api/socket")

        socket = io({
          path : "/api/socket"
        })

        socket.on("Connect",() => {
          console.log("Socket Conncted");
        })

        socket.on("doc-update", (newHTML : string) => {
          if(editor.getHTML() !== newHTML){
            editor.commands.setContent(newHTML)
          }
        })

        editor.on("update", () => {
          const html = editor.getHTML()
          socket?.emit("doc-update", html)
        })   
    }

    initSocket()

    return () => {
      socket?.disconnect()
    }

  }, [editor])

  return (
    <div className="tiptap-container max-w-2xl mx-auto my-8">
      <Formatter editor={editor} />
      <div className="editor-content-wrapper mt-2 border border-gray-300 rounded-md p-14 bg-white shadow-sm">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default Tiptap

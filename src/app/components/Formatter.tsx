"use client"

import type { Editor } from "@tiptap/react"
import type React from "react"
import { Montserrat } from "next/font/google"
import { useState, useRef, useEffect } from "react"
import { Bold, Italic, Strikethrough, Paintbrush, AlignLeft, AlignCenter, AlignRight, AlignJustify, ChevronDown } from "lucide-react"

const monte = Montserrat({subsets : ['latin']})

interface FormatterProps {
  editor: Editor | null
}

const COLORS = [
  "#000000",
  "#333333",
  "#666666",
  "#999999",
  "#CCCCCC",
  "#FFFFFF",
  "#FF0000",
  "#800000",
  "#FFA500",
  "#FFFF00",
  "#808000",
  "#00FF00",
  "#008000",
  "#00FFFF",
  "#008080",
  "#0000FF",
  "#000080",
  "#FF00FF",
  "#800080",
  "#A52A2A",
  "#D2691E",
  "#FF7F50",
  "#6495ED",
  "#1E90FF",
]

const Formatter: React.FC<FormatterProps> = ({ editor }) => {
  const [showColorPalette, setShowColorPalette] = useState(false)
  const colorPaletteRef = useRef<HTMLDivElement>(null)

  const handleColorClick = (color: string) => {
    editor?.chain().focus().setColor(color).run()
    setShowColorPalette(false)
  }

  // Close color palette when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (colorPaletteRef.current && !colorPaletteRef.current.contains(event.target as Node)) {
        setShowColorPalette(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  if (!editor) return null

  return (
    <div className="flex items-center justify-center mt-4 border border-gray-300 gap-2 p-3 rounded-md flex-wrap bg-white shadow-sm">
      {/* Bold */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded-md transition-colors ${editor.isActive("bold")
          ? "bg-black text-white"
          : "bg-white text-black border border-gray-200 hover:bg-gray-100"
          }`}
        aria-label="Bold"
      >
        <Bold size={16} />
      </button>

      {/* Italic */}
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded-md transition-colors ${editor.isActive("italic")
          ? "bg-black text-white"
          : "bg-white text-black border border-gray-200 hover:bg-gray-100"
          }`}
        aria-label="Italic"
      >
        <Italic size={16} />
      </button>

      {/* Strike */}
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2 rounded-md transition-colors ${editor.isActive("strike")
          ? "bg-black text-white"
          : "bg-white text-black border border-gray-200 hover:bg-gray-100"
          }`}
        aria-label="Strikethrough"
      >
        <Strikethrough size={16} />
      </button>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-300 mx-1"></div>

      {/* Font Size Dropdown */}
      <div className={`relative ${monte.className} `}>
        <select
          onChange={(e) => {
            const size = e.target.value
            editor.chain().focus().setMark('textStyle', { fontSize: size }).run()
          }}
          className="appearance-none p-2 pr-6 rounded-md text-sm border border-gray-200 bg-white text-black hover:bg-gray-100 transition-colors"
          defaultValue=""
          aria-label="Font size"
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="24px">24px</option>
          <option value="32px">32px</option>
          <option value="64px">64px</option>
          <option value="128px">128px</option>
          <option value="256px">256px</option>
        </select>
        {/* Dropdown arrow */}
        <div className="pointer-events-none absolute top-2 right-2 text-gray-300">
          <ChevronDown />
        </div>
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-300 mx-1"></div>

      {/* TextColor Palette */}
      <div className="relative" ref={colorPaletteRef}>
        <button
          onClick={() => setShowColorPalette(!showColorPalette)}
          className="p-2 rounded-md bg-white text-black border border-gray-200 hover:bg-gray-100 transition-colors"
          aria-label="Text color"
        >
          <Paintbrush size={16} />
        </button>

        {showColorPalette && (
          <div className="absolute top-10 p-4 bg-white border border-gray-200 rounded-md shadow-lg grid grid-cols-6 gap-3 z-10 w-64">
            {COLORS.map((color) => (
              <button
                key={color}
                onClick={() => handleColorClick(color)}
                className="w-6 h-6 rounded-full border border-gray-300 transition-transform hover:scale-110"
                style={{ backgroundColor: color }}
                aria-label={`Color ${color}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-300 mx-1"></div>

      {/* Align Left */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`p-2 rounded-md transition-colors ${editor.isActive({ textAlign: "left" })
          ? "bg-black text-white"
          : "bg-white text-black border border-gray-200 hover:bg-gray-100"
          }`}
        aria-label="Align left"
      >
        <AlignLeft size={16} />
      </button>

      {/* Align Center */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`p-2 rounded-md transition-colors ${editor.isActive({ textAlign: "center" })
          ? "bg-black text-white"
          : "bg-white text-black border border-gray-200 hover:bg-gray-100"
          }`}
        aria-label="Align center"
      >
        <AlignCenter size={16} />
      </button>

      {/* Align Right */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`p-2 rounded-md transition-colors ${editor.isActive({ textAlign: "right" })
          ? "bg-black text-white"
          : "bg-white text-black border border-gray-200 hover:bg-gray-100"
          }`}
        aria-label="Align right"
      >
        <AlignRight size={16} />
      </button>

      {/* Justify */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`p-2 rounded-md transition-colors ${editor.isActive({ textAlign: "justify" })
          ? "bg-black text-white"
          : "bg-white text-black border border-gray-200 hover:bg-gray-100"
          }`}
        aria-label="Justify"
      >
        <AlignJustify size={16} />
      </button>
    </div>
  )
}

export default Formatter

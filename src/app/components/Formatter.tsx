import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import { Editor } from '@tiptap/react'
import React, { useState } from 'react'
import TextStyle from '@tiptap/extension-text-style'
import { Bold, Italic, Strikethrough, Highlighter, AlignLeft, AlignCenter, AlignRight, AlignJustify, Paintbrush } from 'lucide-react'

interface FormatterProps {
    editor: Editor | null
}

const COLORS = [
  '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#800000', 
  '#808000', '#008000', '#800080', '#008080', '#000080', '#FFA500', '#A52A2A', '#8A2BE2', 
  '#5F9EA0', '#7FFF00', '#D2691E', '#FF7F50', '#6495ED', '#DC143C', '#00CED1', '#9400D3', 
  '#FF1493', '#00BFFF', '#1E90FF', '#228B22', '#FF69B4', '#CD5C5C'
];

const Formatter: React.FC<FormatterProps> = ({ editor }) => {
    const [showColorPalette, setShowColorPalette] = useState(false);

    const handleColorClick = (color: string) => {
        editor?.chain().focus().setColor(color).run();
        setShowColorPalette(false);
    }

    if (!editor) return null;

    return (
        <div className="flex items-center justify-center mt-4 border border-white gap-2 p-3 text-black rounded-md flex-wrap">

            {/* Bold */}
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`p-2 rounded-md ${editor.isActive('bold') ? 'bg-blue-500 text-white' : 'bg-white'} hover:bg-blue-100`}
            >
                <Bold size={16} />
            </button>

            {/* Italic */}
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`p-2 rounded-md ${editor.isActive('italic') ? 'bg-blue-500 text-white' : 'bg-white'} hover:bg-blue-100`}
            >
                <Italic size={16} />
            </button>

            {/* Strike */}
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`p-2 rounded-md ${editor.isActive('strike') ? 'bg-blue-500 text-white' : 'bg-white'} hover:bg-blue-100`}
            >
                <Strikethrough size={16} />
            </button>

            {/* TextColor Palette */}
            <div className="relative">
                <button
                    onClick={() => setShowColorPalette(!showColorPalette)}
                    className="p-2 rounded-md bg-white hover:bg-blue-100"
                >
                    <Paintbrush size={16} />
                </button>

                {showColorPalette && (
                    <div className="absolute top-10 p-6 bg-white border rounded-md shadow-md grid grid-cols-6 gap-5 z-10">
                        {COLORS.map((color) => (
                            <button
                                key={color}
                                onClick={() => handleColorClick(color)}
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Align Left */}
            <button
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                className={`p-2 rounded-md ${editor.isActive({ textAlign: 'left' }) ? 'bg-blue-500 text-white' : 'bg-white'} hover:bg-blue-100`}
            >
                <AlignLeft size={16} />
            </button>

            {/* Align Center */}
            <button
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                className={`p-2 rounded-md ${editor.isActive({ textAlign: 'center' }) ? 'bg-blue-500 text-white' : 'bg-white'} hover:bg-blue-100`}
            >
                <AlignCenter size={16} />
            </button>

            {/* Align Right */}
            <button
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                className={`p-2 rounded-md ${editor.isActive({ textAlign: 'right' }) ? 'bg-blue-500 text-white' : 'bg-white'} hover:bg-blue-100`}
            >
                <AlignRight size={16} />
            </button>

            {/* Justify */}
            <button
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                className={`p-2 rounded-md ${editor.isActive({ textAlign: 'justify' }) ? 'bg-blue-500 text-white' : 'bg-white'} hover:bg-blue-100`}
            >
                <AlignJustify size={16} />
            </button>
        </div>
    )
}

export default Formatter

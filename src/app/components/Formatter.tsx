import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import { Editor } from '@tiptap/react'
import React from 'react'

import { Bold, Italic, Strikethrough, Highlighter, AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react'

interface FormatterProps {
    editor: Editor | null
}

const Formatter: React.FC<FormatterProps> = ({ editor }) => {
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

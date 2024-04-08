'use client'

import './styles.css'
import { EditorContent } from '@tiptap/react'
import { Editor } from '@tiptap/core'

import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Text from '@tiptap/extension-text'
import Document from '@tiptap/extension-document'
import Gapcursor from '@tiptap/extension-gapcursor'
import Paragraph from '@tiptap/extension-paragraph'
import React from 'react'

const Tiptap = () => {

  const editor = new Editor({
    content: ``,
    extensions: [
      Document,
      Text,
      Table,
      TableRow,
      TableCell,
      TableHeader,
      Gapcursor,
      Paragraph
    ],
  })


  const buttonTableCommand = (textButton: string, title: string, command: any) => {
    return <button title={title} onClick={()=>{command().run()}}>{textButton}</button>
  }

  const InterfaceTableCommand  = [
    {
      "textButton": "insertTable",
      "title" : "Вставить таблицу",
      "command" :  () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true })
    },
    {
      "textButton": "addColumnBefore",
      "title" : "Добавляет столбец перед текущим столбцом.",
      "command" :  () => editor.chain().focus().addColumnBefore()
    },
    {
      "textButton": "addColumnAfter",
      "title" : "Добавляет столбец перед текущим столбцом.",
      "command" :  () => editor.chain().focus().addColumnAfter()
    },
    {
      "textButton": "deleteColumn",
      "title" : "Удаляет текущий столбец.",
      "command" :  () => editor.chain().focus().deleteColumn()
    },
    {
      "textButton": "addRowBefore",
      "title" : "Добавляет строку над текущей строкой.",
      "command" :  () => editor.chain().focus().addRowBefore()
    },
    {
      "textButton": "addRowAfter",
      "title" : "Добавляет строку под текущей строкой.",
      "command" :  () => editor.chain().focus().addRowAfter()
    },
    {
      "textButton": "deleteRow",
      "title" : "Удаляет текущую строку.",
      "command" :  () => editor.chain().focus().deleteRow()
    },
    {
      "textButton": "deleteTable",
      "title" : "Удаляет всю таблицу.",
      "command" :  () => editor.chain().focus().deleteTable()
    },
    {
      "textButton": "mergeCells",
      "title" : "Объедините все выделенные ячейки в одну.",
      "command" :  () => editor.chain().focus().mergeCells()
    },
    {
      "textButton": "splitCell",
      "title" : "Разделяет текущую ячейку.",
      "command" :  () => editor.chain().focus().splitCell()
    },
    {
      "textButton": "toggleHeaderColumn",
      "title" : "Делает текущий столбец столбцом заголовка.",
      "command" :  () => editor.chain().focus().toggleHeaderColumn()
    },
    {
      "textButton": "toggleHeaderRow",
      "title" : "Делает текущую строку строкой заголовка.",
      "command" :  () => editor.chain().focus().toggleHeaderRow()
    },
    {
      "textButton": "toggleHeaderCell",
      "title" : "Делает текущую ячейку ячейкой заголовка.s",
      "command" :  () => editor.chain().focus().toggleHeaderCell()
    },
    {
      "textButton": "mergeOrSplit",
      "title" : "Если выделено несколько ячеек, они объединяются. Если выбрана одна ячейка, она разделяется на две ячейки. ",
      "command" :  () => editor.chain().focus().mergeOrSplit()
    },
    {
      "textButton": "goToNextCell",
      "title" : "Перейдите в следующую ячейку.",
      "command" :  () => editor.chain().focus().goToNextCell()
    },
    {
      "textButton": "goToPreviousCell",
      "title" : "Перейдите к предыдущей ячейке.",
      "command" :  () => editor.chain().focus().goToPreviousCell()
    },
    {
      "textButton": "fixTables",
      "title" : "Проверяет все таблицы в документе и при необходимости исправляет их.",
      "command" :  () => editor.chain().focus().fixTables()
    }
  ]
  return (
    <div>
      <div className='button_commands'>
        {InterfaceTableCommand.map((item)=>{
          return buttonTableCommand(item.textButton, item.title, item.command)
        })}
      </div>
      <EditorContent editor={editor} className='editor'/> 
    </div>
  )
};

export default Tiptap;

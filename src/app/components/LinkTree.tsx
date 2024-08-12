import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useCallback, useMemo } from "react";
import { Url } from "url";

export interface LinkTreeItem {
  icon?: ReactNode
  text: ReactNode
  href?: string | Url
}

export interface LinkTreeProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  items: LinkTreeItem[]
  iconAlign?: 'left' | 'right'
  align?: 'left' | 'right'
}

export const LinkTree = ({ items, iconAlign, align, ...props }: LinkTreeProps) => {
  const renderItem = useCallback((item: LinkTreeItem, i: number) => {
    const render = [<span key={i} className="display-block w-8 text-emerald-600">{item.icon}</span>, item.text]
    if (iconAlign === 'right') {
      render.reverse()
    }
    return render
  }, [iconAlign])

  const itemClasses = useMemo(() => {
    const classes = ['flex', 'items-center', 'mb-1']
    if (align === 'right') {
      classes.push('justify-end', 'text-right')
    }
    return classes.join(' ')
  }, [align])

  return (
    <ul {...props}>
      {items.map((item, i) => {
        const render = renderItem(item, i)
        return (
          <li key={i} className={itemClasses}>
            {item.href ? <Link href={item.href} className="underline flex items-center justify-end">{render}</Link> : render}
          </li>
        )
      })}
    </ul>
  )
}


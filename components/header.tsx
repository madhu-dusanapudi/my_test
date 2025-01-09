"use client"

import { Button } from "@/components/ui/button"
import { Clock, Mail, Phone, ChevronDown } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export function Header({ data }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <header>
      <div className="bg-red-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{data.contact.timing}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{data.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{data.contact.email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img src="/placeholder.svg" alt={data.name} className="h-8" />
              <span className="font-bold text-xl">{data.name}</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {data.navigation.mainMenu.map((item) => (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.link}
                    className="flex items-center gap-1 hover:text-red-600 py-2"
                  >
                    {item.title}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {item.submenu && activeMenu === item.title && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                      {item.submenu.map((section) => (
                        <div key={section.title} className="px-4 py-2">
                          <h3 className="font-semibold text-red-600 mb-2">{section.title}</h3>
                          <ul className="space-y-1">
                            {section.items.map((subItem) => (
                              <li key={subItem.title}>
                                <Link
                                  href={subItem.link}
                                  className="block py-1 px-2 hover:bg-red-50 hover:text-red-600 rounded text-sm"
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="default" className="bg-red-600 hover:bg-red-700">
                Login
              </Button>
              <Button variant="outline" className="md:hidden">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


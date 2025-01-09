import Link from "next/link"
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react'

const iconMap = {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
}

export function Footer({ data }) {
  return (
    <footer className="bg-white pt-20 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/placeholder.svg" alt="Khata Dekho" className="h-8" />
              <span className="font-bold text-xl">Khata Dekho</span>
            </Link>
            <p className="text-gray-600 mb-6">
              In today's world, building a business also means you'll need a strong website and social media presence. These
              can help learn your customers better.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Important Links</h4>
            <ul className="space-y-2">
              {data.importantLinks && data.importantLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.link} className="text-gray-600 hover:text-primary">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {data.services && data.services.map((service) => (
                <li key={service.title}>
                  <Link href={service.link} className="text-gray-600 hover:text-primary">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Supports</h4>
            <ul className="space-y-2">
              {data.support && data.support.map((item) => (
                <li key={item.title}>
                  <Link href={item.link} className="text-gray-600 hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              Copyright © {new Date().getFullYear()} Khata Dekho – All Rights Reserved.
            </p>
            <div className="flex gap-4">
              {data.socialLinks && data.socialLinks.map((social) => {
                const Icon = iconMap[social.icon]
                return (
                  <Link key={social.platform} href={social.link} className="text-gray-600 hover:text-primary">
                    <span className="sr-only">{social.platform}</span>
                    {Icon && <Icon className="w-5 h-5" />}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

